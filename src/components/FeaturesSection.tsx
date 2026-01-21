import { Scale, Users, Building2, FileText } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    icon: Scale,
    number: "01",
    title: "Fim das Relações Afetivas e Proteção a Vítima",
    description: "Foco na dissolução de vínculos com segurança jurídica e o menor desgaste emocional possível, incluindo a proteção integral da vítima em situações de vulnerabilidade.",
    services: [
      "Divórcio (Judicial e Extrajudicial)",
      "Dissolução de União Estável",
      "Medidas Protetivas de Urgência (Lei Maria da Penha)",
      "Anulação de Casamento"
    ],
  },
  {
    icon: Users,
    number: "02",
    title: "Direito Parental e Filiação",
    description: "Atuação centrada no melhor interesse de crianças e adolescentes, buscando garantir seus direitos e fortalecer os laços familiares de forma equilibrada.",
    services: [
      "Guarda de Filhos (Unilateral e Compartilhada)",
      "Regulamentação de Convivência (Visitas)",
      "Pensão Alimentícia (Fixação, Revisão, Exoneração e Execução)",
      "Investigação e Negatória de Paternidade",
      "Adoção"
    ],
  },
  {
    icon: Building2,
    number: "03",
    title: "Patrimônio e Planejamento Familiar",
    description: "Organização e proteção do patrimônio do casal e da família, desde a formalização do relacionamento até sua eventual dissolução.",
    services: [
      "Partilha de Bens",
      "Contratos Familiares (Pacto Antenupcial, Contrato de Convivência e Namoro)",
      "Doações e Usufruto de Bens"
    ],
  },
  {
    icon: FileText,
    number: "04",
    title: "Planejamento Sucessório e Inventários",
    description: "Estruturação da sucessão para garantir a tranquilidade da família e a preservação do patrimônio, além da regularização de bens após o falecimento.",
    services: [
      "Inventário e Arrolamento de Bens (Judicial e Extrajudicial)",
      "Testamentos e Codicilos",
      "Planejamento Sucessório (Holding Familiar, Doações com reserva de usufruto, etc.)"
    ],
  },
];

const HonorariosSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  

  // Removido GSAP para evitar conflitos com Framer Motion

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden py-24 md:py-32"
    >
      {/* Background com o mesmo tom do esfumado do bottom da AboutSection */}
      <div className="absolute inset-0 bg-wine-deep" />
      
      {/* Esfumado no topo para transição suave */}
      <div 
        className="absolute top-0 left-0 right-0 h-[150px] md:h-[200px] pointer-events-none" 
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.25) 15%, hsl(var(--background) / 0.5) 30%, hsl(var(--background) / 0.75) 50%, hsl(var(--background) / 0.9) 70%, hsl(var(--background)) 100%)",
        }}
      />
      
      {/* Linha decorativa sutil */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10" />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Título com animação sofisticada */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6 leading-tight"
          >
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Áreas
            </motion.span>{" "}
            <motion.span 
              className="inline-block text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              de
            </motion.span>{" "}
            <motion.span 
              className="inline-block text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Atuação
            </motion.span>
          </h2>
          <motion.p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Especialização em Direito de Família e Sucessões com foco em soluções personalizadas
          </motion.p>
        </motion.div>

        {/* Cards de Áreas com Framer Motion */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto"
        >
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Card principal - minimalista e elegante */}
                <div className="relative h-full bg-wine-deep border border-white/10 rounded-xl p-8 md:p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden group/card">
                  {/* Número da área com animação de hover */}
                  <div className="absolute top-6 right-6 transition-all duration-500 group-hover/card:scale-110 group-hover/card:-translate-y-1">
                    <div className="text-5xl md:text-6xl font-playfair font-bold text-primary/10 group-hover/card:text-primary/100 transition-all duration-500 relative">
                      {area.number}
                      {/* Brilho sutil no hover */}
                      <div className="absolute inset-0 text-primary/0 group-hover/card:text-primary/20 blur-xl transition-all duration-500">
                        {area.number}
                      </div>
                    </div>
                  </div>
                  
                  {/* Linha decorativa que aparece no hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover/card:via-primary/40 transition-all duration-500" />
                  
                  {/* Overlay sutil no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover/card:from-primary/5 group-hover/card:via-primary/3 group-hover/card:to-primary/5 transition-all duration-500 pointer-events-none rounded-xl" />

                  <div className="relative z-10">
                    {/* Header do Card */}
                    <div className="flex items-start gap-4 mb-6">
                      {/* Ícone minimalista com animação no hover */}
                      <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover/card:bg-primary/20 group-hover/card:border-primary/40 group-hover/card:scale-110 transition-all duration-500">
                        <Icon className="w-6 h-6 text-primary group-hover/card:text-primary transition-colors duration-500" strokeWidth={2} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-xs font-medium text-primary/70 mb-2 uppercase tracking-wider">
                          Área {area.number}
                        </div>
                        <h3 className="text-xl md:text-2xl font-playfair font-bold text-foreground leading-tight">
                          {area.title}
                        </h3>
                      </div>
                    </div>

                    {/* Descrição */}
                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                      {area.description}
                    </p>

                    {/* Lista de Serviços */}
                    <div className="space-y-3 pt-6 border-t border-white/10 group-hover/card:border-primary/20 transition-colors duration-500">
                      {area.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-start gap-3 text-muted-foreground group/service group-hover/card:text-foreground/80 transition-colors duration-500"
                        >
                          <div className="flex-shrink-0 mt-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/service:bg-primary group-hover/service:scale-150 transition-all duration-300" />
                          </div>
                          <span className="leading-relaxed text-sm md:text-base group-hover/service:text-foreground transition-colors duration-300">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HonorariosSection;
