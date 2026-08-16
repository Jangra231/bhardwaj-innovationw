import React from "react";
import * as Lucide from "lucide-react";

export const metadata = {
  title: "SLA Undertakings | Bhardwaj Innovations",
  description:
    "Enterprise-grade Service Level Agreement guidelines outlining telemetry API uptime, packet routing latency limits, and hardware deployment support windows.",
};

export default function SLAPage() {
  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
            alt="Servers Data Stream"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-400">Guaranteed Reliability</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            SLA Undertakings
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Read our enterprise-grade Service Level Agreement guidelines, outlining telemetry API uptime percentages, packet routing latency limits, and hardware deployment support windows.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white text-left">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-2 text-center">
              <span className="text-2xl font-bold text-sky-600 block">99.9%</span>
              <span className="text-xs font-bold uppercase text-slate-800 tracking-wider block">API & Dashboard Uptime</span>
              <p className="text-[10px] text-slate-400 font-light leading-relaxed">Continuous ingestion of GPS tracking logs without data stream loss.</p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-2 text-center">
              <span className="text-2xl font-bold text-sky-600 block">&lt; 5 sec</span>
              <span className="text-xs font-bold uppercase text-slate-800 tracking-wider block">Panic Route Latency</span>
              <p className="text-[10px] text-slate-400 font-light leading-relaxed">Sub-5-second packet transmission from hardware node to state emergency CDAC servers.</p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-2 text-center">
              <span className="text-2xl font-bold text-sky-600 block">4 Hours</span>
              <span className="text-xs font-bold uppercase text-slate-800 tracking-wider block">Tier-1 Ticket Response</span>
              <p className="text-[10px] text-slate-400 font-light leading-relaxed">Guaranteed rapid response and technician assignment for active fleet blackouts.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">1. Server Availability & Ingestion Commitments</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              We understand that tracking high-value cargo, heavy construction vehicles, and EV fleets requires round-the-clock reliability. Bhardwaj Innovations guarantees a monthly uptime of <strong>99.9%</strong> for the following telemetry ingestion endpoints:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600 font-light">
              <li>Our TCP/UDP server endpoints parsing raw binary GPS sentences from hardware nodes.</li>
              <li>Enterprise Admin web console dashboards and REST APIs.</li>
              <li>SMS gateway microservices pushing sudden-braking or fuel-theft alerts to client operators.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">2. AIS-140 Panic Alerts & Emergency Routing Standards</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              Emergency packets originating from physical AIS-140 panic buttons are classified as critical events. Our server prioritizes these alerts, aiming to achieve:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600 font-light">
              <li><strong>Queue Prioritization:</strong> Zero-queue staging. Emergency data packets bypass standard heartbeat processing loops.</li>
              <li><strong>Government Portal Ingestion:</strong> Outbound REST API posts to state emergency hubs (CDAC) are retried every 2 seconds if a network block occurs, up to 10 attempts.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">3. Scheduled Maintenance Windows</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              To minimize daily operational impact, server maintenance (firmware updates, database indexes optimization, database clusters patching) is strictly performed on Sundays between <strong>2:00 AM and 4:00 AM IST</strong>. Advance notices are sent to fleet administrators at least 72 hours prior to any planned disruption.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Fleet Support Matrix</h2>
            <div className="border border-slate-150 rounded-xl overflow-hidden text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-150 text-xs uppercase font-bold text-slate-700">
                    <th className="p-3">Severity Level</th>
                    <th className="p-3">Operational State</th>
                    <th className="p-3">Guaranteed Response Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 font-light">
                  <tr>
                    <td className="p-3 font-semibold text-rose-600">Level 1 - Critical</td>
                    <td className="p-3">Entire fleet tracking console inaccessible or live maps blacked out.</td>
                    <td className="p-3">Within 4 Hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-amber-600">Level 2 - High</td>
                    <td className="p-3">Single-device transmission error or individual sensor failure.</td>
                    <td className="p-3">Within 12 Hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-800">Level 3 - Low</td>
                    <td className="p-3">General questions, report exports assistance, UI formatting help.</td>
                    <td className="p-3">Within 24 Hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <span>Last Updated: July 2026</span>
            <span>Bhardwaj Innovations Network Operations Center</span>
          </div>

        </div>
      </section>
    </div>
  );
}
