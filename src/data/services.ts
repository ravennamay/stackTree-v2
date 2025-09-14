import { LinkData } from "../types";

/**
 * Services data for portfolio and professional services
 */
export const servicesLinks: LinkData[] = [
  {
    id: "service-1",
    title: "Portfolio - Desenvolvimento Web",
    url: "https://github.com/ratte-cs", // Você pode substituir pelo link real do portfolio
    icon: "portfolio",
    category: "services",
    description: "Projetos de desenvolvimento de sites e aplicações web. Tecnologias: React, Node.js, Python, MongoDB.",
    priority: 10,
    lastUpdated: "2024-12-15",
    seoKeywords: ["portfolio", "desenvolvimento web", "react", "node.js", "python"],
    isVerified: true,
    analyticsId: "portfolio-dev",
    schemaType: "WebPage",
  },
  {
    id: "service-2", 
    title: "Portfolio - Design Gráfico",
    url: "https://behance.net/ratte-cs", // Você pode substituir pelo link real do portfolio
    icon: "design",
    category: "services",
    description: "Projetos de design gráfico, identidade visual, logos e materiais promocionais.",
    priority: 9,
    lastUpdated: "2024-12-15",
    seoKeywords: ["design gráfico", "identidade visual", "logos", "portfolio"],
    isVerified: true,
    analyticsId: "portfolio-design",
    schemaType: "WebPage",
  },
  {
    id: "service-3",
    title: "Serviços - Desenvolvimento",
    url: "mailto:ratte@seweraim.com?subject=Consultoria%20Desenvolvimento%20Web",
    icon: "services-dev",
    category: "services", 
    description: "Desenvolvimento de sites e aplicações sob consulta. Entre em contato para orçamento personalizado.",
    priority: 8,
    lastUpdated: "2024-12-15",
    seoKeywords: ["desenvolvimento web", "consultoria", "serviços"],
    isVerified: true,
    analyticsId: "services-dev",
    schemaType: "Service",
  },
  {
    id: "service-4",
    title: "Serviços - Design Gráfico", 
    url: "mailto:ratte@seweraim.com?subject=Consultoria%20Design%20Gráfico",
    icon: "services-design",
    category: "services",
    description: "Criação de identidade visual, logos e materiais gráficos sob consulta. Orçamento personalizado.",
    priority: 8,
    lastUpdated: "2024-12-15", 
    seoKeywords: ["design gráfico", "identidade visual", "consultoria"],
    isVerified: true,
    analyticsId: "services-design",
    schemaType: "Service",
  }
];