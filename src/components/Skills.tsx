import React from 'react';
import SkillCard from './SkillCard';
import { ReactJS, JavaScript, Git, GitHub, Postman, JSON, Ruby, Rails, RSPEC, Cypress, Slack, Heroku, Netlify, TypeScript, HTML, CSS, TailwindCSS, Jira, Figma } from "../components/icons";

const Skills: React.FC = () => {

  return (
    <section id="skills" className="p-8 bg-gray-500 mb-16">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-200 bg-gray-600 p-2">Frontend Development</h3>
      <div className="flex flex-wrap">
        <SkillCard icon={<JavaScript />} name="JavaScript" />
        <SkillCard icon={<TypeScript />} name="TypeScript" />
        <SkillCard icon={<ReactJS />} name="React" />
        <SkillCard icon={<HTML />} name="HTML5" />
        <SkillCard icon={<CSS />} name="CSS3" />
        <SkillCard icon={<TailwindCSS />} name="Tailwind CSS" />
        <SkillCard icon={<JSON />} name="JSON" />
        <SkillCard icon={<Netlify />} name="Netlify" />
      </div>

      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-200 bg-gray-700 p-2">Backend Development</h3>
      <div className="flex flex-wrap">
        <SkillCard icon={<Ruby />} name="Ruby" />
        <SkillCard icon={<Rails />} name="Rails" />
        <SkillCard icon={<Postman />} name="Postman" />
        <SkillCard icon={<JSON />} name="JSON" />
        <SkillCard icon={<Heroku />} name="Heroku" />

      </div>

      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-200 bg-gray-600 p-2">Testing</h3>
      <div className="flex flex-wrap">
        <SkillCard icon={<Cypress />} name="Cypress" />
        <SkillCard icon={<RSPEC />} name="RSpec" />
      </div>

      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-200 bg-gray-700 p-2">Collaboration & Workflow</h3>
      <div className="flex flex-wrap">
        <SkillCard icon={<Git />} name="Git" />
        <SkillCard icon={<GitHub />} name="GitHub" />
        <SkillCard icon={<Jira />} name="Jira" />
        <SkillCard icon={<Slack />} name="Slack" />
        <SkillCard icon={<Figma />} name="Figma" />
      </div>
  </section>  
  )
}

export default Skills;