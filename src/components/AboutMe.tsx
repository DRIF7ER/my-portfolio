import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="aboutMe" className="bg-gray-100 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Hi, I'm Jim Macur, a passionate fullstack developer with a background in teaching and a love for solving complex problems. 
          After years of teaching and leadership, I transitioned into software development, where I apply my collaborative mindset 
          and problem-solving skills to create accessible and engaging applications. I'm always eager to learn new technologies 
          and improve my craft.
        </p>

        <div className="flex justify-center mb-8">
          <a
            href="/assets/jim-macur-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          >
            View My Resume
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Skills & Strengths</h3>
            <ul className="text-gray-600">
              <li>⚛️ Fullstack Development (React, Rails)</li>
              <li>📝 TypeScript, JavaScript, Tailwind CSS</li>
              <li>🚀 Agile & Team Collaboration</li>
              <li>🔍 Testing (Cypress, RSpec)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Personal Highlights</h3>
            <ul className="text-gray-600">
              <li>🎸 Guitarist</li>
              <li>🧘‍♂️ Meditation Enthusiast</li>
              <li>🧗‍♂️ Rock Climber</li>
              <li>♟️ Chess & Strategy Game Fan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;