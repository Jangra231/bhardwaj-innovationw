import React from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center space-y-6">
        <Lucide.AlertCircle className="h-16 w-16 text-rose-500 mx-auto" />
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Page Not Found</h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold transition-colors cursor-pointer"
        >
          <Lucide.ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
