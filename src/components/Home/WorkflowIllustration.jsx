import styles from "./HomeDesign.module.css";
import ArrowMark from "./ArrowMark";

export default function WorkflowIllustration() {
  return (
    <figure className={styles.workflow} aria-labelledby="workflow-caption">
      <div className={styles.workflowHeader}>
        <span>Connected operations</span>
        <span className={styles.diagramLabel}>Illustrative workflow</span>
      </div>
      <div className={styles.workflowInputs}>
        <div><span aria-hidden="true">01</span> Orders</div>
        <div><span aria-hidden="true">02</span> Documents</div>
        <div><span aria-hidden="true">03</span> Requests</div>
      </div>
      <div className={styles.connector} aria-hidden="true"><span /><span /><span /></div>
      <div className={styles.workflowCore}>
        <span className={styles.coreIcon} aria-hidden="true">BT</span>
        <div><strong>Your business workflow</strong><p>Capture · validate · connect</p></div>
      </div>
      <div className={styles.reviewPath}>
        <div><span className={styles.reviewDot} aria-hidden="true" /><span>Human review for exceptions</span></div>
      </div>
      <div className={styles.workflowOutputs}>
        <div><span className={styles.outputMark}><ArrowMark /></span><strong>Shared records</strong><span>Connected systems</span></div>
        <div><span className={styles.outputMark}><ArrowMark /></span><strong>Clear next steps</strong><span>Approvals & reporting</span></div>
      </div>
      <figcaption id="workflow-caption">Software shaped around the work, with people involved where decisions need them.</figcaption>
    </figure>
  );
}
