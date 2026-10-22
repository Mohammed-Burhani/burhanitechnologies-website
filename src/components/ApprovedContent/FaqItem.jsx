export default function FaqItem({ question, answer, defaultOpen = false, dark = false }) {
  return <details open={defaultOpen} className={`group border-b ${dark ? "border-white/10" : "border-zinc-200"}`}>
    <summary className={`flex min-w-0 cursor-pointer list-none items-center justify-between gap-4 py-6 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5DD0] [&::-webkit-details-marker]:hidden ${dark ? "text-white hover:text-[#B79CE8]" : "text-zinc-900 hover:text-[#6F36D2]"}`}>
      <h3 className="min-w-0 flex-1 text-base font-semibold sm:text-lg">{question}</h3>
      <span aria-hidden="true" className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[#9D76DE]"><svg viewBox="0 0 20 20" width="20" height="20" fill="none" className="transition-transform group-open:rotate-45 motion-reduce:transition-none"><path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
    </summary>
    <p className={`max-w-prose pb-6 pr-8 text-base leading-relaxed ${dark ? "text-zinc-300" : "text-zinc-600"}`}>{answer}</p>
  </details>;
}
