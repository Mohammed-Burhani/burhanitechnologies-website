// Content for contact, author and utility pages.
// Legal pages retain their review notices and remain noindex.
// The thank-you route deliberately does not claim an enquiry was received on a direct visit.

const paragraph = (...parts) => ({ type: "paragraph", parts });
const heading = (text) => ({ type: "heading", text });
const emailLink = { href: "mailto:connect@burhanitechnologies.com", label: "connect@burhanitechnologies.com" };
const address = "1st Floor, Vanguard House, #48, Moore St, Parry's Corner, George Town, Chennai, Tamil Nadu 600001";

export const consultationPage = {
  title: "Discuss your project in a free consultation",
  navLabel: "Book a consultation",
  metaTitle: "Book a Free Consultation | Burhani Technologies",
  metaDescription: "Thirty minutes with the person who will scope your project. You keep the workflow map whether or not we build anything together.",
  eyebrow: "Book a consultation",
  lede: "Free, and you keep the workflow map we produce whether or not we build anything together. We agree the appropriate technical and business participants for the discussion.",
  primaryLabel: "Send your details",
  secondary: { label: "Or message on WhatsApp", href: "https://wa.me/917299002152" },
  sections: [{
    heading: "What we will cover",
    cards: [
      { title: "The workflow that is causing the problem", body: "Where work waits, doubles back or gets re-entered. You do most of the talking on this part." },
      { title: "What already exists that we should keep", body: "Tally, SAP, Salesforce or in-house systems. Plenty of things should stay exactly as they are." },
      { title: "Whether custom is the right answer at all", body: "We can also assess whether an existing product fits your requirements." },
      { title: "A rough shape and a rough number", body: "Projects here typically run between USD 7,500 and USD 15,000 or above. A fixed price follows discovery." },
    ],
  }],
  processHeading: "From the first discussion to delivery",
  process: [
    { n: "01", title: "We map what you run today", body: "Before anything is designed, we walk the workflow with the people doing it and write down where the work stalls." },
    { n: "02", title: "We agree the scope and the price", body: "You get a fixed price and a dated plan after discovery. The figure holds once the scope is agreed, and payment runs against milestones." },
    { n: "03", title: "You review working software early", body: "Our engineers use AI to expedite development, then review and test each increment. We put the working workflow in front of your team for feedback." },
    { n: "04", title: "We stay after go-live", body: "The team that built it handles the updates, the integrations and the support calls. Support stays with the same people." },
  ],
};

export const thankYouPage = {
  title: "Thank you",
  navLabel: "Thank you",
  metaTitle: "Thank you | Burhani Technologies",
  metaDescription: "Continue with your project enquiry, contact Burhani Technologies or explore the delivered systems and project guidance.",
  eyebrow: "Your enquiry",
  lede: "If you have already sent an enquiry, you can explore the resources below. To discuss a project, send your details through our contact form or message us on WhatsApp.",
  primaryLabel: "Send your details",
  secondary: { label: "Message us on WhatsApp instead", href: "https://wa.me/917299002152" },
  noindex: true,
  relatedHeading: "While you wait",
  related: [
    { title: "Six delivered systems", description: "What each client started with, what we built, and what changed.", href: "/case-studies", label: "Read the case studies" },
    { title: "How a project runs", description: "What to have ready, how data is handled, what happens after go-live.", href: "/knowledge-base", label: "Knowledge base" },
    { title: "Writing from the team", description: "The questions that come up in discovery calls, answered in full.", href: "/blog", label: "Read the blog" },
  ],
};

export const privacyPage = {
  title: "Privacy Policy",
  navLabel: "Privacy Policy",
  metaTitle: "Privacy Policy | Burhani Technologies",
  metaDescription: "What data Burhani Technologies collects through this website, why it is collected, how long it is kept, and how to have it removed.",
  eyebrow: "Legal",
  lede: "What this website collects, why, how long it is kept, and how to have it removed.",
  noindex: true,
  reviewNote: "This policy is provided as a working draft for the client's legal review. It should be checked against the Digital Personal Data Protection Act and any client contractual obligations before publication.",
  body: [
    paragraph("Last updated: August 2026. This policy covers burhanitechnologies.com and the enquiry form on it."),
    heading("What we collect"),
    paragraph("When you send the enquiry form we receive the name, work email, company and description of the problem that you type into it, plus the optional phone number, systems and timing fields if you complete them. We do not collect anything else through the form."),
    paragraph("Standard web server logs record the IP address, browser and pages requested. These are produced by the hosting platform rather than by us."),
    heading("Why we collect it"),
    paragraph("To reply to your enquiry and to prepare for the call. That is the only purpose. We do not sell it, rent it, or pass it to any third party for marketing."),
    heading("How long we keep it"),
    paragraph("Enquiries that do not become projects are deleted after twelve months. Where an enquiry becomes a project, the correspondence is retained for the life of the engagement and for the statutory period afterwards."),
    heading("Analytics and cookies"),
    paragraph("This site uses analytics to count visits and understand which pages are read. It sets cookies for that purpose. It does not run advertising trackers or profile individual visitors."),
    heading("Client project data"),
    paragraph("Data belonging to a client project is governed by that engagement's contract rather than by this policy. Code, data and documentation produced during a project transfer to the client."),
    heading("Your rights"),
    paragraph("You can ask what we hold about you, ask for it to be corrected, or ask for it to be deleted. Write to ", emailLink, " and we will act within thirty days."),
    heading("Contact"),
    paragraph("Burhani Technologies, " + address + ". Email ", emailLink, ", telephone +91 72990 02152."),
  ],
};

