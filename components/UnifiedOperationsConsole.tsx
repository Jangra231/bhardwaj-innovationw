"use client";

import {
  Activity,
  ArrowUpRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Gauge,
  RadioTower,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const companyMetrics = [
  { label: "National Compliance Certs", value: "10+", icon: CheckCircle2 },
  { label: "Real-time Telemetry Uptime", value: "99.9%", icon: RadioTower },
    { label: "Active Tracking Nodes", value: "8K+", icon: Activity },
    { label: "Kilometers Monitored", value: "5M+", icon: Gauge },
  
] as const;

const trackingMetrics = [
    { label: "Years Experience", value: "2+", icon: CalendarDays },
    { label: "Active Projects", value: "15+", icon: Award },
    { label: "B2B Clients", value: "200+", icon: Users },
    { label: "Customer Support", value: "24/7", icon: Clock3 },
  
] as const;

const metricCardClass =
  "group relative min-h-[104px] rounded-xl border border-white/10 bg-white/90 px-3 py-3 text-left text-slate-300 shadow-none transition-all duration-200 hover:border-sky-400/70 hover:bg-sky-500/90 hover:text-white hover:shadow-lg hover:shadow-sky-950/20 focus-visible:border-sky-400/70 focus-visible:bg-sky-500/15 focus-visible:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/20 md:min-h-[112px] md:px-4";

export default function UnifiedOperationsConsole() {
  return (
    <section
      aria-label="Bhardwaj Innovations company and fleet metrics"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-950 py-8 text-white md:py-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-blue-700/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
          {companyMetrics.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                tabIndex={0}
                role="group"
                aria-label={`${item.label}: ${item.value}`}
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className={metricCardClass}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-400/30 text-sky-500 transition-colors duration-200 group-hover:bg-sky-400 group-hover:text-sky-200 group-focus:bg-sky-400/20 group-focus:text-sky-200">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300 group-focus:-translate-y-0.5 group-focus:translate-x-0.5 group-focus:text-sky-300" aria-hidden="true" />
                </div>
                <p className="mt-2 text-xl font-black tracking-tight text-black md:text-2xl">{item.value}</p>
                <p className="mt-0.5 text-[8px] font-bold uppercase leading-tight tracking-wider text-slate-600 transition-colors duration-200 group-hover:text-white/80 group-focus:text-white/80 md:text-[9px]">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="my-4 flex items-center gap-3" aria-hidden="true">
          <div className="h-px flex-1 bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          <div className="h-px flex-1 bg-white" />
        </div>

        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
          {trackingMetrics.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                tabIndex={0}
                role="group"
                aria-label={`${item.label}: ${item.value}`}
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className={metricCardClass}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-400/30 text-sky-500 transition-colors duration-200 group-hover:bg-sky-400 group-hover:text-sky-200 group-focus:bg-sky-400/20 group-focus:text-sky-200">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300 group-focus:-translate-y-0.5 group-focus:translate-x-0.5 group-focus:text-sky-300" aria-hidden="true" />
                </div>
                <p className="mt-2 text-xl font-black tracking-tight text-black md:text-2xl">{item.value}</p>
                <p className="mt-0.5 text-[8px] font-bold uppercase leading-tight tracking-wider text-slate-600 transition-colors duration-200 group-hover:text-white/80 group-focus:text-white/80 md:text-[9px]">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
