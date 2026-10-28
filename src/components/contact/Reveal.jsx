/**
 * Keep server-rendered content visible; the shared scroll controller adds
 * motion only after hydration and respects the user's motion preference.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as: Tag = "div",
}) {
  return (
    <Tag
      className={className}
      data-reveal
      data-reveal-delay={delay * 1000}
      data-reveal-distance={y}
    >
      {children}
    </Tag>
  );
}
