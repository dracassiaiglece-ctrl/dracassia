export type MultidisciplinaryArea = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
};

export const multidisciplinaryAreas: MultidisciplinaryArea[] = [
  {
    slug: "bancario",
    title: "Direito Bancário",
    shortDescription:
      "Atuação em demandas envolvendo relações com instituições financeiras, como contratos, cobranças, renegociações e medidas para proteção do consumidor financeiro.",
    description:
      "Detalhes sobre a atuação em Direito Bancário, com análise de contratos, cobranças, renegociações e medidas cabíveis para proteção do consumidor financeiro.",
  },
  {
    slug: "trabalhista",
    title: "Direito Trabalhista",
    shortDescription:
      "Orientação e atuação em questões trabalhistas, incluindo rescisões, verbas, acordos e ações judiciais relacionadas ao vínculo de trabalho.",
    description:
      "Detalhes sobre a atuação em Direito Trabalhista, com orientação estratégica e condução técnica de demandas, rescisões, verbas e acordos conforme o caso concreto.",
  },
  {
    slug: "criminal",
    title: "Direito Criminal",
    shortDescription:
      "Atuação em demandas criminais, com acompanhamento técnico em procedimentos investigatórios e processos, preservando direitos e garantias legais.",
    description:
      "Detalhes sobre a atuação em Direito Criminal, com acompanhamento técnico em investigações e processos, priorizando a proteção de direitos e garantias legais.",
  },
  {
    slug: "empresarial",
    title: "Direito Empresarial",
    shortDescription:
      "Suporte jurídico para empresas, com foco em contratos, questões societárias e prevenção de riscos no dia a dia do negócio.",
    description:
      "Detalhes sobre a atuação em Direito Empresarial, com suporte em contratos, estruturação societária e mitigação de riscos na rotina da empresa.",
  },
  {
    slug: "ambiental",
    title: "Direito Ambiental",
    shortDescription:
      "Apoio em temas ambientais, como regularizações, licenças e respostas a notificações e autos de infração, com atuação preventiva e contenciosa.",
    description:
      "Detalhes sobre a atuação em Direito Ambiental, com foco em regularizações, licenças, respostas a autos de infração e estratégias preventivas e contenciosas.",
  },
  {
    slug: "agronegocio",
    title: "Direito do Agronegócio",
    shortDescription:
      "Atuação em demandas ligadas ao setor rural, incluindo contratos, relações comerciais e apoio jurídico em operações do agronegócio.",
    description:
      "Detalhes sobre a atuação em Direito do Agronegócio, com apoio jurídico em contratos, relações comerciais e operações ligadas ao setor rural.",
  },
  {
    slug: "civil",
    title: "Direito Civil",
    shortDescription:
      "Atuação em demandas civis, como obrigações, contratos, indenizações e outras questões patrimoniais e de responsabilidade civil.",
    description:
      "Detalhes sobre a atuação em Direito Civil, com condução de demandas envolvendo contratos, obrigações, indenizações e responsabilidades patrimoniais.",
  },
  {
    slug: "consumidor",
    title: "Direito do Consumidor",
    shortDescription:
      "Atendimento em conflitos de consumo, com foco na solução de problemas com produtos e serviços, cobranças indevidas e reparação de danos.",
    description:
      "Detalhes sobre a atuação em Direito do Consumidor, com estratégias para solucionar conflitos, cobranças indevidas e pedidos de reparação de danos.",
  },
  {
    slug: "previdenciario",
    title: "Direito Previdenciário",
    shortDescription:
      "Orientação e atuação em benefícios previdenciários, como aposentadorias, auxílios e revisões, conforme o caso concreto.",
    description:
      "Detalhes sobre a atuação em Direito Previdenciário, com orientação e condução de demandas envolvendo benefícios, aposentadorias, auxílios e revisões.",
  },
];

export const getMultidisciplinaryAreaBySlug = (slug: string): MultidisciplinaryArea | undefined => {
  return multidisciplinaryAreas.find((area) => area.slug === slug);
};
