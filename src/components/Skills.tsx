import React from 'react';
import SkillCard from './SkillCard';
import {ReactJS, JavaScript, Git, GitHub, Postman, JSON, Ruby, Rails, RSPEC, Cypress, Slack, Heroku, Netlify, TypeScript, HTML, CSS, TailwindCSS, Jira, Figma } from '../components/icons';

const Skills: React.FC = () => {
  return (
    <section id="skills" className=" p-8 bg-sky-200" role="region" aria-labelledby="skills-heading">
      <div className="container-standard">
        <h2 id="skills-heading" className="text-4xl font-extrabold mb-12 text-center text-gray-800">
          Skills
        </h2>

        <h3
          className="text-2xl font-semibold mt-4 mb-2  bg-sky-400 p-2"
          id="frontend-heading"
        >
          Frontend Development
        </h3>
        <div className="flex flex-wrap" role="group" aria-labelledby="frontend-heading">
          <SkillCard icon={<JavaScript />} name="JavaScript" />
          <SkillCard icon={<TypeScript />} name="TypeScript" />
          <SkillCard icon={<ReactJS />} name="React" />
          <SkillCard icon={<HTML />} name="HTML5" />
          <SkillCard icon={<TailwindCSS />} name="Tailwind CSS" />
          <SkillCard icon={<JSON />} name="JSON" />
          <SkillCard icon={<Netlify />} name="Netlify" />
        </div>

        <h3
          className="text-2xl font-semibold mt-4 mb-2 bg-sky-300 p-2"
          id="backend-heading"
        >
          Backend Development
        </h3>
        <div className="flex flex-wrap" role="group" aria-labelledby="backend-heading">
          <SkillCard icon={<Ruby />} name="Ruby" />
          <SkillCard icon={<Rails />} name="Rails" />
          <SkillCard icon={<Postman />} name="Postman" />
          <SkillCard icon={<JSON />} name="JSON" />
          <SkillCard icon={<Heroku />} name="Heroku" />
        </div>

        <h3
          className="text-2xl font-semibold mt-4 mb-2  bg-sky-400 p-2"
          id="testing-heading"
        >
          Testing
        </h3>
        <div className="flex flex-wrap" role="group" aria-labelledby="testing-heading">
          <SkillCard icon={<Cypress />} name="Cypress" />
          <SkillCard icon={<RSPEC />} name="RSpec" />
        </div>

        <h3
          className="text-2xl font-semibold mt-4 mb-2  bg-sky-300 p-2"
          id="collaboration-heading"
        >
          Collaboration & Workflow
        </h3>
        <div className="flex flex-wrap" role="group" aria-labelledby="collaboration-heading">
          <SkillCard icon={<Git />} name="Git" />
          <SkillCard icon={<GitHub />} name="GitHub" />
          <SkillCard icon={<Jira />} name="Jira" />
          <SkillCard icon={<Slack />} name="Slack" />
          <SkillCard icon={<Figma />} name="Figma" />
        </div>
      </div>
    </section>
  );
};

export default Skills;