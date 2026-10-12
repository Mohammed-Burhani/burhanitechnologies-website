import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import Container from "@/components/constants/Container";
import Reveal from "@/components/contact/Reveal";
import Bezel from "@/components/CaseStudies/Listing/Bezel";
import { EASE_CLASS } from "@/components/CaseStudies/Listing/caseStudyMeta";

const ARTICLES = {
  gettingStarted: [
    {
      title: "How long does a custom software project take?",
      desc: "What determines a project timeline, from the first working version to a full multi-department build.",
      href: "/knowledge-base/how-long-does-a-custom-software-project-take",
    },
    {
      title: "What you need ready before a discovery call",
      desc: "What to bring to a discovery call so the conversation covers your real process, not general background questions.",
      href: "/knowledge-base/what-you-need-ready-before-a-discovery-call",
    },
  ],
  duringBuild: [
    {
      title: "How we handle your data during a build",
      desc: "Who gets access to your data during a build, where it is stored, and what happens to it if a project pauses.",
      href: "/knowledge-base/how-we-handle-your-data-during-a-build",
    },
  ],
  afterGoLive: [
    {
      title: "What happens after your system goes live",
      desc: "What the first few days and weeks after launch look like, before a new system settles into normal use.",
      href: "/knowledge-base/what-happens-after-your-system-goes-live",
    },
  ],
};

const ArticleCard = ({ article, index }) => (
  <Reveal delay={index * 0.08}>
    <Link
      href={article.href}
      className="group block h-full rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-[#6F36D2] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
    >
      <Bezel
        className={`h-full transition-[box-shadow,transform] duration-500 ${EASE_CLASS} group-hover:-translate-y-1 group-hover:ring-[#6F36D2]/30 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0`}
      >
        <div className="flex h-full flex-col p-6 lg:p-8">
          <h3 className="mb-3 font-inter text-lg font-semibold leading-snug tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-[#6F36D2] sm:text-xl">
            {article.title}
          </h3>

          <p className="mb-6 flex-1 font-inter text-sm leading-relaxed text-zinc-600 sm:text-base">
            {article.desc}
          </p>

          <span
            className={`inline-flex items-center gap-2 font-inter text-sm font-medium text-[#6F36D2] transition-colors duration-500 ${EASE_CLASS} group-hover:text-[#7C43E0]`}
          >
            Read the answer
            <ArrowRight
              size={16}
              weight="bold"
              className={`transition-transform duration-500 ${EASE_CLASS} group-hover:translate-x-0.5 motion-reduce:transition-none`}
            />
          </span>
        </div>
      </Bezel>
    </Link>
  </Reveal>
);

const ArticleSection = ({ title, articles, startIndex }) => (
  <div>
    <Reveal delay={startIndex * 0.08}>
      <h2 className="mb-6 font-inter text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
        {title}
      </h2>
    </Reveal>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {articles.map((article, index) => (
        <ArticleCard
          key={article.href}
          article={article}
          index={startIndex + index + 1}
        />
      ))}
    </div>
  </div>
);

export default function KnowledgeBaseArticlesGrid() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="space-y-12 lg:space-y-16">
          <ArticleSection
            title="Getting started"
            articles={ARTICLES.gettingStarted}
            startIndex={0}
          />

          <ArticleSection
            title="During the build"
            articles={ARTICLES.duringBuild}
            startIndex={ARTICLES.gettingStarted.length}
          />

          <ArticleSection
            title="After go-live"
            articles={ARTICLES.afterGoLive}
            startIndex={
              ARTICLES.gettingStarted.length + ARTICLES.duringBuild.length
            }
          />
        </div>
      </Container>
    </section>
  );
}
