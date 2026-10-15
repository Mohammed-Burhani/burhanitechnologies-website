// Approved public copy restored from the existing Burhani Astro handover.
// Sources: src/content/industries/*.md, src/content/kb/*.md,
// src/content/services/rapid-application-development.md and their page templates;
// related card text and facts come from the referenced service/case-study entries.
// Only rendered public fields are retained; research and authoring notes are excluded.
// Body Markdown is represented as typed blocks so no Markdown parser is needed at runtime.

export const industryPages = [
  {
    "slug": "healthcare",
    "title": "Connect patient information with the teams who need it",
    "navLabel": "Healthcare",
    "metaTitle": "Healthcare Software Development Services | Burhani",
    "metaDescription": "Custom healthcare software development for clinics and providers, built around clinician workflow and patient data handling.",
    "lede": "Build connected systems for patient tracking, clinical review and digital support. We shape the interfaces, data access and workflows around the people using them, with experience in remote monitoring and AI-powered patient assistance.",
    "problems": [
      {
        "q": "A nurse enters vitals on paper and someone re-keys them two hours later.",
        "a": "By the time the reading reaches a dashboard, it describes a patient's condition from two hours ago, which is the one thing a monitoring system cannot afford to be."
      },
      {
        "q": "Our front desk answers the same five questions on the phone all day.",
        "a": "Repeated information requests can occupy the support team throughout the day. A clearly scoped digital assistance system can help people access the information the provider has made available."
      },
      {
        "q": "The doctor reviewing a case can't see what the monitoring already flagged.",
        "a": "Vitals sit in one system, the chart in another and the alert in a third, so a reviewing physician reconstructs the picture by hand before making a call."
      }
    ],
    "approach": "We map how patient information is captured, reviewed and acted on. The system connects the relevant tracking, dashboards and support interfaces, with access and clinical review requirements established for the intended use.",
    "scope": [
      {
        "title": "Patient vitals and activity tracking",
        "body": "Vitals and activity data captured at the point of care and written into one record, instead of a chart that updates hours after the reading was taken."
      },
      {
        "title": "AI predictive insights",
        "body": "Insights drawn from vitals and activity data, presented for clinician review alongside the patient record."
      },
      {
        "title": "Doctor and administrator dashboards",
        "body": "One live view for the people reviewing cases and the people running the facility, built from the same underlying data instead of separate exports."
      },
      {
        "title": "Patient-facing chatbot on your own medical content",
        "body": "A conversational interface trained on your clinical material, built to handle the repetitive questions that otherwise occupy front desk staff all day."
      },
      {
        "title": "Real-time alerting",
        "body": "Data-driven alerts presented to the appropriate clinician, with the review criteria and response workflow defined for the intended use."
      },
      {
        "title": "Role-based patient data access",
        "body": "Nurses, doctors and administrators see the fields relevant to their role, which matters for patient trust as much as for internal order."
      }
    ],
    "faq": [
      {
        "q": "Do you build software that handles patient health information?",
        "a": "Yes. We have built systems that capture vitals and activity data, store it against a patient record, and route it to a clinician dashboard. Access is structured by role from the design stage, so a nurse, a doctor and an administrator each see only the fields their part of the process needs."
      },
      {
        "q": "Can you build a system that tracks patient vitals in real time?",
        "a": "Yes, this is one of the systems we have delivered. Vitals and activity are captured, checked against expected ranges, and pushed to a dashboard with predictive alerts, so a clinician sees a change worth attention rather than reading a full chart to notice it unassisted."
      },
      {
        "q": "How do you design a system that clinicians will actually use?",
        "a": "By mapping how a clinician actually works before designing a screen. The dashboard shows what a doctor or nurse needs at the point of a decision, not every field a database happens to store, which is usually the difference between a system people use and one they route around."
      },
      {
        "q": "Can your team build an AI chatbot for patient or visitor queries?",
        "a": "Yes. We have built a chatbot trained on a provider's own medical content rather than a generic script, designed for comprehension of real patient questions. It diverts the repetitive queries that otherwise tie up front desk staff, while more complex questions still reach a person."
      },
      {
        "q": "Do you understand healthcare data compliance requirements?",
        "a": "We design access and storage around the sensitivity of health data as standard practice, including role-based access and visibility into who viewed what. Specific regulatory requirements vary by market and client, and we work through those with you during the mapping phase, not after the build starts."
      }
    ],
    "editorial": {
      "problems": "When patient information is difficult to collect and review",
      "approach": "Patient tracking, clinical review and digital support",
      "related": "Develop the applications behind patient care",
      "ctaHeading": "Plan the patient workflow your system must support",
      "ctaBody": "Tell us who will use the system, what information they need and where clinical review belongs. We can work through the access, interfaces and connections with you."
    },
    "body": [
      {
        "type": "heading",
        "text": "Connect remote monitoring with clinical review"
      },
      {
        "type": "paragraph",
        "parts": [
          "A US healthcare provider needed a clearer way to collect vitals and activity data and share updates with caregivers. We built a healthcare CRM with tracking modules, AI-driven insights, patient dashboards and doctor review interfaces. The system brought the information and review tools into a connected remote monitoring workflow."
        ]
      },
      {
        "type": "heading",
        "text": "Make recurring patient information easier to access"
      },
      {
        "type": "paragraph",
        "parts": [
          {
            "label": "AI-Powered Digital Healthcare Assistance",
            "href": "/case-studies/ai-powered-digital-healthcare-assistance"
          },
          " addressed a separate need. A custom-trained chatbot and responsive website supported patient-specific information requests, reducing repetitive helpdesk work and extending access to self-service support."
        ]
      },
      {
        "type": "paragraph",
        "parts": [
          "For a new system, agree the information source, intended users and the questions it should support. ",
          {
            "label": "UI/UX design",
            "href": "/services/ux-ui-design"
          },
          " shapes how people understand the information and review an automated output. Clinical review, access and escalation requirements belong in the scope before implementation."
        ]
      }
    ],
    "caseStudy": {
      "href": "/case-studies/ai-powered-healthcare-crm-and-monitoring",
      "title": "AI-Powered Healthcare CRM & Monitoring",
      "facts": [
        {
          "label": "Sector",
          "value": "Healthcare (United States)"
        },
        {
          "label": "Client",
          "value": "A US healthcare provider"
        },
        {
          "label": "Engagement type",
          "value": "Healthcare CRM and AI monitoring build"
        },
        {
          "label": "What we built",
          "value": "Vitals and activity tracking with AI-driven insights, patient dashboards and doctor review interfaces"
        }
      ]
    },
    "relatedServices": [
      {
        "href": "/services/application-development",
        "title": "Custom Software Development",
        "description": "Our engineers develop custom applications around your business workflows, records and integrations."
      },
      {
        "href": "/services/web-application-development",
        "title": "Web Application Development",
        "description": "Bring orders, requests, approvals and operational records into a browser application."
      },
      {
        "href": "/services/mobile-application-development",
        "title": "Mobile App Development",
        "description": "Give field teams and customers a practical way to work from their phones."
      },
      {
        "href": "/services/cloud-solutions",
        "title": "Cloud Solutions",
        "description": "Plan, migrate and operate your applications on Azure, AWS, Google Cloud or a hybrid environment."
      },
      {
        "href": "/services/data-analysis-and-reporting",
        "title": "Data Analysis & Reporting",
        "description": "Bring operational records into dashboards and reports your team can use."
      }
    ]
  },
  {
    "slug": "manufacturing",
    "title": "Connect production, inventory and dispatch in one operational view",
    "navLabel": "Manufacturing",
    "metaTitle": "ERP Software for Manufacturers | Burhani",
    "metaDescription": "Custom ERP software for manufacturers, covering production scheduling, stock and dispatch in one system with a working module in weeks.",
    "lede": "Bring production, stock and dispatch records into a shared system. We build ERP and inventory applications around the sequence your teams run, connecting shop-floor activity with the information managers need to plan and respond.",
    "problems": [
      {
        "q": "Production tells me one number, dispatch tells me another, and I'm stuck in the middle.",
        "a": "The floor knows what is actually finished, dispatch knows what is actually loaded, and until someone reconciles the two by hand, neither number is one you can promise a customer against."
      },
      {
        "q": "We find out about a material shortage after the line has already stopped.",
        "a": "Consumption gets tallied at month end instead of against the running plan, so a shortage becomes visible only once it has already cost a shift."
      },
      {
        "q": "Quality issues get caught at the customer, not on our line.",
        "a": "Without a quality check built into the sequence itself, a defect travels through packing and dispatch before anyone downstream has a reason to look for it."
      }
    ],
    "approach": "We map the movement of orders, materials and finished goods with the people responsible for each stage. The system connects scheduling, stock, quality checks and dispatch, with capture and reporting suited to the working conditions.",
    "scope": [
      {
        "title": "Production scheduling across lines",
        "body": "Batches sequenced against machine and line availability, so a schedule change in one place updates what everyone downstream is planning against."
      },
      {
        "title": "Stock and consumption analytics",
        "body": "Raw material consumption tracked against the production plan, with reorder points that fire from actual movement rather than a monthly stock count."
      },
      {
        "title": "Quality checks built into the sequence",
        "body": "Inspection points placed where a defect is cheapest to catch, with results recorded against the batch instead of a separate paper log."
      },
      {
        "title": "Production monitoring dashboards",
        "body": "Live batch status visible to the office without a phone call to the floor, built from the same data the line supervisor already records."
      },
      {
        "title": "Sales to dispatch in one flow",
        "body": "Enquiry, order, production and dispatch connected so a status change in one stage is visible in every stage around it."
      }
    ],
    "faq": [
      {
        "q": "Can you build a system for production scheduling, not just inventory tracking?",
        "a": "Yes. Scheduling across machines or lines is usually the harder half of a manufacturing ERP, and the half a generic inventory tool leaves out. We sequence batches against real line and material availability, so a schedule change updates what every downstream department is planning against."
      },
      {
        "q": "Do you build quality assurance checks into the system itself?",
        "a": "Yes. Inspection points get placed at the stage where a defect is cheapest to catch, and the result is recorded against the batch rather than a separate paper log. A quality issue becomes visible to production and dispatch before the batch moves any further down the line."
      },
      {
        "q": "Can the system track raw material consumption against a production plan?",
        "a": "Yes. Consumption is tracked against the plan as production runs, not reconciled at month end, so a reorder point can fire from actual movement. This is usually the change that catches a shortage before it stops a line rather than after."
      },
      {
        "q": "Have you built ERP systems for apparel or textile manufacturers before?",
        "a": "Yes. We built a centralized ERP for a global apparel manufacturer covering sales, stock, production scheduling, quality checks and dispatch in one system, replacing departmental spreadsheets that had no way to reconcile with each other. The sequence mapped for that build informs how we approach any manufacturer."
      },
      {
        "q": "Will the warehouse and the production department see the same stock numbers?",
        "a": "Yes, that is the specific problem a shared stock dashboard removes. Warehouse and production read from the same central figure instead of two separate counts that drift apart the moment either side moves material without telling the other."
      }
    ],
    "editorial": {
      "problems": "When stock and production records fall out of step",
      "approach": "Shared records from material receipt to dispatch",
      "related": "Build around your production and warehouse workflows",
      "ctaHeading": "Discuss the operation your software needs to support",
      "ctaBody": "Bring the production sequence, stock records and the systems your team retains. We can assess the modules and connections needed for a shared operational view."
    },
    "body": [
      {
        "type": "heading",
        "text": "Give production and the office a shared record"
      },
      {
        "type": "paragraph",
        "parts": [
          "In ",
          {
            "label": "ERP Solution for a Global Apparel Company",
            "href": "/case-studies/erp-solution-for-a-global-apparel-company"
          },
          ", sales, stock, production and dispatch had maintained separate records. The custom ERP connected the enquiry-to-delivery workflow with production monitoring, stock analytics and reporting."
        ]
      },
      {
        "type": "paragraph",
        "parts": [
          "Manufacturing systems need to reflect when material is consumed, how batches are scheduled and where quality checks occur. Those decisions shape the ",
          {
            "label": "ERP implementation",
            "href": "/services/erp-implementation"
          },
          " and the records each team maintains."
        ]
      },
      {
        "type": "heading",
        "text": "Improve the work between records"
      },
      {
        "type": "paragraph",
        "parts": [
          "Re-entering supplier documents, waiting for approval and reconciling stock are different problems. AI-enabled capture can support incoming document handling. Routing rules can move approvals, while shared records support stock review. Choose the change from the actual delay."
        ]
      },
      {
        "type": "paragraph",
        "parts": [
          {
            "label": "Process monitoring",
            "href": "/services/process-automation"
          },
          " provides stage timings and exception views so a supervisor can see what needs attention. Scanning and inventory workflows are also described in ",
          {
            "label": "Inventory Management: Optimizing Manufacturing and Warehousing",
            "href": "/case-studies/inventory-management-optimizing-manufacturing-and-warehousing"
          },
          "."
        ]
      }
    ],
    "caseStudy": {
      "href": "/case-studies/erp-solution-for-a-global-apparel-company",
      "title": "ERP Solution for a Global Apparel Company",
      "facts": [
        {
          "label": "Sector",
          "value": "Apparel Manufacturing & Distribution"
        },
        {
          "label": "Client",
          "value": "A global apparel manufacturer"
        },
        {
          "label": "Engagement type",
          "value": "Custom ERP implementation"
        },
        {
          "label": "What we built",
          "value": "A centralized ERP covering sales, stock, production scheduling, quality assurance and dispatch"
        }
      ]
    },
    "relatedServices": [
      {
        "href": "/services/erp-implementation",
        "title": "ERP Implementation",
        "description": "Bring sales, stock, production and dispatch into one custom ERP."
      },
      {
        "href": "/services/process-automation",
        "title": "Process Automation",
        "description": "Track how work moves through each stage, where it waits and which cases need attention."
      },
      {
        "href": "/services/data-analysis-and-reporting",
        "title": "Data Analysis & Reporting",
        "description": "Bring operational records into dashboards and reports your team can use."
      },
      {
        "href": "/services/integration-services",
        "title": "Integration Services",
        "description": "Keep records moving between Tally, SAP, Salesforce and your internal software."
      },
      {
        "href": "/services/workflow-automation",
        "title": "Workflow Automation",
        "description": "Give requests a clear path through approvals and handoffs."
      }
    ]
  },
  {
    "slug": "finance",
    "title": "Connect borrowers and staff through a clearer loan workflow",
    "navLabel": "Finance",
    "metaTitle": "Software for Finance Companies | Burhani",
    "metaDescription": "Custom software for finance companies, built with approval chains, audit trails and role-based access from the start.",
    "lede": "Bring borrower applications, staff review and loan status into a connected workflow. We build mobile and administrative systems with structured submission, validation, role-based access and reporting around your finance operation.",
    "problems": [
      {
        "q": "An application can get approved without the right person ever seeing it.",
        "a": "When sign-off happens over email or a shared file, a step gets skipped under deadline pressure, and no record exists to force the sequence to hold."
      },
      {
        "q": "When an auditor asks who approved what and when, we're piecing it together from email.",
        "a": "Without a system logging every decision against a timestamp and a name, an audit becomes a week of searching inboxes instead of running a report."
      },
      {
        "q": "Our field staff and our back office are working from different versions of an application's status.",
        "a": "A status change made at a branch or in the field takes time to reach the back office, so both sides act on information that is already out of date."
      }
    ],
    "approach": "We map the application stages, required records and review responsibilities before designing the interfaces. Borrowers get a clear way to submit and track information. Staff work from connected records with the permissions and decision context their role needs.",
    "scope": [
      {
        "title": "Configurable approval chains",
        "body": "Sign-off sequences that match how your organization actually authorizes a decision, with a step that cannot be skipped under deadline pressure."
      },
      {
        "title": "Audit trails by design",
        "body": "Every decision logged against a name and a timestamp from the point it happens, so an audit becomes a report you run."
      },
      {
        "title": "Role-based access across teams",
        "body": "Field staff, reviewers and administrators see and act on only what their role permits, defined during mapping rather than added after go-live."
      },
      {
        "title": "Borrower or customer-facing tracking",
        "body": "A mobile interface where an applicant checks real status directly, instead of calling an office that does not have a more current answer either."
      },
      {
        "title": "Risk scoring and analytics",
        "body": "Scoring and portfolio analytics built on the same live data the approval chain runs on, instead of a spreadsheet reconciled after the fact."
      }
    ],
    "faq": [
      {
        "q": "Can the system enforce our approval chain before a loan or payment goes through?",
        "a": "Yes. The approval sequence is built into the system rather than managed over email, so a required sign-off cannot be skipped under deadline pressure. Each step ties to a role and a name, which is also what makes the sequence auditable rather than reconstructed from memory later."
      },
      {
        "q": "Do you build in audit trails we can hand to a regulator or auditor?",
        "a": "Yes. Every approval, edit and status change is logged against a name and a timestamp from the point it happens, so producing a record for an auditor is a report rather than a week spent searching inboxes and shared drives for who did what and when."
      },
      {
        "q": "Can different roles see different levels of financial data in the same system?",
        "a": "Yes, role-based access is standard on the systems we build for finance clients. A field officer, a reviewer and an administrator each see and act on only the fields their role requires, defined during the mapping phase rather than restricted after the system is already in use."
      },
      {
        "q": "Can borrowers or customers track their own application status without calling us?",
        "a": "Yes. On a loan management system we built, borrowers track application and loan status through a mobile app connected to the same record the back office uses, removing the status-checking calls that otherwise land on staff with no more current an answer."
      },
      {
        "q": "Do you build risk scoring into the system, or only the workflow around it?",
        "a": "Both, depending on what you need. We have built risk scoring and analytics directly into a loan lifecycle system, working from the same live data as the approval workflow, so a score reflects the current record rather than a batch file recalculated somewhere else."
      }
    ],
    "editorial": {
      "problems": "When applications move faster than their paperwork",
      "approach": "Digital submission, review and loan status in one flow",
      "related": "Connect borrower applications with administrative systems",
      "ctaHeading": "Plan your borrower and staff workflow",
      "ctaBody": "Tell us how applications arrive, who reviews them and where the records are held. We can work through the interfaces, validation and access your process needs."
    },
    "body": [
      {
        "type": "heading",
        "text": "Connect borrower submission with staff review"
      },
      {
        "type": "paragraph",
        "parts": [
          {
            "label": "Digitalizing the End-to-End Loan Lifecycle",
            "href": "/case-studies/digitalizing-the-end-to-end-loan-lifecycle"
          },
          " describes a finance-sector organisation serving public borrowers. We built a hybrid mobile app and administrative CRM with digital validation, loan tracking, risk information and automated notifications."
        ]
      },
      {
        "type": "paragraph",
        "parts": [
          "The borrower and staff interfaces served different tasks while drawing on connected records. Our ",
          {
            "label": "mobile application service",
            "href": "/services/mobile-application-development"
          },
          " covers the device and submission workflow, while ",
          {
            "label": "departmental applications",
            "href": "/services/line-of-business-lob-applications"
          },
          " support administrative work."
        ]
      },
      {
        "type": "heading",
        "text": "Define what can proceed automatically"
      },
      {
        "type": "paragraph",
        "parts": [
          "Document capture can help prepare an application for review. Validation can identify missing or inconsistent fields. Approval authority, exception handling and the use of risk information need explicit rules and responsible people."
        ]
      },
      {
        "type": "paragraph",
        "parts": [
          {
            "label": "Business process automation",
            "href": "/services/business-process-automation-solutions"
          },
          " connects capture and routing around those decisions. Agree data access, traceability and market-specific requirements during scoping."
        ]
      }
    ],
    "caseStudy": {
      "href": "/case-studies/digitalizing-the-end-to-end-loan-lifecycle",
      "title": "Digitalizing the End-to-End Loan Lifecycle",
      "facts": [
        {
          "label": "Sector",
          "value": "Finance"
        },
        {
          "label": "Client",
          "value": "A finance-sector organisation serving public borrowers"
        },
        {
          "label": "Engagement type",
          "value": "Mobile app and CRM development"
        },
        {
          "label": "What we built",
          "value": "A borrower-facing loan application with an admin CRM for tracking, risk scoring and reporting"
        }
      ]
    },
    "relatedServices": [
      {
        "href": "/services/application-development",
        "title": "Custom Software Development",
        "description": "Our engineers develop custom applications around your business workflows, records and integrations."
      },
      {
        "href": "/services/mobile-application-development",
        "title": "Mobile App Development",
        "description": "Give field teams and customers a practical way to work from their phones."
      },
      {
        "href": "/services/business-process-automation-solutions",
        "title": "Business Process Automation",
        "description": "Our engineers build automation systems that reduce repeated document handling, data entry and approval chasing."
      },
      {
        "href": "/services/data-analysis-and-reporting",
        "title": "Data Analysis & Reporting",
        "description": "Bring operational records into dashboards and reports your team can use."
      },
      {
        "href": "/services/integration-services",
        "title": "Integration Services",
        "description": "Keep records moving between Tally, SAP, Salesforce and your internal software."
      }
    ]
  },
  {
    "slug": "events",
    "title": "Manage visitor attendance and engagement as the event unfolds",
    "navLabel": "Events & Exhibitions",
    "metaTitle": "Event Management Software | Burhani",
    "metaDescription": "Custom event management software for high-volume check-in, visitor tracking and real-time engagement analytics.",
    "lede": "Connect visitor registration, staff check-in and product interest with event reporting. We build mobile and web systems that give organisers a shared view during the event and useful records for follow-up afterwards.",
    "problems": [
      {
        "q": "Registration lines back up the moment doors open.",
        "a": "A check-in process built for a steady trickle collapses under a genuine rush, and the queue at the door becomes the first impression of the entire event."
      },
      {
        "q": "We can't tell a sponsor which of their visitors actually stopped at the stand.",
        "a": "Without a way to log visitor interest per stand or session, a sponsor's report after the event is a guess dressed up as a summary."
      },
      {
        "q": "RSVPs come in through three different channels and none of them talk to each other.",
        "a": "Email replies, a form and a phone list all track invitations separately, so nobody has one number for who is actually confirmed until someone merges the lists by hand."
      }
    ],
    "approach": "We map the visitor journey from invitation and RSVP to arrival and engagement. Staff interfaces capture attendance and interest as the work happens. An administrative dashboard brings the records together for coordination and reporting.",
    "scope": [
      {
        "title": "High-volume check-in",
        "body": "A staff-facing mobile app built to process a crowd arriving inside a short window, without the slowdown a web form shows under real load."
      },
      {
        "title": "Per-visitor interest mapping",
        "body": "Product or session interest logged against each visitor as it happens, so a sponsor or exhibitor gets a real report instead of a guess."
      },
      {
        "title": "Invitation and RSVP management",
        "body": "Invitations, replies and confirmations tracked in one system, replacing the email, form and phone list that otherwise never reconcile with each other."
      },
      {
        "title": "Real-time attendance analytics",
        "body": "Traffic and engagement visible on a live dashboard during the event itself, not compiled from sign-in sheets after everyone has already left."
      },
      {
        "title": "Admin CRM for organizers",
        "body": "A PWA built for the organizing team to manage attendee records, sessions and reporting from one place before, during and after the event."
      }
    ],
    "faq": [
      {
        "q": "Can the check-in system handle a large crowd arriving in a short window?",
        "a": "Yes, this is the specific condition it is built for. A hybrid mobile app handles staff-side check-in and is designed for a genuine rush at doors-open rather than a steady trickle, which is the load pattern that breaks a system built and tested against lighter, evenly spaced traffic."
      },
      {
        "q": "Can you track which products or stands each visitor actually spent time at?",
        "a": "Yes. We have built systems that map product or session interest against each visitor as they move through an event, which turns a sponsor's post-event report into something built from actual interaction data rather than a count of badges scanned at the entrance."
      },
      {
        "q": "Do you build invitation and RSVP management into the same system?",
        "a": "Yes. Invitations, replies and confirmations run through one system instead of email, a form and a phone list that otherwise never fully reconcile. That gives an organizer one confirmed number to plan catering, seating or badges against, rather than three numbers each telling a slightly different story."
      },
      {
        "q": "Can our staff check attendees in from a phone instead of a desk?",
        "a": "Yes. Check-in runs on a hybrid mobile app so staff work the floor or the entrance directly, rather than routing every attendee through a fixed desk with a laptop. That is usually what turns a high-volume opening into something manageable rather than a bottleneck at the one point everyone has to pass through."
      },
      {
        "q": "Can we see attendance numbers live during the event, not after it ends?",
        "a": "Yes. Real-time analytics on traffic and engagement are part of the admin CRM, so an organizer reads current numbers during the event and can act on them, rather than compiling a picture afterward from sign-in sheets once the decision points have already passed."
      }
    ],
    "editorial": {
      "problems": "When check-in and follow-up depend on separate records",
      "approach": "Connect registration, visitor interests and event reporting",
      "related": "Build the mobile and reporting tools behind your event",
      "ctaHeading": "Plan the visitor journey before your next event",
      "ctaBody": "Bring the registration process, check-in requirements and reporting your organisers need. We can scope the staff interface and event dashboard together."
    },
    "body": [
      {
        "type": "heading",
        "text": "Capture attendance and interest together"
      },
      {
        "type": "paragraph",
        "parts": [
          {
            "label": "Visitor Attendance & Engagement Tracking System",
            "href": "/case-studies/visitor-attendance-and-engagement-tracking-system"
          },
          " combined a hybrid staff app with a PWA administration dashboard. Staff recorded attendance and product interest against each visitor. Invitation and RSVP management supported planning before the event."
        ]
      },
      {
        "type": "paragraph",
        "parts": [
          "The reporting showed attendance, traffic and engagement while the event was running. Product-level interest also gave the team more useful information for post-event follow-up."
        ]
      },
      {
        "type": "heading",
        "text": "Plan for the pace of the event"
      },
      {
        "type": "paragraph",
        "parts": [
          "Check-in needs to work on the devices and connections available at the venue. Define who can amend a visitor record, how duplicate entries are handled and what the coordinator needs to see. ",
          {
            "label": "Mobile development",
            "href": "/services/mobile-application-development"
          },
          " covers the staff workflow and device requirements."
        ]
      },
      {
        "type": "paragraph",
        "parts": [
          {
            "label": "Data analysis and reporting",
            "href": "/services/data-analysis-and-reporting"
          },
          " shapes the attendance and engagement views. If automation is added to intake or follow-up, agree the source information and review step before messages or records proceed."
        ]
      }
    ],
    "caseStudy": {
      "href": "/case-studies/visitor-attendance-and-engagement-tracking-system",
      "title": "Visitor Attendance & Engagement Tracking System",
      "facts": [
        {
          "label": "Sector",
          "value": "Events & Exhibition Management"
        },
        {
          "label": "Client",
          "value": "An exhibitions and events organizer"
        },
        {
          "label": "Engagement type",
          "value": "Mobile app and PWA CRM development"
        },
        {
          "label": "What we built",
          "value": "Staff check-in with per-visitor product interest mapping and real-time event analytics"
        }
      ]
    },
    "relatedServices": [
      {
        "href": "/services/mobile-application-development",
        "title": "Mobile App Development",
        "description": "Give field teams and customers a practical way to work from their phones."
      },
      {
        "href": "/services/web-application-development",
        "title": "Web Application Development",
        "description": "Bring orders, requests, approvals and operational records into a browser application."
      },
      {
        "href": "/services/data-analysis-and-reporting",
        "title": "Data Analysis & Reporting",
        "description": "Bring operational records into dashboards and reports your team can use."
      },
      {
        "href": "/services/cloud-solutions",
        "title": "Cloud Solutions",
        "description": "Plan, migrate and operate your applications on Azure, AWS, Google Cloud or a hybrid environment."
      }
    ]
  }
];

