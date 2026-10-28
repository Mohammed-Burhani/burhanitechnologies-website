"use client";

import { useEffect, useId, useRef, useState } from "react";
import { PortableText } from "@portabletext/react";

const textOf = (block) => block.children.map((span) => span.text || "").join("");

// Column headings carry these repeated labels visually. Keep the original
// label text in the cell markup while avoiding a label on every value.
const labelCell = (block, header) => {
  const [label, separator] = block.children || [];
  const headerText = textOf(header).trim();
  const inlinePrefix = `${headerText}:`;
  const inline = label?.text?.startsWith(inlinePrefix);
  const separate = label?.text?.trim() === headerText && /^:\s*$/u.test(separator?.text || "");
  const leading = inline ? [label] : [label, separator];
  if ((!inline && !separate) || leading.some((span) => span?.marks?.some((mark) =>
    block.markDefs?.some((definition) => definition._key === mark)
  ))) return block;
  if (inline) {
    let end = inlinePrefix.length;
    while (/\s/u.test(label.text[end] || "") && end < label.text.length) end += 1;
    return {
      ...block,
      children: [
        { ...label, _key: `${label._key}-label`, text: label.text.slice(0, end), marks: [...(label.marks || []), "worksheetLabel"] },
        ...(end < label.text.length ? [{ ...label, _key: `${label._key}-value`, text: label.text.slice(end) }] : []),
        ...block.children.slice(1),
      ],
    };
  }
  return {
    ...block,
    children: block.children.map((span, index) => index < 2
      ? { ...span, marks: [...(span.marks || []), "worksheetLabel"] } : span),
  };
};

export const ArticleWorksheet = ({ value, components }) => {
  const cueId = useId();
  const label = value.label || "Cloud migration scoping worksheet";
  const regionRef = useRef(null);
  const [canScroll, setCanScroll] = useState(true);
  const cellComponents = {
    ...components,
    marks: {
      ...components.marks,
      worksheetLabel: ({ children }) => <span className="sr-only">{children}</span>,
    },
  };

  useEffect(() => {
    const region = regionRef.current;
    if (!region) return undefined;
    const update = () => setCanScroll(region.scrollWidth > region.clientWidth + 1);
    const observer = new ResizeObserver(update);
    observer.observe(region);
    observer.observe(region.querySelector("table"));
    update();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="my-8">
      <p id={cueId} className={canScroll ? "mb-3 text-sm text-zinc-600" : "sr-only"}>
        Swipe or use the arrow keys to compare all {value.headers.length} columns.
      </p>
      <div
        ref={regionRef}
        role="region"
        tabIndex={0}
        aria-label={label}
        aria-describedby={cueId}
        className="relative overflow-x-auto rounded-xl border border-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]"
      >
        <table style={{ minWidth: `${value.headers.length * (value.headers.length >= 4 ? 11 : 14)}rem` }} className="w-full border-collapse text-left [&_h3]:!m-0 [&_h3]:scroll-mx-4 [&_h3]:!text-base [&_h3]:!leading-relaxed [&_p]:!m-0 [&_p]:!text-base">
          <caption className="sr-only">{label}</caption>
          <thead className="bg-[#6F36D2]/5">
            <tr>
              {value.headers.map((header) => (
                <th
                  key={header._key}
                  scope="col"
                  className="border-b border-zinc-200 px-4 py-4 align-top"
                >
                  <PortableText value={[header]} components={components} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {value.rows.map((row) => (
              <tr key={row.heading._key}>
                <th scope="row" style={{ width: value.headers.length === 2 ? "50%" : "25%" }} className="px-4 py-5 align-top font-normal">
                  <PortableText value={[labelCell(row.heading, value.headers[0])]} components={cellComponents} />
                </th>
                {row.cells.map((cell, index) => (
                  <td key={cell._key} className="px-4 py-5 align-top">
                    <PortableText value={[labelCell(cell, value.headers[index + 1])]} components={cellComponents} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
