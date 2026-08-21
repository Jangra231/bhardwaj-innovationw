"use client";

import {
  Activity,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock3,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const companyMetrics = [
  { label: "National Compliance Certs", value: "10+", icon: CheckCircle2 },
  { label: "B2B Clients", value: "100+", icon: Users },
  { label: "Active Projects", value: "15+", icon: Award },
  { label: "Active Tracking Nodes", value: "8K+", icon: Activity },
  { label: "Customer Support", value: "24/7", icon: Clock3 },
] as const;

type Metric = (typeof companyMetrics)[number];

const MetricTile = ({ item, index }: { item: Metric; index: number }) => {
  const Icon = item.icon;
  const tilt = index % 2 === 0 ? 1 : -1;

  return (
    <motion.div
      tabIndex={0}
      role="group"
      aria-label={`${item.label}: ${item.value}`}
      initial={{ opacity: 0, y: 10, rotateX: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5, rotateX: 3, rotateY: tilt * 3, scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="group relative min-w-0 cursor-pointer [transform-style:preserve-3d]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-1 bottom-[-4px] top-1 rounded-xl bg-sky-950/70 opacity-70 blur-sm transition-all duration-300 group-hover:inset-x-0 group-hover:bottom-[-6px] group-hover:opacity-100"
      />

      <div className="relative flex min-h-[68px] items-center gap-1.5 overflow-hidden rounded-xl border border-white/15 bg-linear-to-br from-white/95 via-white/85 to-sky-100/75 px-2 py-2 text-slate-900 shadow-[0_6px_14px_rgba(2,24,52,0.22)] transition-all duration-300 group-hover:border-sky-300 group-hover:from-sky-500 group-hover:via-sky-600 group-hover:to-blue-700 group-hover:text-white group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-sky-300/60 sm:gap-2.5 sm:px-3">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-7 -top-8 h-16 w-16 rounded-full bg-sky-300/30 blur-xl transition-transform duration-500 group-hover:scale-150"
        />

        <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-sky-200/70 bg-sky-100/80 text-sky-700 shadow-inner transition-all duration-300 group-hover:rotate-6 group-hover:border-white/30 group-hover:bg-white/20 group-hover:text-white sm:h-7 sm:w-7">
          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
        </span>

        <div className="relative z-10 min-w-0 flex-1 leading-none">
          <p className="text-lg font-black tracking-tight transition-colors duration-300 sm:text-xl">
            {item.value}
          </p>
          <p className="mt-1 whitespace-normal text-[8px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-slate-500 transition-colors duration-300 group-hover:text-white/85 sm:whitespace-nowrap sm:tracking-[0.08em] sm:text-[9px]">
            {item.label}
          </p>
        </div>

        <ArrowUpRight
          className="relative z-10 h-3.5 w-3.5 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};

export default function UnifiedOperationsConsole() {
  return (
    <section
      aria-label="Bhardwaj Innovations company metrics"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-950 py-3 text-white md:py-4"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-48 w-48 rounded-full bg-sky-500/12 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-48 w-48 rounded-full bg-blue-700/12 blur-3xl" />
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(125,211,252,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 [perspective:1100px]">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 xl:gap-2.5">
          {companyMetrics.map((item, index) => (
            <MetricTile key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
