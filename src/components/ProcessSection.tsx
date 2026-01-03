import { FileSearch, Users, Scale, CheckCircle } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    icon: FileSearch,
    title: "Consulta Inicial",
    description:
      "Primeira reunião para compreender sua situação, analisar os aspectos jurídicos relevantes e identificar as melhores estratégias para seu caso.",
  },
  {
    icon: Users,
    title: "Análise Personalizada",
    description:
      "Análise técnica aprofundada do seu caso, com construção de estratégia jurídica personalizada, sempre priorizando soluções eficazes e juridicamente seguras.",
  },
  {
    icon: Scale,
    title: "Atuação Estratégica",
    description:
      "Atendimento humanizado com condução técnica do procedimento, seja ele judicial ou extrajudicial, sempre com transparência e comunicação clara.",
  },
  {
    icon: CheckCircle,
    title: "Acompanhamento Contínuo",
    description:
      "Monitoramento do processo, atualizações regulares sobre o andamento do caso e suporte contínuo até a solução definitiva do seu caso.",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;
    if (!section || !title || !cards) return;

    // Animar título
    gsap.fromTo(
      title,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animar cards com stagger
    const cardElements = cards.querySelectorAll<HTMLElement>(".process-card");
    gsap.fromTo(
      cardElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cards,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === section ||
          trigger.vars.trigger === title ||
          trigger.vars.trigger === cards
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container-custom px-4 md:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="text-sm text-primary font-medium tracking-wide">
              Como Funciona
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Nosso Processo de Atendimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma metodologia estruturada para garantir que seu caso receba a atenção e
            o cuidado jurídico que ele merece, desde o primeiro contato até a solução final.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="process-card group relative p-8 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary border-4 border-background flex items-center justify-center text-background font-bold text-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

