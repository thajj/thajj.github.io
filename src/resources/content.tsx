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
    skills: {
      title: string;
      description: string;
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
  role: "Senior Full-Stack & Cloud Platform Engineer @ Wisk.aero",
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: `Tech Enthusiast and Problem Solver`,
  subline: `Hi, I'm Toufic 👋, a <code class="bg-muted px-[0.3rem] font-mono text-xl font-semibold">Senior Full-Stack & Cloud Platform Engineer</code> who loves turning complex challenges into seamless solutions.`,
  valueProposition: "I design and build scalable applications, lead teams through the full software lifecycle, and deliver high-quality software that meets business goals. Full stack development, cloud, and Agile are my daily focus.",
  featuredProjectSlugs: ["open-trivia", "stonkify", "portfolio"],
};

const about: About = {
  label: "Who am I?",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
    description: `Senior Full-Stack & Cloud Platform Engineer with 15+ years of experience delivering reliable software products end to end — from requirements and architecture to deployment and operations.

My recent work focuses on cloud-native platforms, data-heavy systems, workflow automation, security-conscious architecture, governance/compliance, and AI-enabled engineering tools.

I’ve led teams of 10+ while remaining highly hands-on, with a pragmatic approach to clean architecture, maintainable code, and practical technical direction.

I’m especially interested in roles where I can combine full-stack engineering, cloud platforms, data systems, automation, and AI integration to help teams ship better software and create measurable business value.`,
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
          `Defined R&D roadmaps and software strategies, establishing accessibility and web standards.`,
          `Ensured 99.8% product uptime by leveraging cloud platforms and robust risk management.`,
          `Provided technical evaluations for tender opportunities, securing $2M+ in contracts.`,
          `Managed R&D operations and development teams during major platform transitions.`,
          `Spearheaded flagship product delivery from concept to production deployment.`,
        ],
        images: [],
      },
      {
        company: "Bibliomondo Technologies du savoir",
        location: "Montreal, QC",
        timeframe: "March 2012 - September 2017",
        role: "Director Of Research Development",
        achievements: [
          `Architected modern SPA projects using React, React Native, Redux, and Jest.`,
          `Led a zero-downtime microservices migration, reducing server costs.`,
        ],
        images: [],
      },
      {
        company: "Bibliomondo Technologies du savoir",
        location: "Montreal, QC",
        timeframe: "March 2010 - February 2012",
        role: "Lead Software Developer",
        achievements: [
          `Directed code reviews, testing, and deployment of J2EE (JSF, REST APIs) and web applications.`,
          `Orchestrated JSP to JSF front-end migration, enhancing Java EE integration.`,
          `Transitioned architecture from EJB to RESTful services, boosting scalability.`,
          `Deployed systems to 1,500+ workstations in public libraries, museums, and city administrations.`,
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
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Front-End Technologies",
        description: `ReactJS, TypeScript, Angular, Next.js, Redux, Tailwind CSS, Vue.js.`,
        images: [],
      },
      {
        title: "Back-End & API Development",
        description: `Node.js, Express.js, Spring Boot, REST/RESTful APIs, Microservices, Serverless Architecture.`,
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: `AWS, GCP (GKE), Azure, Docker, Kubernetes, Jenkins, Git, CI/CD, DevSecOps.`,
        images: [],
      },
      {
        title: "Data Management",
        description: `SQL (MySQL, PostgreSQL), NoSQL (MongoDB, Elasticsearch), Apache Kafka, Apache Spark.`,
        images: [],
      },
      {
        title: "Other Skills",
        description: `UI/UX Design, Team Leadership, Project Management, Agile Methodologies (Scrum, Kanban), Technical Documentation.`,
        images: [],
      },
      {
        title: "Certifications",
        description: `Google Cloud Certified - Associate Cloud Engineer, Python for Data Science, AI & Development (IBM), Introduction to Cloud Computing (IBM), Architecting with Google Kubernetes Engine Specialization (Google Cloud), Cloud Application Development Foundations Specialization (IBM).`,
        images: [],
      },
      {
        title: "Publications",
        description: `• "Trusted smart harvesting algorithm based on semantic relationship and social networks (SMESE-TSHA)"\n• "MLM-based learning and boosting model – part 1: multi-sources/rights of digital resources to build universal knowledge repositories using an enriched semantic micro metadata harvester engine and semantic shared knowledge notice"\n• "Traceable and Trusted Smart Harvesting Algorithm from Unstructured and Structured Web (SMESE-TTSHA)"`,
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
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
  // Images from https://pexels.com — use descriptive alt text for accessibility
  images: [
    { src: "/images/gallery/img-01.jpg", alt: "Gallery photo 1, vertical format", orientation: "vertical" },
    { src: "/images/gallery/img-02.jpg", alt: "Gallery photo 2, landscape", orientation: "horizontal" },
    { src: "/images/gallery/img-03.jpg", alt: "Gallery photo 3, vertical format", orientation: "vertical" },
    { src: "/images/gallery/img-04.jpg", alt: "Gallery photo 4, landscape", orientation: "horizontal" },
    { src: "/images/gallery/img-05.jpg", alt: "Gallery photo 5, landscape", orientation: "horizontal" },
    { src: "/images/gallery/img-06.jpg", alt: "Gallery photo 6, vertical format", orientation: "vertical" },
    { src: "/images/gallery/img-07.jpg", alt: "Gallery photo 7, landscape", orientation: "horizontal" },
    { src: "/images/gallery/img-08.jpg", alt: "Gallery photo 8, vertical format", orientation: "vertical" },
    { src: "/images/gallery/img-09.jpg", alt: "Gallery photo 9, landscape", orientation: "horizontal" },
    { src: "/images/gallery/img-10.jpg", alt: "Gallery photo 10, landscape", orientation: "horizontal" },
    { src: "/images/gallery/img-11.jpg", alt: "Gallery photo 11, vertical format", orientation: "vertical" },
    { src: "/images/gallery/img-12.jpg", alt: "Gallery photo 12, landscape", orientation: "horizontal" },
    { src: "/images/gallery/img-13.jpg", alt: "Gallery photo 13, landscape", orientation: "horizontal" },
    { src: "/images/gallery/img-14.jpg", alt: "Gallery photo 14, landscape", orientation: "horizontal" },
  ],
};

const renderJSX = (str: string) => {
  return <span dangerouslySetInnerHTML={{ __html: str }} />;
};

export { person, social, home, about, blog, work, contact, gallery, renderJSX };
