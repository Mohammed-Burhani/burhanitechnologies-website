"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { technologyLogos } from "@/content/technologyLogos";
import styles from "./TechnologyMarquee.module.css";

export default function TechnologyMarquee({ technologies, intro = "Every tool here is one we have shipped with." }) {
  const id = useId();
  const [enhanced, setEnhanced] = useState(false);
  const [paused, setPaused] = useState(false);
  const items = [...new Set(technologies)];
  const rowCount = items.length >= 16 ? 4 : 3;
  const rowSize = Math.ceil(items.length / rowCount);
  const rows = Array.from({ length: rowCount }, (_, index) => items.slice(index * rowSize, (index + 1) * rowSize)).filter(row => row.length);

  useEffect(() => setEnhanced(true), []);

  return <section
    className={styles.section}
    aria-labelledby={`${id}-heading`}
    data-tech-marquee
    data-enhanced={enhanced}
    data-paused={paused}
  >
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 id={`${id}-heading`}>Technologies we work with</h2>
          <p className={styles.intro}>{intro}</p>
        </div>
        <button
          type="button"
          className={styles.control}
          aria-controls={`${id}-rows`}
          aria-pressed={paused}
          disabled={!enhanced}
          onClick={() => setPaused(value => !value)}
        >
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
            {paused ? <path d="m7 4 9 6-9 6V4Z" fill="currentColor" /> : <path d="M6 4v12M14 4v12" stroke="currentColor" strokeWidth="2.5" />}
          </svg>
          {paused ? "Resume animation" : "Pause animation"}
        </button>
      </div>
      <ul className="sr-only" aria-label="Technology list" data-tech-accessible-list>{items.map(name => <li key={name}>{name}</li>)}</ul>
      <p className={styles.motionHint}>Animation is paused to match your motion preference.</p>
    </div>
    <div id={`${id}-rows`} className={styles.rows} data-tech-rows>
      {rows.map((row, index) => {
        // Each copy is wider than the content area, so its repeated edge stays seamless.
        const repeated = Array.from({ length: Math.ceil(12 / row.length) }, () => row).flat();
        return <div key={index} className={styles.window} aria-hidden="true" data-tech-row data-direction={index % 2 === 0 ? "left" : "right"}>
          <div className={styles.track} data-tech-track style={{ "--duration": `${80 + index * 6}s` }}>
            {[0, 1].map(copy => <div key={copy} className={styles.group} data-tech-group data-copy={copy}>
              {repeated.map((name, itemIndex) => <div key={`${name}-${itemIndex}`} className={styles.item} data-tech-item={name} data-tech-repeat={itemIndex >= row.length}>
                {technologyLogos[name] ? <Image src={technologyLogos[name].src} alt="" width={40} height={40} loading="lazy" className={styles.logo} /> : <span className={styles.fallback}>{name.slice(0, 2)}</span>}
                <span>{name}</span>
              </div>)}
            </div>)}
          </div>
        </div>;
      })}
    </div>
  </section>;
}
