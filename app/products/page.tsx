"use client";

import React from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { getUniqueProductMedia } from "@/lib/unique-product-media";

export default function ProductsPage() {
  const hardwarePreview = PRODUCTS_DATA.filter(p => p.category === "Hardware");

  const ProductSection = ({ title, description, products, category, icon }: { title: string, description: string, products: typeof PRODUCTS_DATA, category: string, icon: React.ReactNode }) => {
    const categoryHref = "/products";

    return (
    <div className="space-y-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="text-left space-y-2 border-l-4 border-sky-500 pl-6">
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
          </div>
          <p className="text-slate-500 text-lg font-light max-w-3xl">{description}</p>
        </div>
        
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => {
          const productVisual = getUniqueProductMedia(product.id, [product.image, ...product.gallery])[0];

          return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group flex flex-col justify-between bg-slate-50 hover:bg-white border border-slate-100 hover:border-sky-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer text-left card-tilt"
          >
            <Link href={`/products/${product.id}`} className="block">
                <div className="relative h-56 bg-slate-100 overflow-hidden border-b border-slate-100 media-container">
                <img
                  src={productVisual}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-sky-600 uppercase tracking-widest rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>
                {/* Animated badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[9px] text-white font-medium">Available</span>
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
              <Link href={`/products/${product.id}`} className="w-full py-3 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-800 border border-slate-150 hover:border-sky-200 transition-colors text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-sm">
                View Technical Details
                <Lucide.ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          );
        })}
      </div>

     
    </div>
    );
  };

  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
            alt="Corporate Hardware Laboratory"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-400">Our Products</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Advanced Telematics Solutions
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            High-precision hardware engineered for dependable tracking, security, and connected mobility operations.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          
          <ProductSection 
            title="Hardware Accessories" 
            description="Rugged, high-precision tracking terminals engineered for extreme reliability in any environmental condition."
            products={hardwarePreview}
            category="Hardware"
            icon={<Lucide.Microchip className="h-6 w-6 text-sky-500" />}
          />

          <div className="bg-slate-950 text-white rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-slate-800 shadow-xl">
            <div className="absolute inset-0 z-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1000"
                alt="Diagnostics Screen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold tracking-tight">Looking for bulk fleet pricing?</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                We support high-volume OEM customizations, customized casing decals, custom SIM integrations, and deep discount profiles for fleets exceeding 50+ nodes.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 shrink-0 px-6 py-3 bg-sky-600 hover:bg-sky-500 transition-colors text-white font-bold rounded-xl shadow-md cursor-pointer"
            >
              Get Bulk Quotation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
