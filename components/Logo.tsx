import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({
  className = "h-12.5",
  showText = true,
  light = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className="h-full aspect-square flex items-center justify-center shrink-0">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-full w-full  rounded-xl object-contain transition-all duration-300 hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`text-xl font-extrabold tracking-tight ${light ? "text-black/80" : "text-white"}`}
          >
            Bhardwaj
          </span>
          <span
            className={`text-xs font-semibold tracking-[0.25em] uppercase ${light ? "text-sky-600" : "text-sky-600"}`}
          >
            Innovations
          </span>
        </div>
      )}
    </div>
  );
}
