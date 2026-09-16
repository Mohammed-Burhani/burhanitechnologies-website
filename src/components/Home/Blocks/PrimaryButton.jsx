import { Body } from "@/components/textComponents/Body";
import { SmallBody } from "@/components/textComponents/SmallBody";

export const PrimaryButton = ({
  onClick,
  className = "",
  title,
  icon,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative inline-flex min-w-fit items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-[#6F36D2] px-6 py-1.5 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_10px_24px_-10px_rgba(111,54,210,0.6)] transition-all duration-300 hover:shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_14px_30px_-10px_rgba(111,54,210,0.75)] active:scale-[0.97] ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 ease-out group-hover:translate-x-0"
      />
      <SmallBody className="relative !text-center font-medium text-white">
        {title}
      </SmallBody>
      {icon && (
        <span className="relative flex items-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </button>
  );
};