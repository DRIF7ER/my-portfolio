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
          Hi, I'm <span className="font-bold">Jim Macur</span> (may-ker), a passionate fullstack developer with a background in teaching and a love for solving complex problems. After years of teaching and leadership, I transitioned into software development, where I apply my collaborative mindset and problem-solving skills to create accessible and engaging applications. I'm always eager to learn new technologies and improve my craft.
          <br />
          <br />
          I strive to be a fully-functioning human being who thrives on contributing to society and helping others reach their potential. Whether through coding, teaching, or collaborating with teams, I find joy in fostering growth, building meaningful connections, and making a positive impact wherever I can.
          <br />
          <br />
          Beyond coding, I’ve been happily married to my amazing wife for 20 years, and we have two wonderful teenage children. Together, we love traveling, hiking, and sharing laughs around the dinner table. These moments of connection and adventure fuel my creativity and remind me of the importance of balance and joy in life.
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
              <li>⚛️ <span className="font-medium">Fullstack Development</span> (React, Rails)</li>
              <li>📝 <span className="font-medium">TypeScript, JavaScript</span>, Tailwind CSS</li>
              <li>🚀 <span className="font-medium">Agile & Team Collaboration</span></li>
              <li>🔍 <span className="font-medium">Testing</span> (Cypress, RSpec)</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg " aria-labelledby="personal-highlights-heading">
            <h3 id="personal-highlights-heading" className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
              Personal Highlights
            </h3>
            <ul className="text-gray-600 space-y-3" aria-label="List of personal highlights">
              <li>🎸 <span className="font-medium">Guitarist</span></li>
              <li>🧘‍♂️ <span className="font-medium">Meditation Practitioner</span></li>
              <li>🧗‍♂️ <span className="font-medium">Rock Climber</span></li>
              <li>♟️ <span className="font-medium">Chess & Strategy Game Fan</span></li>
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