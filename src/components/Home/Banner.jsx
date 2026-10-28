import Link from "next/link";
import Container from "../constants/Container";
import WorkflowIllustration from "./WorkflowIllustration";
import styles from "./HomeDesign.module.css";
import ArrowMark from "./ArrowMark";

const facts = ["Since 2010", "Based in India", "Clients in India, the US, the UAE and Australia", "Early working versions, reviewed with your team"];

export default function Banner() {
  return <section className={styles.hero}>
    <Container className="relative z-10 !pb-8 !pt-28 sm:!pt-32 xl:!pt-36">
      <div className={styles.heroGrid}>
        <div>
          <p className={styles.eyebrow}>Business software expertise since 2010</p>
          <h1 className={styles.heroTitle}>Custom Software Development &amp; ERP Solutions | Burhani Technologies</h1>
          <p className={styles.heroBody}>Since 2010, Burhani Technologies has designed, developed and integrated business software. Our engineers bring experience from healthcare systems, apparel ERP, warehouse operations, lending and events to your requirements. We use AI to expedite development, and build AI capabilities into workflows where they help your team complete the work.</p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryLink}>Book a free consultation <ArrowMark /></Link>
            <Link href="/services" className={styles.textLink}>See what we build <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <WorkflowIllustration />
      </div>
      <ul className={styles.facts}>{facts.map(fact => <li key={fact}>{fact}</li>)}</ul>
    </Container>
  </section>;
}
