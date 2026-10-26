/**
 * ==============================================================================
 * CONFIGURAÇÃO DO CLIENTE: Christhyan Muniz (BETA PRÉ-FINAL)
 * Eletricista Residencial e Predial • Infraestrutura Elétrica
 * Instagram: @christhyanmunizz
 * ==============================================================================
 */

export const clientData = {
  // 1. DADOS PESSOAIS / MARCA
  info: {
    name: "Christhyan Muniz",
    role: "Eletricista Residencial & Predial • Criador de Conteúdo",
    headline: "Instalações elétricas modernas, seguras e com acabamento de alto padrão.",
    bioShort: "Especialista em montagem de quadros de distribuição, passagens de cabeamento e reformas elétricas completas. Sem gambiarras, com máxima segurança.",
    location: "Rio de Janeiro e Região • Atendimento Residencial e Comercial",
    avatarUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
    
    stats: [
      { label: "Anos de Prática", value: "+6" },
      { label: "Quadros & Obras", value: "+280" },
      { label: "Segurança Técnica", value: "NBR 5410" },
      { label: "Risco de Curtos", value: "0%" },
    ]
  },

  // 2. CONTATOS E BOTÕES DE AÇÃO
  contact: {
    whatsappNumber: "5521999999999", // Placeholder do RJ aguardando confirmação final
    whatsappDefaultMessage: "Olá Christhyan! Vi seu perfil e gostaria de solicitar um orçamento para um serviço elétrico no meu imóvel.",
    email: "contato@christhyanmuniz.com.br",
    instagram: "https://www.instagram.com/christhyanmunizz",
    linkedin: "",
    github: "",
  },

  // 3. SEÇÃO "QUEM SOU EU"
  about: {
    title: "Segurança, Rigor Técnico e Acabamento Impecável",
    subtitle: "A eletricidade da sua casa ou empresa tratada com seriedade e sem improvisos.",
    paragraphs: [
      "Sou profissional da área de elétrica residencial e predial, compartilhando diariamente nas redes sociais os bastidores reais das obras, reformas e manutenções elétricas.",
      "Meu compromisso é eliminar de vez riscos de curtos-circuitos, choques e incêndios por sobrecarga, entregando quadros perfeitamente alinhados, cabos dimensionados segundo as normas e um acabamento limpo que valoriza o seu patrimônio."
    ],
    diferenciais: [
      { title: "Normas NBR 5410", desc: "Dimensionamento correto de cabos e disjuntores para evitar sobreaquecimento." },
      { title: "Quadros Organizados", desc: "Identificação completa de cada circuito para sua total facilidade e segurança." },
      { title: "Proteção com DR e DPS", desc: "Proteja sua família contra choques e seus aparelhos contra queimas por raios." },
      { title: "Transparência Total", desc: "Acompanhe todo o passo a passo do serviço com explicações claras e sem termos difíceis." }
    ]
  },

  // 4. SERVIÇOS OFERECIDOS
  services: [
    {
      id: "qdc",
      title: "Montagem & Reforma de Quadros (QDC)",
      description: "Substituição de quadros antigos, instalação de barramentos tipo pente, disjuntores modernos, DR e DPS.",
      icon: "Zap",
      badge: "Mais Solicitado",
      features: ["Proteção contra choque elétrico (DR)", "Proteção contra raios (DPS)", "Identificação visual de circuitos"]
    },
    {
      id: "infra",
      title: "Passagem de Cabos & Infraestrutura",
      description: "Troca de fiação antiga ressecada, passagem de novos circuitos por eletrodutos e canaletas industriais.",
      icon: "Database",
      badge: "Segurança",
      features: ["Fiação antichama certificada", "Eliminação de sobrecargas", "Distribuição equilibrada de fases"]
    },
    {
      id: "instalacoes",
      title: "Instalações Residenciais e Prediais",
      description: "Circuitos dedicados para chuveiros, ar-condicionado, tomadas de 20A, cooktops e fornos elétricos.",
      icon: "Layout",
      badge: "Alto Padrão",
      features: ["Tomadas e interruptores modernos", "Alimentação segura para aparelhos pesados", "Sem quedas de energia"]
    },
    {
      id: "iluminacao",
      title: "Iluminação Técnica & Perfis de LED",
      description: "Instalação de fitas LED, trilhos eletrificados, sancas de gesso, refletores e automação inteligente.",
      icon: "ShoppingCart",
      badge: "Design & Estética",
      features: ["Iluminação suave e moderna", "Integração com interruptores smart", "Economia de energia com LED"]
    },
    {
      id: "manutencao",
      title: "Correção de Curto-Circuito & Emergências",
      description: "Localização rápida de falhas, disjuntores que desarmam sem motivo, cheiro de queimado e quedas de tensão.",
      icon: "Zap",
      badge: "Plantão",
      features: ["Diagnóstico preciso com multímetro", "Reparo imediato sem quebra desnecessária", "Laudo da instalação"]
    }
  ],

  // 5. PORTFÓLIO / TRABALHOS (IMAGENS HD DE ELÉTRICA REAL)
  portfolio: [
    {
      id: 1,
      title: "Montagem e Alinhamento de Quadro Trifásico (QDC)",
      category: "Quadros Elétricos",
      description: "Quadro com barramento isolado, proteção total contra descargas atmosféricas e identificação circuito a circuito.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      tags: ["QDC", "DPS", "DR", "Pente", "NBR 5410"],
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Passagem de Cabos e Infraestrutura Aparente",
      category: "Infraestrutura",
      description: "Cabeamento técnico passado em eletrodutos com acabamento industrial limpo e seguro.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      tags: ["Cabeamento", "Infraestrutura", "Fiação Nova"],
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Instalação Elétrica Residencial Completa",
      category: "Residencial",
      description: "Reforma total da elétrica de apartamento, adequando pontos de tomada e iluminação moderna.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      tags: ["Reforma Elétrica", "Tomadas", "Ar-Condicionado"],
      liveUrl: "#",
    }
  ],

  // 6. DEPOIMENTOS DE CLIENTES
  testimonials: [
    {
      id: 1,
      name: "Rodrigo Almeida",
      role: "Reforma Residencial • Rio de Janeiro",
      comment: "O Christhyan resolveu um problema de disjuntor desarmando que três profissionais anteriores não acharam. O quadro elétrico ficou uma verdadeira obra de arte!",
      rating: 5,
    },
    {
      id: 2,
      name: "Márcio Ferreira",
      role: "Comércio • Niterói / RJ",
      comment: "Excelente profissional. Muito pontual, limpo, explicou cada etapa do serviço e entregou no prazo prometido. Recomendo de olhos fechados!",
      rating: 5,
    }
  ],

  // 7. PERGUNTAS FREQUENTES (FAQ)
  faq: [
    {
      question: "Você atende casos de emergência e curto-circuito?",
      answer: "Sim! Casos com disjuntor desarmando, cheiro de queimado ou falta de energia parcial em cômodos são atendidos com prioridade para garantir a segurança do seu imóvel."
    },
    {
      question: "Como funciona a solicitação de orçamento?",
      answer: "Basta clicar em qualquer botão do WhatsApp no site e nos mandar fotos ou um vídeo do quadro ou do que você precisa. Conseguimos passar uma prévia e agendar a visita técnica."
    },
    {
      question: "O serviço segue as normas brasileiras de segurança?",
      answer: "Rigorosamente sim. Todos os dimensionamentos de cabos, disjuntores e dispositivos de segurança seguem à risca os parâmetros da norma NBR 5410 da ABNT."
    },
    {
      question: "Quais regiões você atende?",
      answer: "Atendemos o Rio de Janeiro e municípios da região metropolitana para serviços residenciais, prediais e comerciais."
    }
  ]
};

export default clientData;
