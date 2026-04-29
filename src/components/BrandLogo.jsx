export default function BrandLogo() {
    return (
      <div className="fixed top-4 left-4 z-50 rounded-xl bg-white/85 px-3 py-2 backdrop-blur-sm shadow-sm border border-slate-200">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Insight Learning"
          className="h-7 md:h-8 w-auto"
        />
      </div>
    );
  }