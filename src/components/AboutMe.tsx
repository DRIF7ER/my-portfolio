import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import ResumeModal from './ResumeModal';

const AboutMe: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="aboutMe" className=" bg-gray-50 py-16 px-6" aria-labelledby="about-me-heading">
      <div className="container-standard max-w-5xl mx-auto text-center">
        <h2 id="about-me-heading" className="text-4xl font-extrabold mb-8 text-gray-800">
          About Me
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          Hi, I'm <span className="font-bold">Charles T. Banks Jr.</span>, a passionate Frontend Developer with a Military 
          background (Navy and Army) and a love for solving complex problems. My years of service have taught me how to organize 
          chaos and dispell ambiguity, my experience in learning software development has taught me that's exactly what a Dev 
          does, and life has taught me we are never done learning. Collaboration, a smooth workflow, and a good cup of coffee is 
          what gives me that Friday feeling, even on Mondays! I'm always eager to learn new technologies and improve my craft.
          <br />
          <br />
          I find that approaching problems with an open mind and no immidiate interpretations is the fastest way to yield results.
          Taking the time to build a holistic picture has helped me identify the root cause of an issue more times than I can recount
          and I expect that that will probably remain true as I gain more expirience in this field.
          <br />
          <br />
          Outside of coding I am an avid gamer, fitness enthusiast, and photographer. I love getting lost in a really good story
          whether it's a movie, book, game, or music! I spend alot of time studying various art disciplines from illistration to
          story writing to photographing techniques and I drive my beautiful, newly wedded wife, crazy with my creations!
        </p>

        {/* Resume Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 transition-transform transform hover:scale-105 duration-300"
            aria-label="Open resume modal"
          >
            <FaFilePdf className="mr-2" size={20} aria-hidden="true" />
            View My Resume
          </button>
        </div>

        {/* Skills and Personal Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg" aria-labelledby="skills-heading">
            <h3 id="skills-heading" className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
              Skills & Strengths
            </h3>
            <ul className="text-gray-600 space-y-3" aria-label="List of skills and strengths">
              <li>⚛️ <span className="font-medium">Frontend Development</span> (React, Typescript)</li>
              <li>📝 <span className="font-medium">JavaScript, Tailwind CSS, Next.JS</span></li>
              <li>🚀 <span className="font-medium">Agile & Team Collaboration</span></li>
              <li>🔍 <span className="font-medium">Testing</span> (Cypress)</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg " aria-labelledby="personal-highlights-heading">
            <h3 id="personal-highlights-heading" className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
              Personal Highlights
            </h3>
            <ul className="text-gray-600 space-y-3" aria-label="List of personal highlights">
              <li>👨‍🏭 <span className="font-medium">Welder</span></li>
              <li>👨‍🚀 <span className="font-medium">Armchair Astronaut</span></li>
              <li>👨‍🍳 <span className="font-medium">Cooking (Top 5 Favorite Activities)</span></li>
              <li>🪖 <span className="font-medium">NV Army Guard Member (Traditional Guardsman)</span></li>
            </ul>
          </div>
        </div>

        {/* Resume Modal */}
        <ResumeModal showModal={showModal} onClose={() => setShowModal(false)} />
      </div>
    </section>
  );
};

export default AboutMe;