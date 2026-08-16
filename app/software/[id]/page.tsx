import React from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { SOFTWARE_DATA } from "@/lib/data/software";
import { getUniqueProductMedia } from "@/lib/unique-product-media";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SOFTWARE_DATA.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then((p) => {
    const product = SOFTWARE_DATA.find((pr) => pr.id === p.id);
    if (!product) return { title: "Product Not Found" };
    return {
      title: `${product.title} | Bhardwaj Innovations`,
      description: product.shortDesc,
    };
  });
}

export default async function SoftwareProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = SOFTWARE_DATA.find((p) => p.id === id);

  if (!product) notFound();

  // Find related products in the same category
  const relatedProducts = SOFTWARE_DATA
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const productVisuals = getUniqueProductMedia(product.id, [
    product.image,
    ...product.gallery,
  ]);

  return (
    <div className="relative">
      {/* HERO SECTION with Video/GIF Background */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        {/* Page-specific visual background */}
        <div className="absolute inset-0 z-0">
          <img
            src={productVisuals[0]}
            alt={`${product.title} in use`}
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/60"></div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div className="absolute top-20 right-32 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }}></div>
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-sky-400/3 rounded-full blur-2xl animate-pulse" style={{ animationDuration: "3s" }}></div>
        </div>

        {/* Category badge */}
        <div className="absolute top-6 right-6 z-10">
          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            product.category === "Hardware" 
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
              : "bg-sky-500/20 text-sky-400 border border-sky-500/30"
          }`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse"></span>
            {product.category}
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-left space-y-4">
          <Link
            href="/software"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors cursor-pointer mb-2 group"
          >
            <Lucide.ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to {product.category} Solutions
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {product.title}
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl font-light">
            {product.shortDesc}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">

          <div className="lg:col-span-2 space-y-12 text-left">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">Product Overview</h2>
              <p className="text-slate-600 leading-relaxed font-light text-base">
                {product.longDesc}
              </p>
            </div>

            {/* GIF/Video Gallery Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Product Gallery & Operational Preview
              </h3>
              
              {/* Main Video Preview */}
              {product.videoUrl && (
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                  <div className="aspect-video bg-slate-950 relative">
                    <video
                      src={product.videoUrl}
                      poster={productVisuals[1]}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-full">
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span className="text-[10px] text-white font-medium uppercase tracking-wider">Live Preview</span>
                    </div>
                  </div>
                </div>
              )}

              {/* GIF Preview */}
              {product.gifUrl && (
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                  <div className="aspect-video bg-slate-100 relative">
                    <img
                      src={productVisuals[2]}
                      alt={`${product.title} operational visual`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent"></div>
                  </div>
                </div>
              )}

              {/* Image Gallery Grid */}
              <div className="grid sm:grid-cols-3 gap-6">
                {productVisuals.slice(3, 6).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="group relative h-44 rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.title} view ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Strengths */}
            <div className="space-y-4 bg-slate-50 border border-slate-100 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Lucide.Cpu className="h-5 w-5 text-sky-500" /> Engineering Strengths
              </h3>
              <div className="space-y-3 pt-3">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex gap-3 text-sm text-slate-600 font-light">
                    <span className="h-5 w-5 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Recommended Use Cases</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.applications.map((app, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-sky-100 transition-all">
                    <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                      <Lucide.Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8 text-left">
            {/* Technical Datasheet */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-lg space-y-6">
              <h3 className="text-lg font-bold border-b border-slate-800 pb-3 flex items-center gap-2">
                <Lucide.FileText className="h-5 w-5 text-sky-400" /> Technical Datasheet
              </h3>
              <div className="space-y-4 text-xs font-light">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">
                      {key}
                    </span>
                    <span className="text-slate-300 leading-relaxed block text-sm">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm text-center space-y-4">
              <h4 className="text-base font-bold text-slate-900">Request Device Evaluation</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Contact our sales and testing group to request evaluation hardware nodes, bulk pricing quotations, or specialized interface support.
              </p>
              <Link
                href={`/contact?product=${encodeURIComponent(product.title)}`}
                className="block w-full py-3 bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md hover:shadow-sky-500/10"
              >
                Inquire For Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-slate-900">Related {product.category} Products</h3>
              <Link
                href="/software"
                className="text-sm font-semibold text-sky-600 hover:text-sky-500 transition-colors flex items-center gap-1"
              >
                View All <Lucide.ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => {
                const relatedVisual = getUniqueProductMedia(rp.id, [
                  rp.image,
                  ...rp.gallery,
                ])[6];

                return (
                  <Link
                    key={rp.id}
                    href={`/software/${rp.id}`}
                    className="group bg-white rounded-xl border border-slate-100 hover:border-sky-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img
                        src={relatedVisual}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{rp.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">{rp.shortDesc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
