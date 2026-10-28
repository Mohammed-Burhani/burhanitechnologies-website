"use client";

export default function ServiceSectionLinks({ children }) {
  const revealFocusedLink = event => {
    const list = event.currentTarget;
    const link = event.target.closest("a");
    if (!link || !list.contains(link)) return;
    const bounds = list.getBoundingClientRect();
    const target = link.getBoundingClientRect();
    if (target.left < bounds.left + 4) list.scrollLeft += target.left - bounds.left - 4;
    else if (target.right > bounds.right - 4) list.scrollLeft += target.right - bounds.right + 4;
  };

  return <ul onFocusCapture={revealFocusedLink}>{children}</ul>;
}
