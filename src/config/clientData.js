/**
 * ==============================================================================
 * CONFIGURAÇÃO DO CLIENTE: Dra. Marina Costa
 * ==============================================================================
 */

export const clientData = {
  // 1. DADOS PESSOAIS / PROFISSIONAL
  info: {
    name: "Dra. Marina Costa",
    role: "Dermatologista e Estética Avançada",
    headline: "Cuidado individualizado para a saúde e beleza da sua pele.",
    bioShort: "Médica dermatologista com 10 anos de atuação. Tratamentos personalizados baseados em evidências científicas e bem-estar.",
    location: "São Paulo, SP • Atendimento Presencial e Teleconsulta",
    avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    
    stats: [
      { label: "Anos de Atuação", value: "10+" },
      { label: "Pacientes Atendidos", value: "+2.500" },
      { label: "Procedimentos Realizados", value: "+1.800" },
      { label: "Satisfação dos Pacientes", value: "100%" },
    ]
  },

  // 2. CONTATOS E AGENDAMENTO
  contact: {
    whatsappNumber: "5511999999999",
    whatsappDefaultMessage: "Olá Dra. Marina! Gostaria de consultar horários disponíveis para agendamento de consulta.",
    email: "contato@dramarinacosta.com.br",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },

  // 3. SOBRE A PROFISSIONAL
  about: {
    title: "Medicina Dermatológica com Cuidado e Precisão",
    subtitle: "Atenção humanizada e tratamentos seguros para cada momento da sua vida.",
    paragraphs: [
      "Médica dermatologista com 10 anos de atuação. Ajudo cada paciente a cuidar da saúde da pele com atenção individualizada e tratamentos baseados em evidências.",
      "Acredito que a estética deve caminhar de mãos dadas com a saúde integral, valorizando a sua beleza natural através de procedimentos seguros, modernos e com resultados elegantes."
    ],
    diferenciais: [
      { title: "Avaliação Personalizada", desc: "Plano de tratamento sob medida para as características únicas da sua pele." },
      { title: "Baseado em Evidências", desc: "Tecnologias e protocolos médicos comprovados cientificamente." },
      { title: "Ambiente Exclusivo", desc: "Clínica estruturada para o seu conforto, pontualidade e discrição." },
      { title: "Acompanhamento Contínuo", desc: "Suporte e orientações detalhadas antes e depois de cada procedimento." }
    ]
  },

  // 4. SERVIÇOS & PROCEDIMENTOS
  services: [
    {
      id: "consulta",
      title: "Consulta Dermatológica",
      description: "Avaliação minuciosa da pele, cabelos e unhas, diagnóstico clínico e prescrição de cuidados domiciliares.",
      icon: "Database",
      badge: "Fundamental",
      features: ["Mapeamento de queixas", "Diagnóstico preventivo", "Plano de rotina de skincare"]
    },
    {
      id: "acne",
      title: "Tratamento de Acne & Manchas",
      description: "Abordagem completa para controle de acne ativa, clareamento de manchas e cicatrizes.",
      icon: "Layout",
      badge: "Muito Procurado",
      features: ["Controle de oleosidade", "Prevenção de cicatrizes", "Protocolos combinados"]
    },
    {
      id: "botox",
      title: "Toxina Botulínica",
      description: "Prevenção e suavização de linhas de expressão dinâmicas com aspecto natural e descansado.",
      icon: "Zap",
      badge: "Estética Avançada",
      features: ["Terço superior da face", "Sorriso gengival e bruxismo", "Resultado natural"]
    },
    {
      id: "colageno",
      title: "Bioestimuladores de Colágeno",
      description: "Tratamento para recuperar a firmeza e estimular a produção natural de colágeno da pele.",
      icon: "ShoppingCart",
      badge: "Rejuvenescimento",
      features: ["Efeito lifting gradual", "Melhora da textura e viço", "Resultados de longa duração"]
    },
    {
      id: "peelings",
      title: "Peelings Químicos",
      description: "Renovação celular profunda para uniformização do tom da pele, brilho e textura refinada.",
      icon: "Layout",
      badge: "Renovação",
      features: ["Clareamento de manchas", "Estímulo à renovação", "Recuperação rápida"]
    }
  ],

  // 5. PORTFÓLIO / ESTRUTURA CLÍNICA
  portfolio: [
    {
      id: 1,
      title: "Atendimento Humanizado",
      category: "Clínica",
      description: "Atendimento em clínica de cuidados com a pele com conforto, atenção aos detalhes e escuta atenta.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      tags: ["Consulta", "Dermatologia", "Prevenção"],
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Protocolos e Dermocosméticos",
      category: "Tratamentos",
      description: "Produtos de alta performance e fórmulas selecionadas para os cuidados diários com a sua pele.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
      tags: ["Skincare", "Alta Eficácia", "Cuidados Diários"],
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Ambiente Clínico Moderno",
      category: "Estrutura",
      description: "Espaço projetado segundo as mais rigorosas normas de biossegurança e acolhimento ao paciente.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      tags: ["Biossegurança", "Conforto", "Tecnologia Médica"],
      liveUrl: "#",
    }
  ],

  // 6. DEPOIMENTOS DE PACIENTES
  testimonials: [
    {
      id: 1,
      name: "Paciente",
      role: "Tratamento Facial",
      comment: "Fui muito bem atendida. A doutora explicou cada etapa do tratamento com cuidado e carinho. O resultado superou minhas expectativas!",
      rating: 5,
    },
    {
      id: 2,
      name: "Paciente",
      role: "Consulta Preventiva",
      comment: "A consulta foi atenciosa e o plano de cuidados foi explicado de forma clara. Nunca tive uma profissional tão dedicada.",
      rating: 5,
    }
  ],

  // 7. PERGUNTAS FREQUENTES (FAQ)
  faq: [
    {
      question: "Como agendo uma consulta?",
      answer: "Entre em contato pelo WhatsApp para consultar horários disponíveis e tirar dúvidas sobre a primeira consulta."
    },
    {
      question: "Preciso de avaliação antes do procedimento?",
      answer: "Sim. A indicação de qualquer tratamento ou procedimento estético é feita rigorosamente após uma avaliação médica individual."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos Pix, cartões de crédito e débito, além de opções de parcelamento. Consulte as condições no momento do agendamento."
    }
  ]
};

export default clientData;
