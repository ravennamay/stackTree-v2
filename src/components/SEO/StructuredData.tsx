import React from 'react';

interface StructuredDataProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  title,
  description,
  url,
  image = 'https://rattecs.com/og-image.jpg'
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    description: description,
    url: url,
    image: image,
    author: {
      '@type': 'Person',
      name: 'Ratte',
      url: 'https://rattecs.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'RatteCS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rattecs.com/logo.png'
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}; 