export interface Translation {
  // Navigation and UI
  all: string;
  affiliate: string;
  config: string;
  social: string;
  steam: string;
  services: string;
  faq: string;
  
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
    faq: string;
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
  
  // FAQ entries
  faqEntries: {
    [key: string]: {
      question: string;
      answer: string;
    };
  };
}

export const translations: Record<string, Translation> = {
  pt: {
    all: "Sobre",
    affiliate: "Afiliados",
    config: "Configurações", 
    social: "Social",
    steam: "Hobby",
    services: "Serviços",
    faq: "FAQ",
    
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
      steam: "Hobby",
      services: "Serviços Profissionais",
      faq: "Perguntas Frequentes"
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
    },
    
    faqEntries: {
      "who-am-i": {
        question: "Quem sou eu?",
        answer: "Oi, eu sou o Ratte. Adoro jogos e criar conteúdo sobre eles. Também tento ajudar as pessoas a encontrar boas ofertas em equipamentos de gaming e periféricos."
      },
      "what-can-find": {
        question: "O que você pode encontrar no meu site?",
        answer: "Meu site tem links para minhas redes sociais, alguns códigos para descontos em equipamentos de gaming e uma lista dos meus periféricos de gaming favoritos. Tentei torná-lo fácil de navegar."
      },
      "how-support": {
        question: "Como você pode me apoiar?",
        answer: "Se você quiser me apoiar, pode usar meus links de afiliado ou códigos ao comprar equipamentos de gaming. Isso me ajuda e você também pode conseguir um desconto."
      },
      "where-connect": {
        question: "Onde você pode se conectar comigo?",
        answer: "Estou no Twitch, YouTube, TikTok e alguns outros lugares. Fique à vontade para conferir meus links sociais e dizer oi. Adoro conversar com outros gamers."
      },
      "gaming-gear": {
        question: "Que equipamentos de gaming você recomenda?",
        answer: "Montei uma lista de periféricos e equipamentos de gaming que realmente gosto e uso. Dê uma olhada se estiver interessado."
      },
      "discount-codes": {
        question: "Como usar seus códigos de desconto?",
        answer: 'Basta usar o código "ratte" quando estiver finalizando a compra em lojas como Gamerbulk, Acezone ou SkinVault para obter um desconto.'
      },
      "contact-directly": {
        question: "Posso entrar em contato diretamente?",
        answer: "Sim, você pode me enviar um email para ratte@seweraim.com. Vou tentar responder o mais rápido possível, mas pode demorar um pouco se eu estiver ocupado."
      }
    }
  },
  
  en: {
    all: "All",
    affiliate: "Affiliate", 
    config: "Config",
    social: "Social", 
    steam: "Hobby",
    services: "Services",
    faq: "FAQ",
    
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
      steam: "Hobby",
      services: "Professional Services",
      faq: "Frequently Asked Questions"
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
    },
    
    faqEntries: {
      "who-am-i": {
        question: "Who am I?",
        answer: "Hey, I'm Ratte. I love gaming and creating content about it. I also try to help people find good deals on gaming gear and peripherals."
      },
      "what-can-find": {
        question: "What can you find on my website?",
        answer: "My website has links to my social media, some codes for discounts on gaming gear, and a list of my favorite gaming peripherals. I tried to make it easy to navigate."
      },
      "how-support": {
        question: "How can I support you?",
        answer: "If you want to support me, you can use my affiliate links or codes when buying gaming gear. It helps me out and you might get a discount too."
      },
      "where-connect": {
        question: "Where can I connect with you?",
        answer: "I'm on Twitch, YouTube, TikTok, and a few other places. Feel free to check out my social links and say hi. I love talking to other gamers."
      },
      "gaming-gear": {
        question: "What gaming gear do you recommend?",
        answer: "I've put together a list of gaming peripherals and gear that I really like and use myself. Take a look if you're interested."
      },
      "discount-codes": {
        question: "How do I use your discount codes?",
        answer: 'Just use the code "ratte" when you\'re checking out at stores like Gamerbulk, Acezone, or SkinVault to get a discount.'
      },
      "contact-directly": {
        question: "Can I contact you directly?",
        answer: "Yeah, you can email me at ratte@seweraim.com. I'll try to get back to you as soon as I can, but it might take a bit if I'm busy."
      }
    }
  },

  es: {
    all: "Todos",
    affiliate: "Afiliados",
    config: "Configuración",
    social: "Social",
    steam: "Hobby",
    services: "Servicios",
    faq: "FAQ",
    
    profileDescription: "Todos mis enlaces geniales, ¡gracias por tu apoyo! :3",
    
    visit: "Visitar",
    copyCode: "Copiar código",
    copied: "¡Copiado!",
    
    updated: "Actualizado",
    verified: "Verificado",
    
    categories: {
      social: "Redes Sociales",
      affiliate: "Asociaciones",
      config: "Configuración",
      steam: "Hobby",
      services: "Servicios Profesionales",
      faq: "Preguntas Frecuentes"
    },
    
    linkDescriptions: {
      "discord": "Únete a la comunidad",
      "youtube": "Gameplay de CS2, tutoriales y contenido gaming",
      "tiktok": "Clips cortos de gaming y destacados",
      "steam": "Perfil de Steam",
      "trade": "Envía ofertas de intercambio aquí",
      "settings": "Ve mis configuraciones de CS2",
      "peripherals": "Mi setup y equipamiento gaming",
      "twitch": "Streams en vivo de CS2 y gaming"
    },
    
    linkTitles: {
      "twitch": "Twitch",
      "discord": "Discord",
      "youtube": "YouTube",
      "tiktok": "TikTok",
      "twitter": "X (Twitter)",
      "steam": "Steam",
      "trade": "Enlace de Intercambio",
      "settings": "Configuración",
      "peripherals": "Periféricos"
    },
    
    serviceDescriptions: {
      portfolioDev: "Proyectos de desarrollo web y aplicaciones. Tecnologías: React, Node.js, Python, MongoDB.",
      portfolioDesign: "Proyectos de diseño gráfico, identidad visual, logos y materiales promocionales.",
      servicesDev: "Desarrollo de sitios web y aplicaciones bajo consulta. Contacta para presupuesto personalizado.",
      servicesDesign: "Creación de identidad visual, logos y materiales gráficos bajo consulta. Presupuesto personalizado."
    },
    
    faqEntries: {
      "who-am-i": {
        question: "¿Quién soy?",
        answer: "Hola, soy Ratte. Me encanta jugar y crear contenido sobre juegos. También trato de ayudar a la gente a encontrar buenas ofertas en equipamiento gaming y periféricos."
      },
      "what-can-find": {
        question: "¿Qué puedes encontrar en mi sitio web?",
        answer: "Mi sitio web tiene enlaces a mis redes sociales, algunos códigos para descuentos en equipamiento gaming y una lista de mis periféricos gaming favoritos. Traté de hacerlo fácil de navegar."
      },
      "how-support": {
        question: "¿Cómo puedes apoyarme?",
        answer: "Si quieres apoyarme, puedes usar mis enlaces de afiliado o códigos al comprar equipamiento gaming. Me ayuda y también podrías conseguir un descuento."
      },
      "where-connect": {
        question: "¿Dónde puedes conectar conmigo?",
        answer: "Estoy en Twitch, YouTube, TikTok y algunos otros lugares. Siéntete libre de revisar mis enlaces sociales y saludar. Me encanta hablar con otros gamers."
      },
      "gaming-gear": {
        question: "¿Qué equipamiento gaming recomiendas?",
        answer: "He armado una lista de periféricos y equipamiento gaming que realmente me gusta y uso yo mismo. Échale un vistazo si te interesa."
      },
      "discount-codes": {
        question: "¿Cómo uso tus códigos de descuento?",
        answer: 'Solo usa el código "ratte" cuando estés comprando en tiendas como Gamerbulk, Acezone o SkinVault para obtener un descuento.'
      },
      "contact-directly": {
        question: "¿Puedo contactarte directamente?",
        answer: "Sí, puedes enviarme un email a ratte@seweraim.com. Trataré de responderte lo antes posible, pero podría tomar un tiempo si estoy ocupado."
      }
    }
  },

  fr: {
    all: "Tous",
    affiliate: "Affiliés",
    config: "Configuration",
    social: "Social",
    steam: "Hobby",
    services: "Services",
    faq: "FAQ",
    
    profileDescription: "Tous mes liens sympas, merci pour votre soutien ! :3",
    
    visit: "Visiter",
    copyCode: "Copier le code",
    copied: "Copié !",
    
    updated: "Mis à jour",
    verified: "Vérifié",
    
    categories: {
      social: "Réseaux Sociaux",
      affiliate: "Partenariats",
      config: "Configuration",
      steam: "Hobby",
      services: "Services Professionnels",
      faq: "Questions Fréquentes"
    },
    
    linkDescriptions: {
      "discord": "Rejoignez la communauté",
      "youtube": "Gameplay CS2, tutoriels et contenu gaming",
      "tiktok": "Clips gaming courts et moments forts",
      "steam": "Profil Steam",
      "trade": "Envoyez vos offres d'échange ici",
      "settings": "Voir mes paramètres CS2",
      "peripherals": "Mon setup et équipement gaming",
      "twitch": "Streams en direct CS2 et gaming"
    },
    
    linkTitles: {
      "twitch": "Twitch",
      "discord": "Discord",
      "youtube": "YouTube",
      "tiktok": "TikTok",
      "twitter": "X (Twitter)",
      "steam": "Steam",
      "trade": "Lien d'Échange",
      "settings": "Paramètres",
      "peripherals": "Périphériques"
    },
    
    serviceDescriptions: {
      portfolioDev: "Projets de développement web et applications. Technologies : React, Node.js, Python, MongoDB.",
      portfolioDesign: "Projets de design graphique, identité visuelle, logos et matériaux promotionnels.",
      servicesDev: "Développement de sites web et applications sur consultation. Contactez pour un devis personnalisé.",
      servicesDesign: "Création d'identité visuelle, logos et matériaux graphiques sur consultation. Devis personnalisé."
    },
    
    faqEntries: {
      "who-am-i": {
        question: "Qui suis-je ?",
        answer: "Salut, je suis Ratte. J'adore jouer et créer du contenu à ce sujet. J'essaie aussi d'aider les gens à trouver de bonnes affaires sur l'équipement gaming et les périphériques."
      },
      "what-can-find": {
        question: "Que pouvez-vous trouver sur mon site web ?",
        answer: "Mon site web a des liens vers mes réseaux sociaux, quelques codes pour des réductions sur l'équipement gaming, et une liste de mes périphériques gaming préférés. J'ai essayé de le rendre facile à naviguer."
      },
      "how-support": {
        question: "Comment pouvez-vous me soutenir ?",
        answer: "Si vous voulez me soutenir, vous pouvez utiliser mes liens d'affiliation ou codes lors de l'achat d'équipement gaming. Ça m'aide et vous pourriez aussi obtenir une réduction."
      },
      "where-connect": {
        question: "Où pouvez-vous vous connecter avec moi ?",
        answer: "Je suis sur Twitch, YouTube, TikTok et quelques autres endroits. N'hésitez pas à consulter mes liens sociaux et dire bonjour. J'adore parler avec d'autres gamers."
      },
      "gaming-gear": {
        question: "Quel équipement gaming recommandez-vous ?",
        answer: "J'ai assemblé une liste de périphériques et équipement gaming que j'aime vraiment et que j'utilise moi-même. Jetez-y un coup d'œil si ça vous intéresse."
      },
      "discount-codes": {
        question: "Comment utiliser vos codes de réduction ?",
        answer: 'Utilisez simplement le code "ratte" lors du paiement dans des magasins comme Gamerbulk, Acezone ou SkinVault pour obtenir une réduction.'
      },
      "contact-directly": {
        question: "Puis-je vous contacter directement ?",
        answer: "Oui, vous pouvez m'envoyer un email à ratte@seweraim.com. J'essaierai de vous répondre dès que possible, mais ça pourrait prendre du temps si je suis occupé."
      }
    }
  },

  de: {
    all: "Alle",
    affiliate: "Partner",
    config: "Konfiguration",
    social: "Social",
    steam: "Hobby",
    services: "Services",
    faq: "FAQ",
    
    profileDescription: "Alle meine coolen Links, danke für eure Unterstützung! :3",
    
    visit: "Besuchen",
    copyCode: "Code kopieren",
    copied: "Kopiert!",
    
    updated: "Aktualisiert",
    verified: "Verifiziert",
    
    categories: {
      social: "Soziale Medien",
      affiliate: "Partnerschaften",
      config: "Konfiguration",
      steam: "Hobby",
      services: "Professionelle Services",
      faq: "Häufig Gestellte Fragen"
    },
    
    linkDescriptions: {
      "discord": "Der Community beitreten",
      "youtube": "CS2 Gameplay, Tutorials und Gaming Content",
      "tiktok": "Kurze Gaming Clips und Highlights",
      "steam": "Steam Profil",
      "trade": "Trade Angebote hier senden",
      "settings": "Meine CS2 Einstellungen ansehen",
      "peripherals": "Mein Gaming Setup & Ausrüstung",
      "twitch": "Live CS2 und Gaming Streams"
    },
    
    linkTitles: {
      "twitch": "Twitch",
      "discord": "Discord",
      "youtube": "YouTube",
      "tiktok": "TikTok",
      "twitter": "X (Twitter)",
      "steam": "Steam",
      "trade": "Trade Link",
      "settings": "Einstellungen",
      "peripherals": "Peripheriegeräte"
    },
    
    serviceDescriptions: {
      portfolioDev: "Webentwicklungsprojekte und Anwendungen. Technologien: React, Node.js, Python, MongoDB.",
      portfolioDesign: "Grafikdesign-Projekte, visuelle Identität, Logos und Werbematerialien.",
      servicesDev: "Website- und Anwendungsentwicklung auf Beratungsbasis. Kontaktieren Sie uns für ein personalisiertes Angebot.",
      servicesDesign: "Erstellung visueller Identität, Logos und Grafikmaterialien auf Beratungsbasis. Personalisiertes Angebot."
    },
    
    faqEntries: {
      "who-am-i": {
        question: "Wer bin ich?",
        answer: "Hey, ich bin Ratte. Ich liebe Gaming und das Erstellen von Content darüber. Ich versuche auch, Leuten dabei zu helfen, gute Deals bei Gaming-Ausrüstung und Peripheriegeräten zu finden."
      },
      "what-can-find": {
        question: "Was könnt ihr auf meiner Website finden?",
        answer: "Meine Website hat Links zu meinen sozialen Medien, einige Codes für Rabatte auf Gaming-Ausrüstung und eine Liste meiner liebsten Gaming-Peripheriegeräte. Ich habe versucht, es einfach zu navigieren zu machen."
      },
      "how-support": {
        question: "Wie könnt ihr mich unterstützen?",
        answer: "Wenn ihr mich unterstützen wollt, könnt ihr meine Affiliate-Links oder Codes beim Kauf von Gaming-Ausrüstung verwenden. Das hilft mir und ihr könntet auch einen Rabatt bekommen."
      },
      "where-connect": {
        question: "Wo könnt ihr euch mit mir verbinden?",
        answer: "Ich bin auf Twitch, YouTube, TikTok und ein paar anderen Orten. Schaut gerne bei meinen sozialen Links vorbei und sagt hallo. Ich liebe es, mit anderen Gamern zu reden."
      },
      "gaming-gear": {
        question: "Welche Gaming-Ausrüstung empfehlt ihr?",
        answer: "Ich habe eine Liste von Gaming-Peripheriegeräten und Ausrüstung zusammengestellt, die ich wirklich mag und selbst verwende. Schaut mal rein, wenn es euch interessiert."
      },
      "discount-codes": {
        question: "Wie verwende ich eure Rabattcodes?",
        answer: 'Verwendet einfach den Code "ratte" beim Checkout in Shops wie Gamerbulk, Acezone oder SkinVault, um einen Rabatt zu erhalten.'
      },
      "contact-directly": {
        question: "Kann ich euch direkt kontaktieren?",
        answer: "Ja, ihr könnt mir eine E-Mail an ratte@seweraim.com senden. Ich werde versuchen, so schnell wie möglich zu antworten, aber es könnte etwas dauern, wenn ich beschäftigt bin."
      }
    }
  },

  ru: {
    all: "Все",
    affiliate: "Партнёры",
    config: "Настройки",
    social: "Соцсети",
    steam: "Хобби",
    services: "Услуги",
    faq: "FAQ",
    
    profileDescription: "Все мои крутые ссылки, спасибо за вашу поддержку! :3",
    
    visit: "Посетить",
    copyCode: "Копировать код",
    copied: "Скопировано!",
    
    updated: "Обновлено",
    verified: "Проверено",
    
    categories: {
      social: "Социальные Сети",
      affiliate: "Партнёрства",
      config: "Конфигурация",
      steam: "Хобби",
      services: "Профессиональные Услуги",
      faq: "Часто Задаваемые Вопросы"
    },
    
    linkDescriptions: {
      "discord": "Присоединяйтесь к сообществу",
      "youtube": "CS2 геймплей, туториалы и игровой контент",
      "tiktok": "Короткие игровые клипы и хайлайты",
      "steam": "Профиль Steam",
      "trade": "Отправляйте трейд предложения сюда",
      "settings": "Посмотрите мои настройки CS2",
      "peripherals": "Мой игровой сетап и снаряжение",
      "twitch": "Прямые трансляции CS2 и игр"
    },
    
    linkTitles: {
      "twitch": "Twitch",
      "discord": "Discord",
      "youtube": "YouTube",
      "tiktok": "TikTok",
      "twitter": "X (Twitter)",
      "steam": "Steam",
      "trade": "Трейд Ссылка",
      "settings": "Настройки",
      "peripherals": "Периферия"
    },
    
    serviceDescriptions: {
      portfolioDev: "Проекты веб-разработки и приложения. Технологии: React, Node.js, Python, MongoDB.",
      portfolioDesign: "Проекты графического дизайна, визуальная идентичность, логотипы и рекламные материалы.",
      servicesDev: "Разработка веб-сайтов и приложений по консультации. Свяжитесь для персонального предложения.",
      servicesDesign: "Создание визуальной идентичности, логотипов и графических материалов по консультации. Персональное предложение."
    },
    
    faqEntries: {
      "who-am-i": {
        question: "Кто я?",
        answer: "Привет, я Ratte. Я люблю игры и создание контента о них. Также стараюсь помочь людям находить хорошие предложения на игровое оборудование и периферию."
      },
      "what-can-find": {
        question: "Что вы можете найти на моём сайте?",
        answer: "На моём сайте есть ссылки на мои социальные сети, коды для скидок на игровое оборудование и список моей любимой игровой периферии. Я старался сделать его удобным для навигации."
      },
      "how-support": {
        question: "Как вы можете меня поддержать?",
        answer: "Если хотите меня поддержать, можете использовать мои партнёрские ссылки или коды при покупке игрового оборудования. Это помогает мне, и вы тоже можете получить скидку."
      },
      "where-connect": {
        question: "Где вы можете со мной связаться?",
        answer: "Я есть в Twitch, YouTube, TikTok и некоторых других местах. Не стесняйтесь заглянуть по моим социальным ссылкам и поздороваться. Я люблю говорить с другими геймерами."
      },
      "gaming-gear": {
        question: "Какое игровое оборудование вы рекомендуете?",
        answer: "Я составил список игровой периферии и оборудования, которое мне действительно нравится и которое я сам использую. Посмотрите, если интересно."
      },
      "discount-codes": {
        question: "Как использовать ваши коды скидок?",
        answer: 'Просто используйте код "ratte" при оформлении заказа в магазинах типа Gamerbulk, Acezone или SkinVault, чтобы получить скидку.'
      },
      "contact-directly": {
        question: "Могу ли я связаться с вами напрямую?",
        answer: "Да, можете написать мне на ratte@seweraim.com. Постараюсь ответить как можно быстрее, но может потребоваться время, если я буду занят."
      }
    }
  }
};