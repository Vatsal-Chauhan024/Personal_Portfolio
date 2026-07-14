import English from "./English"
import Images from "./Images"

const Constant = {
  AboutStats: [
    {
      id: 1,
      subtitle: "Experience",
      title: "Years of",
      value: "2"
    },
    {
      id: 2,
      subtitle: "Delivered",
      title: "Projects",
      value: "15+"
    },
    {
      id: 3,
      subtitle: "Served",
      title: "Clients",
      value: "30+"
    }
  ],
  ContactUsArray: [
    {
      content: "adarsh_vc24@yahoo.com",
      imageUrl: Images.email,
      name: "email",
      title: "Email"
    },
    {
      content: "https://www.linkedin.com/in/vatsal-chauhan024/",
      imageUrl: Images.linkedIn,
      name: "linkedIn",
      title: "LinkedIn"
    },
    {
      content: "https://github.com/Vatsal-Chauhan024",
      imageUrl: Images.github,
      name: "github",
      title: "Github"
    }
  ],
  NavArray: [
    {
      id: "hero",
      name: "Home"
    },
    {
      id: "about",
      name: English.E4
    },
    { id: "services", name: English.E7 },
    {
      id: "skills",
      name: English.E5
    },
    {
      id: "projects",
      name: English.E6
    },
    {
      id: "contact_us",
      name: "Contact"
    }
  ],
  ProjectsArray: [
    {
      category: "Production Web Application",

      features: ["Stripe Payments", "Reward System", "Responsive UI", "Reusable Components"],
      githubUrl: "",
      id: "01",

      image: Images.dating,

      liveUrl: "https://app.firedates.com/dashboard/de",

      longDescription:
        "Led frontend development of a production-grade social media application using React, TypeScript, and Tailwind CSS. Implemented Stripe payment integration, reusable component architecture, and a point-based engagement system for users primarily based in Germany.",

      shortDescription:
        "Production-ready social media platform with Stripe payments and engagement rewards.",

      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Axios", "Redux Toolkit"],
      title: "Web Based Social Media App",
      year: "2025"
    },

    {
      category: "AI Powered Web Platform",

      features: ["PDF Rendering", "Annotations", "AI Workflow", "Dynamic Forms"],
      githubUrl: "",
      id: "02",

      image: Images.ai_based,

      liveUrl: "https://reeva.expert/",

      longDescription:
        "Collaborated on the frontend development of an AI-based land registration system, implementing PDF rendering, annotation tools, dynamic field mapping, and responsive user interfaces for document workflows.",

      shortDescription: "AI-powered document management and land registration platform.",

      technologies: ["React", "TypeScript", "Tailwind CSS", "PDF.js", "Canvas API"],
      title: "AI Based Land Registration System",
      year: "2025"
    },

    {
      category: "Web3 Portal",

      features: ["Wallet Connect", "Smart Contracts", "Blockchain Transactions", "Responsive UI"],
      githubUrl: "",
      id: "03",

      image: Images.web,

      liveUrl: "",

      longDescription: `Independently developed the complete frontend of a Web3 member portal using React, TypeScript, TanStack Query, Wagmi, and Reown AppKit. Contributed to the admin dashboard by implementing key features, integrating smart contracts, wallet authentication, blockchain interactions, and responsive interfaces for a scalable decentralized application.`,

      shortDescription:
        "Production Web3 Referral  Member & Admin portal with blockchain integration.",

      technologies: [
        "React",
        "TypeScript",
        "TanStack Query",
        "Wagmi",
        "Reown Kit",
        "Tailwind CSS",
        "Ether.js"
      ],
      title: "Web3 Referral Based Admin & Member Panel",
      year: "2025"
    },

    {
      category: "E-Commerce Website",

      features: ["Shopping Cart", "Redux", "Responsive Design", "Reusable Components"],
      githubUrl: "",
      id: "07",

      image: Images.ecommerce,

      liveUrl: "https://my-stiqk-dawwn-ecommerce.vercel.app/",

      longDescription:
        "Built a responsive eCommerce application with scalable Redux architecture, reusable components, and optimized frontend performance using React, TypeScript, and Tailwind CSS.",

      shortDescription: "Modern production-ready eCommerce platform.",

      technologies: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      title: "E-Commerce Platform",
      year: "2024"
    },

    {
      category: "Trading Landing Page",

      features: ["GSAP Animations", "Responsive Design", "Landing Page", "Performance Optimized"],
      githubUrl: "",
      id: "08",

      image: Images.zeno_landing,

      liveUrl: "https://zenotraders.com/",

      longDescription:
        "Developed the complete frontend of a high-performance trading landing page using React, TypeScript, Tailwind CSS, and GSAP with smooth animations and engaging user interactions.",

      shortDescription: "Animation-rich landing page for a trading platform.",

      technologies: ["React", "TypeScript", "GSAP", "Tailwind CSS"],
      title: "Zeno Traders",
      year: "2025"
    },

    {
      category: "Interactive Website",

      features: ["GSAP Animations", "Responsive", "Reusable Components", "Production Deployment"],
      githubUrl: "",
      id: "09",

      image: Images.gsap_landing,

      liveUrl: "https://cocktail-landing-page-tan.vercel.app/",

      longDescription:
        "Developed a fully responsive website featuring advanced GSAP animations, reusable React components, and optimized deployment using Vercel and GitHub workflows.",

      shortDescription: "Interactive GSAP-powered responsive website.",

      technologies: ["React", "GSAP", "Tailwind CSS", "Vercel"],
      title: "GSAP Landing Page",
      year: "2024"
    }
  ],
  ServicesArray: [
    {
      description:
        "Building scalable, maintainable and production-ready web applications with modern frontend architecture, reusable components and clean development practices.",
      id: "01",
      label: "Development",
      title: "Frontend Development"
    },
    {
      description:
        "Transforming designs into pixel-perfect, responsive interfaces that deliver consistent experiences across every screen size and device.",
      id: "02",
      label: "Engineering",
      title: "UI Engineering"
    },
    {
      description:
        "Developing blockchain-enabled applications with wallet connectivity, smart contract interactions and seamless on-chain user experiences.",
      id: "03",
      label: "Blockchain",
      title: "Web3 Integration"
    },
    {
      description:
        "Creating smooth animations, engaging transitions and interactive user experiences that enhance usability without compromising performance.",
      id: "04",
      label: "Experience",
      title: "Motion & Interaction"
    },
    {
      description:
        "Improving application speed, rendering efficiency and user experience through modern optimization techniques and best development practices.",
      id: "05",
      label: "Optimization",
      title: "Performance Optimization"
    },
    {
      description:
        "Collaborating directly with clients to understand business requirements, provide technical guidance, share project updates and deliver solutions aligned with their goals.",
      id: "06",
      label: "Collaboration",
      title: "Client Communication"
    }
  ],
  SkillsMarqueeArray: [
    [
      {
        category: "Language",
        img: Images.html,
        name: "HTML"
      },
      {
        category: "Language",
        img: Images.css,
        name: "CSS"
      },
      {
        category: "Language",
        img: Images.javascript,
        name: "JavaScript"
      },
      {
        category: "Language",
        img: Images.typescript,
        name: "TypeScript"
      },
      {
        category: "Frontend",
        img: Images.reactLogo,
        name: "React"
      },
      {
        category: "Frontend",
        img: Images.next,
        name: "Next.js"
      },
      {
        category: "Styling",
        img: Images.tailwind,
        name: "Tailwind CSS"
      },
      {
        category: "Animation",
        img: Images.gsap,
        name: "GSAP"
      },
      {
        category: "Charting",
        img: Images.tradingview,
        name: "TradingView Charting Library"
      },
      {
        category: "Component Library",
        img: Images.shadcn,
        name: "ShadCN UI"
      },
      {
        category: "Component Library",
        img: Images.daisyui,
        name: "DaisyUI"
      }
    ],

    [
      {
        category: "Data Fetching",
        img: Images.axios,
        name: "Axios"
      },
      {
        category: "Server State",
        img: Images.tanstack,
        name: "TanStack Query"
      },
      {
        category: "Web3",
        img: Images.wagmi,
        name: "Wagmi"
      },
      {
        category: "Wallet Connection",
        img: Images.reown,
        name: "Reown Kit"
      },
      {
        category: "Blockchain",
        img: Images.blockchain,
        name: "Smart Contract Integration"
      },
      {
        category: "Version Control",
        img: Images.git,
        name: "Git"
      },
      {
        category: "Git Client",
        img: Images.github,
        name: "GitHub Desktop"
      },
      {
        category: "Git Client",
        img: Images.fork,
        name: "Fork"
      },
      {
        category: "Deployment",
        img: Images.vercel,
        name: "Vercel"
      }
    ],

    [
      {
        category: "Editor",
        img: Images.vscode,
        name: "VS Code"
      },
      {
        category: "API Testing",
        img: Images.postman,
        name: "Postman"
      },
      {
        category: "Code Formatter",
        img: Images.prettier,
        name: "Prettier"
      },
      {
        category: "Linting",
        img: Images.eslint,
        name: "ESLint"
      },
      {
        category: "Code Quality",
        img: Images.biome,
        name: "Biome"
      },
      {
        category: "Git Hooks",
        img: Images.lefthook,
        name: "Lefthook"
      },
      {
        category: "Project Management",
        img: Images.zoho,
        name: "Zoho Projects"
      },
      {
        category: "Team Collaboration",
        img: Images.lark,
        name: "Lark"
      }
    ]
  ]
}

export default Constant
