import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center m-4 transition-transform transform hover:scale-110">
      <div className="w-12 h-12 mb-2">{icon}</div>
      <span className="text-gray-200 font-semibold">{name}</span>
    </div>
  );
};

export default SkillCard;