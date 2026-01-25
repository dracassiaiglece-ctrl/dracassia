export type ServiceContent = {
  slug: string;
  title: string;
  intro: string;
  description: string;
  services: string[];
};

export const servicesContent: ServiceContent[] = [
  {
    slug: "direito-bancario",
    title: "Direito Bancário",
    intro: "Defesa estratégica contra abusividades financeiras e gestão de passivos.",
    description:
      "Atuamos na defesa de pessoas físicas e jurídicas em face de instituições financeiras, visando o reequilíbrio contratual e a proteção patrimonial. Nossa atuação foca em identificar irregularidades em contratos de empréstimos, financiamentos e dívidas, buscando a redução de juros abusivos e a anulação de cláusulas ilegais.",
    services: [
      "Revisão de contratos de financiamento e empréstimos.",
      "Defesa em ações de busca e apreensão.",
      "Negociação de dívidas bancárias e gestão de passivo.",
      "Ações contra fraudes bancárias e golpes digitais.",
      "Defesa do produtor rural em crédito agrícola.",
    ],
  },
  {
    slug: "direito-trabalhista",
    title: "Direito Trabalhista",
    intro: "Assessoria preventiva e contenciosa para relações de trabalho justas e seguras.",
    description:
      "Oferecemos suporte jurídico completo tanto para reclamantes quanto para empresas. Nosso foco é garantir o cumprimento rigoroso da legislação trabalhista, atuando desde a consultoria preventiva para evitar passivos até a defesa vigorosa em reclamações trabalhistas, sempre buscando a melhor resolução para o conflito.",
    services: [
      "Reclamações trabalhistas (verbas rescisórias, horas extras, danos morais).",
      "Defesa de empresas e compliance trabalhista.",
      "Acidentes de trabalho e doenças ocupacionais.",
      "Reconhecimento de vínculo empregatício.",
      "Assédio moral e sexual no ambiente de trabalho.",
    ],
  },
  {
    slug: "direito-criminal",
    title: "Direito Criminal",
    intro: "Defesa técnica, combativa e discreta em momentos críticos.",
    description:
      "A atuação na esfera penal exige técnica apurada e agilidade. Nossos parceiros criminalistas atuam 24 horas por dia para garantir que os direitos fundamentais sejam respeitados, seja em sede policial ou judicial. Trabalhamos com sigilo absoluto e estratégia personalizada para cada caso, do inquérito aos tribunais superiores.",
    services: [
      "Acompanhamento em prisões em flagrante e audiências de custódia.",
      "Defesa em inquéritos policiais e ações penais.",
      "Pedidos de liberdade provisória e Habeas Corpus.",
      "Atuação no Tribunal do Júri.",
      "Execução Penal e progressão de regime.",
    ],
  },
  {
    slug: "direito-empresarial",
    title: "Direito Empresarial",
    intro: "Segurança jurídica para o crescimento sustentável do seu negócio.",
    description:
      "O ambiente de negócios exige agilidade e proteção legal. Atuamos como parceiros estratégicos da sua empresa, oferecendo consultoria na elaboração de contratos, estruturação societária e blindagem patrimonial, permitindo que o empresário foque no que mais importa: o crescimento do seu negócio.",
    services: [
      "Elaboração e revisão de contratos mercantis.",
      "Planejamento e estruturação societária (Holdings).",
      "Recuperação de crédito e cobrança judicial.",
      "Propriedade intelectual e registro de marcas.",
      "Falência e Recuperação Judicial.",
    ],
  },
  {
    slug: "direito-ambiental",
    title: "Direito Ambiental",
    intro: "Consultoria para conformidade legal e defesa em infrações ambientais.",
    description:
      "Em um cenário de regulação rigorosa, oferecemos suporte técnico-jurídico para garantir a conformidade de empreendimentos rurais e urbanos. Atuamos na defesa contra autos de infração e na condução de processos de licenciamento, conciliando desenvolvimento econômico com segurança legal.",
    services: [
      "Defesa administrativa e judicial contra multas ambientais (IBAMA, Órgãos Estaduais).",
      "Acompanhamento de licenciamento ambiental.",
      "Termos de Ajustamento de Conduta (TAC).",
      "Crimes ambientais.",
      "Consultoria preventiva para agronegócio e indústrias.",
    ],
  },
  {
    slug: "direito-agronegocio",
    title: "Direito do Agronegócio",
    intro: "Soluções jurídicas especializadas para o produtor rural e a cadeia agroindustrial.",
    description:
      "Compreendemos a realidade do campo e os desafios do produtor. Nossa atuação abrange desde a regularização da terra até a complexidade dos contratos de safra e crédito rural, garantindo segurança jurídica da porteira para dentro e para fora.",
    services: [
      "Contratos Agrários (arrendamento e parceria).",
      "Regularização fundiária e questões possessórias.",
      "Renegociação de dívidas e",
    ],
  },
];

export const getServiceContentBySlug = (slug: string): ServiceContent | undefined => {
  return servicesContent.find((service) => service.slug === slug);
};

