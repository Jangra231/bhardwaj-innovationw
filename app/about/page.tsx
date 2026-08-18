"use client";

import React, { useState } from "react";
import * as Lucide from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const renderIcon = (name: string, className = "h-6 w-6 text-sky-500") => {
  const IconComponent = (
    Lucide as unknown as Record<
      string,
      React.ComponentType<{ className?: string }>
    >
  )[name];
  if (!IconComponent) return <Lucide.CheckCircle className={className} />;
  return <IconComponent className={className} />;
};

export default function AboutPage() {
  const [activePurpose, setActivePurpose] = useState<"mission" | "vision">(
    "mission",
  );

  const purposeContent = {
    mission: {
      eyebrow: "Our Mission",
      title: "Engineering clarity into every operation.",
      description:
        "We empower organizations with intelligent technology that improves safety, operational efficiency, and long-term value.",
      points: [
        "Protect people, assets, and cargo",
        "Turn live data into confident action",
        "Deliver reliable field-to-cloud support",
      ],
    },
    vision: {
      eyebrow: "Our Vision",
      title: "A smarter, safer connected supply chain.",
      description:
        "We aim to be the trusted technology partner for transport and logistics organizations building more visible, resilient, and connected operations.",
      points: [
        "Lead with practical IoT innovation",
        "Enable safer transport at every scale",
        "Make connected operations easier to manage",
      ],
    },
  };

  const coreValues = [
    {
      title: "Innovation",
      desc: "Constantly researching and embedding modern AI and IoT telemetry protocols to stay ahead of market dynamics.",
      icon: "Cpu",
      gradient: "from-sky-500 to-blue-600",
      initials: "AB",
      image: "", // Add a photo path such as /media/leadership/amit-bhardwaj.jpg
    },
    {
      title: "Integrity",
      desc: "Delivering honest security metrics, solid physical hardware guarantees, and strictly secure data vaults.",
      icon: "ShieldCheck",
      gradient: "from-emerald-500 to-teal-600",
      initials: "AB",
      image: "", // Add a photo path such as /media/leadership/ankit-bhardwaj.jpg
    },
    {
      title: "Customer Focus",
      desc: "Studying our client workflows deeply to configure custom interfaces, reports, and dedicated field support.",
      icon: "UserHeart",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      title: "Excellence",
      desc: "Ensuring 99%+ telemetry server SLAs, robust hardware waterproof ratings, and AIS-140 CDAC compliance.",
      icon: "Award",
      gradient: "from-amber-500 to-orange-600",
      initials: "SS",
      image: "", // Add a photo path such as /media/leadership/shiv-shankar-ji.jpg
    },
  ];

  const teamMembers = [
    {
      name: "Shiv Shankar ",
      role: "CEO & Founder",
      bio: "Guiding the company’s purpose, long-term relationships, and responsible growth across connected operations.",
      icon: "Crown",
      gradient: "from-amber-500 to-orange-600",
      image: "/media/leadership/leadership.png",
    },
    {
      name: "Amit Bhardwaj",
      role: "MD",
      bio: "Leading product strategy and the transformation of field telemetry into dependable business outcomes.",
      icon: "BriefcaseBusiness",
      gradient: "from-sky-500 to-blue-600",
      image: "/media/leadership/leadership.png",
    },
    {
      name: "Ankit Sharma",
      role: "CFO",
      bio: "Building disciplined financial systems that support sustainable delivery, compliance, and customer trust.",
      icon: "ChartNoAxesCombined",
      gradient: "from-emerald-500 to-teal-600",
      image: "/media/leadership/leadership.png",
    },
    {
      name: "Vikas Bhardwaj",
      role: "Tech Consultant",
      bio: "Driving embedded systems, telemetry architecture, secure integrations, and reliable product engineering.",
      icon: "Cpu",
      gradient: "from-indigo-500 to-violet-600",

      image: "/media/leadership/leadership.png", // Add a photo path such as /media/leadership/vikas-bhardwaj.jpg
    },
    {
      name: "Operations Leadership",
      role: "Delivery & Client Success",
      bio: "Connecting deployments, support, compliance, and customer teams so every solution works in the field.",
      icon: "UsersRound",
      gradient: "from-rose-500 to-pink-600",

      image: "/media/leadership/leadership.png", // Add a photo path such as /media/leadership/operations-leadership.jpg
    },
  ];

  return (
    <div className="relative">
      {/* HERO SECTION with Video Background */}
      <section className="group relative overflow-hidden border-b border-slate-800 bg-slate-950 py-24 text-white">
        {/* Existing hero image and overlays; styling only */}
        <div className="absolute inset-0 z-0">
          <img
            src="/media/detail/fleet-control.jpg"
            alt="Indian operations team coordinating global fleet activity"
            className="h-full w-full object-cover opacity-20 grayscale transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-transparent to-slate-950/50" />
        </div>

        {/* Existing floating particles */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div
            className="absolute right-32 top-20 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-10 left-20 h-48 w-48 rounded-full bg-slate-900/10 blur-3xl animate-pulse"
            style={{ animationDuration: "6s" }}
          />
          <div
            className="absolute left-1/2 top-1/3 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl animate-pulse"
            style={{ animationDuration: "5s" }}
          />
        </div>

        {/* Existing hero content */}
        <div className="relative z-10 mx-auto max-w-7xl space-y-6 px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/85 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-300 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500" />
            About Us
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Pioneering Telemetry & <br />
            <span className="bg-linear-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
              IoT Innovation
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base font-light text-slate-300 md:text-lg">
            Dedicated to engineering high-precision hardware, responsive
            tracking software, and compliant fleet security configurations for
            global operations.
          </p>
        </div>
      </section>

      {/* =========================
    RIGHT - VISUAL PANEL
========================= */}
      <div className="relative">
        {/* Main Image Card */}
        <div
          className="
    relative
    h-105
    md:h-125
    rounded-3xl
    overflow-hidden
    shadow-2xl
  "
        >
          <img
            src="/media/detail/software-platform.jpg"
            alt="Indian technology office supporting global logistics operations"
            className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
      "
          />

          {/* Overlay */}
          <div
            className="
      absolute
      inset-0
      bg-linear-to-t
      from-slate-950/90
      via-slate-950/30
      to-transparent
    "
          />

          {/* Image Content */}
          <div
            className="
      absolute
      inset-x-0
      bottom-0
      p-7
      md:p-10
    "
          >
            <span
              className="
        inline-flex
        px-4
        py-2
        rounded-full
        bg-white/10
        border
        border-white/20
        backdrop-blur-md
        text-white
        text-xs
        font-bold
        uppercase
        tracking-widest
      "
            >
              Technology + Innovation
            </span>

            <h3
              className="
        mt-5
        text-3xl
        md:text-4xl
        font-black
        text-white
        leading-tight
      "
            >
              Connecting
              <span className="text-sky-400"> Hardware</span>
              <br />
              with
              <span className="text-sky-400"> Intelligence</span>
            </h3>

            <p
              className="
        mt-4
        text-sm
        md:text-base
        text-slate-300
        leading-7
        max-w-xl
      "
            >
              We combine connected hardware, IoT technology, and intelligent
              software to create solutions that bring real-time visibility and
              better control to modern logistics operations.
            </p>
          </div>
        </div>

        {/* IoT Info Card */}
        <div
          className="
    mt-5
    bg-white
    rounded-2xl
    border
    border-slate-100
    shadow-lg
    p-5
    flex
    items-center
    gap-5
  "
        >
          {/* IoT Icon */}
          <div
            className="
      w-14
      h-14
      rounded-xl
      bg-sky-50
      text-sky-600
      flex
      items-center
      justify-center
      shrink-0
    "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-7 h-7"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3" />
              <path d="M12 19v3" />
              <path d="M2 12h3" />
              <path d="M19 12h3" />
              <path d="M4.93 4.93l2.12 2.12" />
              <path d="M16.95 16.95l2.12 2.12" />
              <path d="M4.93 19.07l2.12-2.12" />
              <path d="M16.95 7.05l2.12-2.12" />
            </svg>
          </div>

          {/* IoT Text */}
          <div>
            <div
              className="
        text-2xl
        font-black
        text-sky-600
      "
            >
              IoT
            </div>

            <div
              className="
        text-sm
        font-bold
        text-slate-800
      "
            >
              Connected Technology
            </div>

            <p
              className="
        mt-1
        text-xs
        text-slate-500
        leading-5
      "
            >
              Hardware and software working together for smarter, more connected
              operations.
            </p>
          </div>
        </div>
      </div>

      {/* OUR STORY SECTION with Video */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-600">
              Our Story
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Building a Reliable Gateway for Connected Operations
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed font-light">
              <p>
                Bhardwaj Innovations is a technology-driven partnership firm
                established on 13th January 2025, committed to revolutionizing
                the tracking, transport and logistics industry through
                innovative hardware and software solutions.
              </p>
              <p>
                We partner with organizations that require well-organized,
                secure, and technology-enabled transport and logistics
                operations. By combining advanced manufacturing with intelligent
                software development, we deliver integrated solutions that
                improve operational efficiency, asset security, visibility,
                compliance, and decision-making.
              </p>
              <p>
                Our mission is to empower the logistics ecosystem with smart
                tracking technologies that simplify operations, reduce losses,
                increase productivity, and support digital transformation across
                the supply chain.
              </p>
            </div>
          </div>

          {/* Video/Image with overlay */}
          <div className="relative">
            <div className="relative h-120 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/media/our-story.jpeg"
                alt="Track everything"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/media/track-fleet.mp4" type="video/mp4" />
              </video> */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs text-white font-medium uppercase tracking-wider">
                      Live Operations
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-4">
                    <span className="text-xs text-white/70">
                      10K+ Devices Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative floating card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4 animate-float">
              <div className="flex items-center gap-2">
                <Lucide.TrendingUp className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-bold text-slate-900">
                  99.9% Uptime
                </span>
              </div>
            </div>
            {/* Decorative floating card */}
            <div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2">
                <Lucide.Globe className="h-5 w-5 text-sky-500" />
                <span className="text-sm font-bold text-slate-900">
                  Pan-India Coverage
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MISSION & VISION */}
      <section className="relative overflow-hidden py-22">
        <div className="absolute inset-0 z-0">
          <img
            src="/media/carousel/vision-mission.jpg"
            alt="Connected logistics hub at sunrise"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-sky-950/75" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="self-center">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
              Purpose in Action
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              The direction behind every deployment.
            </h2>
            <div
              className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
              role="tablist"
              aria-label="Mission and vision"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activePurpose === "mission"}
                onClick={() => setActivePurpose("mission")}
                className={`group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                  activePurpose === "mission"
                    ? "border-sky-300 bg-white text-slate-900 shadow-xl"
                    : "border-white/20 bg-white/10 text-white hover:border-sky-200 hover:bg-white/15"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${activePurpose === "mission" ? "bg-sky-100 text-sky-700" : "bg-white/10 text-sky-200"}`}
                >
                  <Lucide.Target className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold">Our Mission</span>
                  <span
                    className={`mt-1 block text-xs ${activePurpose === "mission" ? "text-slate-500" : "text-sky-100"}`}
                  >
                    What we deliver every day
                  </span>
                </span>
                <Lucide.ArrowRight
                  className={`ml-auto h-4 w-4 transition-transform ${activePurpose === "mission" ? "translate-x-1 text-sky-600" : "text-sky-200 group-hover:translate-x-1"}`}
                />
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activePurpose === "vision"}
                onClick={() => setActivePurpose("vision")}
                className={`group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                  activePurpose === "vision"
                    ? "border-sky-300 bg-white text-slate-900 shadow-xl"
                    : "border-white/20 bg-white/10 text-white hover:border-sky-200 hover:bg-white/15"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${activePurpose === "vision" ? "bg-sky-100 text-sky-700" : "bg-white/10 text-sky-200"}`}
                >
                  <Lucide.Eye className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold">Our Vision</span>
                  <span
                    className={`mt-1 block text-xs ${activePurpose === "vision" ? "text-slate-500" : "text-sky-100"}`}
                  >
                    Where we are heading
                  </span>
                </span>
                <Lucide.ArrowRight
                  className={`ml-auto h-4 w-4 transition-transform ${activePurpose === "vision" ? "translate-x-1 text-sky-600" : "text-sky-200 group-hover:translate-x-1"}`}
                />
              </button>
            </div>
          </div>

          <motion.div
            key={activePurpose}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-10"
            role="tabpanel"
          >
            <div className="flex items-center gap-3 text-sky-200">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/15">
                {activePurpose === "mission" ? (
                  <Lucide.Target className="h-5 w-5" />
                ) : (
                  <Lucide.Eye className="h-5 w-5" />
                )}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">
                {purposeContent[activePurpose].eyebrow}
              </span>
            </div>
            <h3 className="mt-8 max-w-2xl text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {purposeContent[activePurpose].title}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-sky-100 md:text-lg">
              {purposeContent[activePurpose].description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {purposeContent[activePurpose].points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/15 bg-slate-950/20 p-4 text-sm font-medium leading-relaxed text-white"
                >
                  <Lucide.CheckCircle2 className="mb-3 h-5 w-5 text-sky-300" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-600">
              Leadership Team
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Executive Board
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              The engineers, designers, and consultants steering Bhardwaj
              Innovations toward excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-xl"
              >
                <div className={`h-2 bg-linear-to-r ${member.gradient}`} />
                <div className="space-y-5 p-6">
                  <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl bg-white text-sky-600 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-slate-100 via-white to-sky-50">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Add leadership photo
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {member.name}
                    </h4>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-sky-600">
                      {member.role}
                    </span>
                  </div>
                  <p className="border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES with GIF Animation */}
      <section className="border-y border-slate-800 bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl space-y-16 px-6 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
              The Blueprint
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Our Core Values
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              Every tracking unit we install, every algorithm we deploy, and
              every customer relationship we nurture is driven by these
              fundamental corporate principles.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/60 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-sky-950/30"
              >
                {/* Gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${val.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                ></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 p-3 text-sky-300 shadow-sm transition-all group-hover:scale-110 group-hover:border-sky-500 group-hover:bg-sky-500/30">
                  {renderIcon(val.icon)}
                </div>
                <h4 className="text-lg font-bold text-white">{val.title}</h4>
                <p className="text-xs leading-relaxed text-slate-400">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header with Video Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-widest">
              <Lucide.Award className="h-4 w-4" />
              Enterprise Standard
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why Corporate Leaders Choose{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600">
                Bhardwaj Innovations?
              </span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
              For over a decade, we have designed customized software
              interfaces, AIS-compliant fleet sensors, and powerful smart
              tracking units that deliver unmatched reliability in severe
              industrial conditions.
            </p>
          </motion.div>

          {/* Main Grid: Video + Reasons */}
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left: Video showcase (3 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 space-y-6"
            >
              {/* Main Video with overlay */}
              <div className="relative h-105 w-full rounded-2xl overflow-hidden shadow-2xl group">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src="/media/Hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/20 to-transparent z-10"></div>

                {/* Floating stats cards over video */}
                <div className="absolute top-6 left-6 z-20 flex gap-3">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-white/20 animate-float">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-xs font-bold text-slate-800">
                        LIVE TRACKING
                      </span>
                    </div>
                    <p className="text-lg font-extrabold text-sky-600 mt-1">
                      500+ Vehicles
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-slate-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-linear-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center font-extrabold text-lg animate-pulse-glow shrink-0">
                      99%
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-900">
                        Operational SLA Guarantee
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Unmatched server uptime for heavy commercial fleets with
                        24/7 monitoring.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Play button overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Lucide.Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Secondary video strip - 3 small videos */}
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-28 rounded-xl overflow-hidden shadow-md group cursor-pointer">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  >
                    <source src="/media/circuit-board.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 z-10">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider">
                      Hardware
                    </p>
                  </div>
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden shadow-md group cursor-pointer">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  >
                    <source src="/media/track-fleet.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 z-10">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider">
                      Fleet Tracking
                    </p>
                  </div>
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden shadow-md group cursor-pointer">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  >
                    <source
                      src="/media/track-everything.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 z-10">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider">
                      Full Coverage
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Reason cards with icons (2 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 space-y-5"
            >
              {[
                {
                  icon: "Award",
                  title: "2+ Years Experience",
                  desc: "Deep mastery in telemetry algorithms, custom PCB integration, and regulatory transport mandates.",
                  color: "sky",
                },
                {
                  icon: "Settings",
                  title: "Cutting-Edge Hardware",
                  desc: "High-speed 4G antennas, intelligent sleep modes, and OTA firmware updates.",
                  color: "blue",
                },
                {
                  icon: "Cpu",
                  title: "Custom Software",
                  desc: "Fully proprietary platforms with customized map grids, reports, and instant integrations.",
                  color: "indigo",
                },
                {
                  icon: "Users",
                  title: "24/7 Support Team",
                  desc: "Direct support with seasoned telecom engineers for real-time troubleshooting.",
                  color: "violet",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div
                    className={`p-3 bg-${item.color}-50 text-${item.color}-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 shadow-sm`}
                  >
                    {renderIcon(item.icon, "h-6 w-6")}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Animated stats bar
              <div className="bg-linear-to-r from-slate-900 to-slate-800 rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-sky-400">
                      500+
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Projects Done</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-sky-400">
                      100+
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-sky-400">
                      99%
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Uptime SLA</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-sky-400">
                      24/7
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Support Hours</p>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Video */}
      {/* <section className="relative py-10 bg-slate-950 text-white overflow-hidden">
        

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-light max-w-2xl mx-auto">
            Partner with Bhardwaj Innovations for enterprise-grade telemetry
            solutions. Our engineering team is ready to architect your next
            fleet management or asset tracking deployment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
            <Link
              href="/products"
              className="px-8 py-3.5 border border-slate-600 hover:border-sky-400 text-white text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
