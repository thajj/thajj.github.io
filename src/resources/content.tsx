import React from "react";

type Person = {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  location: string;
  languages: string[];
};

type SocialLink = {
  name: string;
  icon: string;
  link: string;
};

type Home = {
  label: string;
  title: string;
  description: string;
  headline: string;
  subline: string;
  valueProposition?: string;
  featuredProjectSlugs?: string[];
  featuredWork?: {
    eyebrow: string;
    title: string;
    intro: string;
  };
};

type About = {
  label: string;
  title: string;
  description: string;
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    display: boolean;
    title: string;
    description: string;
  };
  work: {
    display: boolean;
    title: string;
    experiences: {
      company: string;
      location: string;
      timeframe: string;
      role: string;
      achievements: string[];
      images: {
        src: string;
        alt: string;
        width: number;
        height: number;
      }[];
    }[];
  };
  studies: {
    display: boolean;
    title: string;
    institutions: {
      name: string;
      description: string;
    }[];
  };
  technical: {
    display: boolean;
    title: string;
    intro?: string;
    skills: {
      title: string;
      description?: string;
      /** tags = compact chips; list = longer lines (certs, publications) */
      format?: "tags" | "list";
      items: string[];
      images: {
        src: string;
        alt: string;
        width: number;
        height: number;
      }[];
    }[];
  };
};

type Blog = {
  label: string;
  title: string;
  description: string;
};

type Work = {
  label: string;
  title: string;
  description: string;
  heroLede?: string;
  collections?: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    slugs: string[];
  }[];
};

type Gallery = {
  label: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    orientation: string;
  }[];
};

type Contact = {
  label: string;
  title: string;
  description: string;
};

const person: Person = {
  firstName: "Toufic",
  lastName: "Hajj",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Full-Stack & Cloud Platform Engineer",
  avatar: "/images/avatar.png",
  location: "America/Montreal", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "English"], // optional: Leave the array empty if you don't want to display languages
};

const social: SocialLink[] = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/thajj",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/toufic-hajj",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@toufichajj.dev",
  },
];

const home: Home = {
  label: "Home",
  title: `Toufic Hajj — Platforms & Product Engineering`,
  description: `${person.name} — Senior Full-Stack & Cloud Platform Engineer. Knowledge platforms, institutional deployment, and products shipped from ideation to production.`,
  headline: `Toufic Hajj`,
  subline: `Senior Full-Stack & Cloud Platform Engineer — ideation to mass deployment, on-prem to cloud.`,
  valueProposition:
    "I design and ship platforms for public and private organizations: architecture, compliance, and delivery that hold up from first prototype to city-scale rollout.",
  featuredProjectSlugs: ["thirty-north", "banq", "chalons"],
  featuredWork: {
    eyebrow: "Selected work",
    title: "Proof under constraint.",
    intro:
      "Latest first: a live privacy-first product, then institutional platforms that show the same ownership — citizen UX, bilingual delivery, and systems people can operate.",
  },
};

