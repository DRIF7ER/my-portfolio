import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  return (
    <div
      className="flex flex-col items-center m-4 transition-transform transform"
      role="group"
      aria-label={`Skill: ${name}`}
    >
      <div className="w-12 h-12 mb-2" aria-hidden="true">
        {icon}
      </div>
      <span className=" font-semibold" id={`skill-${name.replace(/\s+/g, '-').toLowerCase()}`}>
        {name}
      </span>
    </div>
  );
};

export default SkillCard;