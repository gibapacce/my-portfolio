import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '../constants';

const SEO = ({ 
  title = SEO_CONFIG.title,
  description = SEO_CONFIG.description,
  keywords = SEO_CONFIG.keywords,
  image = SEO_CONFIG.image,
  url = SEO_CONFIG.siteUrl,
  type = 'website'
}) => {
  const fullTitle = title === SEO_CONFIG.title ? title : `${title} | ${SEO_CONFIG.author}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SEO_CONFIG.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SEO_CONFIG.author} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={`@${SEO_CONFIG.author.toLowerCase().replace(' ', '')}`} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": SEO_CONFIG.author,
          "url": SEO_CONFIG.siteUrl,
          "image": image,
          "description": description,
          "jobTitle": "Desenvolvedor Full Stack",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelancer"
          },
          "sameAs": [
            "https://github.com/seu-usuario",
            "https://linkedin.com/in/seu-perfil"
          ],
          "knowsAbout": [
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "Web Development",
            "Full Stack Development"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;