const about: About = {
  label: "Who am I?",
  title: "About me",
  description: `Meet ${person.name}, ${person.role}. Platforms, products, and delivery from Montreal.`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/hajj-toufic",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: `Senior Full-Stack & Cloud Platform Engineer with 15+ years owning products end to end — from ideation and architecture through mass deployment across on-premise, cloud, and hybrid environments for public and private organizations.

Earlier in my career I helped shape knowledge-technology platforms for cities, libraries, museums, and institutions (InMédia / BiblioMondo): federated content, DAM, citizen portals, multilingual delivery, accessibility (WCAG), and GDPR-conscious systems serving millions of users worldwide.

My recent work focuses on cloud-native platforms, data-heavy systems, workflow automation, security-conscious architecture, governance/compliance, and AI-enabled engineering tools.

I’ve led teams of 10+ while remaining highly hands-on. I’m especially interested in roles where full-stack engineering, cloud platforms, data systems, automation, and AI integration create measurable business value.`,
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Wisk.aero",
        location: "Montreal, QC",
        timeframe: "September 2025 - Present",
        role: "Full Stack Software Engineer",
        achievements: [
          `Architect, develop, and optimize robust cloud-native software solutions end-to-end.`,
          `Own the full SDLC of high-reliability features, ensuring seamless deployment and operations.`,
          `Collaborate in cross-functional teams to deliver scalable, debt-free codebases.`,
        ],
        images: [],
      },
      {
        company: "Technologies Toufic Hajj Inc. — Thirty North",
        location: "Montreal, QC",
        timeframe: "2024 - Present",
        role: "Founder / Full-Stack Product",
        achievements: [
          `Shipped thirtynorthgst.ca: privacy-first GST/HST threshold tracker for Canadian cross-border freelancers.`,
          `Built dual CRA threshold tests (single-quarter and four-quarter), bilingual EN/FR UX, guides, and paid workflow kits.`,
          `Designed honest product limits — calculates user inputs, does not classify work or replace tax advice — with local-first data and merchant-of-record checkout.`,
        ],
        images: [],
      },
      {
        company: "CWP Energy Solutions",
        location: "Montreal, QC",
        timeframe: "October 2024 - July 2025",
        role: "Full Stack Developer",
        achievements: [
          `Built high-throughput applications to process real-time data for internal and external users.`,
          `Designed data visualization tools and trading interfaces for executing transactions across electricity markets.`,
          `Created a client portal to automate billing and analytical reporting.`,
        ],
        images: [],
      },
      {
        company: "Freelance",
        location: "Montreal, QC",
        timeframe: "June 2020 - August 2024",
        role: "Full Stack Developer",
        achievements: [
          `Designed and built a comprehensive trading toolkit using React, natively integrated with Electron.`,
          `Delivered multiple high-quality React projects focusing on micro-frontend and component-based architectures.`,
          `Refined RLHF reward models to improve French LLM outputs.`,
        ],
        images: [],
      },
      {
        company: "InMédia Technologies / Bibliomondo",
        location: "Montreal, QC",
        timeframe: "September 2017 - February 2020",
        role: "Vice President Research And Development",
        achievements: [
          `Owned R&D strategy for an all-in-one knowledge platform (CMS, DAM, catalogues, citizen portals, mobile, digital signage) serving cities, libraries, museums, and institutions.`,
          `Drove delivery from ideation to production across on-premise, cloud, and hybrid deployments for public-sector and private clients.`,
          `Established accessibility (WCAG) and privacy-conscious (GDPR-aligned) engineering standards for citizen-facing portals.`,
          `Ensured 99.8% product uptime through cloud architecture, operational rigor, and risk management.`,
          `Led technical evaluations for tenders, helping secure $2M+ in contracts.`,
          `Managed R&D teams of 10+ through major platform transitions while staying hands-on on architecture and delivery.`,
          `Co-authored research on semantic harvesting, micrometadata, and ML-driven knowledge systems (SMESE / MLM lines of work).`,
        ],
        images: [],
      },
      {
        company: "Bibliomondo Technologies du savoir",
        location: "Montreal, QC",
        timeframe: "March 2012 - September 2017",
        role: "Director Of Research Development",
        achievements: [
          `Architected modern SPA and mobile experiences (React, React Native, Redux, Jest) for multilingual knowledge and cultural portals.`,
          `Led a zero-downtime microservices migration that reduced infrastructure cost while protecting uptime for institutional clients.`,
          `Advanced platform capabilities spanning federated content, multimedia catalogues, DAM, and rights-aware media distribution.`,
          `Supported large-scale public deployments across municipal, library, and museum networks.`,
        ],
        images: [],
      },
      {
        company: "Bibliomondo Technologies du savoir",
        location: "Montreal, QC",
        timeframe: "March 2010 - February 2012",
        role: "Lead Software Developer",
        achievements: [
          `Directed code reviews, testing, and deployment of J2EE (JSF, REST APIs) and web applications for knowledge-technology products.`,
          `Orchestrated JSP → JSF front-end migration and EJB → RESTful services transition to improve scalability and maintainability.`,
          `Deployed and supported systems across 1,500+ workstations in public libraries, museums, and city administrations (on-prem / networked environments).`,
          `Built foundations for secure public multimedia workstation and resource management in institutional settings.`,
        ],
        images: [],
      },
      {
        company: "Bibliomondo Technologies du savoir",
        location: "Montreal, QC",
        timeframe: "October 2009 - March 2010",
        role: "Software Developer",
        achievements: [
          `Developed Java web applications, reducing deployment errors by 50% through automated testing.`,
          `Guided QA to integrate Selenium, raising automated test coverage by 80%.`,
          `Established CI/CD pipelines using Jenkins and Maven, boosting developer productivity by 30%.`,
        ],
        images: [],
      },
      {
        company: "HD Firms",
        location: "Montreal, QC",
        timeframe: "September 2008 - September 2009",
        role: "Founder",
        achievements: [
          `Completed 30+ freelance projects with a perfect 5/5 client satisfaction rating.`,
          `Developed PHP/MySQL web applications meeting strict timelines and client specifications.`,
        ],
        images: [],
      },
      {
        company: "NetCom",
        location: "Laval, QC",
        timeframe: "January 2005 - May 2006",
        role: "Software Programmer",
        achievements: [
          `Maintained legacy codebases, improving system stability and performance.`,
          `Migrated backend from VB6 to C#.NET and UI from Classic ASP to ASP.NET.`,
          `Configured internal infrastructure (Active Directory, Exchange, GPO) for a secure IT environment.`,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "I.S.I Montréal",
        description: `Intégration de systèmes d’information, Information Technology (2007 - 2008)`,
      },
      {
        name: "Université de Montréal",
        description: `Computer Science (2003 - 2006)`,
      },
    ],
  },
  technical: {
    display: true,
    title: "Architecture & technical range",
    intro:
      "Capability-first, not stack-first: pick the shape that fits the constraint — protocol, runtime, and cloud brand are tools, not identity.",
    skills: [
      {
        title: "Platform architecture",
        description:
          "End-to-end platform shape across on-prem, cloud, and hybrid — designed to survive real operators and real scale.",
        format: "tags",
        items: [
          "Cloud-native & hybrid platforms",
          "On-prem when the brief demands it",
          "Service boundaries (microservices ↔ modular monoliths)",
          "Event-driven & async architectures",
          "API & integration design (REST, GraphQL, gRPC, …)",
          "Serverless, containers, or VMs — fit for purpose",
          "Multi-cloud literacy (AWS · GCP · Azure)",
        ],
        images: [],
      },
      {
        title: "Application systems",
        description:
          "Full-stack product surfaces with durable boundaries — web, desktop, and mobile when the product needs them.",
        format: "tags",
        items: [
          "TypeScript & modern web platforms",
          "React · Next.js and peer ecosystems",
          "Node.js & service backends",
          "JVM / Spring when enterprise fits",
          "Angular · Vue when the codebase calls for it",
          "Desktop & mobile (Electron · Flutter, …)",
          "Client state & component architecture",
        ],
        images: [],
      },
      {
        title: "Data platforms & pipelines",
        description:
          "Operational and analytical paths: stores, streams, and processing chosen for the data shape — not a single vendor dogma.",
        format: "tags",
        items: [
          "Pipeline & data-flow design",
          "Streaming & messaging (Kafka and peers)",
          "Batch & distributed compute (Spark and peers)",
          "Real-time & near-real-time paths",
          "Relational stores (PostgreSQL, MySQL, …)",
          "Document, search & secondary indexes",
          "Analytics-ready modeling",
        ],
        images: [],
      },
      {
        title: "SRE & reliability",
        description:
          "Architecture that can be operated — uptime, failure modes, and day-2 reality baked into delivery.",
        format: "tags",
        items: [
          "Reliability engineering",
          "Observability & operability",
          "Resilient deploy & rollback patterns",
          "SLOs / error budgets as design input",
          "Incident-aware delivery",
          "Institutional uptime track record",
        ],
        images: [],
      },
      {
        title: "GitOps & delivery",
        description:
          "Release as a controlled system: source-of-truth delivery, promotion paths, and platforms that match the org.",
        format: "tags",
        items: [
          "GitOps & declarative delivery",
          "CI/CD across toolchains",
          "Kubernetes & managed clusters",
          "Containers & runtime packaging",
          "Pipeline platforms (Jenkins, cloud CI, …)",
          "Environment promotion & release discipline",
          "Infrastructure-aware delivery",
        ],
        images: [],
      },
      {
        title: "Security & compliance",
        description:
          "Trust constraints treated as product requirements — accessibility, privacy, and governance shaped to the jurisdiction and audience.",
        format: "tags",
        items: [
          "DevSecOps & secure SDLC",
          "Threat-aware architecture",
          "Accessibility (WCAG and beyond)",
          "Privacy & data protection (GDPR and peers)",
          "Privacy by design",
          "Public & regulated-sector governance",
          "Policy, audit & evidence readiness",
        ],
        images: [],
      },
      {
        title: "FinOps & cloud economics",
        description:
          "Cost as an architectural signal — right-sizing, tradeoffs, and spend that tracks real value.",
        format: "tags",
        items: [
          "Cost-aware architecture",
          "Right-sizing & efficiency",
          "Cloud spend ↔ reliability tradeoffs",
          "Infra cost reduction without false savings",
          "Vendor & tender evaluation",
          "Build-vs-buy judgment",
        ],
        images: [],
      },
      {
        title: "Visual systems & UX",
        description:
          "Interfaces people can operate under pressure — product UI, data visualization, and multilingual delivery.",
        format: "tags",
        items: [
          "Product UI / UX",
          "Data visualization & visual analytics",
          "Operator & trading-style dashboards",
          "Information architecture",
          "Multilingual / bilingual UX",
          "Citizen & institutional portals",
          "Design systems & interaction patterns",
        ],
        images: [],
      },
      {
        title: "Leadership & delivery practice",
        description:
          "Hands-on technical leadership across R&D, tenders, and cross-functional delivery — method follows the mission.",
        format: "tags",
        items: [
          "R&D leadership",
          "Architecture ownership",
          "Team leadership (10+)",
          "Public-sector tenders & evaluations",
          "Adaptive delivery (Agile and beyond)",
          "Technical writing & decision records",
          "Stakeholder & exec alignment",
        ],
        images: [],
      },
      {
        title: "Certifications",
        format: "list",
        items: [
          "Google Cloud Certified — Associate Cloud Engineer",
          "Architecting with Google Kubernetes Engine Specialization (Google Cloud)",
          "Cloud Application Development Foundations Specialization (IBM)",
          "Python for Data Science, AI & Development (IBM)",
          "Introduction to Cloud Computing (IBM)",
        ],
        images: [],
      },
      {
        title: "Research & publications",
        format: "list",
        items: [
          "Trusted smart harvesting algorithm based on semantic relationship and social networks (SMESE-TSHA) — co-author, InMédia Technologies",
          "Traceable and Trusted Smart Harvesting Algorithm from Unstructured and Structured Web (SMESE-TTSHA) — co-author, InMédia Technologies",
          "MLM-based learning and boosting model – part 1: multi-sources/rights of digital resources to build universal knowledge repositories — co-author, InMédia Technologies",
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  label: "Blog",
  title: "Notes on platforms & delivery",
  description: `Essays on institutional platforms, deployment, leadership, and building software that survives real constraints — by ${person.name}.`,
};

const work: Work = {
  label: "Work",
  title: "Selected work",
  description: `Case studies by ${person.name} — institutional platforms, product systems, and independent builds, grouped by the constraints they were built for.`,
  heroLede:
    "Not a flat archive. Work grouped by use case — so the strongest signal for each brief is easy to find.",
  collections: [
    {
      id: "products",
      eyebrow: "Shipped products",
      title: "Live systems with honest limits.",
      intro:
        "Privacy-first tools and operator-facing product systems — designed for real decisions, not demos. Start with Thirty North.",
      slugs: ["thirty-north", "stonkify"],
    },
    {
      id: "institutional",
      eyebrow: "Institutional platforms",
      title: "Public interfaces under real constraints.",
      intro:
        "National libraries and municipal companions — citizen UX, multilingual delivery, accessibility, and shipping inside knowledge-platform ecosystems.",
      slugs: ["banq", "chalons"],
    },
    {
      id: "independent",
      eyebrow: "Independent builds",
      title: "Full-stack craft outside the institution.",
      intro:
        "Client and personal products that show range — useful evidence of delivery, not the center of the career narrative.",
      slugs: ["open-trivia", "portfolio"],
    },
  ],
};

const contact: Contact = {
  label: "Contact",
  title: "Get in touch",
  description: `Reach out to ${person.name} for collaboration or inquiries.`,
};

const gallery: Gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [],
};

const context = {
  eyebrow: "Context",
  title: "The arena I know best.",
  intro:
    "A decade inside knowledge technologies (InMédia / BiblioMondo) — platforms for cities, libraries, museums, and institutions that must federate content, respect rights, and survive mass deployment.",
  sectors: [
    {
      label: "01",
      title: "Cities",
      body: "Citizen portals, municipal intranets, and public e-services that keep working when the city is online — and when it isn’t.",
    },
    {
      label: "02",
      title: "Libraries",
      body: "Multimedia catalogues, personal spaces, and companion apps that connect physical collections to digital convenience.",
    },
    {
      label: "03",
      title: "Museums",
      body: "DAM, virtual exhibitions, and digital signage across heritage networks — rights-aware media, not just file storage.",
    },
    {
      label: "04",
      title: "Enterprises",
      body: "Private and hybrid deployments for organizations that need the same platform rigor without a public-facing mandate.",
    },
  ],
  capabilities: {
    label: "Platform",
    title: "What the stack had to do",
    intro:
      "Not a marketing site — an open, flexible CMS + DAM platform that creates, manages, and presents information and services to the public.",
    items: [
      "Web portals and personal / citizen spaces",
      "Multimedia catalogues and advanced viewers",
      "Digital asset management with usage rights",
      "Virtual exhibitions and digital signage",
      "Mobile apps, newsletters, calendars, and events",
      "Forms, surveys, and back-office operations",
      "Multilingual delivery with WCAG-minded admin tooling",
      "GDPR-conscious handling of personal data",
    ],
  },
  deployment: {
    label: "Deployment",
    title: "Where it had to run",
    intro:
      "Same product family — different operational realities. Architecture that survives tenders, audits, and city-scale rollout.",
    items: [
      "On-premise: institutional networks and 1,500+ public workstations",
      "Cloud: multi-tenant portals and government API integrations",
      "Hybrid: public surfaces with secured intranet cores",
      "Public organizations: libraries, museums, municipalities, ministries",
      "Private organizations: enterprise knowledge and media workflows",
      "Mass deployment with uptime, accessibility, and tender scrutiny",
    ],
  },
  lifecycle: {
    eyebrow: "From idea to fleet",
    stages: [
      {
        meta: "Ideate",
        title: "Shape the product",
        body: "Roadmaps, research (SMESE / MLM harvesting lines), and stakeholder needs before a line of production code ships.",
      },
      {
        meta: "Architect",
        title: "Make it durable",
        body: "SPA/mobile fronts, microservices migrations, federated content, and standards that outlast a single release.",
      },
      {
        meta: "Deploy",
        title: "Roll it out at scale",
        body: "On-prem, cloud, and hybrid mass deployment for institutions that cannot treat go-live as a demo day.",
      },
    ],
  },
  aside:
    "That context still frames how I build today — including Thirty North: cloud-era products with the same bias toward privacy, clear limits, and systems people can operate before the next invoice (or deploy) changes the answer.",
};

const renderJSX = (str: string) => {
  return <span dangerouslySetInnerHTML={{ __html: str }} />;
};

export {
  person,
  social,
  home,
  about,
  blog,
  work,
  contact,
  gallery,
  context,
  renderJSX,
};
