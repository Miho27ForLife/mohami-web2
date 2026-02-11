import { Container } from "../ui/Container.jsx";
import { Button } from "../ui/Button.jsx";
import { Link, NavLink } from "react-router-dom";

/**
 * Navbar (Public)
 * - One navbar component, configurable by props.
 *
 * Props:
 * - theme: "brand" | "light" | "dark"
 * - showAuth: show login/register buttons
 * - basePath: for language prefix routing ("/ar" or "/en"). Use "" if not using prefixes yet.
 *
 * Notes for bidirectional support:
 * - Direction should be set globally via <html dir="rtl"> or <html dir="ltr">.
 * - This component uses logical spacing (ms/me) to behave correctly in both dirs.
 */
export function Navbar({
  theme = "brand",
  showAuth = true,
  basePath = "",
  className = "",
}) {
  const themeClasses =
    theme === "light"
      ? "bg-white text-slate-900"
      : theme === "dark"
      ? "bg-slate-900 text-white"
      : "text-white"; // "brand": assume parent/page provides background

  const linkClass =
    "hover:opacity-90 transition font-bold text-[16px] leading-[36px]";

  // Helper to build URLs with optional /ar or /en prefix
  const to = (path) => `${basePath}${path}`;

  return (
    <div
      className={`h-20 border-b border-[var(--brand-primary)]/30 ${themeClasses} ${className}`}
    >
      <Container className="h-full flex items-center">
        {/* Logo (RTL: visually right/start) */}
        <Link to={to("/")} className="flex items-center gap-[12px]" aria-label="Mohami Home">
          <img src="/icons/logo-mark.svg" alt="Mohami" width="36" height="46" />
          <img src="/icons/logo-text.svg" alt="Mohami" width="62" height="25" />
        </Link>

        {/* Spacer */}
        <div className="w-[25px]" />

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-10 text-[var(--text-navbar)]">
          <NavLink to={to("/")} end className={linkClass}>
            الرئيسية
          </NavLink>
          <NavLink to={to("/about")} className={linkClass}>
            عن المنصة
          </NavLink>
          <NavLink to={to("/services")} className={linkClass}>
            الخدمات
          </NavLink>
          <NavLink to={to("/library")} className={linkClass}>
            المكتبة الرقمية
          </NavLink>
          <NavLink to={to("/contact")} className={linkClass}>
            تواصل معنا
          </NavLink>
        </nav>

        {/* Auth buttons (RTL: pushed to visual left/end) */}
        {showAuth ? (
          <div className="ms-auto -me-[8px] flex items-center gap-3 font-bold">
            <Button
              variant="secondary"
              className="h-10 w-[132px] rounded-[8px] text-[var(--text-on-accent)] font-semibold"
              type="button"
            >
              تسجيل الدخول
            </Button>

            <Button
              variant="primary"
              className="h-10 w-[132px] rounded-[8px] text-[var(--text-on-accent)]"
              type="button"
            >
              حساب جديد
            </Button>
          </div>
        ) : (
          <div className="ms-auto" />
        )}
      </Container>
    </div>
  );
}
