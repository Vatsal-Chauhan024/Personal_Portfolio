import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { FcRules } from "react-icons/fc";
import { MdAnimation } from "react-icons/md";
import {
  SiTailwindcss,
  SiDaisyui,
  SiTypescript,
  SiSocketdotio,
  SiWeb3Dotjs,
} from "react-icons/si";

const SkillsArray = [
  {
    itemIcon: <FaHtml5 />,
    itemName: "HTML5",
    itemValue: "100%",
    bgIcon: "#FFA500",
  },
  {
    itemIcon: <FaJs />,
    itemName: "JS",
    itemValue: "80%",
    bgIcon: "#FFFF00",
  },
  {
    itemIcon: <FaCss3Alt />,
    itemName: "CSS3",
    itemValue: "85%",
    bgIcon: "#007CED",
  },
  {
    itemIcon: <SiTailwindcss />,
    itemName: "Tailwind CSS",
    itemValue: "90%",
    bgIcon: "#FF00FF",
  },
  {
    itemIcon: <SiDaisyui />,
    itemName: "Daisy UI",
    itemValue: "85%",
    bgIcon: "#0FF0FC",
  },
  {
    itemIcon: <SiTypescript />,
    itemName: "TypeScript",
    itemValue: "80%",
    bgIcon: "#008000",
  },
  {
    itemIcon: <FaReact />,
    itemName: "React",
    itemValue: "80%",
    bgIcon: "#007CED",
  },
  {
    itemIcon: <FaChartSimple />,
    itemName: "LightWeight Charts(Trading View)",
    itemValue: "75%",
    bgIcon: "#C0C0C0",
  },
  {
    itemIcon: <SiSocketdotio />,
    itemName: "Socket.io",
    itemValue: "80%",
    bgIcon: "#1FD655",
  },
  {
    itemIcon: <SiWeb3Dotjs />,
    itemName: "Web3 (Wallet Connections & Integration (MetaMask, Tron Wallet))",
    itemValue: "80%",
    bgIcon: "#800000",
  },
  {
    itemIcon: <MdAnimation />,
    itemName: "GSAP (GreenSock Animation Platform)",
    itemValue: "75%",
    bgIcon: "#00008B",
  },
  {
    itemIcon: <FcRules />,
    itemName: "ESLint, Prettier & Husky (Coding Rules for IDE)",
    itemValue: "80%",
    bgIcon: "#800080",
  },
];

export default SkillsArray;
