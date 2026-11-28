import { CalendarDays, MapPin, ArrowUpRight, ExternalLink } from "lucide-react";

export default function ScholarshipCard({ scholarship, isDemo = false }) {
  const deadlineValue = scholarship.deadline
    ? new Date(scholarship.deadline).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })
    : "Not announced";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{scholarship.category}</span>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${isDemo ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>
          {isDemo ? "Demo listing" : "Verified listing"}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-brand-900">{scholarship.title}</h3>
      <p className="mt-1 text-sm font-medium text-slate-500">{scholarship.provider}</p>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{scholarship.description}</p>
      <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
        <div className="flex items-center gap-2"><CalendarDays size={16} /> Deadline: {deadlineValue}</div>
        <div className="flex items-center gap-2"><MapPin size={16} /> {scholarship.location}</div>
        <div className="font-semibold text-slate-700">{scholarship.funding}</div>
      </div>
      {scholarship.officialUrl && !isDemo ? (
        <a href={scholarship.officialUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-brand-200 px-4 py-3 text-sm font-bold text-brand-700 hover:bg-brand-50">
          Official information <ExternalLink size={16} />
        </a>
      ) : (
        <div className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-500">
          {isDemo ? "Demo information only" : "Official link not provided"} <ArrowUpRight size={16} />
        </div>
      )}
    </article>
  );
}
