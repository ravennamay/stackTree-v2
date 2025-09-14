export interface Translation {
  // Navigation and UI
  all: string;
  affiliate: string;
  config: string;
  social: string;
  steam: string;
  services: string;
  
  // Profile section
  profileDescription: string;
  
  // Card actions
  visit: string;
  copyCode: string;
  copied: string;
  
  // Time and status
  updated: string;
  verified: string;
  
  // Categories and descriptions
  categories: {
    social: string;
    affiliate: string;
    config: string;  
    steam: string;
    services: string;
  };
  
  // Link descriptions (translatable)
  linkDescriptions: {
    [key: string]: string;
  };
  
  // Link titles (translatable)
  linkTitles: {
    [key: string]: string;
  };
  
  // Service descriptions
  serviceDescriptions: {
    portfolioDev: string;
    portfolioDesign: string;
    servicesDev: string;
    servicesDesign: string;
  };
}

export const translations: Record<string, Translation> = {
  pt: {
    all: "Todos",
    affiliate: "Afiliados",
    config: "Configurações", 
    social: "Social",
    steam: "Steam",
    services: "Serviços",
    
    profileDescription: "Todos os meus links importantes, obrigado pelo seu apoio! :3",
    
    visit: "Visitar",
    copyCode: "Copiar código",
    copied: "Copiado!",
    
    updated: "Atualizado",
    verified: "Verificado",
    
    categories: {
      social: "Redes Sociais",
      affiliate: "Parcerias", 
      config: "Configurações",
      steam: "Steam",
      services: "Serviços Profissionais"
    },
    
    linkDescriptions: {
      "discord": "Junte-se à comunidade",
      "youtube": "Gameplay de CS2, tutoriais e conteúdo de gaming",
      "tiktok": "Clipes curtos de gaming e destaques",
      "steam": "Perfil do Steam",
      "trade": "Envie ofertas de troca aqui",
      "settings": "Veja minhas configurações de CS2", 
      "peripherals": "Meu setup e equipamentos de gaming",
      "twitch": "Transmissões ao vivo de CS2 e jogos"
    },
    
    linkTitles: {
      "twitch": "Twitch",
      "discord": "Discord", 
      "youtube": "YouTube",
      "tiktok": "TikTok",
      "twitter": "X (Twitter)",
      "steam": "Steam",
      "trade": "Link de Troca",
      "settings": "Configurações",
      "peripherals": "Periféricos"
    },
    
    serviceDescriptions: {
      portfolioDev: "Projetos de desenvolvimento de sites e aplicações web. Tecnologias: React, Node.js, Python, MongoDB.",
      portfolioDesign: "Projetos de design gráfico, identidade visual, logos e materiais promocionais.",
      servicesDev: "Desenvolvimento de sites e aplicações sob consulta. Entre em contato para orçamento personalizado.",
      servicesDesign: "Criação de identidade visual, logos e materiais gráficos sob consulta. Orçamento personalizado."
    }
  },
  
  en: {
    all: "All",
    affiliate: "Affiliate", 
    config: "Config",
    social: "Social", 
    steam: "Steam",
    services: "Services",
    
    profileDescription: "All of my cool links, thank you for your support! :3",
    
    visit: "Visit",
    copyCode: "Copy code", 
    copied: "Copied!",
    
    updated: "Updated",
    verified: "Verified",
    
    categories: {
      social: "Social Media",
      affiliate: "Partnerships",
      config: "Configuration", 
      steam: "Steam",
      services: "Professional Services"
    },
    
    linkDescriptions: {
      "discord": "Join the community",
      "youtube": "CS2 gameplay, tutorials, and gaming content", 
      "tiktok": "Short-form gaming clips and highlights",
      "steam": "Steam profile",
      "trade": "Send trade offers here",
      "settings": "View my CS2 settings",
      "peripherals": "My gaming setup & gear", 
      "twitch": "Live CS2 and gaming streams"
    },
    
    linkTitles: {
      "twitch": "Twitch",
      "discord": "Discord",
      "youtube": "YouTube", 
      "tiktok": "TikTok",
      "twitter": "X (Twitter)",
      "steam": "Steam",
      "trade": "Trade Link",
      "settings": "Settings",
      "peripherals": "Peripherals"
    },
    
    serviceDescriptions: {
      portfolioDev: "Web development projects and applications. Technologies: React, Node.js, Python, MongoDB.",
      portfolioDesign: "Graphic design projects, visual identity, logos and promotional materials.",
      servicesDev: "Website and application development on consultation. Contact for personalized quote.",
      servicesDesign: "Visual identity creation, logos and graphic materials on consultation. Personalized quote."
    }
  }
};