export const knowledgeBasePages = [
  {
    "slug": "how-long-does-a-custom-software-project-take",
    "title": "How long does a custom software project take?",
    "metaTitle": "How Long Does a Custom Software Project Take? | Burhani",
    "metaDescription": "A practical answer to how long custom software development takes, from the first working version to a full implementation.",
    "excerpt": "What determines a project timeline, from the first working version to a full multi-department build.",
    "answer": "A custom software timeline depends on the workflow, integrations, data migration and acceptance requirements. Start by agreeing a useful first release, then plan the wider rollout. AI-assisted development can support early progress, while testing and user review remain part of the schedule.",
    "category": "Getting started",
    "faq": [
      {
        "q": "What should the first working version include?",
        "a": "One complete task that your team can assess, such as entering a request, validating it, assigning it and checking its status. Agree the records, permissions and exceptions needed to make that task meaningful."
      },
      {
        "q": "Which dependencies change the delivery date?",
        "a": "Access to existing systems, data quality, external approvals, migration needs and availability for user review can all affect the date. Record these dependencies before committing to a release."
      },
      {
        "q": "Can AI-assisted development shorten the project?",
        "a": "It can support faster progress on parts of the build. The overall schedule still includes discovery, integration, testing and acceptance. Review the actual scope and dependencies before estimating the benefit."
      },
      {
        "q": "When is the project date confirmed?",
        "a": "We agree a dated plan after discovery establishes the scope, dependencies and review stages. Changes to those assumptions need an explicit review of the schedule."
      }
    ],
    "body": [
      {
        "type": "heading",
        "text": "Start with one useful release"
      },
      {
        "type": "paragraph",
        "parts": [
          "For a project centred on prototypes and user feedback, our ",
          {
            "label": "rapid application development service",
            "href": "/services/rapid-application-development"
          },
          " explains how to scope the first version and decide when it is ready for live use."
        ]
      },
      {
        "type": "paragraph",
        "parts": [
          "A first release should complete a task the team can recognise and check. A convincing screen needs the records, rules and permissions behind it. Decide which users will review the workflow and what counts as acceptance before adding more departments."
        ]
      },
      {
        "type": "heading",
        "text": "Account for work outside the code"
      },
      {
        "type": "paragraph",
        "parts": [
          "An integration may require access from another supplier. Migration may uncover missing or inconsistent records. Users need time to test exceptions and compare totals. These activities belong in the plan even when implementation progresses quickly."
        ]
      },
      {
        "type": "heading",
        "text": "Review the effect of AI on the actual scope"
      },
      {
        "type": "paragraph",
        "parts": [
          "Our ",
          {
            "label": "custom software development approach",
            "href": "/services/application-development"
          },
          " uses AI assistance alongside short delivery cycles, code review and testing. The effect on a specific schedule depends on the work involved. Avoid using a fixed acceleration percentage as a project estimate."
        ]
      },
      {
        "type": "heading",
        "text": "Prepare for the scoping conversation"
      },
      {
        "type": "paragraph",
        "parts": [
          "Bring an example workflow, the systems it touches and the people who will review the result. Our ",
          {
            "label": "discovery preparation guide",
            "href": "/knowledge-base/what-you-need-ready-before-a-discovery-call"
          },
          " explains what is useful. ",
          {
            "label": "Discuss your project",
            "href": "/contact"
          },
          " to agree a first release and its dependencies."
        ]
      }
    ]
  },
  {
    "slug": "what-you-need-ready-before-a-discovery-call",
    "title": "What you need ready before a discovery call",
    "metaTitle": "What to Prepare Before a Discovery Call | Burhani",
    "metaDescription": "What to have ready before a discovery call with Burhani, so the first conversation covers your actual process.",
    "excerpt": "What to bring to a discovery call so the conversation covers your real process, not general background questions.",
    "answer": "You do not need a written specification. Bring the people who actually run the process day to day, a rough sense of what is manual or duplicated today, and any system you already use that the new one needs to work alongside. A budget range helps but is not required before the first conversation.",
    "category": "Getting started",
    "faq": [
      {
        "q": "Do we need a written requirements document before we talk to you?",
        "a": "No. A requirements document is something mapping produces, not something you need to arrive with. What helps more is a clear sense of where the current process breaks down, described in your own words rather than written up as a formal specification beforehand."
      },
      {
        "q": "Who from our side should actually be on the call?",
        "a": "The people who run the process day to day, not only the person who manages them. A manager describes the process as designed. The person doing the work daily describes the process as it actually runs, including the workaround nobody wrote down, which is usually the more useful account."
      },
      {
        "q": "Does budget need to be finalized before the call?",
        "a": "No, though a rough range helps keep the conversation realistic about scope from the start. If you genuinely do not know yet, the typical range for a project like yours is something we can walk through together on the call itself."
      },
      {
        "q": "What if we only have a rough idea and not a full specification?",
        "a": "That is the normal starting point. A rough idea is what the discovery call and the mapping phase are for. Arriving with a fully formed specification is the exception, and can sometimes mean rework later if it was written without seeing how the floor actually operates."
      },
      {
        "q": "Should we bring examples of systems we like or dislike?",
        "a": "Yes, if you have them. A screen you have used elsewhere and either liked or actively disliked tells us more in five minutes than a general description of preferences, because it points at something specific rather than an adjective like clean or simple that means different things to different people."
      }
    ],
    "body": [
      {
        "type": "heading",
        "text": "What matters more than a written document?"
      },
      {
        "type": "paragraph",
        "parts": [
          "A discovery call works best with people, not paperwork. We are trying to understand how work actually moves through your business right now: where it waits, where it gets re-entered, and where two departments each keep their own version of the same information. That picture comes from a conversation, and a document written in advance often ends up describing the process as intended rather than the process as it actually runs day to day."
        ]
      },
      {
        "type": "heading",
        "text": "Who should actually be on the call?"
      },
      {
        "type": "paragraph",
        "parts": [
          "Bring whoever runs the process, not only whoever manages it. A department head can usually describe the process as designed. The person entering orders, checking stock or approving a step every day can usually describe the workaround that keeps the real process moving when the designed version does not quite fit. Both accounts matter, but the second one is the one that is easy to miss if only management joins the call."
        ]
      },
      {
        "type": "heading",
        "text": "What helps, even if it is not required?"
      },
      {
        "type": "paragraph",
        "parts": [
          "A rough sense of budget, a general timeline expectation, and any existing systems the new one has to work alongside all help the conversation move faster. None of them need to be final. If you already run Tally, SAP, Salesforce or an in-house system, mentioning it early means integration gets factored into the conversation from the start rather than raised as a surprise partway through."
        ]
      },
      {
        "type": "heading",
        "text": "What happens to what you bring to the call?"
      },
      {
        "type": "paragraph",
        "parts": [
          "Everything discussed on the call feeds into the mapping phase that follows, where the actual sequence gets walked step by step with the people who run it. Nothing you bring to the first call is treated as final. It is a starting point for mapping to test against, and mapping is where the specification for the build actually gets written."
        ]
      },
      {
        "type": "heading",
        "text": "Bring the first task you want to improve"
      },
      {
        "type": "paragraph",
        "parts": [
          "For a new application, choose a workflow your team could review from entry to completion. For automation, bring a recurring example and the exceptions that make it difficult. Our ",
          {
            "label": "custom software service",
            "href": "/services/application-development"
          },
          " and ",
          {
            "label": "business process automation service",
            "href": "/services/business-process-automation-solutions"
          },
          " explain the two starting points. If AI is part of the brief, include the information it would use and the person who should review its output."
        ]
      }
    ]
  },
  {
    "slug": "how-we-handle-your-data-during-a-build",
    "title": "How we handle your data during a build",
    "metaTitle": "How We Handle Your Data During a Build | Burhani",
    "metaDescription": "How Burhani handles access, storage and confidentiality of your business data while a custom system is being built.",
    "excerpt": "Who gets access to your data during a build, where it is stored, and what happens to it if a project pauses.",
    "answer": "Data handling needs an explicit agreement covering access, development environments, hosting, confidentiality and retention. Before a build starts, identify the information the work requires and who may use it. Where AI tools are proposed, confirm their data flows and provider terms as part of that discussion.",
    "category": "During the build",
    "faq": [
      {
        "q": "What data should we share for initial scoping?",
        "a": "Start with the workflow, field definitions and representative examples. Discuss whether masked or synthetic records will be enough before sharing production data. The information needed depends on the task being assessed."
      },
      {
        "q": "How do we agree who can access project data?",
        "a": "List the roles that need access, the purpose of that access and the systems involved. Record approval and removal responsibilities in the project arrangements, including what changes when a person leaves the team."
      },
      {
        "q": "What should we confirm about AI tools and our data?",
        "a": "Confirm the tool, the information it will receive, its retention and training terms, and the controls available under the selected account. Agree what may be shared before client code or records are submitted."
      },
      {
        "q": "Where will development and test data be stored?",
        "a": "Agree the environment, hosting location, access and the test records required during scoping. Include any third-party services the application or development process will use."
      },
      {
        "q": "What happens to data when a project pauses or ends?",
        "a": "The project agreement should state return, retention and deletion requirements, including backup copies and access removal. Resolve those terms before data is shared so both teams know what to do."
      }
    ],
    "body": [
      {
        "type": "heading",
        "text": "Define the information the build needs"
      },
      {
        "type": "paragraph",
        "parts": [
          "An example form and a description of its fields may be enough to map a workflow. Testing an integration may require representative records and access to a test environment. Decide what is necessary for each stage and record who approves it."
        ]
      },
      {
        "type": "heading",
        "text": "Include AI tools in the data discussion"
      },
      {
        "type": "paragraph",
        "parts": [
          "AI-assisted development can involve source code, prompts and contextual material. An AI feature inside an application can involve a different provider and a different data flow. Review each proposed use separately, including account settings, retention terms and the information allowed to leave the agreed environment."
        ]
      },
      {
        "type": "heading",
        "text": "Agree responsibilities before implementation"
      },
      {
        "type": "paragraph",
        "parts": [
          "Specify access, confidentiality, hosting and retention in the engagement arrangements. ",
          {
            "label": "Cloud services",
            "href": "/services/cloud-solutions"
          },
          " covers infrastructure choices; ",
          {
            "label": "integration services",
            "href": "/services/integration-services"
          },
          " covers connections to existing systems. Bring the relevant requirements to the ",
          {
            "label": "discovery discussion",
            "href": "/contact"
          },
          "."
        ]
      }
    ]
  },
  {
    "slug": "what-happens-after-your-system-goes-live",
    "title": "What happens after your system goes live",
    "metaTitle": "What Happens After Your System Goes Live | Burhani",
    "metaDescription": "What actually happens in the days and weeks right after a custom system goes live, before it settles into normal use.",
    "excerpt": "What the first few days and weeks after launch look like, before a new system settles into normal use.",
    "answer": "After launch, review the system under real use, track issues against the agreed scope and confirm the support arrangements. Defects, new feature requests and operational incidents need clear owners. The response windows and completion criteria should be agreed before release.",
    "category": "After go-live",
    "faq": [
      {
        "q": "Is someone actively watching the system in the first few days after launch?",
        "a": "Agree the launch monitoring period, the signals to watch and the people responsible before release. Include integrations and scheduled jobs so a quiet interface does not hide a failed background process."
      },
      {
        "q": "What counts as a bug fix versus a new change request after we go live?",
        "a": "A defect is a difference from the agreed behaviour. A new request adds or changes that behaviour. Log each against the specification and apply the correction or change terms in the project agreement."
      },
      {
        "q": "How fast do you respond if something breaks in the first week?",
        "a": "The response time depends on the support agreement and the severity of the issue. Confirm the contact route, coverage hours and escalation process before launch."
      },
      {
        "q": "When is the project actually considered finished?",
        "a": "Completion follows the acceptance criteria and handover requirements in the project agreement. A representative operating cycle can help test reports and recurring tasks; its duration depends on the process."
      },
      {
        "q": "How do you tell a stable system from one that has just gone quiet?",
        "a": "Stability shows up as normal use, with staff working through the system rather than around it. A system that has simply gone quiet can mean people have found a workaround and stopped relying on the parts that never quite fit, which is why we stay engaged past launch day and check on actual use rather than waiting for a complaint."
      }
    ],
    "body": [
      {
        "type": "heading",
        "text": "Check the complete operating cycle"
      },
      {
        "type": "paragraph",
        "parts": [
          "The first days of use can expose unexpected inputs, permission problems or connection failures. Review the tasks users actually complete, alongside logs and monitoring. Include scheduled reports and recurring approvals in the acceptance plan."
        ]
      },
      {
        "type": "heading",
        "text": "Keep the scope visible when issues arrive"
      },
      {
        "type": "paragraph",
        "parts": [
          "Record the expected behaviour, the actual result and the impact on the team. A defect can then be assessed against the agreed specification. A new report, field or workflow step needs its own scope and estimate. The project agreement determines the correction and support terms."
        ]
      },
      {
        "type": "heading",
        "text": "Plan support for connected and AI-enabled systems"
      },
      {
        "type": "paragraph",
        "parts": [
          "An external API or model service can change independently of the application. Agree how failures, usage costs and unexpected outputs will be monitored where those dependencies exist. Human review and escalation should remain clear when an automated step cannot continue."
        ]
      },
      {
        "type": "paragraph",
        "parts": [
          "Our ",
          {
            "label": "DevOps and maintenance service",
            "href": "/services/devops-and-maintenance"
          },
          " covers release and operational support. For a system already in use, ",
          {
            "label": "discuss the current environment and support need",
            "href": "/contact"
          },
          " before choosing the cover required."
        ]
      }
    ]
  }
];

