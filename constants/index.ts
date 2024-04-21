import { FaMicrochip } from "react-icons/fa6";
import { IoBody } from "react-icons/io5";
import { LuDatabaseBackup } from "react-icons/lu";

export const products = [
  {
    title: "",
    description: "",
    imgURL: "/images/figure.jpg",
  },
  {
    title: "Control module",
    description: "Save and send data to your computer",
    imgURL: "/images/control_mod.jpg",
  },
  {
    title: "Inertial module",
    description: "Capture motion data with high precision",
    imgURL: "/images/inertial_mod.jpg",
  },
  {
    title: "Load module",
    description: "Record and analyze the force applied",
    imgURL: "/images/load_mod.jpg",
  },
];

export const services = [
  {
    IconComponent: IoBody,
    label: "Full body capture",
    subtext:
      "Full body motion capture system including hands and head unlike any other in the market.",
  },
  {
    IconComponent: LuDatabaseBackup,
    label: "Backup device",
    subtext:
      "Our device natively supports backup of your data on an SD card for easy access.",
  },
  {
    IconComponent: FaMicrochip,
    label: "Easy to compute data",
    subtext:
      "Data received from the device is parsed into easy to read format.",
  },
];

export const contact = [
  {
    imgURL: "/images/fg.jpeg",
    name: "Farah Gherir",
    linkedinURL: "https://www.linkedin.com/in/farah-gherir-17ab21268/",
    feedback:
      "Collaboration between the various areas of expertise for this\
       project was truly invigorating. Each person brought their skills\
        to the table to create something unique.",
    role: "Quality manager",
  },
  {
    imgURL: "/images/lg.png",
    name: "Loïs Gallaud",
    linkedinURL: "https://www.linkedin.com/in/loisgallaud/",
    feedback:
      "Our teamwork has been very fluid and everything felt intuitive with the team. I am very proud of the result.",
    role: "Software manager",
  },
  {
    imgURL: "/images/ef.jpeg",
    name: "Emilie Ferreira",
    linkedinURL: "https://www.linkedin.com/in/emilie-ferreira-96755721b/",
    feedback:
      "The synergy among team members was palpable throughout the project,\
       resulting in a cohesive and exceptional outcome.",
    role: "Project manager",
  },
  {
    imgURL: "/images/ngn.jpeg",
    name: "Nathan Grillet-Niess",
    linkedinURL: "https://www.linkedin.com/in/natgrn/",
    feedback:
      "I’m grateful for the opportunity to work alongside such talented individuals.",
    role: "Technical manager",
  },
  {
    imgURL: "/images/nl.jpeg",
    name: "Nathan Lebas",
    linkedinURL: "https://www.linkedin.com/in/nathan-lebas-a6486619a/",
    feedback:
      "The project’s success is a reflection of our strong collaboration \
      and mutual support. Working together, we achieved remarkable results.",
    role: "Communication manager",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/pdf/notice.pdf" },
      { title: "Public Report", url: "/pdf/RP_PI15.pdf" },
      { title: "Technical Report", url: "/pdf/RT_PI15.pdf" },
      { title: "Poster", url: "/pdf/poster.pdf" },
    ],
  },
  {
    title: "Team",
    links: [
      { title: "Blog", url: "/blog" },
      { title: "News", url: "/news" },
    ],
  },
  {
    title: "Socials (soon)",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
