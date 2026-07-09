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
  NavArray: [
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
      category: "Web3 Member Portal",

      features: ["Wallet Connect", "Smart Contracts", "Blockchain Transactions", "Responsive UI"],
      githubUrl: "",
      id: "03",

      image: Images.cyber_member,

      liveUrl: "https://member.cybercoin.finance/",

      longDescription:
        "Independently developed the complete frontend of a Web3 member portal using React, TypeScript, TanStack Query, Wagmi, and Reown Kit. Integrated smart contracts, wallet authentication, and blockchain interactions for international users.",

      shortDescription: "Production Web3 MLM member portal with blockchain integration.",

      technologies: ["React", "TypeScript", "TanStack Query", "Wagmi", "Reown Kit", "Tailwind CSS"],
      title: "Cyber Coin Member",
      year: "2025"
    },

    {
      category: "Web3 Admin Dashboard",

      features: ["Admin Dashboard", "Wallet Integration", "Blockchain Data", "Role Management"],
      githubUrl: "",
      id: "04",

      image: Images.cyber_admin,

      liveUrl: "https://cyber-coin-admin.vercel.app/",

      longDescription:
        "Developed the frontend of a production-grade Web3 admin panel with blockchain integrations, secure administrative workflows, and scalable dashboard architecture.",

      shortDescription: "Administrative dashboard for managing Web3 MLM operations.",

      technologies: ["React", "TypeScript", "TanStack Query", "Wagmi", "Tailwind CSS", "Reown Kit"],
      title: "Cyber Coin Admin",
      year: "2025"
    },

    {
      category: "Web3 Application",

      features: ["Wallet Connect", "Smart Contracts", "Blockchain", "Responsive Design"],
      githubUrl: "",
      id: "05",

      image: Images.prospera_member,

      liveUrl: "https://www.prosperadao.pro/",

      longDescription:
        "Built the complete frontend of a production-grade Web3 application featuring secure wallet connections, blockchain interactions, and responsive user experiences.",

      shortDescription: "Production decentralized application with secure wallet connectivity.",

      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Wagmi",
        "Smart Contracts",
        "Reown Kit"
      ],
      title: "Prospera DAO",
      year: "2025"
    },

    {
      category: "Web3 Admin Dashboard",

      features: ["Admin Dashboard", "Blockchain", "Smart Contracts", "Responsive UI"],
      githubUrl: "",
      id: "06",

      image: Images.prospera_admin,

      liveUrl: "https://prospera-admin-frontend.vercel.app/",

      longDescription:
        "Developed a production-grade Web3 admin dashboard using React, TypeScript, Tailwind CSS, and Ethers.js with secure blockchain interactions and responsive administration panels.",

      shortDescription: "Administrative dashboard for decentralized ecosystem management.",

      technologies: ["React", "TypeScript", "Tailwind CSS", "Ethers.js", "Smart Contracts"],
      title: "Prospera DAO Admin",
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
