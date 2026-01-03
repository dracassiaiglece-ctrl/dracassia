import { CheckCircle } from "lucide-react";
import aboutSectionBg from "@/assets/aboutsection.png";
import aboutMobile from "@/assets/aboutmobile.jpg";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const qualifications = [
  "Formada pela Universidade Católica do Salvador (UCSAL)",
  "Pós-graduação em Advocacia no Direito de Família e Sucessões",
  "MBA em Direito da Família e Planejamento Sucessório (em curso)",
  "Conselheira Consultiva da OAB Jovem Bahia",
  "Atuação focada em Direito de Família e Sucessões",
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // Animar conteúdo
    gsap.fromTo(
      content,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section || trigger.vars.trigger === content) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative overflow-hidden w-full"
    >
      {/* Desktop: Layout com imagem e texto sobreposto */}
      <div className="hidden md:block relative w-full">
        <img
          src={aboutSectionBg}
          alt=""
          className="w-full h-auto object-cover relative z-0"
          style={{ display: "block" }}
        />
        
        {/* Gradiente sobre a imagem: transparente até a linha branca, depois gradiente escuro para leitura */}
        {/* Overlay esfumado no topo da imagem - forte apenas no topo para não cobrir a cabeça */}
        <div 
          className="absolute top-0 left-0 right-0 h-[200px] md:h-[250px] lg:h-[280px] z-10" 
          style={{
            background: 'linear-gradient(to bottom, #1a0a0f 0%, #1a0a0f 25%, rgba(26, 10, 15, 0.95) 40%, rgba(26, 10, 15, 0.8) 55%, rgba(26, 10, 15, 0.5) 70%, rgba(26, 10, 15, 0.25) 85%, transparent 100%)'
          }}
        />
        
        {/* Overlay esfumado no bottom da imagem - transição suave na parte inferior */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[250px] lg:h-[280px] z-10" 
          style={{
            background: 'linear-gradient(to top, #1a0a0f 0%, #1a0a0f 25%, rgba(26, 10, 15, 0.95) 40%, rgba(26, 10, 15, 0.8) 55%, rgba(26, 10, 15, 0.5) 70%, rgba(26, 10, 15, 0.25) 85%, transparent 100%)'
          }}
        />
        
        {/* Gradiente lateral: transparente até a linha branca, depois gradiente escuro para leitura */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(to right, transparent 0%, transparent 30%, rgba(26, 10, 15, 0.2) 40%, rgba(26, 10, 15, 0.5) 50%, rgba(26, 10, 15, 0.75) 65%, rgba(26, 10, 15, 0.9) 80%, rgba(26, 10, 15, 0.95) 100%)'
          }}
        />

        {/* Conteúdo posicionado sobre a imagem e gradiente */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="w-full flex justify-end pr-8 lg:pr-16 xl:pr-24">
            <div className="max-w-2xl lg:max-w-3xl py-12 lg:py-16">
            {/* Content */}
            <div ref={contentRef} className="relative">
              <div className="mb-8">
                <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                  Sobre a Advogada
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-8 leading-tight">
                Dra. Cássia de Santana Iglece
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Cássia de Santana Iglece é advogada com atuação focada em Direito de
                  Família e Sucessões, dedicada à condução de demandas familiares com técnica,
                  sensibilidade e estratégia jurídica.
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Formada pela Universidade Católica do Salvador (UCSAL), possui pós-graduação em
                  Advocacia no Direito de Família e Sucessões e atualmente cursa MBA em Direito da
                  Família e Planejamento Sucessório, com ênfase em soluções jurídicas preventivas,
                  organização patrimonial e segurança jurídica nas relações familiares.
                </p>

                <p className="text-muted-foreground mb-10 leading-relaxed">
                  Integra ativamente a advocacia institucional, atuando como Conselheira Consultiva da
                  OAB Jovem Bahia, o que reforça seu compromisso com a ética, o aprimoramento
                  profissional contínuo e a advocacia responsável. Sua atuação é pautada pela análise técnica aprofundada, atendimento humanizado e
                  construção de estratégias jurídicas personalizadas, sempre buscando soluções eficazes e
                  juridicamente seguras para conflitos familiares.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {qualifications.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-4 border-b border-border/30 last:border-0"
                  >
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registro OAB</span>
                    <span className="font-playfair text-2xl font-bold text-foreground">
                      OAB/BA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile: Layout integrado similar ao desktop - imagem com texto sobreposto */}
      <div className="md:hidden relative bg-[#1a0a0f]">
        {/* Container principal com imagem de fundo */}
        <div className="relative w-full">
          {/* Imagem de fundo com efeitos premium */}
          <div className="relative w-full">
            {/* Container da imagem com borda elegante */}
            <div className="relative mx-4 pt-0">
              {/* Moldura decorativa externa */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-primary/10 to-primary/30 rounded-2xl blur-sm" />
              
              {/* Container principal da imagem */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Borda interna dourada sutil */}
                <div className="absolute inset-0 border border-primary/30 rounded-xl pointer-events-none z-20" />
                
                {/* Cantos decorativos */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-xl z-20" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-xl z-20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-xl z-20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-xl z-20" />
                
                {/* Imagem */}
                <img
                  src={aboutMobile}
                  alt="Dra. Cássia Iglece"
                  className="w-full h-auto object-cover"
                  style={{ display: "block" }}
                />
                
                {/* Overlay gradiente para integração com fundo */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none" 
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(26, 10, 15, 0.3) 80%, rgba(26, 10, 15, 0.8) 95%, #1a0a0f 100%)'
                  }}
                />
                
                {/* Brilho sutil no topo */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1/4 z-10 pointer-events-none" 
                  style={{
                    background: 'linear-gradient(to bottom, rgba(200, 160, 120, 0.05) 0%, transparent 100%)'
                  }}
                />
              </div>
              
              {/* Linha decorativa dourada abaixo da imagem */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/60" />
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/60" />
              </div>
            </div>
          </div>

          {/* Conteúdo textual abaixo da imagem */}
          <div className="relative bg-[#1a0a0f] pt-10 pb-8 px-5">
            {/* Decoração de fundo sutil */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
            
            <div className="max-w-2xl mx-auto relative z-10">
              <div ref={contentRef} className="relative">
                {/* Header com badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-primary/60" />
                  <span className="text-xs text-primary font-semibold uppercase tracking-[0.2em]">
                    Sobre a Advogada
                  </span>
                </div>

                <h2 className="text-2xl font-playfair font-bold text-foreground mb-5 leading-tight">
                  Dra. Cássia de Santana Iglece
                </h2>

                <div className="space-y-4 mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Cássia de Santana Iglece é advogada com atuação focada em Direito de
                    Família e Sucessões, dedicada à condução de demandas familiares com técnica,
                    sensibilidade e estratégia jurídica.
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Formada pela Universidade Católica do Salvador (UCSAL), possui pós-graduação em
                    Advocacia no Direito de Família e Sucessões e atualmente cursa MBA em Direito da
                    Família e Planejamento Sucessório, com ênfase em soluções jurídicas preventivas,
                    organização patrimonial e segurança jurídica nas relações familiares.
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Integra ativamente a advocacia institucional, atuando como Conselheira Consultiva da
                    OAB Jovem Bahia, o que reforça seu compromisso com a ética, o aprimoramento
                    profissional contínuo e a advocacia responsável.
                  </p>
                </div>

                {/* Qualificações com design refinado */}
                <div className="space-y-3 mb-6">
                  {qualifications.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 py-2.5 border-b border-primary/10 last:border-0"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-foreground/85 leading-relaxed text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* OAB Badge */}
                <div className="pt-5 border-t border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">OAB</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">Registro</span>
                      <span className="font-playfair text-xl font-bold text-foreground">
                        OAB/BA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
