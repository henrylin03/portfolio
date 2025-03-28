const projects = [
  {
    id: "eqa-website",
    type: "Local Business Website",
    title: "Equinox Academy",
    copy: "I redesigned and built the website of a local martial arts gym in React.js",
    callouts: [
      "Improving page load speeds by 40%,",
      "Increased organic search traffic by 130% through SEO.",
    ],
    buttons: [["Visit website", "https://equinoxacademy.com.au"]],
    imgPaths: [
      "/images/projects/eqa-website.png",
      "/images/projects/eqa-website-tablet.png",
      "/images/projects/eqa-website-mobile.png",
    ],
    testimonialId: "eqa1",
    technologies: [
      "React.js",
      "EmailJS",
      "React Router",
      "Vitest",
      "React Testing Library",
      "Vite",
    ],
  },

  {
    id: "le-vesinet",
    type: "E-Commerce Web App",
    title: "Le Vesinet",
    copy: "I rebuilt an e-commerce Shopify platform using React.js:",
    callouts: [
      "Cutting page load times by 80%+ using client-side routing,",
      "Automated tests to ensure code reliability.",
    ],
    imgPaths: [
      "/images/projects/le-vesinet.png",
      "/images/projects/le-vesinet-tablet.png",
      "/images/projects/le-vesinet-mobile.png",
    ],
    buttons: [
      ["Visit website", "https://le-vesinet.netlify.app/"],
      ["View code", "https://github.com/henrylin03/le-vesinet"],
    ],
    technologies: [
      "React.js",
      "React Router",
      "Vitest",
      "React Testing Library",
      "Vite",
    ],
  },

  {
    id: "pokemems",
    type: "Web Game",
    title: "Pokémems",
    copy: "I designed and built a React.js memory game.",
    callouts: [
      "Built custom hook for async fetching from PokéAPI, reducing API response times by 60%+,",
      "Optimised algorithms to speed up game state updates by 50%+,",
      "Implemented automated unit, integration and end-to-end testing.",
    ],
    imgPaths: [
      "/images/projects/pokemems.png",
      "/images/projects/pokemems-tablet.png",
      "/images/projects/pokemems-mobile.png",
    ],
    buttons: [
      ["Play game", "https://poke-mems.netlify.app/"],
      ["View code", "https://github.com/henrylin03/pokemems"],
    ],
    technologies: [
      "React.js",
      "Vite",
      "Vitest",
      "React Testing Library",
      "Cypress",
      "API",
    ],
  },
];

export default projects;
