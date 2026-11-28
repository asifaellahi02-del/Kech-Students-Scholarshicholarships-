import { useEffect, useMemo, useState } from "react";
import { Search, BookOpen, ClipboardCheck, BellRing, RefreshCw } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ScholarshipCard from "./components/ScholarshipCard.jsx";
import Footer from "./components/Footer.jsx";
import { scholarships as demoScholarships } from "./data/scholarships.js";
import { getScholarships } from "./services/scholarshipService.js";

const categories = ["All", "Merit-Based", "Need-Based", "Postgraduate", "Other"];

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [liveScholarships, setLiveScholarships] = useState([]);
  const [apiState, setApiState] = useState("loading");

  async function loadScholarships() {
    setApiState("loading");
    try {
      const records = await getScholarships();
      setLiveScholarships(records);
      setApiState("connected");
    } catch {
      setLiveScholarships([]);
      setApiState("offline");
    }
  }

  useEffect(() => { loadScholarships(); }, []);

  const sourceScholarships = apiState === "connected" ? liveScholarships : demoScholarships;
  const filteredScholarships = useMemo(() => {
    const term = search.trim().toLowerCase();
    return sourceScholarships.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch = !term || [item.title, item.provider, item.location, item.description]
        .some((value) => String(value || "").toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });
  }, [search, category, sourceScholarships]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="scholarships" className="mx-auto max-w-7xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-600">Explore opportunities</span>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-900 md:text-4xl">Scholarships for your journey</h2>
            <p className="mt-4 leading-7 text-slate-500">Explore opportunities starting in Kech and across Balochistan. Public API listings appear only after administrator approval.</p>
          </div>

          <div className="mx-auto mt-9 flex max-w-3xl flex-col gap-3 md:flex-row">
            <label className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by title, provider, or location..." className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100" />
            </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 outline-none focus:border-brand-500">
              {categories.map((item) => <option key={item} value={item}>{item === "All" ? "All categories" : item}</option>)}
            </select>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
            <p className="text-slate-500">
              {apiState === "loading" ? "Connecting to scholarship database..." :
                apiState === "connected" ? "Showing administrator-approved opportunities." :
                "API not connected — showing clearly labelled demo records."}
            </p>
            <button onClick={loadScholarships} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 font-semibold text-brand-700 hover:bg-brand-50">
              <RefreshCw size={15} /> Refresh
            </button>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship._id || scholarship.id} scholarship={scholarship} isDemo={apiState !== "connected"} />
            ))}
          </div>
          {filteredScholarships.length === 0 && (
            <p className="mt-10 text-center text-slate-500">No scholarships match your search. Try another keyword or category.</p>
          )}
          {apiState !== "connected" && (
            <p className="mt-8 text-center text-xs text-amber-700">Demo content only: these sample records are not real or verified scholarship announcements.</p>
          )}
        </section>

        <section id="how-it-works" className="bg-brand-50 px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-600">Simple process</span>
              <h2 className="mt-3 text-3xl font-extrabold text-brand-900">How it will work</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                [Search, "Discover", "Explore opportunities from universities, government programs, and trusted organizations."],
                [ClipboardCheck, "Check eligibility", "Review eligibility requirements and prepare before applying."],
                [BellRing, "Stay organized", "Application tracking and deadline notifications are planned for a later milestone."],
              ].map(([Icon, title, description], i) => (
                <div key={title} className="rounded-2xl border border-blue-100 bg-white p-7">
                  <div className="inline-flex rounded-xl bg-brand-100 p-3 text-brand-700"><Icon size={24} /></div>
                  <h3 className="mt-5 text-xl font-bold text-brand-900">{i + 1}. {title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-5xl px-5 py-20 text-center">
          <BookOpen className="mx-auto text-brand-600" size={34} />
          <h2 className="mt-4 text-3xl font-extrabold text-brand-900">About the project</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
            Kech Students Scholarships is a student-focused platform beginning in Kech, Turbat, with a long-term goal of expanding across Balochistan. It aims to make scholarship information easier to discover and understand. Only administrator-approved opportunities should be publicly displayed.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
