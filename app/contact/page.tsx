import React, { Suspense } from "react";
import * as Lucide from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Bhardwaj Innovations",
  description:
    "Connect with Bhardwaj Innovations for vehicle fleet tracking installations, custom IoT product designs, or compliance certification audits.",
};

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200"
            alt="Telemetry Dashboard Map"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-400">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact Bhardwaj Innovations
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            We are here to support your vehicle fleet tracking installations,
            custom IoT product designs, or compliance certification audits.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div className="space-y-12 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-sky-600">
                Company Information
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Our Corporate Office
              </h2>
              <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                Connect directly with our corporate operations group or visit
                our research center in Chandigarh.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                  <Lucide.MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Office Address
                  </h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Bhardwaj Innovations
                    <br />
                    H-28, Surajpur Industrial Area, Phase 1,
                    <br />
                    Noida, India - 201306
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                  <Lucide.Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Phone
                  </h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    <a
                      href="tel:+919876543210"
                      className="hover:text-sky-600 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                  <Lucide.Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Email Support
                  </h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    <a
                      href="mailto:contact@bhardwajinnovations.com"
                      className="hover:text-sky-600 transition-colors"
                    >
                      contact@bhardwajinnovations.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                  <Lucide.Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Working Hours
                  </h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="relative border border-slate-200 rounded-2xl overflow-hidden bg-black/90 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-500 uppercase tracking-wider">
                  Corporate Map Location
                </span>
                <span className="text-[10px] font-mono text-sky-500 bg-sky-50 px-2 py-0.5 rounded">
                  28.4493° N, 77.5298° E
                </span>
              </div>

              <div className="relative h-64 w-full bg-slate-900 rounded-xl overflow-hidden border border-none flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=H-28%2C%20Surajpur%20Industrial%20Area%2C%20Greater%20Noida%2C%20Uttar%20Pradesh&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bhardwaj Innovations Location"
                  />

                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center italic">
                Our main factory, R&amp;D lab, and dispatch units are
                consolidated in this center.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10 shadow-sm text-left h-fit">
            <div className="space-y-2 mb-8">
              <h3 className="text-xl font-bold text-slate-900">
                Send Us A Message
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Fill out our secure enquiry form. Your enquiry is saved to MongoDB Atlas first, then routed through the company SMTP mailbox so our team can respond quickly.
              </p>
            </div>

            <Suspense
              fallback={
                <div className="flex items-center justify-center py-12 text-slate-400 text-sm">
                  <Lucide.Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Loading form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
