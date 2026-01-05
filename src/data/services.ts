import {
  FileText,
  Heart,
  Shield,
  Baby,
  Users,
  Building,
  Scale,
  FileCheck,
  HandHeart,
  Home,
  Gift,
} from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  icon: any;
  title: string;
  shortDescription: string;
  description: string;
  details: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    id: "divorcio",
    slug: "divorcio-judicial-e-extrajudicial",
    icon: FileText,
    title: "Divórcio Judicial e Extrajudicial",
    shortDescription:
      "Atuação em divórcios consensuais e litigiosos, judiciais ou em cartório, com condução técnica do procedimento, regularização do estado civil e orientação jurídica estratégica, inclusive em casos com elementos internacionais.",
    description:
      "Oferecemos assessoria jurídica completa em processos de divórcio, seja consensual ou litigioso, judicial ou extrajudicial. Nossa atuação visa garantir a regularização do estado civil de forma célere e eficiente, sempre priorizando o bem-estar das partes envolvidas.",
    details: [
      "Divórcio consensual em cartório (extrajudicial) quando não há filhos menores ou incapazes",
      "Divórcio judicial consensual com acordo sobre partilha de bens e guarda de filhos",
      "Divórcio litigioso com representação completa em todas as fases processuais",
      "Divórcio com elementos internacionais (casamentos realizados no exterior)",
      "Análise e orientação sobre regime de bens e partilha patrimonial",
      "Regularização de documentos e atualização cadastral",
    ],
    keywords: ["divórcio", "separação", "dissolução de casamento", "direito de família"],
  },
  {
    id: "planejamento-matrimonial",
    slug: "planejamento-matrimonial",
    icon: Heart,
    title: "Planejamento Matrimonial",
    shortDescription:
      "Consultoria jurídica preventiva para organização das relações conjugais, com orientação sobre regime de bens, pactos antenupciais e proteção patrimonial, visando segurança jurídica e prevenção de conflitos futuros.",
    description:
      "Consultoria jurídica preventiva especializada em planejamento matrimonial, oferecendo orientação estratégica sobre regime de bens, pactos antenupciais e proteção patrimonial. Nosso objetivo é garantir segurança jurídica e prevenir conflitos futuros através de planejamento adequado.",
    details: [
      "Orientação sobre regimes de bens (comunhão parcial, separação total, participação final nos aquestos)",
      "Elaboração de pactos antenupciais personalizados",
      "Planejamento patrimonial para casais",
      "Proteção de bens adquiridos antes e durante o casamento",
      "Orientações sobre doações e transferências patrimoniais",
      "Consultoria para casamentos com elementos internacionais",
    ],
    keywords: ["pacto antenupcial", "regime de bens", "planejamento patrimonial", "casamento"],
  },
  {
    id: "pensao-alimenticia",
    slug: "pensao-alimenticia",
    icon: Scale,
    title: "Pensão Alimentícia",
    shortDescription:
      "Atuação na fixação, revisão, exoneração e execução de alimentos, com foco na efetividade das decisões e na observância do binômio necessidade e possibilidade.",
    description:
      "Atuação especializada em todas as questões relacionadas à pensão alimentícia, desde a fixação inicial até revisões, exoneração e execução. Trabalhamos com foco na efetividade das decisões, sempre observando o binômio necessidade e possibilidade.",
    details: [
      "Fixação de pensão alimentícia para filhos, cônjuge ou companheiro",
      "Revisão de valores quando há mudança nas condições financeiras",
      "Exoneração de pensão quando não há mais necessidade",
      "Execução de alimentos com medidas coercitivas quando necessário",
      "Alimentos provisórios em processos de divórcio ou separação",
      "Alimentos gravídicos durante a gestação",
    ],
    keywords: ["pensão alimentícia", "alimentos", "pensão", "direito alimentar"],
  },
  {
    id: "guarda-convivencia",
    slug: "guarda-e-convivencia-familiar",
    icon: Users,
    title: "Guarda e Convivência Familiar",
    shortDescription:
      "Assessoria jurídica na definição de guarda unilateral ou compartilhada e regulamentação do direito de convivência, sempre pautada no melhor interesse da criança e do adolescente.",
    description:
      "Assessoria jurídica especializada em questões de guarda de filhos e regulamentação de convivência familiar. Nossa atuação é sempre pautada no melhor interesse da criança e do adolescente, buscando soluções que preservem os vínculos familiares.",
    details: [
      "Definição de guarda unilateral ou compartilhada",
      "Regulamentação de convivência (visitas e horários)",
      "Alteração de guarda quando necessário",
      "Mediação familiar para acordos consensuais",
      "Proteção dos direitos da criança e do adolescente",
      "Acompanhamento em processos de guarda litigiosa",
    ],
    keywords: ["guarda de filhos", "guarda compartilhada", "visitação", "direito parental"],
  },
  {
    id: "uniao-estavel",
    slug: "reconhecimento-e-dissolucao-de-uniao-estavel",
    icon: FileCheck,
    title: "Reconhecimento e Dissolução de União Estável",
    shortDescription:
      "Atuação na formalização ou dissolução da união estável, judicial ou extrajudicialmente, com análise jurídica e patrimonial adequada a cada situação.",
    description:
      "Atuação completa em questões relacionadas à união estável, seja para formalização ou dissolução. Realizamos análise jurídica e patrimonial detalhada, adequada a cada situação específica, garantindo segurança jurídica para ambas as partes.",
    details: [
      "Reconhecimento judicial de união estável",
      "Dissolução consensual de união estável",
      "Dissolução litigiosa com partilha de bens",
      "Contratos de convivência para regulamentar a união",
      "Análise patrimonial e partilha de bens adquiridos na união",
      "Proteção dos direitos dos companheiros",
    ],
    keywords: ["união estável", "dissolução de união estável", "reconhecimento de união estável"],
  },
  {
    id: "adocao",
    slug: "adocao",
    icon: Baby,
    title: "Adoção",
    shortDescription:
      "Atuação jurídica em processos de adoção, com acompanhamento técnico em todas as fases, orientação sobre requisitos legais e observância dos princípios do Estatuto da Criança e do Adolescente.",
    description:
      "Atuação jurídica especializada em processos de adoção, oferecendo acompanhamento técnico completo em todas as fases do processo. Trabalhamos com total observância aos princípios do Estatuto da Criança e do Adolescente, sempre priorizando o melhor interesse da criança.",
    details: [
      "Orientação sobre requisitos legais para adoção",
      "Acompanhamento no processo de habilitação",
      "Assessoria durante o estágio de convivência",
      "Representação na ação de adoção",
      "Regularização de documentos e registro civil",
      "Orientações sobre adoção nacional e internacional",
    ],
    keywords: ["adoção", "processo de adoção", "adoção de crianças", "ECA"],
  },
  {
    id: "curatela",
    slug: "curatela",
    icon: HandHeart,
    title: "Curatela",
    shortDescription:
      "Atuação em ações de curatela e tomada de decisão apoiada, com foco na proteção da pessoa que necessita de amparo jurídico, respeitando sua dignidade, autonomia e os limites legais da medida.",
    description:
      "Atuação especializada em ações de curatela e tomada de decisão apoiada, sempre com foco na proteção da pessoa que necessita de amparo jurídico. Respeitamos integralmente a dignidade, autonomia e os limites legais de cada medida, buscando soluções que preservem os direitos fundamentais.",
    details: [
      "Ações de curatela para pessoas com deficiência ou incapacidade",
      "Tomada de decisão apoiada como alternativa menos restritiva",
      "Curatela provisória em situações de urgência",
      "Revisão e extinção de curatela quando necessário",
      "Proteção patrimonial e pessoal do curatelado",
      "Orientação sobre direitos e deveres do curador",
    ],
    keywords: ["curatela", "tomada de decisão apoiada", "incapacidade", "proteção"],
  },
  {
    id: "violencia-domestica",
    slug: "violencia-domestica-e-familiar",
    icon: Shield,
    title: "Violência Doméstica e Familiar",
    shortDescription:
      "Atuação na orientação e adoção de medidas legais cabíveis em situações de violência doméstica e familiar, incluindo requerimento de medidas protetivas, acompanhamento processual e atuação conforme a Lei Maria da Penha.",
    description:
      "Atuação especializada e sensível em casos de violência doméstica e familiar, oferecendo orientação jurídica completa e requerimento de medidas protetivas de urgência. Trabalhamos em conformidade com a Lei Maria da Penha, sempre priorizando a proteção e segurança da vítima.",
    details: [
      "Requerimento de medidas protetivas de urgência",
      "Acompanhamento em processos criminais relacionados à violência doméstica",
      "Orientação sobre direitos da vítima",
      "Assessoria em ações de separação/divórcio decorrentes de violência",
      "Proteção de crianças e adolescentes vítimas de violência doméstica",
      "Atuação em conformidade com a Lei Maria da Penha",
    ],
    keywords: ["violência doméstica", "Lei Maria da Penha", "medidas protetivas", "proteção à mulher"],
  },
  {
    id: "planejamento-sucessorio",
    slug: "planejamento-sucessorio",
    icon: Building,
    title: "Planejamento Sucessório",
    shortDescription:
      "Consultoria jurídica preventiva para organização patrimonial e sucessória, com foco na segurança jurídica, redução de conflitos familiares e proteção do patrimônio.",
    description:
      "Consultoria jurídica preventiva especializada em planejamento sucessório, oferecendo soluções estratégicas para organização patrimonial e sucessória. Nosso objetivo é garantir segurança jurídica, reduzir conflitos familiares e proteger o patrimônio através de planejamento adequado.",
    details: [
      "Elaboração de testamentos e codicilos",
      "Planejamento de doações com reserva de usufruto",
      "Estruturação de holdings familiares",
      "Orientação sobre sucessão legítima e testamentária",
      "Planejamento tributário sucessório",
      "Proteção patrimonial para herdeiros",
    ],
    keywords: ["planejamento sucessório", "testamento", "herança", "sucessão"],
  },
  {
    id: "inventario-partilha",
    slug: "inventario-e-partilha-de-bens",
    icon: Home,
    title: "Inventário e Partilha de Bens",
    shortDescription:
      "Atuação em inventários judiciais e extrajudiciais, com foco na regularização patrimonial, celeridade e segurança jurídica no processo sucessório.",
    description:
      "Atuação especializada em inventários judiciais e extrajudiciais, garantindo regularização patrimonial de forma célere e segura. Trabalhamos para que o processo sucessório seja concluído com agilidade, sempre preservando os direitos de todos os herdeiros.",
    details: [
      "Inventário extrajudicial em cartório (quando possível)",
      "Inventário judicial com acompanhamento completo",
      "Arrolamento de bens para inventários simplificados",
      "Partilha consensual e litigiosa de bens",
      "Regularização de imóveis e outros bens",
      "Resolução de conflitos entre herdeiros",
    ],
    keywords: ["inventário", "partilha de bens", "herança", "sucessão"],
  },
  {
    id: "alimentos-gravidicos",
    slug: "alimentos-gravidicos",
    icon: Gift,
    title: "Alimentos Gravídicos",
    shortDescription:
      "Atuação na fixação de alimentos durante a gestação, garantindo suporte financeiro à gestante, conforme a legislação específica.",
    description:
      "Atuação especializada na fixação de alimentos durante a gestação, garantindo suporte financeiro adequado à gestante conforme a legislação específica. Trabalhamos para proteger os direitos da gestante e do nascituro desde o início da gestação.",
    details: [
      "Fixação de alimentos gravídicos durante a gestação",
      "Cálculo adequado do valor dos alimentos",
      "Execução de alimentos quando necessário",
      "Proteção dos direitos da gestante e do nascituro",
      "Orientações sobre direitos e deveres das partes",
      "Acompanhamento até o nascimento da criança",
    ],
    keywords: ["alimentos gravídicos", "pensão na gestação", "direitos da gestante"],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};




