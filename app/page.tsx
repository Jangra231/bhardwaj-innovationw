"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "motion/react";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { getUniqueProductMedia } from "@/lib/unique-product-media";
import UnifiedOperationsConsole from "@/components/UnifiedOperationsConsole";
import AccessibleProductsSection from "@/components/AccessibleProductsSection";
import IndustriesMarquee from "@/components/IndustriesMarquee";

// --- Reusable icon renderer ---
const renderIcon = (name: string, className = "h-6 w-6 text-sky-500") => {
  const IconComponent = (
    Lucide as unknown as Record<
      string,
      React.ComponentType<{ className?: string }>
    >
  )[name];
  if (!IconComponent) return <Lucide.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

type HomeCarouselItem = {
  type: "product";
  item: (typeof PRODUCTS_DATA)[number];
};

const HOME_CAROUSEL_ITEMS: HomeCarouselItem[] = PRODUCTS_DATA.map((item) => ({
  type: "product",
  item,
}));

const HOME_CAROUSEL_SLIDES = Array.from(
  { length: Math.ceil(HOME_CAROUSEL_ITEMS.length / 4) },
  (_, slideIndex) =>
    HOME_CAROUSEL_ITEMS.slice(slideIndex * 4, slideIndex * 4 + 4),
);

// Each slide uses the catalogue image assigned to that specific product.
const getHomeCarouselImage = (entry: HomeCarouselItem) =>
  getUniqueProductMedia(entry.item.id, [
    entry.item.image,
    ...entry.item.gallery,
  ])[0];

// --- Animated Typing Text Component ---
const AnimatedText = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? current.substring(0, displayText.length - 1)
          : current.substring(0, displayText.length + 1),
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, words]);

  return (
    <span
      className={`inline-block w-[10ch] whitespace-nowrap ${className ?? ""}`}
    >
      {displayText || "\u00A0"}
    </span>
  );
};

