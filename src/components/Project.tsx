import React from 'react';

interface ProjectProps {
  name: string;
  imageUrl: string;
  techStack: string[];
  description: string;
  contributions: string;
  liveLink?: string;
  githubLink?: string;
}

const Project: React.FC<ProjectProps> = ({ name, imageUrl, techStack, description, contributions, liveLink, githubLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto hover:shadow-lg hover:scale-105 transition-transform duration-300 group">
      <div className="overflow-hidden rounded-md mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover transition-all duration-300 group-hover:rounded-none"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Tech Stack:</h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech) => (
            <li key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-gray-600 mb-4">
        <span className="font-semibold">Contributions:</span> {contributions}
      </p>

      <div className="flex gap-4 mt-4">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Live Project
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;