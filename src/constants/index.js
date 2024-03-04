import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mindspace,
  coderspoint,
  ecommerce,
  threejs,
  faction,
  codeClause,
  miclone,
  prodesk,
  cinesphere
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Video Editing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Faction IT Solutions",
    icon: faction,
    iconBg: "#383E56",
    date: "April 2023 - November 2023",
    points: [
      "Created an e-learning platform using MERN",
      "It is relatively faster than most of the similar platforms of the current time",
      "Also worked as a DSA trainer and imparted trainings in many renowned colleges",
      "Worked as the leader of the intern development team",
    ],
  },
  {
    title: "Python Developer",
    company_name: "CodeClause",
    icon: codeClause,
    iconBg: "#383E56",
    date: "September 2023 - October 2023",
    points: [
      "Completed an online internship provided by codeclause",
      "Build various projects using python Tkinter and many more",
      "Implementing responsive design using python",
      "It was remote internship",
    ],
  },
];

const projects = [
  {
    name: "Mind Space",
    description:
      "Web app that provides spiritual solution to mentally ill people. Intergrated a chat bot with respect to Bhagwad Gita database to provide you solution to your queries . Also provided a personalised check for an individual and provide relevant remedies",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
    ],
    image: mindspace,
    source_code_link: "https://github.com/Harsh72019",
  },
  {
    name: "E Commerece",
    description:
      "E commerece website with full backend and front end fucntionality including login , logout , pagination and also admin panel to get reports in the form of chart and many more ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Harsh72019",
  },
  {
    name: "Coders point",
    description:
      "A highly functional and easy to use e-learning web app that unlocks knowledge for you .Scalable and faster than most of the e-learning platform of current time achieving a score of 91% faster",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: coderspoint,
    source_code_link: "https://coderspoint.in/",
  },
  {
    name: "Mi Clone",
    description:
      "Built and mi clone with a beautiful front end showing my design capabilities",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
    ],
    image: miclone,
    source_code_link: "https://miclonebyharsh.netlify.app/",
  },
  {
    name: "Prodesk Clone",
    description:
      "Built a clone of a organisation's website to get an internship ;)",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
    ],
    image: prodesk,
    source_code_link: "https://prodeskclone.netlify.app/",
  },
  {
    name: "Cine Sphere",
    description:
      "A web app / recommender system based on machine learning that provides you the best and closest recommendations to what you have already watched",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: cinesphere,
    source_code_link: "https://github.com/Harsh72019",
  },
];

export { services, technologies, experiences,  projects };
