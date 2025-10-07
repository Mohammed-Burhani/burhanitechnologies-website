"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/constants/Container";
import { client } from "@/sanity/lib/client";
import Banner from "@/components/Services/Sections/ServiceBanner";
import { PortableText } from "next-sanity";
import { components } from "@/utils/components";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { urlForImage } from "@/sanity/lib/image";
import { PortableBody } from "@/components/textComponents/PortableBody";
import { ServiceIntroduction } from "@/components/Services/Sections/ServiceIntroduction";
import { Challenges } from "@/components/Services/Sections/Challenges";
import { Methodology } from "@/components/Services/Sections/Methodology";
import { Benefits } from "@/components/Services/Sections/Benefits";
import { CallToActionFAQ } from "@/components/Home/Sections/CallToActionFAQ";

const ServicePageClient = ({ service }) => {
  const [serviceDetails, setServiceDetails] = useState(null);

  // Search Single Service
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "services" && slug.current == $slug] [0]`,
          { slug: service }
        );
        setServiceDetails(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  // Hardcoded content based on the framework
  const serviceContent = {
    subtext:
      "From concept to deployment, we create secure and scalable applications tailored to your business needs, ensuring speed, reliability, and long-term success.",
    industries:
      "Healthcare product companies, manufacturing operations, finance departments, construction management, and automotive systems.",
    challenges: [
      "Off-the-shelf software doesn't fit your business, forcing you to change your proven processes.",
      "Legacy systems are limiting growth and can't integrate with modern tools.",
      "Slow development cycles with rigid requirements and minimal flexibility.",
      "New systems can't communicate with existing ERP, CRM, or databases, creating data silos.",
    ],
    methodology: {
      steps: [
        {
          title: "Discovery & Architecture Design",
          description:
            "Understand your business processes, define technical requirements, and design scalable architecture with security and integration in mind.",
        },
        {
          title: "Agile Development",
          description:
            "Build in 2-week sprints with regular demos, continuous feedback, and flexibility to adjust requirements as needed.",
        },
        {
          title: "DevOps & CI/CD Implementation",
          description:
            "Set up automated testing, code quality checks, and deployment pipelines for consistent, reliable releases.",
        },
        {
          title: "Cloud Deployment & Integration",
          description:
            "Deploy to Azure, AWS, or on-premise infrastructure, and integrate with existing systems and databases.",
        },
      ],
      techStack:
        ".NET Core, Node.js, React, Angular, Python, Docker, Kubernetes, Azure DevOps, Jenkins, PostgreSQL, MongoDB, REST APIs, microservices architecture",
    },
    benefits: [
      {
        title: "Solutions That Fit Your Business",
        description:
          "Custom-built to match your exact workflows, not forcing you to adapt to generic software limitations.",
      },
      {
        title: "Faster Time-to-Market",
        description:
          "Agile methodology and DevOps automation deliver working software in weeks, not months, with continuous improvements.",
      },
      {
        title: "Scalability Built-In",
        description:
          "Cloud-native architecture that grows with your business without costly rewrites or infrastructure overhauls.",
      },
      {
        title: "Seamless Integration",
        description:
          "Connect with existing ERP systems (SAP, Tally), CRM platforms (Salesforce), databases, and third-party APIs.",
      },
    ],
  };

  return (
    <div>
      <Banner
        title={serviceDetails?.title || "Service"}
        subtext={serviceContent.subtext}
      />
      {serviceDetails && (
        <ServiceIntroduction industries={serviceContent.industries}>
          <PortableBody>
            <PortableText
              value={serviceDetails.body}
              components={components}
            />
          </PortableBody>
        </ServiceIntroduction>
      )}
      <Challenges challenges={serviceContent.challenges} />
      <Methodology
        steps={serviceContent.methodology.steps}
        techStack={serviceContent.methodology.techStack}
      />
      <Benefits benefits={serviceContent.benefits} />
      <CallToActionFAQ />
    </div>
  );
};

export default ServicePageClient;
