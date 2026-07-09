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
      category: "Web Application",

      featured: true,

      features: [
        "Live Market Data",
        "TradingView Charts",
        "Binance WebSocket",
        "Referral System",
        "Responsive UI"
      ],

      githubUrl: "...",
      id: "01",

      image: Images.biome,

      liveUrl: "...",

      longDescription:
        "Developed a production-ready trading platform supporting live market updates, referral systems, custom charting experiences and high-performance UI for active traders.",

      shortDescription:
        "Real-time cryptocurrency trading platform with TradingView charts, Binance WebSockets and advanced market analytics.",

      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "GSAP",
        "Socket.io",
        "TradingView",
        "Tailwind CSS"
      ],
      title: "Trading Platform",
      year: "2025"
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
        img: "",
        name: "TanStack Query"
      },
      {
        category: "Web3",
        img: Images.wagmi,
        name: "Wagmi"
      },
      {
        category: "Wallet Connection",
        img: "",
        name: "Reown AppKit"
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
