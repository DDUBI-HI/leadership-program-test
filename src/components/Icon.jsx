export default function Icon({ name, className = "w-5 h-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    check: (
      <svg {...common}>
        <path d="M20 6 9 17l-5-5" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    chevron: (
      <svg {...common}>
        <path d="m9 18 6-6-6-6" />
      </svg>
    ),
    reset: (
      <svg {...common}>
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 3v6h6" />
      </svg>
    ),
    send: (
      <svg {...common}>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
    sparkles: (
      <svg {...common}>
        <path d="M12 3 9.8 8.8 4 11l5.8 2.2L12 19l2.2-5.8L20 11l-5.8-2.2Z" />
        <path d="M5 3v4" />
        <path d="M3 5h4" />
        <path d="M19 17v4" />
        <path d="M17 19h4" />
      </svg>
    ),
  };

  return icons[name] || icons.sparkles;
}
