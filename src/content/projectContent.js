import JUNFUSUMA from "../images/JUNFUSUMA.png";
import MTALens from "../images/MTALens.png";
import BarIsLoaded from "../images/BarIsLoaded.png";
// import website from "../images/website.png";
import Covid from "../images/Covid.png";
import Griffin from "../images/Griffin.png";

export const projects = [
    {
        name: "USA COVID Tracker",
        img: Covid,
        description:
            "The purpose to build a quick dashboard with easily digestible information. A lot of COVID trackers have waaaay too much numbers; this web app solves the issue by keeping just the facts. I built this SPA to simply show what the numbers are in the USA broken down in counties in each state.",
        link: "https://usa-covid-tracker.vercel.app/",
        github: "https://github.com/dongledan/usa-covid-tracker",
        tech: ["Node.js", "React", "SPA", "SASS", "API"],
    },
    {
        name: "JUNFUSUMA",
        img: JUNFUSUMA,
        description:
            "A fun fullstack side project where I designed a modern shopping experience. I provided all images, logos, and design. JUNFUSUMA is the past, present, and future of fashion.",
        link: "http://junfusuma.herokuapp.com/",
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
        tech: [
            "React Native",
            "Firebase",
            "Google Vision",
            "MTA API",
            "Mobile",
            "App",
        ],
    },
    {
        name: "Bar Is Loaded",
        img: BarIsLoaded,
        description:
            "A personal app made for myself to easily calculate the amount of weight on a barbell. Comes in handy with different units (LB/KG). It's leg day, not brain day! Now available on Android and iOS.",
        link: "https://barisloadedapp.com/",
        tech: ["React Native", "Node.js", "Expo", "Mobile", "App"],
    },
    {
        name: "Griffin Cat",
        img: Griffin,
        description:
            "We love our pets and want everybody to know how special their little guy is. My sister and I teamed up to make a website about our cat. This website will teach you everything there is to know about this floofy kitty cat.",
        link: "https://griffin-cat.netlify.app/",
        github: "https://github.com/griffin-in-a-blanket/griffin",
        tech: ["HTML5", "CSS3", "React", "Gatsby", "SASS", "GraphQL"],
    },
];
