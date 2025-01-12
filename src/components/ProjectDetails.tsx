import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProjectDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;
  const [isHovered, setIsHovered] = useState(false); // State to handle hover

  if (!project) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }

  return (
    <div className="bg-green-200">
      <div className="container-standard flex flex-col items-center mt-14 mx-auto px-4 py-8">
        
        {/* Title */}
        <h1 className="text-6xl font-bold mb-4">{project.name}</h1>

        {/* Image or GIF */}
        <div
          className="w-full max-w-sm mx-auto rounded-lg shadow-md mb-4 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)} // Show GIF on hover
          onMouseLeave={() => setIsHovered(false)} // Show static image on mouse leave
        >
          <img
            src={isHovered && project.gifUrl ? project.gifUrl : project.staticImageUrl}
            alt={`Screenshot of ${project.name}`}
            className="w-full object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-xl mb-4">{project.description}</p>
      
        {/* Contributions */} 
        {project.contributions && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Contributions</h2>
            <p className="text-xl">{project.contributions}</p>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <div className="mb-4 w-full">
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <ul className="flex flex-wrap gap-4">
              {project.techStack.map((tech: string) => (
                <li
                  key={tech}
                  className="bg-gray-100 rounded-lg p-2 shadow-lg text-gray-800 font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Repositories and Live Links */}
        <div className="mb-4 w-full">
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          <ul className="space-y-2">
            {project.liveLink && (
              <li>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-100 rounded-lg p-2 shadow-lg text-blue-600 font-medium hover:bg-gray-300 transition-colors max-w-fit"
                >
                  Live Project
                </a>
              </li>
            )}
            {project.githubLink && (
              <li>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-100 rounded-lg p-2 shadow-lg text-blue-600 font-medium hover:bg-gray-300 transition-colors max-w-fit"
                >
                  GitHub Repo
                </a>
              </li>
            )}
          </ul>
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
    </div>
  );
};

export default ProjectDetails;