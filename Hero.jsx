import { ArrowRight, ShieldCheck, Search, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-blue-700 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.15fr_.85fr] md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
            <ShieldCheck size={17} /> Student-focused scholarship discovery
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Discover Scholarships. <span className="text-blue-200">Build Your Future.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Find education opportunities, understand eligibility, and keep track of important deadlines — starting in Kech and growing across Balochistan.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#scholarships" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-brand-900 shadow-lg transition hover:-translate-y-0.5">
              Explore opportunities <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white/10">How it works</a>
          </div>
          <p className="mt-6 text-xs text-blue-200">Listings will be checked by an administrator before publication.</p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] bg-blue-300/20 blur-2xl" />
          <div className="relative rounded-3xl border border-white/20 bg-white p-6 text-slate-800 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-brand-100 p-3 text-brand-800"><GraduationCap size={28} /></div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Student opportunities</span>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-brand-900">Your next step starts here</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">A simple place to explore opportunities and stay organized.</p>
            <div className="mt-6 space-y-3">
              {["Search opportunities", "Review eligibility details", "Track important deadlines"].map((item, i) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-sm font-bold text-brand-800">{i + 1}</span>
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-400"><Search size={14} /> Illustrative preview — not live scholarship data</div>
          </div>
        </div>
      </div>
    </section>
  );
}
