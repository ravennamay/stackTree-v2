import React from 'react';
import { FaEnvelope, FaFileAlt, FaBriefcase } from 'react-icons/fa';

const ImportantLinks: React.FC = () => {
  const importantLinks = [
    {
      icon: <FaBriefcase className="w-4 h-4" />,
      label: "Portfolio",
      url: "https://github.com/ratte-cs", // Substituir pelo link real
      color: "from-neutral-800 to-neutral-900",
      hoverColor: "hover:from-neutral-700 hover:to-neutral-800"
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      label: "Email",
      url: "mailto:ratte@seweraim.com",
      color: "from-neutral-700 to-neutral-800", 
      hoverColor: "hover:from-neutral-600 hover:to-neutral-700"
    },
    {
      icon: <FaFileAlt className="w-4 h-4" />,
      label: "CV",
      url: "#", // Substituir pelo link real do CV
      color: "from-neutral-900 to-black",
      hoverColor: "hover:from-neutral-800 hover:to-neutral-900"
    }
  ];

  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {importantLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
          rel={link.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
          className={`
            group relative w-10 h-10 rounded-full bg-gradient-to-br ${link.color} ${link.hoverColor}
            shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300
            flex items-center justify-center text-white
          `}
          aria-label={link.label}
          title={link.label}
        >
          {link.icon}
          
          {/* Animated background glow on hover */}
          <div className={`
            absolute inset-0 rounded-full bg-gradient-to-br ${link.color} opacity-0 
            group-hover:opacity-15 blur-lg scale-125 transition-all duration-300 -z-10
          `} />
          
          {/* Tooltip */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {link.label}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ImportantLinks;