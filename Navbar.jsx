import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["Scholarships", "#scholarships"],
  ["How It Works", "#how-it-works"],
  ["About", "#about"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2 font-bold text-brand-900">
          <span className="rounded-xl bg-brand-100 p-2"><GraduationCap size={25} /></span>
          <span className="leading-tight">Kech Students<br /><span className="text-brand-600">Scholarships</span></span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-brand-700">{label}</a>
          ))}
          <select aria-label="Choose language" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
            <option>English</option><option>اردو</option><option>بلوچی</option>
          </select>
          <a href="#scholarships" className="rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800">Explore</a>
        </div>

        <button className="rounded-lg p-2 text-brand-900 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="font-medium text-slate-700">{label}</a>
            ))}
            <select aria-label="Choose language" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2">
              <option>English</option><option>اردو</option><option>بلوچی</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
