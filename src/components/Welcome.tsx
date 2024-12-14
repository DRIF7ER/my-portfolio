import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Welcome: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-sky-300 p-4 text-center"
      aria-labelledby="welcome-heading"
    >
      <div className="max-w-4xl">
        <img
          src="/assets/jim-macur-headshot.jpeg"
          alt="Portrait of Jim Macur"
          className="max-w-[300px] h-auto mx-auto rounded-full shadow-lg mb-6 animate-fadeIn"
        />
        <h1 id="welcome-heading" className="text-5xl font-bold mb-4 text-gray-800 pt-2 animate-fadeIn delay-200">
          Hi, I'm Jim Macur!
        </h1>

        <div className="flex justify-center space-x-8 mt-6 pb-5 animate-fadeIn delay-400">
          <a
            href="https://github.com/jimmacur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub size={50} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/jim-macur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin size={50} aria-hidden="true" />
          </a>
        </div>

        <div className="text-3xl text-gray-600 max-w-2xl mx-auto mb-6 pb-1 animate-fadeIn delay-800">
          <Typewriter
            options={{
              strings: [
                'Fullstack Developer',
                'React Enthusiast',
                'Lifelong Learner',
                'Agile Workflow Advocate',
                'Problem Solver',
                'Tech Explorer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
          aria-label="Navigate to my projects section"
        >
          See My Projects
        </a>
      </div>
    </section>
  );
};

export default Welcome;