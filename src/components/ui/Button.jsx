const base =
  "inline-flex items-center justify-center gap-2 select-none " +
  "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-[var(--brand-accent)] text-[var(--text-on-accent)] hover:opacity-95",
  secondary:
    "bg-white text-[var(--text-on-accent)] hover:bg-slate-50 border border-black/5",
};

export function Button({ variant = "primary", className = "", ...props }) {
  const v = variants[variant] ?? variants.primary;
  return <button className={`${base} ${v} ${className}`} {...props} />;
}

/**
 * Personalization notes:
 * - Brand colors come from CSS vars: --brand-accent, --text-on-accent
 * - You can add more variants later: "ghost", "outline", etc.
 */
