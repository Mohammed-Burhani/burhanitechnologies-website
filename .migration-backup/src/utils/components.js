export const components = {
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => <em className="italic">&apos;{children}&apos;</em>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("https")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
          className="text-[#283B7F] underline"
        >
          {children}
        </a>
      );
    },
  },
  // hardBreak: <br />,
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h2 className="text-2xl">{children}</h2>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li className=" ml-7 list-disc">{children}</li>,
    number: ({ children }) => (
      <li className=" ml-7 list-decimal">{children}</li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};
