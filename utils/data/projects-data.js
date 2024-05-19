import ayla from "/public/image/ayla.jpg";
import crefin from "../..//public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Livesportz24",
    description:
      "I have developed a full-stack web app for Live scoring for Cricket and Football with Dark and light mode. I created the UI using NextJS, TailwindCSS, HTML and React. The web supports multiple languages. I deployed the front-end web and back-end to Digital Ocean Server",
    tools: ["NextJS", "Tailwind CSS", "Firebase", "Html", "CSS"],
    role: "Front-end Developer",
    code: "Livesportz24.com",
    demo: "Livesportz24.com",
    image: travel,
  },
  {
    id: 2,
    name: "Mulligan Golf Game",
    description:
      "I have devleoped the website and admin panel toview games and and book their slots for the game and choose their deck, Course and User can view their Game history. User can subscribe Plan for monthly and Yealy (Stripe Payment Gateway). Also Create Admin panel for add new Decks and Courses and Add Promocode for User and Assign that promocode to User.",
    tools: ["React", "Tailwind CSS", "Stripe", "Html", "CSS"],
    role: "Front-end Developer",
    code: "web.mulligangolfgame.com",
    demo: "web.mulligangolfgame.com",
    image: realEstate,
  },
  {
    id: 3,
    name: "Ellusho App",
    description:
      "I have devleoped the Application where User can Talk in Video Call to Counsellor. I have customised Jitsi Project and Implemented that in Flutter project. I have implemented Functionality like Omegle If user swipe Up on the screen that time User will disconnect with counsellor and connect with new counsellor. User can talk Maximum three minutes with counsellor after that it will automatically end the call. Max 2 person can talk in the same call 3rd person cannot Join that call if someone already talk with Counsellor. It's an Applicatuion which is available in Play store and Appstore.",
    tools: ["React", "Tailwind CSS", "Stripe", "Html", "CSS"],
    role: "Front-end Developer",
    code: "",
    demo: "play.google.com/store/apps/details?id=com.ellusho.app.ellusho",
    image: realEstate,
  },
  {
    id: 4,
    name: "Shree Nail Art",
    description:
      "I have developed and design website for Nails which is based on the nail art. It will show a Demos of nails and some display nails, And it will show how much facilities they will provide and give testimonials and can contact with Owner, I have made admin panel also for owner where they can add, Update and delete photos (Firebase)",
    tools: ["Vue JS", "Fireabse", "Tailwind CSS", "Netlify"],
    role: "Full stack Developer",
    code: "shree-nailart.netlify.app/shree-nailart/",
    demo: "shree-nailart.netlify.app/shree-nailart/",
    image: crefin,
  },
  {
    id: 5,
    name: "Crypto web",
    description:
      "Me and my team have design and develope this website where user can mine crypto currency and can see graph of earning and can see all the crypto currency Prices, User can add their amount in wallet. Other functionalities are On the way so we can't preview our website.",
    tools: ["ReactJS", "Tailwind CSS", "Html", "Css"],
    code: "",
    demo: "",
    image: ayla,
    role: "Front-end Developer",
  },
  {
    id: 6,
    name: "8+ Admin Panel",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: ["React Js", "Html", "Css", "Firebase", "Bootstrap"],
    code: "",
    demo: "",
    image: ayla,
    role: "React js Developer",
  },
];