export const rapidApplicationDevelopmentPage = {
  "slug": "rapid-application-development",
  "title": "Rapid application development for your first useful release",
  "navLabel": "Rapid Application Development",
  "metaTitle": "Rapid Application Development Services | Burhani",
  "metaDescription": "Scope your first release with Burhani's rapid application development services. Review prototypes with users, then build and test the agreed workflow.",
  "lede": "Turn one business workflow into an application your team can review and use. Burhani engineers prototype the flow, gather user feedback and build the agreed first release.",
  "heroStats": [
    "Engineering-led prototypes and testing",
    "A defined workflow and release scope"
  ],
  "problems": [
    {
      "q": "Everyone agrees we need an app, but describes a different one.",
      "a": "Start with one workflow. A prototype lets users review the screens and decisions, so your team can agree what the application needs to do."
    },
    {
      "q": "The demo looks right. We still do not know whether the workflow will work.",
      "a": "Check permissions, data rules and critical integrations alongside the screens. A prototype and a live application need different acceptance checks."
    },
    {
      "q": "Our backlog keeps growing before anyone can use the first version.",
      "a": "Define one complete task for the first release. Keep later enhancements in the backlog and assess new requests against the agreed scope, cost and schedule."
    }
  ],
  "approach": "Our rapid application development services combine prototypes, user review and iterative development. Your team makes decisions about the workflow; our engineers design, build, integrate and test it. Start with a defined first release, then use feedback to decide what comes next.",
  "scope": [
    {
      "title": "First-release scope",
      "body": "Agree the users, workflow, acceptance checks and exclusions. Identify who can approve decisions and changes."
    },
    {
      "title": "Workflow prototypes",
      "body": "Review the main screens and interactions with the people doing the task before extending the design."
    },
    {
      "title": "Working application",
      "body": "Build the records, validation, permissions and status changes needed to complete the agreed task."
    },
    {
      "title": "Integration checks",
      "body": "Test the required connections and agree how the application handles unavailable systems or rejected records."
    },
    {
      "title": "User feedback and testing",
      "body": "Review working increments against realistic scenarios. Distinguish defects, usability improvements and additional scope."
    },
    {
      "title": "Release and handover",
      "body": "Plan deployment, access, documentation and handover. Agree support responsibilities before release."
    }
  ],
  "decision": {
    "heading": "Decide whether you need a prototype or a first live release",
    "intro": "Agree what the engagement must deliver. The checks for a review prototype differ from those for an application people depend on.",
    "packagedLabel": "Prototype for review",
    "customLabel": "First live release",
    "rows": [
      {
        "factor": "Main purpose",
        "packaged": "Check a proposed workflow and gather feedback.",
        "custom": "Let an agreed user group complete a defined task."
      },
      {
        "factor": "Data and connections",
        "packaged": "May use sample records or clearly identified simulated responses.",
        "custom": "Needs agreed data handling and tested connections."
      },
      {
        "factor": "Access and errors",
        "packaged": "Can illustrate roles and error states.",
        "custom": "Needs implemented permissions, validation and failure handling."
      },
      {
        "factor": "Acceptance",
        "packaged": "Users can review the flow and decide what should change.",
        "custom": "Passes agreed acceptance checks and has an operational owner."
      }
    ]
  },
  "process": [
    {
      "n": "01",
      "title": "Define the useful outcome",
      "body": "Map the workflow, users and dependencies. Agree what the first release must do."
    },
    {
      "n": "02",
      "title": "Prototype the workflow",
      "body": "Use representative scenarios to make the key interactions and missing steps visible."
    },
    {
      "n": "03",
      "title": "Review with users",
      "body": "Gather decisions from the people doing the task and update the agreed design."
    },
    {
      "n": "04",
      "title": "Build and refine",
      "body": "Implement the application and integrations, reviewing working increments with your team."
    },
    {
      "n": "05",
      "title": "Check release readiness",
      "body": "Test permissions, validation, exceptions and the complete task against the acceptance criteria."
    },
    {
      "n": "06",
      "title": "Release and plan the next step",
      "body": "Release to the agreed environment, complete the handover and prioritise feedback from actual use."
    }
  ],
  "faq": [
    {
      "q": "How long does a rapid application development project take?",
      "a": "Timing depends on the workflow, integrations and release requirements. We assess these during scoping and include time for user reviews, system access and testing in the proposed schedule."
    },
    {
      "q": "Who needs to review the application during development?",
      "a": "Involve someone who performs the task and someone who can approve scope and priorities. Agree review points so feedback can guide the next increment."
    },
    {
      "q": "Can requirements change after we have reviewed the prototype?",
      "a": "Yes. We assess changes against the agreed scope, explain their effect on cost and timing, and confirm the next increment before proceeding."
    },
    {
      "q": "Will the prototype become the final application?",
      "a": "It depends on what the prototype was designed to test. Some guide a separate build; others can be extended after architecture, data handling and release requirements are assessed."
    },
    {
      "q": "What should we bring to the first discussion?",
      "a": "Bring the task you want to improve, a sample of the current process and the systems involved. Tell us who will review the application and any launch constraints."
    }
  ],
  "schemaServiceType": "Rapid Application Development Services",
  "engagementIntro": "Share the workflow and release you need. We assess the scope and dependencies before proposing an engagement. Pricing, delivery, ownership and support terms are agreed for your project.",
  "primaryCtaLabel": "Discuss your first release",
  "editorial": {
    "problems": "Make the decisions your first release needs",
    "approach": "Prototype, review and build one clear workflow",
    "related": "Choose the application format your workflow needs",
    "process": "From the first prototype to an agreed release",
    "ctaHeading": "Scope your first useful release",
    "ctaBody": "Tell us who will use the application, what they need to complete and which systems it must connect. Discuss the workflow and review points with our engineers."
  },
  "body": [
    {
      "type": "heading",
      "text": "What can you build with rapid application development?"
    },
    {
      "type": "paragraph",
      "parts": [
        "A request portal, approval tool or customer application can be a useful starting point. Choose a task with clear users and review it from submission to completion, including missing information, unavailable reviewers and failed connections."
      ]
    },
    {
      "type": "paragraph",
      "parts": [
        "For a broader programme across departments and business systems, explore our ",
        {
          "label": "custom software development service",
          "href": "/services/application-development"
        },
        "."
      ]
    },
    {
      "type": "heading",
      "text": "How is RAD different from an MVP or low-code development?"
    },
    {
      "type": "paragraph",
      "parts": [
        "RAD is a delivery approach: prototype, review with users and develop through iterations. An MVP is a limited product for testing an assumption. Low-code is a technology choice. Your integration, access and maintenance requirements help determine the appropriate approach."
      ]
    },
    {
      "type": "heading",
      "text": "How is AI assistance assessed for your project?"
    },
    {
      "type": "paragraph",
      "parts": [
        "Agree how AI tools may be used and what code or data they may receive before development starts. Engineers remain responsible for architecture, integration and testing. An AI feature inside your application needs its own scope and acceptance checks."
      ]
    },
    {
      "type": "heading",
      "text": "When does a focused first release need more discovery?"
    },
    {
      "type": "paragraph",
      "parts": [
        "Uncertain legacy interfaces, data migration or complex access rules may need technical discovery first. Review ",
        {
          "label": "system integration requirements",
          "href": "/services/integration-services"
        },
        " and the factors behind a ",
        {
          "label": "custom software project timeline",
          "href": "/knowledge-base/how-long-does-a-custom-software-project-take"
        },
        " before fixing a release date."
      ]
    },
    {
      "type": "heading",
      "text": "Relevant Burhani application experience"
    },
    {
      "type": "paragraph",
      "parts": [
        "Explore how Burhani has built applications around specific users and business workflows:"
      ]
    },
    {
      "type": "list",
      "items": [
        [
          {
            "label": "ERP Solution for a Global Apparel Company",
            "href": "/case-studies/erp-solution-for-a-global-apparel-company"
          },
          ": a web application connecting sales, stock, production and dispatch."
        ],
        [
          {
            "label": "Visitor Attendance & Engagement Tracking System",
            "href": "/case-studies/visitor-attendance-and-engagement-tracking-system"
          },
          ": a staff mobile app and PWA CRM for visitor check-in, product-interest capture and event reporting."
        ],
        [
          {
            "label": "Digitalizing the End-to-End Loan Lifecycle",
            "href": "/case-studies/digitalizing-the-end-to-end-loan-lifecycle"
          },
          ": a borrower mobile app and staff CRM with application tracking, validation and role-based access."
        ]
      ]
    }
  ],
  "parent": {
    "href": "/services/application-development",
    "title": "Custom Software Development"
  },
  "relatedServices": [
    {
      "href": "/services/web-application-development",
      "title": "Web Application Development",
      "description": "Bring orders, requests, approvals and operational records into a browser application."
    },
    {
      "href": "/services/mobile-application-development",
      "title": "Mobile App Development",
      "description": "Give field teams and customers a practical way to work from their phones."
    },
    {
      "href": "/services/cross-platform-enterprise-applications",
      "title": "Cross-Platform Enterprise Apps",
      "description": "Share application logic across web, mobile and desktop where it suits the work."
    },
    {
      "href": "/services/cms-based-website-development",
      "title": "Web & CMS Development",
      "description": "Publish and maintain your website through reusable templates and a clear editing workflow."
    }
  ]
};

