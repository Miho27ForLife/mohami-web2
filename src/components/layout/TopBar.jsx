import { Container } from "../ui/Container.jsx";

/**
 * TopBar
 * - Shared top strip on public pages.
 * - RTL/LTR safe: relies on global `dir` on <html> (or a parent wrapper).
 *
 * Customization:
 * - showLocale/showSocial: enable/disable blocks per page
 * - onCountryClick/onLanguageClick: connect to menus/state later
 */
export function TopBar({
  showLocale = true,
  showSocial = true,
  onCountryClick,
  onLanguageClick,
  className = "",
}) {
  return (
    <div className={`h-10 border-b border-[var(--brand-primary)]/30 ${className}`}>
      <Container className="h-full flex items-center justify-between">
        {/* Locale controls (appears on the "start" side in RTL) */}
        {showLocale ? (
          <div className="flex items-center gap-6 text-white text-sm font-normal">
            {/* Country */}
            <button
              type="button"
              onClick={onCountryClick}
              className="flex items-center gap-2 hover:opacity-90 transition"
              aria-label="Select country"
            >
              <img src="/icons/sa-flag.svg" alt="Saudi Arabia" width="15" height="15" />
              <span>السعودية</span>
              <img src="/icons/chevron-down.svg" alt="" width="16" height="16" />
            </button>

            {/* Language */}
            <button
              type="button"
              onClick={onLanguageClick}
              className="flex items-center gap-2 hover:opacity-90 transition"
              aria-label="Select language"
            >
              <img src="/icons/globe.svg" alt="Language" width="15" height="15" />
              <span>العربية</span>
              <img src="/icons/chevron-down.svg" alt="" width="16" height="16" />
            </button>
          </div>
        ) : (
          <div />
        )}

        {/* Social icons (appears on the "end" side in RTL) */}
        {showSocial ? (
          <div className="flex items-center gap-4">
            <img src="/icons/facebook.svg" alt="Facebook" width="24" height="24" />
            <img src="/icons/twitter.svg" alt="Twitter" width="24" height="24" />
            <img src="/icons/linkedin.svg" alt="LinkedIn" width="24" height="24" />
            <img src="/icons/instagram.svg" alt="Instagram" width="24" height="24" />
            <img src="/icons/youtube.svg" alt="YouTube" width="24" height="24" />
          </div>
        ) : (
          <div />
        )}

        {/*
          Notes:
          - If a page should hide social icons: <TopBar showSocial={false} />
          - If a page should hide locale: <TopBar showLocale={false} />
          - Later: replace <img> with an icon system if desired (lucide/react-icons).
        */}
      </Container>
    </div>
  );
}
