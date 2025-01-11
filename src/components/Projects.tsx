import React from 'react';
import Project from './Project';
import { useNavigate } from 'react-router-dom';
import ProjectDetails from "./ProjectDetails";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  
  const projectsData = [
    {
      name: "Tracker",
      staticImageUrl: "/assets/tracker.png",
      gifUrl: "/assets/tracker-companies.gif",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Cypress", "Rails", "RSpec", "SimpleCov"],
      description:
        "A robust job application tracking application designed to help users manage contacts, companies, and applications efficiently. Built by an agile team of 13 developers, it streamlines the job-hunting process by providing features for categorization, tracking, and real-time updates.",
      contributions:
        "Collaborated with a cross-functional team to design and implement core features, including CRUD functionality for contacts and applications, real-time updates using Firebase, and responsive design using Tailwind CSS. Personally responsible for both backend and frontend updates for the companies feature, including authentication, authorization, and implementation of index, show, and create functionalities. Focused on clean, maintainable code and an intuitive user interface.",
      githubLink: "https://github.com/turingschool/tracker-crm-fe",
    },
    {
      name: "Chess War",
      staticImageUrl: "/assets/chess-war.png",
      gifUrl: "/assets/chess-war-gameplay.gif",
      techStack: ["Vue.js", "Tailwind CSS", "TypeScript", "Vite"],
      description:
        "A dynamic and interactive fusion of the pieces of chess and the card game war. Players can customize avatars, compete for points, and enjoy responsive gameplay across devices.",
      contributions:
        "Designed and implemented the full game logic, including scoring systems, winner announcements, and tie-breakers. Created responsive layouts with Tailwind CSS and Vue components for an immersive user experience.",
      githubLink: "https://github.com/jimmacur/chess-war",
      liveLink: "https://chess-war.vercel.app/",
    },
    {
      name: "Down the Rabbit Hole",
      staticImageUrl: "/assets/down-the-rabbit-hole.png",
      gifUrl: "/assets/down-the-rabbit-hole.gif",
      techStack: ["React", "CSS", "Cypress", "Rails", "REST API", "RSpec", "SimpleCov", "ARIA"],
      description: "An educational (k-5) application to explore food webs within national parks and their ecosystems. Users can view animals, learn fun facts, favorite animals, explore the food chain and learn to draw their favorite animals.",
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

  const handleProjectClick = (project: typeof projectsData[0]) => {
    navigate(`/projects/${project.name.replace(/\s+/g, "-").toLowerCase()}`, {
      state: { project },
    });
  };

  return (
    <section id="projects" className="py-16 bg-sky-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
          Projects
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.name}
              onClick={() => handleProjectClick(project)}
              className="cursor-pointer flex shadow-md rounded-lg hover:shadow-lg "
            >
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;