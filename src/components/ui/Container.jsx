export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Personalization notes:
 * - max width: change `max-w-6xl`
 * - horizontal padding: change `px-6`
 */
