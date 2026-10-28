import { conceptImages } from "./conceptImages";

// Article artwork corrections with subjects matched to the published copy.
export const articleImages = {
  "cloud-migration-strategy": {
    src: "/illustrations/cloud-migration-options.svg",
    socialSrc: "/images/concepts/cloud-migration-options-social.png",
    aspectRatio: "5 / 4",
    preserveFrame: true,
    alt: "Cloud migration options: Retire, Retain, Rehost, Relocate, Repurchase, Replatform and Refactor",
  },
  "custom-software-development-with-devops-on-azure-cloud": {
    ...conceptImages.cloud,
    socialSrc: "/images/concepts/cloud-operations-social.jpg",
    preserveFrame: true,
  },
  "custom-software-development-cost": {
    src: "/illustrations/software-cost-drivers.svg",
    socialSrc: "/images/concepts/software-cost-drivers-social.png",
    aspectRatio: "16 / 9",
    preserveFrame: true,
    alt: "Software cost estimate inputs: Discovery, Billing model, Integrations and Ownership cost",
  },
  "erp-software-companies-chennai": {
    ...conceptImages.planning,
    socialSrc: "/images/concepts/software-planning-social.jpg",
    preserveFrame: true,
  },
  "how-ai-workflow-automation-is-transforming-modern-businesses-in-2026": {
    ...conceptImages.invoiceWorkflow,
    socialSrc: "/images/concepts/invoice-workflow-social.jpg",
    preserveFrame: true,
  },
};
