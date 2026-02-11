import { MessageCircle, ArrowRight } from "lucide-react";
import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const PracticeAreas = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const sortedServices = useMemo(() => {
    return [...services].sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
  }, []);

  const openWhatsApp = (areaTitle: string) => {
    const phoneNumber = "5571993523075";
    const message = encodeURIComponent(
      `Olá, preciso de atendimento jurídico para ${areaTitle}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (opened) opened.opener = null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="areas"
      className="relative min-h-screen w-full overflow-hidden py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-wine-deep" />
      
      {/* Esfumado no topo para transição suave */}
      <div 
        className="absolute top-0 left-0 right-0 h-[150px] md:h-[200px] pointer-events-none" 
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.25) 15%, hsl(var(--background) / 0.5) 30%, hsl(var(--background) / 0.75) 50%, hsl(var(--background) / 0.9) 70%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Título */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
              Áreas de
            </motion.span>{" "}
            <motion.span 
              className="inline-block text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
            Atuação especializada em Direito de Família e Sucessões, sempre com
            foco na melhor solução jurídica para o seu caso, combinando técnica, sensibilidade e estratégia.
          </motion.p>
        </motion.div>

        {/* Grid de Cards */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto"
        >
          {sortedServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative"
              >
                {/* Card principal - minimalista e elegante */}
                <div className="relative h-full bg-wine-deep border border-white/10 rounded-xl p-8 md:p-10 transition-all duration-500 hover:border-primary/40 hover:bg-white/5 hover:-translate-y-1 overflow-hidden group/card flex flex-col justify-between">
                  {/* Ícone com animação no hover */}
                  <div className="flex-shrink-0 mb-6 p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover/card:bg-primary/20 group-hover/card:border-primary/40 group-hover/card:scale-110 transition-all duration-500 w-fit">
                    <Icon className="w-6 h-6 text-primary group-hover/card:text-primary transition-colors duration-500" strokeWidth={2} />
                  </div>

                  <div className="flex flex-col flex-grow">
                    {/* Título */}
                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-foreground mb-4 group-hover/card:text-primary transition-colors duration-500 leading-tight">
                      {service.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Link Saiba Mais */}
                    <Link
                      to={`/servicos/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-white hover:underline underline-offset-4 decoration-primary/60 transition-colors w-fit mt-auto mb-6"
                    >
                      <span>Saiba mais</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>

                  {/* Botão WhatsApp */}
                  <motion.button
                    onClick={() => openWhatsApp(service.title)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 group/btn border border-primary/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" strokeWidth={2} />
                    <span>Solicitar atendimento</span>
                  </motion.button>

                  {/* Linha decorativa no hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover/card:via-primary/40 transition-all duration-500" />
                  
                  {/* Overlay sutil no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover/card:from-primary/5 group-hover/card:via-primary/3 group-hover/card:to-primary/5 transition-all duration-500 pointer-events-none rounded-xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;
