import React, { useState } from 'react';

interface ProjectProps {
  name: string;
  staticImageUrl: string;
  gifUrl?: string;
  techStack: string[];
  description: string;
  contributions: string;
  liveLink?: string;
  githubLink?: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  staticImageUrl,
  gifUrl,
  techStack,
  description,
  contributions,
  liveLink,
  githubLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" bg-white rounded-lg shadow-md p-6 max-w-md mx-auto hover:shadow-lg hover:scale-105 transition-transform duration-300 group container-standard"
      role="region"
      aria-labelledby={`project-${name.replace(/\s+/g, '-').toLowerCase()}-heading`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-md mb-4">
        <img
          src={isHovered ? gifUrl : staticImageUrl}
          alt={`Screenshot of ${name}`}
          className="w-full h-48 object-cover transition-all duration-300 group-hover:rounded-none"
        />
      </div>

      <h2
        id={`project-${name.replace(/\s+/g, '-').toLowerCase()}-heading`}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        {name}
      </h2>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Tech Stack:</h3>
        <ul className="flex flex-wrap gap-2 mt-2" aria-label={`Technologies used in ${name}`}>
          {techStack.map((tech) => (
            <li
              key={tech}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm"
              aria-label={tech}
            >
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
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
            aria-label={`View live project: ${name}`}
          >
            Live Project
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
            aria-label={`View GitHub repository for ${name}`}
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;