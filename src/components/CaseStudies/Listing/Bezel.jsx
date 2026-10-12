/**
 * Double-bezel container: an outer tray with a hairline ring holding an inner
 * core with its own highlight and a concentric radius (2rem - 0.375rem).
 * Shadows are tinted with the brand purple, never pure black. Same construction
 * as the contact page so cards read as one system across the site.
 */
export default function Bezel({
  children,
  className = "",
  coreClassName = "",
  dark = false,
}) {
  return (
    <div
      className={`rounded-[2rem] bg-zinc-900/[0.04] p-1.5 ring-1 ring-zinc-900/[0.07] ${className}`}
    >
      <div
        className={`h-full rounded-[calc(2rem-0.375rem)] ${
          dark
            ? "bg-[#14141B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_30px_60px_-30px_rgba(111,54,210,0.45)]"
            : "bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_24px_50px_-32px_rgba(111,54,210,0.22)]"
        } ${coreClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
