export const ServiceSectionHeading = ({ children, className, style, ...props }) => (
  <h2
    style={style}
    className={`font-inter text-captionLarge xl:text-mdcaptionLarge 4xl:text-lgcaptionLarge 7xl:mdtext-captionLarge leading-snug font-bold ${className}`}
    {...props}
  >
    {children}
  </h2>
);
