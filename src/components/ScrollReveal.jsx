"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;

    let observer;
    const animations = new Set();
    const stop = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const start = () => {
      stop();
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const distance = Math.min(24, Math.max(0, Number(entry.target.dataset.revealDistance) || 18));
          const delay = Math.min(240, Math.max(0, Number(entry.target.dataset.revealDelay) || 0));
          // The base content stays visible, including without JavaScript.
          const animation = entry.target.animate(
            [{ opacity: 0.15, transform: `translateY(${distance}px)` }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 520, delay, easing: "cubic-bezier(.2,.65,.3,1)" },
          );
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation)).catch(() => animations.delete(animation));
        });
      }, { rootMargin: "0px 0px -36px 0px", threshold: 0 });

      const candidates = [...document.querySelectorAll("main > section, main [data-reveal], main [data-aos]")];
      candidates.filter(element =>
        element.getBoundingClientRect().top >= window.innerHeight * 0.85 &&
        !element.querySelector("[data-reveal], [data-aos]"),
      ).forEach(element => observer.observe(element));
    };

    const frame = requestAnimationFrame(start);
    preference.addEventListener("change", start);
    return () => {
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", start);
      stop();
    };
  }, [pathname]);

  return null;
}
