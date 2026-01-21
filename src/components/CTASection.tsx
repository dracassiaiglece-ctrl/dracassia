import { MessageCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background - mesmo tom do site */}
      <div className="absolute inset-0 bg-wine-deep" />
      
      {/* Gradiente sutil no topo */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none" 
        style={{
          background: "linear-gradient(to bottom, hsl(var(--background) / 0.9), transparent)",
        }}
      />

      {/* Elemento decorativo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 md:w-12 bg-primary/60" />
            <span className="text-primary/90 text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase">
              Agende sua Consulta
            </span>
            <div className="h-px w-8 md:w-12 bg-primary/60" />
          </div>

          {/* Título */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center text-foreground mb-4 md:mb-6 leading-tight">
            Precisa de orientação jurídica{" "}
            <span className="text-primary">especializada?</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Entre em contato e converse diretamente com a advogada. 
            Atendimento humanizado, ético e focado nas suas necessidades.
          </p>

          {/* Cards de contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-14 md:mb-16 max-w-2xl mx-auto">
            {/* WhatsApp */}
            <div className="relative flex items-center gap-4 p-5 md:p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-muted-foreground mb-1">WhatsApp</span>
                <span className="block text-lg font-medium text-foreground">
                  (71) 9 9352-3075
                </span>
              </div>
            </div>

            {/* E-mail */}
            <div className="relative flex items-center gap-4 p-5 md:p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <Mail className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-muted-foreground mb-1">E-mail</span>
                <span className="block text-lg font-medium text-foreground/80">
                  cassiaiglece.adv@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="https://wa.me/5571993523075?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20orientação%20jurídica%20em%20Direito%20de%20Família%20e%20Sucessões."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-gold-light text-wine-deep font-semibold text-sm md:text-base tracking-wide px-8 md:px-10 py-4 md:py-5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.35)] hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                <span>Agendar Consulta</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+5571993523075"
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent border border-white/25 hover:border-primary/40 text-foreground font-semibold text-sm md:text-base tracking-wide px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 hover:bg-white/10"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                <span>Ligar Agora</span>
              </a>
            </div>

            {/* Info adicional */}
            <div className="flex items-center gap-6 mt-8 text-xs md:text-sm text-muted-foreground/70">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span>Atendimento sigiloso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span>Primeira consulta orientativa</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
