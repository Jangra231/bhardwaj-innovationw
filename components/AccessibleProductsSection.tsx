"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ComponentType, type KeyboardEvent, type PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { getUniqueProductMedia } from "@/lib/unique-product-media";

type HomeCarouselItem = { type: "product"; item: (typeof PRODUCTS_DATA)[number] };

type TrackNode = HTMLDivElement & { style: CSSStyleDeclaration };

const ITEMS: HomeCarouselItem[] = PRODUCTS_DATA.map((item) => ({
  type: "product",
  item,
}));
const INDICATOR_COUNT = Math.min(8, ITEMS.length);

const renderIcon = (name: string, className = "h-5 w-5") => {
  const IconComponent = (
    Lucide as unknown as Record<string, ComponentType<{ className?: string }>>
  )[name];
  if (!IconComponent) return <Lucide.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

const getImage = (entry: HomeCarouselItem) =>
  getUniqueProductMedia(entry.item.id, [entry.item.image, ...entry.item.gallery])[0];

export default function AccessibleProductsSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<TrackNode | null>(null);
  const stepRef = useRef(0);
  const offsetRef = useRef(0);
  const activeIndexRef = useRef(0);
  const playingRef = useRef(true);
  const hoverPausedRef = useRef(false);
  const manualTransitionRef = useRef(false);
  const transitionTimeoutRef = useRef<number | null>(null);
  const dragRef = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startOffset: 0,
    moved: false,
  });
  const itemCount = ITEMS.length;
  const activeEntry = ITEMS[activeIndex] ?? ITEMS[0];

  const repeatedItems = useMemo(() => [...ITEMS, ...ITEMS, ...ITEMS], []);

  useEffect(() => {
    playingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    hoverPausedRef.current = isHoverPaused;
  }, [isHoverPaused]);

  const setTrackTransform = (value: number, animate: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = animate ? "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)" : "none";
    track.style.transform = `translate3d(${-value}px, 0, 0)`;
  };

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const card = track?.querySelector<HTMLElement>("[data-carousel-card]");
      if (!track || !card) return;

      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || "0");
      stepRef.current = card.getBoundingClientRect().width + gap;
      const loopDistance = stepRef.current * itemCount;

      if (offsetRef.current === 0) {
        offsetRef.current = loopDistance;
        setTrackTransform(offsetRef.current, false);
      }
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [itemCount]);

  useEffect(() => {
    let frameId = 0;
    let previousTime = performance.now();
    const pixelsPerSecond = 26;

    const animate = (time: number) => {
      const elapsed = Math.min(time - previousTime, 80);
      previousTime = time;
      const step = stepRef.current;
      const loopDistance = step * itemCount;

      if (!manualTransitionRef.current && step > 0 && loopDistance > 0 && playingRef.current && !hoverPausedRef.current) {
        offsetRef.current += (elapsed / 1000) * pixelsPerSecond;
        if (offsetRef.current >= loopDistance * 2) offsetRef.current -= loopDistance;
        setTrackTransform(offsetRef.current, false);

        const nextIndex = Math.floor(offsetRef.current / step) % itemCount;
        if (nextIndex !== activeIndexRef.current) {
          activeIndexRef.current = nextIndex;
          setActiveIndex(nextIndex);
        }
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [itemCount]);

  const getTargetOffset = (index: number) => {
    const step = stepRef.current;
    const loopDistance = step * itemCount;
    if (!step || !loopDistance) return null;

    const normalizedIndex = (index + itemCount) % itemCount;
    const currentOffset = offsetRef.current;
    const currentCycle = Math.floor(currentOffset / loopDistance);
    let target = currentCycle * loopDistance + normalizedIndex * step;

    if (target - currentOffset > loopDistance / 2) target -= loopDistance;
    if (currentOffset - target > loopDistance / 2) target += loopDistance;
    if (target < 0) target += loopDistance;
    if (target > loopDistance * 2) target -= loopDistance;

    return { normalizedIndex, target };
  };

  const moveToIndex = (index: number) => {
    const target = getTargetOffset(index);
    if (!target) return;

    manualTransitionRef.current = true;
    offsetRef.current = target.target;
    activeIndexRef.current = target.normalizedIndex;
    setActiveIndex(target.normalizedIndex);
    setTrackTransform(target.target, true);

    if (transitionTimeoutRef.current) window.clearTimeout(transitionTimeoutRef.current);
    transitionTimeoutRef.current = window.setTimeout(() => {
      manualTransitionRef.current = false;
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }
    }, 440);
  };

  const updateActiveIndexFromOffset = (offset: number) => {
    const step = stepRef.current;
    if (!step || !itemCount) return;
    const nextIndex = Math.floor(offset / step) % itemCount;
    if (nextIndex !== activeIndexRef.current) {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
  };

  const normalizeDragOffset = (offset: number) => {
    const loopDistance = stepRef.current * itemCount;
    if (!loopDistance) return offset;
    const normalized = ((offset - loopDistance) % loopDistance + loopDistance) % loopDistance;
    return loopDistance + normalized;
  };

  const snapToNearestCard = () => {
    const step = stepRef.current;
    if (!step) return;
    moveToIndex(Math.round(offsetRef.current / step) % itemCount);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" || !stepRef.current) return;
    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startOffset: offsetRef.current,
      moved: false,
    };
    manualTransitionRef.current = true;
    if (transitionTimeoutRef.current) window.clearTimeout(transitionTimeoutRef.current);
    event.currentTarget.setPointerCapture(event.pointerId);
    setTrackTransform(offsetRef.current, false);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;

    const delta = drag.startX - event.clientX;
    if (Math.abs(delta) > 6) drag.moved = true;
    if (!drag.moved) return;

    event.preventDefault();
    offsetRef.current = normalizeDragOffset(drag.startOffset + delta);
    updateActiveIndexFromOffset(offsetRef.current);
    setTrackTransform(offsetRef.current, false);
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;

    dragRef.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    snapToNearestCard();
  };

  const handleCarouselClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragRef.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      dragRef.current.moved = false;
    }
  };

  const indicatorIndex = Math.min(
    INDICATOR_COUNT - 1,
    Math.floor((activeIndex / itemCount) * INDICATOR_COUNT),
  );

  const moveToIndicator = (index: number) => {
    const targetIndex = Math.min(
      itemCount - 1,
      Math.floor((index / INDICATOR_COUNT) * itemCount),
    );
    moveToIndex(targetIndex);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveToIndex(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveToIndex(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveToIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      moveToIndex(itemCount - 1);
    }
  };

  return (
    <section
      id="products-carousel"
      className="overflow-hidden bg-slate-50 py-5 dot-pattern md:py-7"
      aria-labelledby="products-carousel-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-4 max-w-3xl text-center md:mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
            Our Products
          </span>
          <h2
            id="products-carousel-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl"
          >
            Solutions Built for Real Operations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Explore our connected hardware products for tracking, fleet visibility,
            operational security, and intelligent asset management.
          </p>
          <p className="sr-only" aria-live="polite">
            On touch devices, swipe left or right to browse the cards. {isPlaying
              ? isHoverPaused
                ? "Product movement temporarily paused while hovered."
                : "Product movement is playing."
              : "Product movement is paused."}
            {activeEntry ? ` Currently highlighted: ${activeEntry.item.title}.` : ""}
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-linear-to-r from-slate-50 to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-linear-to-l from-slate-50 to-transparent sm:w-16" />

          <div
            className="relative overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsHoverPaused(true)}
            onMouseLeave={() => setIsHoverPaused(false)}
            onFocusCapture={() => setIsHoverPaused(true)}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onClickCapture={handleCarouselClickCapture}
            style={{ touchAction: "pan-y" }}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsHoverPaused(false);
              }
            }}
            aria-roledescription="carousel"
            aria-label="Bhardwaj Innovations products"
          >
            <div
              ref={trackRef}
              className="flex w-max flex-nowrap gap-5 py-2"
              style={{ willChange: "transform" }}
            >
              {repeatedItems.map((entry, cardIndex) => {
                const sourceIndex = cardIndex % itemCount;
                const item = entry.item;
                const image = getImage(entry);
                const href = `/products/${item.id}`;
                const fallbackImage = "/media/carousel/ev-iot.jpg";

                return (
                  <motion.article
                    key={`${entry.type}-${item.id}-${cardIndex}`}
                    data-carousel-card={cardIndex === 0 ? "true" : undefined}
                    tabIndex={cardIndex < itemCount ? 0 : -1}
                    aria-label={`Product: ${item.title}`}
                    onFocus={() => setActiveIndex(sourceIndex)}
                    onKeyDown={(event) => handleKeyDown(event, sourceIndex)}
                    whileHover={{ y: -7 }}
                    className="group flex min-h-88 shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm outline-none transition-shadow duration-300 hover:border-sky-300 hover:shadow-xl focus-visible:border-sky-500 focus-visible:ring-4 focus-visible:ring-sky-500/25"
                    style={{
                      width: "clamp(270px, 76vw, 310px)",
                      flex: "0 0 clamp(270px, 76vw, 310px)",
                    }}
                  >
                    <div className="relative h-48 shrink-0 overflow-hidden bg-slate-100">
                      <img
                        src={image}
                        alt={`Product: ${item.title}`}
                        loading={cardIndex < 2 ? "eager" : "lazy"}
                        onError={(event) => {
                          if (!event.currentTarget.dataset.fallback) {
                            event.currentTarget.dataset.fallback = "true";
                            event.currentTarget.src = fallbackImage;
                          }
                        }}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                        <Lucide.Package className="h-3.5 w-3.5 text-sky-300" />
                        {entry.item.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="min-h-12 text-base font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-sky-600">
                        {item.title}
                      </h3>
                      <Link
                        href={href}
                        tabIndex={cardIndex < itemCount ? 0 : -1}
                        className="mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white transition-all hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                      >
                        Learn More
                        <Lucide.ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Products carousel controls">
            <button
              type="button"
              onClick={() => moveToIndex(activeIndex - 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-sky-400 hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              aria-label="Previous product"
            >
              <Lucide.ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-pressed={!isPlaying}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold text-slate-700 shadow-sm transition-colors hover:border-sky-400 hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              {isPlaying ? <Lucide.Pause className="h-3.5 w-3.5" /> : <Lucide.Play className="h-3.5 w-3.5" />}
              {isPlaying ? "Pause" : "Play"}
            </button>

            <div className="flex items-center gap-1.5" role="group" aria-label="Carousel position">
              {Array.from({ length: INDICATOR_COUNT }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show products group ${index + 1}`}
                  aria-current={indicatorIndex === index ? "true" : undefined}
                  onClick={() => moveToIndicator(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${indicatorIndex === index ? "w-6 bg-sky-600" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => moveToIndex(activeIndex + 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-sky-400 hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              aria-label="Next product"
            >
              <Lucide.ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
