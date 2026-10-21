export default function FaqItem({ question, answer, defaultOpen = false, dark = false }) {
  return <details open={defaultOpen} className={`group border-b ${dark ? "border-white/10" : "border-zinc-200"}`}>
    <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left transition-colors duration-200 ${dark ? "text-white hover:text-[#B79CE8]" : "text-zinc-900 hover:text-[#6F36D2]"}`}>
      <h3 className="text-base font-semibold sm:text-lg">{question}</h3>
      <span aria-hidden="true" className="text-xl font-normal text-[#9D76DE] group-open:rotate-45">+</span>
    </summary>
    <p className={`max-w-prose pb-6 pr-8 text-base leading-relaxed ${dark ? "text-zinc-300" : "text-zinc-600"}`}>{answer}</p>
  </details>;
}
