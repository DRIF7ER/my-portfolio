import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectProps {
  name: string;
  staticImageUrl: string;
  gifUrl?: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  staticImageUrl,
  gifUrl,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/projects/${name.replace(/\s+/g, "-").toLowerCase()}`}
      className="block bg-white rounded-lg shadow-m p-6 max-w-md mx-auto hover:shadow-lg hover:scale-105 transition-transform duration-300 group container-standard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-md mb-4">
        <img
          src={isHovered && gifUrl ? gifUrl : staticImageUrl}
          alt={`Screenshot of ${name}`}
          className="h-52 w-full object-cover transition-all duration-300 group-hover:rounded-none"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>

      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default Project;