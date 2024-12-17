let image = require("./assets/images/profile.jpg");
let titleima = require("./assets/images/favicon.png");
const logotext = "Indekwe";
const meta = {
    title: "Indekwe Fabrice",
    description: "I’m Indekwe Fabrice Frontend devloper,currently working as freelancer",
    favi_ico: titleima,
};

const introdata = {
    title: "I’m Indekwe Fabrice",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "Iam good at React",
        forth: "I make sure the work is done.",
    },
    description: "Hello, I'm Indekwe Fabrice, a dedicated software developer based in Kigali, Rwanda. My passion lies in crafting innovative solutions through code. Currently working as freelancer, I am committed to expanding my software engineering skills, embracing new challenges, and contributing to the dynamic field of technology. With a strong foundation and a fervent desire to learn, I am poised to make meaningful contributions to the world of software development.",
    your_img_url: image, // Update the path to the correct image file,
    
};

const dataabout = {
    title: " professional bio",
    aboutme: "Hello, I'm Indekwe Fabrice, a dedicated software developer based in Kigali, Rwanda. My passion lies in crafting innovative solutions through code. Currently working as freelancer, I am committed to expanding my software engineering skills, embracing new challenges, and contributing to the dynamic field of technology. With a strong foundation and a fervent desire to learn, I am poised to make meaningful contributions to the world of software development.",
};
const worktimeline = [{
        jobtitle: "ALX Student",
        where: "Alx",
        date: "2023",
    },
    {
        jobtitle: "A frontend developer",
        where: "Freelancing",
        date: "2024",
    },
];

const skills = [{
        name: "Javascript",
        value: 90,
    },
    {
        name: "React",
        value: 90,
    },
    {
        name: "css",
        value: 90,
    },
    {
        name: "Tailwindcss",
        value: 85,
    },
    {
        name: "Jquery",
        value: 60,
    },
    {
        name: "HTML",
        value: 90,
    },
    {
        name: 'Nodejs',
        value: 80,
    },
    {
        name: "Figma",
        value: 90,
    },

];

const services = [{
        title: "Frontend Development and Design",
        description: "As a front-end developer, I am passionate about creating visually appealing and user-friendly interfaces that enhance the overall user experience.",
    },
    {
        title: "UI/UX Designt",
        description: "As a UI/UX designer, I specialize in crafting intuitive and visually appealing user interfaces. Using Figma, I design seamless user experiences that balance aesthetics with functionality, ensuring every interaction feels natural and engaging.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "findekwe@gmail.com",
    YOUR_FONE: "+250780762523",
    description: "Call me or directly send an email. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_j5r3kph",
    YOUR_TEMPLATE_ID: "template_lhltt5h",
    YOUR_USER_ID: "-ZA8xgkAhBwvwH7vg",
};

const socialprofils = {
    github: "https://github.com/indekwe",
    linkedin: "https://www.linkedin.com/in/fabrice-indekwe-diehardeverydayss",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};