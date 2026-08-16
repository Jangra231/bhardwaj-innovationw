import React from "react";
import * as Lucide from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Bhardwaj Innovations",
  description:
    "How Bhardwaj Innovations safeguards your fleet telemetry, real-time GPS coordinates, vehicle speed metrics, and corporate contact database.",
};

export default function PrivacyPage() {
  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
            alt="Cybersecurity and Data Privacy"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-400">Security & Trust</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            How Bhardwaj Innovations safeguards your fleet telemetry, real-time GPS coordinates, vehicle speed metrics, and corporate contact database.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white text-left">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4 shadow-sm">
            <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0 mt-0.5">
              <Lucide.ShieldCheck className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Telemetry Security Guarantee</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                All vehicle diagnostics, AIS-140 emergency alert events, and geofence logs are stored with industry-standard AES-256 encryption both in-transit and at-rest within our MongoDB Atlas cloud clusters.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              Bhardwaj Innovations collects data to provide efficient fleet telematics, hardware diagnostic interfaces, and customized software dashboards. The types of data collected include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600 font-light">
              <li><strong>Real-time Geolocation Data:</strong> High-precision latitude, longitude, elevation, and heading coordinates polled from active hardware nodes.</li>
              <li><strong>Telemetry and Vehicle Stats:</strong> Ignition state, speed logs, sudden braking metrics, fuel sensor voltage readings, and EV battery temperature parameters.</li>
              <li><strong>Corporate Credentials:</strong> Authorized personnel contact numbers, email addresses, and designated fleet operator login parameters.</li>
              <li><strong>AIS-140 Metadata:</strong> Panic button activation history, CDAC secure server routing state logs, and emergency beacon counts.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">2. How We Use Your Data</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              We process telemetry and client data strictly to deliver contracted operational services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600 font-light">
              <li>Rendering live mapping pins on our fleet management dashboards.</li>
              <li>Generating historic speed profiles, diesel pilferage alerts, and trip reports.</li>
              <li>Dispatching automatic emergency alerts to state emergency response coordinates (ERC) under governmental AIS-140 regulations.</li>
              <li>Analyzing battery thermal health trends for EV battery management systems (BMS).</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">3. Data Sharing & Security Protocols</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              Your telemetry is highly confidential. We implement strict security walls:
            </p>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              <strong>Government Compliance Routing:</strong> For clients operating AIS-140 compliant commercial vehicles, coordinates are automatically routed via secure APIs to official regional transport authorities as mandated by transport ministry guidelines. No third-party commercial marketing access is permitted.
            </p>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              <strong>Enterprise Silos:</strong> Each corporate fleet&apos;s live feed is fully partitioned. API authentication tokens are rotated dynamically using OAuth authentication standards to prevent unauthorized telemetry leakage.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Retention and Right-to-Erasure</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              In accordance with regional transport regulatory frameworks and standard corporate audits, GPS tracking logs are retained for <strong>365 days</strong> by default. Enterprise administrators may request complete purge cycles of diagnostic metadata or instant archive extractions by contacting our Chandigarh data operations desk.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <span>Last Updated: July 2026</span>
            <span>Bhardwaj Innovations compliance division</span>
          </div>

        </div>
      </section>
    </div>
  );
}