export const industryIndex = {
  "title": "Sectors we have already delivered systems in",
  "metaTitle": "Industries We Build Software For | Burhani Technologies",
  "metaDescription": "Healthcare, manufacturing, finance and events. Explore business workflows and client projects across four sectors.",
  "lede": "Compliance rules and floor-level constraints differ from one industry to the next, and those constraints usually shape the build more than the choice of technology does. Every sector below has a delivered system behind it."
};

export const deliveryProcess = [
  {
    "n": "01",
    "title": "Discovery",
    "body": "We walk your current workflow with the people who run it and record where work stalls, duplicates or waits."
  },
  {
    "n": "02",
    "title": "Scope and quote",
    "body": "A fixed price and a dated plan, issued after discovery. Payment runs against milestones."
  },
  {
    "n": "03",
    "title": "Design",
    "body": "Review the proposed workflow, interfaces and data requirements before implementation. The design work follows the scope of the project."
  },
  {
    "n": "04",
    "title": "Build and review",
    "body": "Implement the agreed scope in short cycles, review the changes and test the behaviour with representative records and exceptions."
  },
  {
    "n": "05",
    "title": "Integrate and release",
    "body": "Test the required connections, confirm acceptance with your team and release according to the agreed rollout plan."
  },
  {
    "n": "06",
    "title": "Support",
    "body": "The team that built it handles updates, integrations and support calls after go-live."
  }
];

export const defaultCta = {
  "heading": "Plan your next software project",
  "body": "Tell us which workflow you want to improve and the systems it depends on. We will help define a practical starting point.",
  "primaryLabel": "Book a free consultation",
  "primaryHref": "/contact",
  "whatsappHref": "https://wa.me/917299002152",
  "whatsappLabel": "Message us on WhatsApp"
};
