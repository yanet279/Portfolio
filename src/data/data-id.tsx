import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Github, Mail, Phone } from "lucide-react";
import img1 from "../assets/imgProjects/project-1.png"
import img2 from "../assets/imgProjects/project-2.png"
import img3 from "../assets/imgProjects/project-3.png"
import img4 from "../assets/imgProjects/project-4.png"
import img5 from "../assets/imgProjects/project-5.png"
import img6 from "../assets/imgProjects/project-9.png"
import img7 from "../assets/imgProjects/project-7.png"
import iconMongo from "../assets/icons/icons8-mongodb.png"
import iconEx from "../assets/icons/icons8-expresar-js-50.png"
import iconSql from "../assets/icons/icons8-base-de-datos-40.png"
import iconEx2 from "../assets/icons/icons8-expresar-js.png"
import iconMongo2 from "../assets/icons/icons8-mongo-db.png"
import iconSql2 from "../assets/icons/icons8-base-de-datos.png"

export const socialNetworks = [
    {
        id: 1,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:sol3127g@gmail.com",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/yanetchoque",
    },
    {
        id: 2,
        logo: <Phone size={30} strokeWidth={1} />,
        src: "tel:+541128564432",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/yanet279",
    },
    
];

export const itemsMenu = [
    {
        id: 1,
        title:"Sobre mi",
        src: "aboutMe",
    },
    {
        id: 2,
        title:"Proyectos",
        src: "project",
    },
    {
        id: 3,
        title:"Educación",
        src: "education",
    },
    {
        id: 4,
        title:"Habilidades",
        src: "skills",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} id="icon" strokeWidth={1} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} id="icon" strokeWidth={1} />,
        link: "#aboutMe",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={25} id="icon" strokeWidth={1} />,
        link: "#project",
    },
    {
        id: 4,
        title: "Book",
        icon: <BookText size={25} id="icon" strokeWidth={1} />,
        link: "#education",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Universidad Nacional de La Matanza",
        subtitle: "Ingeniería en Informática",
        date: "Ago 2018 - Actual",
    },
    {
        id: 2,
        title: "Educación IT",
        subtitle: "Bootcamp Full Stack Engineer",
        date: "Mar 2022 - Oct 2022",
    },
    {
        id: 3,
        title: "Educación IT",
        subtitle: "React.JS Developer",
        date: "Dic 2022 - Feb 2023",
    },
    {
        id: 4,
        title: "Codo a Codo",
        subtitle: "Full Stack PHP",
        date: "Mar 2023 - jul 2023",
    },
    {
        id: 5,
        title: "Codo a Codo",
        subtitle: "Full Stack Python",
        date: "Ago 2023 - Dic 2023",
    },
]


export const dataPortfolio = [
    {
        id: 1,
        title: "IN-VENTY",
        subtitle: "Web development",
        image: img1,
        urlGithub: "https://github.com/yanet279/in-venty.git",
        urlDemo: "https://in-venty.netlify.app/",
        technology: [
            <i className="fa-brands fa-html5 w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-css3-alt w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-js w-7 h-7 sm:w-9 sm:h-9"></i>,
        ],
    },
    {
        id: 2,
        title: "Sweet Home",
        subtitle: "Web development",
        image: img2,
        urlGithub: "#!",
        urlDemo: "https://sweethome-grupo4.netlify.app/",
        technology: [
            <i className="fa-brands fa-react w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-html5 w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-css3-alt w-7 h-7 sm:w-9 sm:h-9"></i>
        ],
    },
    {
        id: 3,
        title: "Poke Api Fetch",
        subtitle: "API consumption",
        image: img3,
        urlGithub: "https://github.com/yanet279/poke-api-fetch.git",
        urlDemo: "https://poke-api-fetch.netlify.app/",
        technology: [
            <i className="fa-brands fa-html5 w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-css3-alt w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-js w-7 h-7 sm:w-9 sm:h-9"></i>,
        ],
    },
    {
        id: 4,
        title: "Codo a Codo (Conf BsAs)",
        subtitle: "Web design",
        image: img4,
        urlGithub: "https://github.com/yanet279/proyecto-final_23084.git",
        urlDemo: "https://codoacodo.alonein.online/",
        technology: [
            <i className="fa-brands fa-html5 w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-css3-alt w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-js w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-php w-7 h-7 sm:w-9 sm:h-9"></i>,
        ],
    },
    {
        id: 5,
        title: "De Punta a Punta",
        subtitle: "Web design",
        image: img6,
        urlGithub: "https://github.com/yanet279/de_punta_a_punta.git",
        urlDemo: "https://depuntaapunta.netlify.app/",
        technology: [
            <i className="fa-brands fa-html5 w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-css3-alt w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-js w-7 h-7 sm:w-9 sm:h-9"></i>,
            <i className="fa-brands fa-python w-7 h-7 sm:w-9 sm:h-9"></i>,
            <img src={iconSql} alt="sql" className="hidden dark:block w-7 h-7 sm:w-9 sm:h-9"/>,
            <img src={iconSql2} alt="sql" className="dark:hidden w-7 h-7 sm:w-9 sm:h-9"/>
        ],
    },
    {
        id: 6,
        title: "Placa Esp32",
        subtitle: "Program design for the Esp32 protoboard",
        image: img5,
        urlGithub: "https://github.com/yanet279/Esp32-Protoboard_TP_Electronica.git",
        urlDemo: "https://wokwi.com/projects/367295625856084993",
        technology: [
            <i className="fa-brands fa-python w-7 h-7 sm:w-9 sm:h-9"></i>
        ],
    },
    {
        id: 7,
        title: "Juguetería Cósmica",
        subtitle: "Web design",
        image: img7,
        urlGithub: "https://github.com/yanet279/jugueteria-cosmica-node.git",
        urlDemo: "https://jugueteria-cosmica.vercel.app/",
        technology: [
            <i className="fa-brands fa-html5 w-7 h-7 sm:w-8 sm:h-8"></i>,
            <i className="fa-brands fa-css3-alt w-7 h-7 sm:w-8 sm:h-8"></i>,
            <i className="fa-brands fa-js w-7 h-7 sm:w-8 sm:h-8"></i>,
            <i className="fa-brands fa-sass w-7 h-7 sm:w-8 sm:h-8"></i>,
            <i className="fa-brands fa-node w-7 h-7 sm:w-8 sm:h-8"></i>,
            <img src={iconEx} alt="Express" className="w-7 hidden dark:block h-7 sm:w-8 sm:h-8"/>,
            <img src={iconMongo} alt="MongoDB" className="w-7 hidden dark:block h-7 sm:w-8 sm:h-8 -ml-2 -mr-1" key="mongo"/>,
            <img src={iconEx2} alt="Express" className="w-7 dark:hidden h-7 sm:w-8 sm:h-8"/>,
            <img src={iconMongo2} alt="MongoDB" className="w-7 dark:hidden h-7 sm:w-8 sm:h-8 -ml-2 -mr-1" key="mongo"/>,
        ],
    },
];