import React from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetails: React.FC = () => {
  const location = useLocation();
  const project = location.state?.project;

  if (!project) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <img
        src={project.staticImageUrl}
        alt={`Screenshot of ${project.name}`}
        className="w-full max-w-3xl mx-auto rounded-lg shadow-md mb-4"
      />
      <p className="text-gray-700 mb-4">{project.description}</p>

      {project.contributions && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Contributions</h2>
          <p>{project.contributions}</p>
        </div>
      )}

      {project.techStack && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc ml-4">
            {project.techStack.map((tech: string) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-4">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Live Project
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;