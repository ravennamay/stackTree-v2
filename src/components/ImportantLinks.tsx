import React from 'react';
import { FaEnvelope, FaFileAlt, FaBriefcase } from 'react-icons/fa';

const ImportantLinks: React.FC = () => {
  const importantLinks = [
    {
      icon: <FaBriefcase className="w-5 h-5" />,
      label: "Portfolio",
      url: "https://github.com/ratte-cs", // Substituir pelo link real
      color: "from-blue-500 to-purple-500",
      hoverColor: "hover:from-blue-600 hover:to-purple-600"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: "Email",
      url: "mailto:ratte@seweraim.com",
      color: "from-green-500 to-emerald-500", 
      hoverColor: "hover:from-green-600 hover:to-emerald-600"
    },
    {
      icon: <FaFileAlt className="w-5 h-5" />,
      label: "CV",
      url: "#", // Substituir pelo link real do CV
      color: "from-orange-500 to-red-500",
      hoverColor: "hover:from-orange-600 hover:to-red-600"
    }
  ];

  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      {importantLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
          rel={link.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
          className={`
            group relative w-12 h-12 rounded-full bg-gradient-to-br ${link.color} ${link.hoverColor}
            shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300
            flex items-center justify-center text-white
          `}
          aria-label={link.label}
          title={link.label}
        >
          {link.icon}
          
          {/* Animated background glow on hover */}
          <div className={`
            absolute inset-0 rounded-full bg-gradient-to-br ${link.color} opacity-0 
            group-hover:opacity-20 blur-xl scale-150 transition-all duration-300 -z-10
          `} />
          
          {/* Tooltip */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {link.label}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ImportantLinks;