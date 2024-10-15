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

const person: Person = {
  firstName: "Toufic",
  lastName: "Hajj",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Principal Software Developer",
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
  // subline: `Hi, I'm Toufic 👋, a passionate <code class="bg-muted px-[0.3rem] font-mono text-xl font-semibold">Full Stack Developer</code> who loves turning complex problems into elegant solutions and <code class="bg-muted px-[0.3rem] font-mono text-xl font-semibold">LEADING TEAMS</code> to achieve greatness.`,
  subline: `Hi, I'm Toufic 👋, a passionate <code class="bg-muted px-[0.3rem] font-mono text-xl font-semibold">Full Stack Developer</code> who loves turning complex challenges into seamless solutions.`,
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
    description: `I am a Senior Developer with over 10 years of experience in designing and optimizing scalable applications. I have expertise in leading complex projects through the full software development lifecycle using Agile methodologies like Scrum. Committed to delivering high-quality software, I aim to exceed business goals and technical requirements.`,
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      // {
      //   company: "FLY",
      //   timeframe: "2022 - Present",
      //   role: "Senior Design Engineer",
      //   achievements: [
      //     `Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.`,
      //     `Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.`,
      //   ],
      //   images: [
      //     // optional: leave the array empty if you don't want to display images
      //     {
      //       src: "/images/projects/project-01/cover-01.jpg",
      //       alt: "Once UI Project",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     `Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.`,
      //     `Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.`,
      //   ],
      //   images: [],
      // },
      {
        company: "CWP Energy Trading",
        location: "Montreal, QC",
        timeframe: "October 2024 - Present",
        role: "Full Stack Developer",
        achievements: [
          `Led independent software development initiatives, designing and developing a comprehensive trading toolkit using React 16.8+ with React Hooks and Isomorphic App capabilities, integrated natively with Electron.`,
          `Completed multiple projects on Upwork leveraging the React ecosystem with a strong focus on component-based architecture and micro front-end design, utilizing React Hooks, Context API, and accessibility-enhancing libraries such as React Aria.`,
          `Enhanced the quality of French language model outputs by refining reward models in Reinforcement Learning from Human Feedback (RLHF).`,
        ],
        images: [],
      },
      {
        company: "Self-Employed",
        location: "Laval, QC",
        timeframe: "June 2020 - September 2024",
        role: "Independent Software Developer",
        achievements: [
          `Led independent software development initiatives, designing and developing a comprehensive trading toolkit using React 16.8+ with React Hooks and Isomorphic App capabilities, integrated natively with Electron.`,
          `Completed multiple projects on Upwork leveraging the React ecosystem with a strong focus on component-based architecture and micro front-end design, utilizing React Hooks, Context API, and accessibility-enhancing libraries such as React Aria.`,
          `Enhanced the quality of French language model outputs by refining reward models in Reinforcement Learning from Human Feedback (RLHF).`,
        ],
        images: [],
      },
      {
        company: "InMedia Technologies",
        location: "Montreal, QC",
        timeframe: "Sept 2017 – Feb 2020",
        role: "VP OF R&D",
        achievements: [
          `Developed and implemented a software development strategy and roadmap, incorporating accessibility standards and best practices in web development.`,
          `Ensured product quality, performance, and security by integrating risk management and leveraging cloud platforms, leading to 99.8% uptime.`,
          `Provided technical expertise in evaluating tender opportunities, securing contracts worth over $2 million.`,
        ],
        images: [],
      },
      {
        company: "InMedia Technologies",
        location: "Montreal, QC",
        timeframe: "Feb 2012 – Sept 2017",
        role: "DIRECTOR OF R&D",
        achievements: [
          `Spearheaded the development of the company's flagship product, managing the entire lifecycle from concept to deployment.`,
          `Developed UX prototypes with React and React Native, established SPA projects with ES6+, Redux, React Router, i18next for internationalization, and Jest for testing.`,
          `Led the migration to a microservices architecture, achieving near-zero downtime and significantly reducing server costs.`,
        ],
        images: [],
      },
      {
        company: "Bibliomondo",
        location: "Montreal, QC",
        timeframe: "Mar 2010 – Feb 2012",
        role: "LEAD DEVELOPER",
        achievements: [
          `Led code reviews, testing, debugging, and deployment of web applications using the J2EE stack (JSF, Servlet, REST API), HTML/CSS, and JavaScript.`,
          `Managed the front-end migration from JSP to JSF, enhancing Java EE and CDI integration.`,
          `Transitioned the architecture to a service-oriented model, improving scalability and performance by migrating from EJB to REST services.`,
          `Successfully industrialized and deployed applications across 1,500 workstations in major libraries (e.g., Ville de Paris, Ville de Laval), museums, and city administrations, boosting operational efficiency and user experience.`,
        ],
        images: [],
      },
      {
        company: "Bibliomondo",
        location: "Montreal, QC",
        timeframe: "Mar 2009 – Feb 2010",
        role: "ANALYST PROGRAMMER",
        achievements: [
          `Implemented unit tests, deployments, and version control for existing and new Java web applications, reducing deployment errors by 50%.`,
          `Guided the QA team in integrating Selenium, increasing automated testing coverage by 80% and reducing manual testing efforts.`,
          `Introduced Jenkins, Nexus, and Maven, establishing a robust CI/CD infrastructure that streamlined the development process, resulting in a 30% increase in productivity.`,
        ],
        images: [],
      },
      {
        company: "Freelancer.com (@HDFirms)",
        location: "Montreal, QC",
        timeframe: "2006 – 2009",
        role: "DEVELOPER",
        achievements: [
          `Achieved a 5/5 rating on Freelancer.com, completing over 30 projects with diverse clients.`,
          `Developed and maintained web applications using PHP, MySQL, JavaScript, XML, HTML, and CSS, consistently meeting client specifications and deadlines.`,
        ],
        images: [],
      },
      {
        company: "Netcom Inc",
        location: "Laval, QC",
        timeframe: "2006",
        role: "ANALYST PROGRAMMER",
        achievements: [
          `Evaluated and maintained existing software code, enhancing stability and performance.`,
          `Migrated the backend from VB6 to C#.NET and upgraded the UI while migrating from Classic ASP to ASP.NET.`,
          `Installed and configured the company's internal network infrastructure, including Active Directory, Exchange, and Group Policy Objects, ensuring a secure and efficient IT environment.`,
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
        name: "Full Stack Software Developer",
        description: `In progress`,
      },
      {
        name: "IBM Professional Certificate",
        description: `Cloud Application Development Foundations, Coursera`,
      },
      {
        name: "ISI, Higher Institute of Computer Science",
        description: `AEC in Information Integration Systems, Montreal, QC`,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      // {
      //   title: "Figma",
      //   description: `Able to prototype in Figma with Once UI with unnatural speed.`,
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-02.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //     {
      //       src: "/images/projects/project-01/cover-03.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      // {
      //   title: "Next.js",
      //   description: `Building next gen apps with Next.js + Once UI + Supabase.`,
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-04.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
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
        description: `AWS, GCP, Azure, Docker, Kubernetes, Jenkins, Git, CI/CD, DevSecOps.`,
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
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const renderJSX = (str: string) => {
  return <span dangerouslySetInnerHTML={{ __html: str }} />;
};

export { person, social, home, about, blog, work, gallery, renderJSX };
