import { GraduationCap, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-white"><GraduationCap /> Kech Students Scholarships</div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">Helping students discover education opportunities and take informed next steps.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Quick links</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#scholarships" className="hover:text-white">Scholarships</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Starting location</h3>
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-400"><MapPin size={16} /> Kech, Balochistan, Pakistan</p>
          <p className="mt-3 text-sm text-slate-400">Contact details will be added after the official support channel is set up.</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Kech Students Scholarships. Founder and project administrator: Asifa Ellahi.
      </div>
    </footer>
  );
}
