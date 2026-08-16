import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bhardwaj Innovations | IoT, GPS Tracking & Fleet Management",
  description:
    "Enterprise-grade IoT telematics, AIS-140 compliant GPS tracking hardware, smart EV battery management systems, and custom fleet management software by Bhardwaj Innovations.",
  keywords: [
    "GPS tracking",
    "fleet management",
    "AIS-140",
    "IoT telematics",
    "EV BMS",
    "vehicle tracking",
    "Bhardwaj Innovations",
  ],
  openGraph: {
    title: "Bhardwaj Innovations",
    description:
      "Leading IoT telematics, GPS tracking, and fleet management solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-sky-500 selection:text-white">
        <Navbar />
        <main className="grow transition-all duration-300">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
