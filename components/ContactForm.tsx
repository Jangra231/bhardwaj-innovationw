"use client";

import React, { useActionState, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import * as Lucide from "lucide-react";
import { submitForm, SubmitState } from "@/actions/submitForm";

const initialState: SubmitState = {
  success: false,
  message: "",
};

const productsList = [
  "Fleet Management Software",
  "BIZEYE Tracking Software",
  "SPARK EV Battery Monitoring",
  "Event Management Application",
  "Custom Software Solution",
  "Hardware Product Inquiry",
  "Other Product Inquiry",
];

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<SubmitState, FormData>(
    submitForm,
    initialState
  );
  const searchParams = useSearchParams();
  const [productNeeded, setProductNeeded] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const productParam = searchParams.get("product") ?? searchParams.get("software");
    const sectorParam = searchParams.get("sector");

    if (productParam) {
      setProductNeeded(productParam);
      setMessage(
        `I would like to receive pricing and availability details for the product: ${productParam}.`
      );
    } else if (sectorParam) {
      let matchedProduct = "Custom Software Solution";
      let subDetails = "";

      switch (sectorParam.toLowerCase()) {
        case "transportation":
          matchedProduct = "Fleet Management Software";
          subDetails =
            "large commercial vehicle fleets, route optimization, and diesel consumption analytics.";
          break;
        case "government":
          matchedProduct = "Fleet Management Software";
          subDetails =
            "AIS-140 compliance, CDAC servers routing, and emergency panic button installations.";
          break;
        case "healthcare":
          matchedProduct = "Custom Software Solution";
          subDetails =
            "temperature-controlled cold chain vaccine transport, active ambient temperature logs, and rapid ambulance response dispatch.";
          break;
        case "mining":
          matchedProduct = "Custom Software Solution";
          subDetails =
            "heavy machinery active telemetry, fuel theft protection, and high-precision off-road GPS routing.";
          break;
        case "education":
          matchedProduct = "BIZEYE Tracking Software";
          subDetails =
            "school bus real-time route sharing with guardians, over-speed alert system, and driver camera feed monitoring.";
          break;
        case "corporate":
          matchedProduct = "Fleet Management Software";
          subDetails =
            "executive transport tracking, shift dispatch reports, and carbon emissions audits.";
          break;
        default:
          matchedProduct = "Custom Software Solution";
          subDetails = "specific enterprise requirements.";
      }

      setProductNeeded(matchedProduct);
      setMessage(
        `I would like to explore custom IoT and fleet tracking solutions tailored for our operations in the ${sectorParam} industry. We are specifically looking to address: ${subDetails}`
      );
    }
  }, [searchParams]);

  return (
    <form action={formAction} className="space-y-5">
      <div className="space-y-1.5">
        <label htmlFor="form-name" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Lucide.User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            id="form-name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="form-contactNo" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lucide.Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              id="form-contactNo"
              name="contactNo"
              type="tel"
              required
              placeholder="Enter mobile number"
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="form-email" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lucide.Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              id="form-email"
              name="email"
              type="email"
              required
              placeholder="Enter email address"
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="form-organization" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
            Name of Organization
          </label>
          <div className="relative">
            <Lucide.Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              id="form-organization"
              name="organization"
              type="text"
              placeholder="Enter company name"
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="form-designation" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
            Your Designation
          </label>
          <div className="relative">
            <Lucide.Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              id="form-designation"
              name="designation"
              type="text"
              placeholder="Enter job designation"
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none"
            />
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="form-productNeeded" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
          Product or Software Needed <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Lucide.HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <select
            id="form-productNeeded"
            name="serviceNeeded"
            required
            value={productNeeded}
            onChange={(e) => setProductNeeded(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none appearance-none cursor-pointer"
          >
            <option value="">-- Select Product or Software --</option>
            {productsList.map((product) => (
              <option key={product} value={product}>{product}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="form-message" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
          Detailed Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          required
          rows={4}
          placeholder="Please elaborate on your asset size, vehicle types, sensors requirement, or custom integration desires..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none resize-none"
        ></textarea>
      </div>

      <button
        id="btn-submit-enquiry"
        type="submit"
        disabled={isPending}
        className="w-full py-4 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-400 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-sky-500/10 cursor-pointer flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <Lucide.Loader2 className="h-5 w-5 animate-spin" />
            Saving & notifying operations...
          </>
        ) : (
          <>
            <Lucide.Send className="h-5 w-5" />
            Send Secure Enquiry
          </>
        )}
      </button>

      {state.message && (
        <div aria-live="polite" className={`p-4 rounded-xl text-xs space-y-2 border text-left ${state.success ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-rose-50 border-rose-200 text-rose-800"}`}>
          <div className="flex gap-2 items-center font-bold">
            {state.success ? (
              <Lucide.CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
            ) : (
              <Lucide.XCircle className="h-5 w-5 text-rose-600 shrink-0" />
            )}
            <span>{state.message}</span>
          </div>

          {!state.success && state.details && (
            <div className="pt-1.5 space-y-1 pl-4 text-[11px] text-rose-600 font-medium">
              {state.details.map((det, i) => (
                <p key={i}>
                  • <span className="capitalize"> {det.field}</span>: {det.message}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </form>
  );
}
