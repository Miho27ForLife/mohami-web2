import { Outlet, useLocation } from "react-router-dom";
import { TopBar } from "../../components/layout/TopBar.jsx";
import { Navbar } from "../../components/layout/Navbar.jsx";

/**
 * PublicLayout
 * - Shared shell for ALL public pages.
 * - Contains: TopBar + Navbar + Footer (later) + Outlet (page content).
 *
 * Personalization strategy:
 * - We keep ONE Navbar/TopBar and control differences with toggles:
 *   showSocial, showLocale, theme, etc.
 * - Later we can define a "route config map" based on pathname to switch variants.
 */
export default function PublicLayout() {
  const { pathname } = useLocation();

  // ✅ Simple route-based toggles (edit these later as your design requires)
  const isPolicyPage = pathname === "/privacy" || pathname === "/terms";

  // Example toggles:
  const showSocial = !isPolicyPage; // some pages hide social icons
  const showLocale = true; // keep country/language in most cases
  const navTheme = "brand"; // later: switch to "light" on certain pages if needed

  return (
    <div className="min-h-dvh">
      {/* Global top strip (country/language + optional social) */}
      <TopBar showLocale={showLocale} showSocial={showSocial} />

      {/* Main navigation */}
      <Navbar theme={navTheme} />

      {/* Page content */}
      <main>
        {/* PAGE CONTENT GOES HERE (each route renders inside Outlet) */}
        <Outlet />
      </main>

      {/* Footer will be added next (shared across public pages) */}
      <footer className="mt-16 border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
          {/* TODO: Replace this placeholder with the real Figma footer */}
          Footer placeholder (shared)
        </div>
      </footer>
    </div>
  );
}