export const termsPage = {
  title: "Terms of Service",
  navLabel: "Terms of Service",
  metaTitle: "Terms of Service | Burhani Technologies",
  metaDescription: "The terms covering use of the Burhani Technologies website, and how they relate to a signed engagement contract.",
  eyebrow: "Legal",
  lede: "The terms covering use of this website, and how they relate to a signed engagement.",
  noindex: true,
  reviewNote: "These terms are provided as a working draft for the client's legal review before publication.",
  body: [
    paragraph("Last updated: August 2026."),
    heading("Scope"),
    paragraph("These terms cover use of burhanitechnologies.com. They do not govern a project. Any engagement runs under a separate signed contract, and where that contract and these terms differ, the contract takes precedence."),
    heading("What is on this site"),
    paragraph("Service descriptions, case studies and articles are provided for information. Indicative price ranges and delivery timelines describe typical engagements and are not an offer. A binding quote follows a discovery phase."),
    heading("Case studies and client confidentiality"),
    paragraph("Case studies describe clients by sector and present the scope and outcomes of individual projects."),
    heading("Intellectual property"),
    paragraph("The content, design and code of this website belong to Burhani Technologies. Work produced during a client engagement, including code, data and documentation, transfers to that client under the engagement contract."),
    heading("External links"),
    paragraph("This site links to client websites and to third-party tools. We are not responsible for the content or availability of anything we link to."),
    heading("Liability"),
    paragraph("The site is provided as is. We take reasonable care that it is accurate and available, and we do not accept liability for decisions taken solely on the basis of information published here. Liability arising from a project is set out in that project's contract."),
    heading("Governing law"),
    paragraph("These terms are governed by the laws of India, with the courts of Chennai, Tamil Nadu having jurisdiction."),
    heading("Contact"),
    paragraph("Burhani Technologies, " + address + ". Email ", emailLink, "."),
  ],
};

export const notFoundPage = {
  title: "That page does not exist",
  navLabel: "Page not found",
  metaTitle: "Page not found | Burhani Technologies",
  metaDescription: "That page does not exist. Here are the places people usually mean.",
  eyebrow: "404",
  lede: "The link may be old, or the address may have a typo in it. These are the places people usually mean.",
  noindex: true,
  sections: [{
    heading: "Find your next page",
    links: [
      { label: "Home", href: "/" },
      { label: "All services", href: "/services" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  }, {
    heading: "Services",
    links: [
      { label: "Custom Software Development", href: "/services/application-development" },
      { label: "ERP Implementation", href: "/services/erp-implementation" },
      { label: "Business Process Automation", href: "/services/business-process-automation-solutions" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
      { label: "Data Analysis & Reporting", href: "/services/data-analysis-and-reporting" },
      { label: "UI/UX Design", href: "/services/ux-ui-design" },
      { label: "Integration Services", href: "/services/integration-services" },
    ],
  }],
};

export const authorPages = [
  {
    slug: "aliasgar-ghadiyali",
    title: "Aliasgar Ghadyali",
    navLabel: "Aliasgar Ghadyali",
    role: "Chief Technology Officer",
    metaTitle: "Aliasgar Ghadyali, Chief Technology Officer | Burhani",
    metaDescription: "Aliasgar Ghadyali is Burhani's Chief Technology Officer, working on system architecture, cloud infrastructure and integration.",
    bio: "Aliasgar Ghadyali is Chief Technology Officer at Burhani Technologies. The company builds custom software, ERP and automation for business operations. Project-specific responsibilities and review contacts are agreed during scoping.",
  },
  {
    slug: "shivann-kannan",
    title: "Shivann Kannan",
    navLabel: "Shivann Kannan",
    role: "UX Director",
    metaTitle: "Shivann Kannan, UX Director | Burhani",
    metaDescription: "Shivann Kannan is Burhani's UX Director, working on dashboard, CRM and conversational interface design across projects.",
    bio: "Shivann Kannan is UX Director at Burhani Technologies. The company builds custom software, ERP and automation for business operations. Project-specific responsibilities and review contacts are agreed during scoping.",
  },
];
