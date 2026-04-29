export default function TypePreviewCard({ meta }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition">
      <div className="aspect-square rounded-3xl overflow-hidden bg-slate-50 mb-4">
        <img src={meta.image} alt={meta.title} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2">
        <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400">{meta.badge}</p>
        <h3 className="text-base md:text-lg font-bold text-slate-900">{meta.title}</h3>
        <p className="text-sm leading-6 text-slate-600 line-clamp-3">{meta.short}</p>
      </div>
    </div>
  );
}
