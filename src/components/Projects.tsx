import React from 'react';
import Project from './Project';

const Projects: React.FC = () => {
  const projectsData = [
    {
      name: "Down the Rabbit Hole",
      staticImageUrl: "/assets/down-the-rabbit-hole.png",
      gifUrl: "/assets/down-the-rabbit-hole.gif",
      techStack: ["React", "CSS", "Cypress", "Rails", "REST API", "RSpec", "SimpleCov", "ARIA"],
      description: "An educational (k-5) application to explore food webs within national parks and their ecosystems.",
      contributions: "Created the concept of the application; led a team of 5 developers; built the frontend using React; implemented dynamic modals and the favorite feature.",
      liveLink: "https://down-the-rabbit-hole.netlify.app/",
      githubLink: "https://github.com/Down-the-Rabbit-Holes",
    },
    {
      name: "Personal Portfolio Site",
      staticImageUrl: "/assets/jim-macur-portfolio.png",
      gifUrl: "/assets/jim-macur-portfolio.gif",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Formspree", "ARIA"],
      description: "(Yep! You're on this site right now, so... meta 😄) A fully responsive portfolio website designed to showcase my projects, skills, and experience. The site features modern design practices, accessibility enhancements, and interactive elements to provide a seamless user experience.",
      contributions: "Developed the entire application using React and TypeScript; implemented responsive design with Tailwind CSS; ensured accessibility with ARIA landmarks and focus indicators; integrated Formspree for contact form submissions; added smooth scrolling, hover effects, and subtle animations.",
      githubLink: "https://github.com/jimmacur/jim-macur-portfolio",
      liveLink: "https://jim-macur-portfolio.vercel.app/",
    },
    {
      name: "Tea Subscription Service",
      staticImageUrl: "/assets/tea-subs.png",
      gifUrl: "/assets/tea-subs.gif",
      techStack: ["React", "Rails", "CSS"],
      description: "A full-stack tea subscription service that allows shop owners to manage teas, customers, and subscriptions through an intuitive user interface.",
      contributions: "Developed the frontend using React; implemented full CRUD functionality by consuming a Rails API backend; designed an intuitive UI to facilitate managing subscriptions, teas, and customers. Completed the project solo within 2 days.",
      githubLink: "https://github.com/jimmacur/tea-subscription-FE",
    },
    {
      name: "Rancid Tomatillos",
      staticImageUrl: "/assets/rancid.png",
      gifUrl: "/assets/rancid.gif",
      techStack: ["React", "CSS", "Cypress", "REST API"],
      description: "A movie review app that allows users to browse a curated list of films, upvote or downvote movies, and view detailed information about each film.",
      contributions: "Built the frontend using React and CSS; implemented dynamic movie details, upvote/downvote functionality, and responsive design; ensured application quality through end-to-end testing with Cypress.",
      githubLink: "https://github.com/jimmacur/rancid-tomatillos",
    },
    {
      name: "Hang in There: Poster Project",
      staticImageUrl: "/assets/motivation.png",
      gifUrl: "/assets/motivation.png",
      techStack: ["JavaScript", "HTML", "CSS"],
      description: "A web application that allows users to create, view, and save motivational posters with random images, titles, and quotes. Users can also create custom posters and explore a humorous section of un-motivational posters.",
      contributions: "Developed the entire application using JavaScript, HTML, and CSS; implemented functionality to create random and custom posters; added the ability to save, view, and delete posters, including a humorous section with un-motivational posters.",
      githubLink: "https://github.com/jimmacur/poster_project",
    },
    {
      name: "Little Shop E-Commerce App",
      staticImageUrl: "/assets/little-shop.png",
      gifUrl: "/assets/little-shop.png",
      techStack: ["JavaScript", "HTML", "CSS", "Rails", "REST API"],
      description: "A front-end application for an e-commerce platform that consumes data from a Rails API backend, built using service-oriented architecture. The app allows users to browse items, filter by merchants, and perform client-side validation.",
      contributions: "Collaborated with a team to develop the front end using JavaScript, HTML, and CSS; implemented hover effects, flexbox layouts, and a dynamic UI; refactored for loops into array prototype methods for readability; added client-side validation to enhance user experience.",
      githubLink: "https://github.com/jimmacur/little-shop-fe-group",
    },
    {
      name: "ChuckNorrisQuotes",
      staticImageUrl: "/assets/chuck-norris-jokes.png",
      gifUrl: "/assets/chuck-norris-jokes.gif",
      techStack: ["React", "JavaScript", "CSS", "API Consumption"],
      description: "A fun project built in one day to practice consuming APIs and display random Chuck Norris jokes.",
      contributions: "Developed a simple React app that fetches and displays random jokes from an external API.",
      githubLink: "https://github.com/jimmacur/ChuckNorrisJokes",
    },
  ];

  return (
    <section id="projects" className=" py-16 bg-sky-100" role="region" aria-labelledby="projects-heading">
      <div className="container-standard mx-auto px-4">
        <h1 id="projects-heading" className="text-4xl font-extrabold mb-12 text-center text-gray-800">
          Projects
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;