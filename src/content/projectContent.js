import JUNFUSUMA from "../images/JUNFUSUMA.png";
import MTALens from "../images/MTALens.png";
import BarIsLoaded from "../images/BarIsLoaded.png";
import website from "../images/website.png";

export const projects = [
    {
        name: "JUNFUSUMA",
        img: JUNFUSUMA,
        description:
            "A fun fullstack side project where I designed a modern shopping experience. I provided all images, logos, and design. JUNFUSUMA is the past, present, and future of fashion.",
        link: "https://junfusuma.herokuapp.com/",
        github: "https://github.com/dongledan/june-fusuma",
        tech: [
            "Node.js",
            "React",
            "Redux",
            "Express",
            "PostGreSQL",
            "Material UI",
        ],
    },
    {
        name: "MTALens",
        img: MTALens,
        description:
            "Capstone for Fullstack Academy. The premise behind is to use MTA API to know when the next trains are coming. MTALens uses OCR from google vision and firebase for up to date alerts. Point and shoot to avoid being late again!",
        link: "https://github.com/1906-fsa-foxs-flames/capstone",
        github: "https://github.com/1906-fsa-foxs-flames/capstone",
        tech: ["React Native", "Firebase", "Google Vision", "MTA API"],
    },
    {
        name: "Bar Is Loaded",
        img: BarIsLoaded,
        description:
            "A personal app made for myself to easily calculate the amount of weight on a barbell. Comes in handy with different units (LB/KG). It's leg day, not brain day! Now available on Android and iOS.",
        link: "https://barisloadedapp.com/",
        tech: ["React Native", "Node.js", "Expo"],
    },
    {
        name: "Portfolio",
        img: website,
        description:
            "The website you're on now! A fast responsive website that doesn't skip a beat whether in desktop or mobile. Images are loaded in via lazy loading to keep the page snappy. Now with nifty dark mode!",
        link: "https://github.com/dongledan/personal-website-v2",
        tech: ["HTML5", "CSS3", "React", "Gatsby", "SASS", "GraphQL"],
    },
];
