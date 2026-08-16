import React from "react";
import * as Lucide from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Bhardwaj Innovations",
  description:
    "Standard hardware purchase policies, software dashboard licensing covenants, and compliance liabilities of Bhardwaj Innovations.",
};

export default function TermsPage() {
  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200"
            alt="Business Contract Signature"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-400">Legal Agreement</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Please review the standard hardware purchase policies, software dashboard licensing covenants, and compliance liabilities of Bhardwaj Innovations.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white text-left">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4 shadow-sm">
            <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0 mt-0.5">
              <Lucide.FileSignature className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Acceptance of Covenants</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                By purchasing our AIS-140 GPS nodes, reflective tapes, BMS controllers, or activating an enterprise login, you agree to follow these Terms of Service.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">1. Hardware Node Warranty & Return</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              All physical tracking devices (including the 2G/4G Wired GPS, OBD GPS, and Smart BMS modules) are protected by a <strong>12-Month Limited Manufacturer Warranty</strong> covering component failures, antenna desoldering, and internal fuse defects under standard vehicle operations.
            </p>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              The warranty does not cover issues resulting from manual wiring tampering, water submersions beyond IP67 testing standards, battery short-circuits due to external modifications, or vehicle crashes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">2. Software Interface License</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              Bhardwaj Innovations grants the purchasing client a non-exclusive, non-transferable, revocable license to access the fleet telemetry dashboard solely for their company&apos;s owned or operated vehicle assets.
            </p>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              Clients are strictly prohibited from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600 font-light">
              <li>Reverse-engineering the firmware embedded in our physical microcontrollers.</li>
              <li>Scraping mapping APIs, tile servers, or street layouts rendered on our platform.</li>
              <li>Re-selling the telemetry data stream to third-party commercial aggregators without written permission.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">3. SIM Cards and Network Carrier Policy</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              If physical nodes are shipped pre-configured with active telemetry SIM cards, the client agrees to use those SIMs exclusively for transmitting GPS data coordinates to our server endpoints. Removing a SIM to use it in other devices is a violation, and will trigger instant node deactivation and billing penalties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. AIS-140 Compliance Liabilities</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              While our AIS-140 nodes are certified to governmental standards, the vehicle owner is solely responsible for ensuring the devices are physically active, registered with regional transport portals, and the emergency panic buttons are tested periodically according to local transport mandates.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <span>Last Updated: July 2026</span>
            <span>Bhardwaj Innovations Legal Desk</span>
          </div>

        </div>
      </section>
    </div>
  );
}
