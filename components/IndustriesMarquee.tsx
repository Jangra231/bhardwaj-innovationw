"use client";

const industries = [
  {
    name: "NAFED",
    logoName: "NAFED",
    logo: "/media/industry-logos/nafed.png",
  },
  {
    name: "FCI",
    logoName: "FCI",
    logo: "/media/industry-logos/government-of-india.png",
  },
  {
    name: "NCCF",
    logoName: "NCCF",
    logo: "/media/industry-logos/nccf.png",
  },
  {
    name: "Food & Supply",
    logoName: "Food & Supply",
    logo: "/media/industry-logos/government-of-india.png",
  },

  {
    name: "CJ Darcl Transport",
    logoName: "CJ Darcl Transport",
    logo: "/media/industry-logos/cj-darcl.png",
  },
  {
    name: "Ewheels Transport",
    logoName: "Ewheels Transport",
    logo: "/media/industry-logos/ewheels.png",
  },
  {
    name: "Shrinivasa Transport",
    logoName: "Shrinivasa Transport",
    logo: "/media/industry-logos/shrinivasa.png",
  },
  {
    name: "South East Transport",
    logoName: "South East Transport",
    logo: "/media/industry-logos/south-east-transport.png",
  },

  {
    name: "GK Minda",
    logoName: "GK Minda",
    logo: "/media/industry-logos/gk-minda.png",
  },
  {
    name: "World Victory",
    logoName: "World Victory",
    logo: "/media/industry-logos/world-victory.png",
  },
  {
    name: "Minato Energy",
    logoName: "Minato Energy",
    logo: "/media/industry-logos/minato-energy.png",
  },
] as const;

export default function IndustriesMarquee() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="relative overflow-hidden border-y border-slate-100 bg-white py-12"
    >
      <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
      <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

      <div className="mx-auto mb-8 max-w-7xl px-6">
        <p
          id="industries-heading"
          className="text-center text-sm font-medium text-slate-500"
        >
          Industries <span className="font-bold text-sky-600">We Serve</span>
        </p>
      </div>

      <div
        className="flex w-max min-w-max transform-gpu animate-scroll motion-safe:will-change-transform motion-reduce:animate-none"
        style={{ animationDuration: "26s" }}
        aria-label="Industries we serve carousel"
      >
        {[...industries, ...industries, ...industries].map(
          ({ name, logoName, logo }, index) => (
            <div
              key={`${name}-${index}`}
              className="group mx-8 flex shrink-0 items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 px-6 py-4 transition-colors transition-shadow duration-300 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-sky-100/80 focus:border-sky-400 focus:bg-white focus:shadow-xl focus:shadow-sky-100/80 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500"
              tabIndex={0}
              aria-label={`${name} logo and organization`}
            >
              <div className="flex h-14 w-16 items-center justify-center rounded-lg bg-sky-50 p-2 transition-colors duration-200 group-hover:bg-sky-100 group-focus:bg-sky-100">
                <img
                  src={logo}
                  alt={`${logoName} logo`}
                  width={112}
                  height={80}
                  className="h-10 w-14 object-contain transition-transform duration-200 group-hover:scale-110 group-focus:scale-110"
                  loading={index < industries.length ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
              <span className="whitespace-nowrap text-xs font-semibold text-slate-600 transition-colors duration-300 group-hover:text-slate-950 group-focus:text-slate-950">
                {name}
              </span>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
