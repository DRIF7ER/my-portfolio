import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProjectDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }

  return (
    <div className="container flex flex-col items-center mt-14 mx-auto px-4 py-8">
      
      {/* Title */}
      <h1 className="text-6xl font-bold mb-4">{project.name}</h1>
      {/* Image */}
      <img
        src={project.staticImageUrl}
        alt={`Screenshot of ${project.name}`}
        className="w-full max-w-sm mx-auto rounded-lg shadow-md mb-4"
      />
      {/* Description */}
      <p className="text-gray-700 mb-4">{project.description}</p>
    
      {/* Contributions */} 
      {project.contributions && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Contributions</h2>
          <p>{project.contributions}</p>
        </div>
      )}

      {/* Tech Stack */}
      {project.techStack && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <ul className="flex flex-wrap gap-4">
            {project.techStack.map((tech: string) => (
              <li
                key={tech}
                className="bg-gray-300 rounded-lg p-2 shadow-sm text-gray-800 font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Repositories and Live Links*/}
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

      {/* Back to Projects Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;