// --- Animated Counter Component ---
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// --- Floating Particles Component ---
const FloatingParticles = () => {
  const [particles, setParticles] = useState<
    {
      width: number;
      height: number;
      left: number;
      top: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 4 + 1,
      height: Math.random() * 4 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-sky-500/10"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// --- Auto-scrolling Logo Marquee ---
const LogoMarquee = () => {
  const logos = [
    { name: "Government Transit", icon: "Bus" },
    { name: "Logistics Corp", icon: "Truck" },
    { name: "Fleet Solutions", icon: "Navigation" },
    { name: "Safety First", icon: "Shield" },
    { name: "Smart Energy", icon: "Zap" },
    { name: "Track Pro", icon: "MapPin" },
    { name: "Cargo Systems", icon: "Package" },
    { name: "EV Networks", icon: "Battery" },
  ];

  return (
    <div className="relative py-12 bg-white overflow-hidden border-y border-slate-100">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-sm text-slate-500 font-medium">
          Trusted by <span className="text-sky-600 font-bold">500+</span>{" "}
          enterprise clients across India
        </p>
      </div>

      <div
        className="flex w-max min-w-max transform-gpu animate-scroll motion-safe:will-change-transform motion-reduce:animate-none"
        style={{ animationDuration: "20s" }}
      >
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="shrink-0 mx-8 flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 cursor-default group"
          >
            <div className="p-2 bg-sky-50 rounded-lg text-sky-600 group-hover:bg-sky-100 transition-colors">
              {renderIcon(logo.icon, "h-5 w-5")}
            </div>
            <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Video Background Component ---
const VideoBackground = ({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) => (
  <video
    autoPlay
    muted
    loop
    playsInline
    className={`w-full h-full object-cover ${className}`}
  >
    <source src={src} type="video/mp4" />
  </video>
);

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 40 });

  const heroWords = ["Tracking", "Monitoring", "Securing", "Optimizing"];
  const [activeCarouselSlide, setActiveCarouselSlide] = useState(0);
  const [isCarouselManuallyPaused, setIsCarouselManuallyPaused] =
    useState(false);
  const [activeOperationsMode, setActiveOperationsMode] = useState("fleet");
  const AUTO_ADVANCE_MS = 8000;

  useEffect(() => {
    if (isCarouselManuallyPaused || HOME_CAROUSEL_SLIDES.length < 2) return;

    const timer = window.setTimeout(() => {
      setActiveCarouselSlide(
        (currentSlide) => (currentSlide + 1) % HOME_CAROUSEL_SLIDES.length,
      );
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [activeCarouselSlide, isCarouselManuallyPaused]);

  const showPreviousCarouselSlide = () => {
    setActiveCarouselSlide(
      (currentSlide) =>
        (currentSlide - 1 + HOME_CAROUSEL_SLIDES.length) %
        HOME_CAROUSEL_SLIDES.length,
    );
  };

  const showNextCarouselSlide = () => {
    setActiveCarouselSlide(
      (currentSlide) => (currentSlide + 1) % HOME_CAROUSEL_SLIDES.length,
    );
  };

  const currentCarouselItems = HOME_CAROUSEL_SLIDES[activeCarouselSlide];

  const stats = [
    { value: 500, label: "Projects Completed", suffix: "+", icon: "Award" },
    { value: 100, label: "Happy Clients", suffix: "+", icon: "Users" },
    { value: 10, label: "Years Experience", suffix: "+", icon: "Calendar" },
    { value: 24, label: "Customer Support", suffix: "/7", icon: "Clock" },
  ];

  const workflows = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "We study your operational workflows, vehicles, and assets to propose optimized tracking profiles.",
    },
    {
      step: "02",
      title: "Solution Design",
      desc: "Custom configuration of hardware, sensors (fuel, dashcam, panic, CAN), and dashboard triggers.",
    },
    {
      step: "03",
      title: "Implementation & Testing",
      desc: "Hardware installation on-site coupled with thorough rigorous signal and telemetry testing cycles.",
    },
    {
      step: "04",
      title: "Deployment",
      desc: "Going live on our cloud dashboard, setting up accounts, alerts, geofences, and mobile software applications.",
    },
    {
      step: "05",
      title: "Support & Maintenance",
      desc: "Continuous OTA firmware optimization, 24/7 telemetry monitoring, and field replacements.",
    },
  ];

  // Handle mouse movement for glow effect
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed w-75 h-75 rounded-full pointer-events-none z-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          left: springX,
          top: springY,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white grid-bg">
        {/* Floating particles */}
        <FloatingParticles />

        <motion.div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={{ scale: heroScale }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute right-0 top-0 h-full w-full bg-linear-to-br from-slate-900/80 via-slate-950 to-slate-950 lg:w-3/5" />
          <div className="absolute bottom-0 left-0 h-1/2 w-full bg-linear-to-t from-slate-900/80 to-transparent" />
        </motion.div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-sky-400/70 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-sm font-semibold tracking-wide shadow-sm animate-pulse-glow"
            >
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping"></span>
              Enterprise IoT & Telematics Leaders
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="min-h-[5.1em] text-4xl md:min-h-[4.2em] md:text-5xl lg:min-h-[4.2em] lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              Smart{" "}
              <AnimatedText
                words={heroWords}
                className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-sky-600"
              />{" "}
              Solutions for a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-sky-600">
                Connected
              </span>{" "}
              Tomorrow
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl"
            >
              Smart Customized Software, Advanced GPS Tracking, Fleet
              Management, RFID Tracker and IoT Solutions tailored to monitor,
              optimize, and secure your high-value assets and fleet vehicles
              seamlessly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/software"
                className="px-8 py-4 bg-sky-600 hover:bg-sky-500 transition-all duration-300 text-white font-medium rounded-xl shadow-lg shadow-sky-500/20 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Software
                  <Lucide.ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-sky-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 transition-all duration-300 text-slate-200 border border-slate-700 font-medium rounded-xl hover:scale-[1.03] active:scale-[0.98] cursor-pointer relative overflow-hidden group"
              >
                <span className="relative z-10">Request Demo</span>
                <div className="absolute inset-0 bg-linear-to-r from-slate-700 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Dashboard Preview with real GIF  */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div
              className="absolute -inset-2 rounded-2xl bg-linear-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-20 blur-2xl animate-pulse"
              style={{ animationDuration: "3s" }}
            ></div>
            <div className="relative bg-white/95 backdrop-blur-xl border border-slate-200 p-5 rounded-2xl shadow-2xl shadow-slate-200/70 max-w-md ml-auto text-slate-700 space-y-4 overflow-hidden gradient-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-sky-200/60">
              {/* Browser frame */}
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div
                    className="w-3 h-3 rounded-full bg-red-500/80 animate-pulse"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full bg-yellow-500/80 animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-[10px] text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  <Lucide.Lock className="h-2.5 w-2.5" />
                  dashboard.bhardwajinnovations.com
                </div>
              </div>

              {/* Video Preview inside dashboard */}
              <div className="relative rounded-xl overflow-hidden border border-slate-700/50">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-48 object-cover"
                >
                  <source src="/media/Hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 bg-red-500/80 backdrop-blur-sm rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                  <span className="text-[8px] text-white font-bold">REC</span>
                </div>
              </div>

              {/* Dashboard header */}
              <div className="flex items-center justify-between">
                <span className="text-sky-400 font-bold tracking-widest text-[10px] uppercase">
                  Active Dashboard
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    Live
                  </span>
                </div>
              </div>

              {/* Live tracking cards with animations */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="flex items-center gap-4 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 hover:border-sky-500/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                    <Lucide.Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Active Cargo Vehicles
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      142 units live tracking on route
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="h-1.5 w-14 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{
                          delay: 1.5,
                          duration: 1.5,
                          ease: "easeOut",
                        }}
                      ></motion.div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      98.4%
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="flex items-center gap-4 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 hover:border-sky-500/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Lucide.Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      EV Smart BMS Telemetry
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      Average Cell Health Index
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="h-1.5 w-14 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "99%" }}
                        transition={{
                          delay: 1.8,
                          duration: 1.5,
                          ease: "easeOut",
                        }}
                      ></motion.div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      99.1%
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                  className="flex items-center gap-4 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 hover:border-sky-500/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                    <Lucide.Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      AIS-140 Compliance
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      Emergency panic node check
                    </p>
                  </div>
                  <span className="ml-auto text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded animate-pulse">
                    Active
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-slate-500/30 flex items-start justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-sky-400"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. UNIFIED OPERATIONS CONSOLE SECTION */}

      <UnifiedOperationsConsole />

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* 3. ACCESSIBLE SERVICES & PRODUCTS SECTION */}
      <AccessibleProductsSection />

      {/* VIDEO SHOWCASE SECTION  */}
      <section className="relative py-0 overflow-hidden bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-125 overflow-hidden rounded-l-2xl"
            >
              <div className="absolute inset-0 z-10 bg-linear-to-r from-transparent via-transparent to-slate-950/30"></div>
              <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/50 to-transparent"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                ref={(video) => {
                  if (video) video.playbackRate = 0.6;
                }}
                className="w-full h-full object-cover p-1.5 rounded-2xl"
              >
                <source src="/media/platform-showcase.mp4" type="video/mp4" />
              </video>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-950 p-12 md:p-16 flex flex-col justify-center rounded-r-2xl border-l border-slate-800 space-y-6"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-sky-400">
                Platform Showcase
              </span>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Ready to Optimize Your Fleet & Assets?
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                By connecting your assets, processes and people on one platform,
                your organization has a synergy that imparts a unified
                performance.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/software"
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-500 transition-all text-white font-bold rounded-xl cursor-pointer flex items-center gap-2 group hover:scale-[1.03] active:scale-[0.98]"
                >
                  <Lucide.Play className="h-4 w-4" />
                  Watch Software Demo
                  <Lucide.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-3 border border-slate-700 hover:border-sky-500 transition-all text-slate-300 hover:text-white font-bold rounded-xl cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
                >
                  Explore Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <IndustriesMarquee />

      {/* 5. HOW IT WORKS */}
      <section className="py-24 bg-slate-50 overflow-hidden dot-pattern">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-sky-600">
              The Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simple Five-Step Deployment System
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              We guide you from the initial requirement analysis and custom
              mapping solutions to successful deployment and 24/7 technical
              operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 text-left relative">
            {workflows.map((flow, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative bg-white rounded-2xl border border-slate-100 p-6 space-y-4 hover:shadow-lg hover:border-sky-100 transition-all duration-300 cursor-pointer"
              >
                <span className="text-3xl font-black text-sky-200 group-hover:text-sky-500 transition-colors font-mono block">
                  {flow.step}
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  {flow.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {flow.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
