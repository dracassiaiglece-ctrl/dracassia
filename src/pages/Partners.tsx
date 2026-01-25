import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import gloriaImg from "@/assets/Gloria Almeida.jpeg";
import junialissonImg from "@/assets/Dr. Junialisson 1.JPEG";
import nathaliaImg from "@/assets/Nathalia Costa.jpeg";
import uineImg from "@/assets/Uine Santana.jpeg";

type TeamMember = {
  name: string;
  image: string;
  areas: string[];
  university: string;
  specializations: string[];
  oab?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Glória Almeida Dutra",
    image: gloriaImg,
    areas: ["Cível", "Trabalhista"],
    university: "Universidade Ceuma - Maranhão",
    specializations: ["Pós-graduação em Direito Trabalhista pela Damásio Educacional"],
    oab: "OAB/BA 77.373",
  },
  {
    name: "Junialisson Costa",
    image: junialissonImg,
    areas: ["Criminal", "Penal"],
    university: "Universidade Católica do Salvador - UCSal",
    specializations: [
      "Pós-graduação em Ciências Criminais pela PUC Minas",
      "Pós-graduação em Advocacia Criminal pela Legale",
    ],
    oab: "OAB/BA 84.379",
  },
  {
    name: "Nathália Costa Santos Araújo",
    image: nathaliaImg,
    areas: ["Criminal", "Empresarial"],
    university: "Universidade Católica do Salvador - UCSAL",
    specializations: ["Pós-graduação em Direito Processual Penal pela FAMEF", "Direito Previdenciário e Empresarial"],
    oab: "OAB/BA -----",
  },
  {
    name: "Uine Santana",
    image: uineImg,
    areas: ["Contratual", "Ambiental"],
    university: "UFBA",
    specializations: [
      "Pós-graduanda em Direito Ambiental pela UFPR",
      "Pós-graduada em Direito do Agronegócio pela LEGALE",
    ],
    oab: "OAB/BA ------",
  },
];

const partnerExtraPracticeAreas = [
  {
    title: "Direito Bancário",
    description:
      "Atuação em demandas envolvendo relações com instituições financeiras, como contratos, cobranças, renegociações e medidas para proteção do consumidor financeiro.",
  },
  {
    title: "Direito Trabalhista",
    description:
      "Orientação e atuação em questões trabalhistas, incluindo rescisões, verbas, acordos e ações judiciais relacionadas ao vínculo de trabalho.",
  },
  {
    title: "Direito Criminal",
    description:
      "Atuação em demandas criminais, com acompanhamento técnico em procedimentos investigatórios e processos, preservando direitos e garantias legais.",
  },
  {
    title: "Direito Empresarial",
    description:
      "Suporte jurídico para empresas, com foco em contratos, questões societárias e prevenção de riscos no dia a dia do negócio.",
  },
  {
    title: "Direito Ambiental",
    description:
      "Apoio em temas ambientais, como regularizações, licenças e respostas a notificações e autos de infração, com atuação preventiva e contenciosa.",
  },
  {
    title: "Direito do Agronegócio",
    description:
      "Atuação em demandas ligadas ao setor rural, incluindo contratos, relações comerciais e apoio jurídico em operações do agronegócio.",
  },
  {
    title: "Direito Civil",
    description:
      "Atuação em demandas civis, como obrigações, contratos, indenizações e outras questões patrimoniais e de responsabilidade civil.",
  },
  {
    title: "Direito do Consumidor",
    description:
      "Atendimento em conflitos de consumo, com foco na solução de problemas com produtos e serviços, cobranças indevidas e reparação de danos.",
  },
  {
    title: "Direito Previdenciário",
    description:
      "Orientação e atuação em benefícios previdenciários, como aposentadorias, auxílios e revisões, conforme o caso concreto.",
  },
] as const;

const Partners = () => {
  return (
    <>
      <Helmet>
        <title>Atuação Multidisciplinar e Parceiros | Dra. Cássia</title>
      </Helmet>

      <div className="min-h-screen bg-wine-deep">
        <Header />

        <main className="pt-28 md:pt-32">
          <section className="relative w-full overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 pb-14 md:pb-18">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="h-px w-10 bg-primary/60" />
                  <span className="text-primary/90 text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase">
                    Atuação Multidisciplinar
                  </span>
                  <div className="h-px w-10 bg-primary/60" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4 leading-tight">
                  Atuação Multidisciplinar e{" "}
                  <span className="text-primary">Parceiros</span>
                </h1>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Além de Direito de Família e Sucessões, a equipe de parceiros também atua em outras frentes jurídicas
                  para atender necessidades específicas dos clientes.
                </p>
              </div>
            </div>
          </section>

          <section className="relative w-full overflow-hidden pb-16 md:pb-20">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-6">
                  Advogados Parceiros
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="h-full">
                      <div className="relative h-full bg-wine-deep border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col">
                        <div className="relative aspect-[3/4] min-h-[280px] overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-[center_20%] brightness-90 saturate-75 hover:brightness-110 hover:saturate-100 hover:scale-105 transition-[transform,filter] duration-700"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-wine-deep via-wine-deep/15 to-transparent" />
                          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                            {member.areas.slice(0, 2).map((area) => (
                              <span
                                key={area}
                                className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-primary/90 backdrop-blur-sm rounded-full text-wine-deep"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-5 md:p-6 flex flex-col flex-grow">
                          <h3 className="text-lg md:text-xl font-playfair font-bold text-foreground mb-3 leading-tight">
                            {member.name}
                          </h3>

                          <div className="flex items-start gap-2.5 mb-3">
                            <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-muted-foreground leading-relaxed">{member.university}</p>
                          </div>

                          <div className="space-y-1.5 mb-4 flex-grow">
                            {member.specializations.map((spec) => (
                              <div key={spec} className="flex items-start gap-2">
                                <Award className="w-3.5 h-3.5 text-primary/60 mt-0.5 flex-shrink-0" />
                                <p className="text-[11px] text-muted-foreground/80 leading-relaxed">{spec}</p>
                              </div>
                            ))}
                          </div>

                          {member.oab && (
                            <div className="pt-3 border-t border-primary/20">
                              <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-primary">{member.oab}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent hover:via-primary transition-all duration-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative w-full overflow-hidden pb-20 md:pb-28">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-6">
                  Demais áreas de atuação
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partnerExtraPracticeAreas.map((area) => (
                    <div key={area.title} className="h-full">
                      <div className="group relative h-full bg-white/[0.03] border border-white/10 rounded-xl p-6 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.05] flex flex-col">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-playfair font-bold text-foreground mb-2 leading-tight">
                              {area.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                          </div>
                        </div>
                        <div className="flex-grow" />
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Partners;

