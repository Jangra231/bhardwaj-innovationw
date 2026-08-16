"use client";

import React from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { motion } from "motion/react";
import { SOFTWARE_DATA } from "@/lib/data/software";
import { getUniqueProductMedia } from "@/lib/unique-product-media";

export default function SoftwareProductsPage() {
  const softwareProducts = SOFTWARE_DATA;

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1400"
            alt="Software Solutions"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-sky-500/10"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-4">
            <Lucide.Cpu className="h-4 w-4" />
            Software Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Intelligent Software Ecosystems
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            Intelligent platforms and mobile applications designed to transform raw tracking data into actionable business intelligence.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white relative dot-pattern">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group flex flex-col justify-between bg-slate-50 hover:bg-white border border-slate-100 hover:border-sky-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer text-left card-tilt"
              >
                <Link href={`/software/${product.id}`} className="block">
                  <div className="relative h-56 bg-slate-100 overflow-hidden border-b border-slate-100 media-container">
                    <img
                      src={getUniqueProductMedia(product.id, [product.image, ...product.gallery])[0]}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-sky-600 uppercase tracking-widest rounded-full shadow-sm">
                        {product.category}
                      </span>
                    </div>
                    {/* Live demo badge with ripple */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full">
                      <div className="relative">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse block"></span>
                        <span className="absolute inset-0 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ripple"></span>
                      </div>
                      <span className="text-[9px] text-white font-medium">Live Demo</span>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-light">
                      {product.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Key Features
                      </span>
                      {product.features.slice(0, 2).map((feat, idx2) => (
                        <div key={idx2} className="flex gap-2 items-start text-xs text-slate-600 font-light">
                          <span className="text-sky-500 font-bold shrink-0 mt-0.5">•</span>
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>

                <div className="p-8 pt-0">
                  <Link href={`/software/${product.id}`} className="w-full py-3 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-800 border border-slate-150 hover:border-sky-200 transition-colors text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-sm group">
                    View Technical Details
                    <Lucide.ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 bg-slate-950 text-white rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-slate-800 shadow-xl">
            <div className="absolute inset-0 z-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                alt="Software Integration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold tracking-tight">Need a Custom Software Solution?</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Our engineering team builds bespoke fleet management dashboards, enterprise API integrations, and AI-powered analytics platforms tailored to your business needs.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 shrink-0 px-6 py-3 bg-sky-600 hover:bg-sky-500 transition-colors text-white font-bold rounded-xl shadow-md cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
            >
              Request Custom Solution
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
