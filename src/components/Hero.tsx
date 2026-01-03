import { useEffect, useRef } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import draCassia from "@/assets/Dra. Cassia 2.png";
import draCassiaWebp from "@/assets/Dra. Cassia.webp";
import pagina1 from "@/assets/pagina 1.png";
import pagina2 from "@/assets/pagina 2.png";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const draRef = useRef<HTMLDivElement>(null);
  const pagina1Ref = useRef<HTMLDivElement>(null);
  const pagina2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          if (contentRef.current) {
            // Conteúdo some gradualmente
            const opacity = Math.max(0, 1 - scrollY / (windowHeight * 0.6));
            contentRef.current.style.opacity = `${opacity}`;
            contentRef.current.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;
          }

          // Parallax invertido será combinado com o movimento do mouse no outro useEffect

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito de "ímã invertido" - elementos se movem na direção oposta ao mouse
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let animationFrame: number | null = null;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const animate = () => {
      // Suavização com easing
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Normalizar posição do mouse (0 a 1)
      const normalizedX = targetX / windowWidth;
      const normalizedY = targetY / windowHeight;
      
      // Calcular movimento oposto (ímã invertido)
      // Quanto mais próximo do centro (0.5), menos movimento
      const moveX = (normalizedX - 0.5) * 2; // -1 a 1
      const moveY = (normalizedY - 0.5) * 2; // -1 a 1

      // Aplicar movimento invertido (multiplicar por -1)
      const intensity = 15; // Intensidade do movimento em pixels

      // Dra. Cassia - combina parallax scroll + movimento mouse
      // Bem sutil, quase nada para cima, mais esquerda/direita
      if (draRef.current) {
        const draX = -moveX * intensity;
        const draY = -moveY * intensity * 0.2; // Muito pouco movimento vertical
        const scrollParallax = -scrollY * 0.15; // Parallax invertido do scroll
        draRef.current.style.transform = `translate3d(${draX}px, ${draY + scrollParallax}px, 0)`;
      }

      // Página 1 - movimento individual
      if (pagina1Ref.current) {
        const page1X = -moveX * intensity * 0.6; // Movimento mais sutil
        const page1Y = -moveY * intensity * 0.6;
        pagina1Ref.current.style.transform = `translate3d(${page1X}px, ${page1Y}px, 0)`;
      }

      // Página 2 - movimento individual
      if (pagina2Ref.current) {
        const page2X = -moveX * intensity * 0.6; // Movimento mais sutil
        const page2Y = -moveY * intensity * 0.6;
        pagina2Ref.current.style.transform = `translate3d(${page2X}px, ${page2Y}px, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // Inicializar posição do mouse no centro
    targetX = window.innerWidth / 2;
    targetY = window.innerHeight / 2;
    mouseX = targetX;
    mouseY = targetY;
    scrollY = window.scrollY;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Camadas FIXAS - ficam paradas enquanto a página rola */}
      <div className="fixed inset-0 z-0">
        {/* Background */}
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#1a0a0f]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a0f]/95 via-[#1a0a0f]/60 to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0f] via-transparent to-[#1a0a0f]/30" />
        
        {/* Mobile: Overlay mais forte para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0f]/80 via-[#1a0a0f]/70 to-[#1a0a0f]/85 md:hidden" />
        
        {/* Página 1 - Lado esquerdo (segundo plano) */}
        <div 
          ref={pagina1Ref}
          className="absolute bottom-[45%] left-[62%] hidden md:block will-change-transform z-[1]"
        >
          <img
            src={pagina1}
            alt=""
            className="max-w-[250px] w-auto h-auto object-contain"
            style={{
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))",
              opacity: 0.85,
              transition: "transform 0.1s ease-out"
            }}
          />
        </div>

        {/* Página 2 - Lado direito (segundo plano) */}
        <div 
          ref={pagina2Ref}
          className="absolute bottom-[35%] left-[85%] hidden md:block will-change-transform z-[1]"
        >
          <img
            src={pagina1}
            alt=""
            className="max-w-[350px] w-auto h-auto object-contain"
            style={{
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))",
              opacity: 0.85,
              transition: "transform 0.1s ease-out"
            }}
          />
        </div>
        
        {/* Foto da Dra. Cássia - Desktop: com parallax invertido (sobe ao rolar) */}
        <div
          ref={draRef}
          className="absolute bottom-0 right-0 h-[90vh] max-h-[calc(100vh-80px)] hidden md:block will-change-transform z-[2]"
        >
          <img
            src={draCassia}
            alt="Dra. Cássia Iglece"
            className="h-full w-auto object-contain object-bottom"
            style={{
              filter: "drop-shadow(-20px 10px 40px rgba(0,0,0,0.5))",
              maxWidth: "52vw",
              transition: "transform 0.1s ease-out"
            }}
          />
        </div>

        {/* Foto da Dra. Cássia - Mobile: centralizada e posicionada abaixo do conteúdo */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 h-[52vh] max-h-[550px] min-h-[380px] md:hidden will-change-transform z-[2]">
          <img
            src={draCassiaWebp}
            alt="Dra. Cássia Iglece"
            className="h-full w-auto object-contain mx-auto"
            style={{
              filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.7))",
              maxWidth: "85vw",
            }}
          />
        </div>

        {/* Esfumaçado vermelho no canto inferior - apenas desktop */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-900/25 via-red-800/12 to-transparent pointer-events-none" />
      </div>

      {/* Seção Hero*/}
      <section
        id="inicio"
        className="relative h-screen min-h-[600px] md:min-h-[700px] flex md:items-center z-10 overflow-hidden"
      >
        {/* Conteúdo principal */}
        <div
          ref={contentRef}
          className="relative z-20 w-full will-change-transform md:flex md:items-center"
        >
          <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24">
            {/* Mobile: Layout vertical com conteúdo no topo (área marcada em branco) */}
            <div className="md:hidden flex flex-col items-center text-center pt-28 pb-0 relative z-30">
              {/* Badge */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-primary/60" />
                <span className="text-primary/90 text-[10px] font-medium tracking-[0.25em] uppercase">
                  Advocacia & Consultoria Jurídica
                </span>
              </div>

              {/* Título */}
              <div className="mb-4">
                <span className="block text-white/50 text-xs font-light tracking-[0.15em] uppercase mb-2">
                  Escritório
                </span>
                <h1 className="text-4xl sm:text-5xl font-playfair font-bold leading-[0.95] tracking-tight">
                  <span className="text-white">Cássia</span>
                  <span className="block text-primary mt-1">Iglece</span>
                </h1>
              </div>

              {/* Descrição */}
              <p className="text-sm text-white/85 leading-relaxed mb-6 max-w-xs px-4">
                Atendimento especializado em{" "}
                <span className="text-white font-medium">Direito de Família e Sucessões</span>,{" "}
                com sensibilidade, técnica e estratégia jurídica.
              </p>

              {/* Botões */}
              <div className="flex flex-col gap-3 w-full max-w-xs px-4">
                <a
                  href="https://wa.me/5571993523075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-[#d4a574] text-[#1a0a0f] font-semibold text-sm tracking-wide px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,160,120,0.4)] hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                  <span>Falar com Especialista</span>
                </a>
                
                <button
                  onClick={() => scrollToSection("#areas")}
                  className="group inline-flex items-center justify-center gap-3 text-white/90 hover:text-primary font-medium text-sm tracking-wide px-6 py-2.5 rounded-full border border-white/25 hover:border-primary/40 transition-all duration-300 hover:bg-white/5"
                >
                  <span>Conheça nossas áreas</span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Desktop: Layout original */}
            <div className="hidden md:block max-w-xl">
              
              {/* Badge */}
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                <div className="h-px w-8 md:w-10 bg-primary/60" />
                <span className="text-primary/90 text-[10px] md:text-[11px] font-medium tracking-[0.25em] md:tracking-[0.3em] uppercase">
                  Advocacia & Consultoria Jurídica
                </span>
              </div>

              {/* Título */}
              <div className="mb-6 md:mb-10">
                <span className="block text-white/40 text-xs md:text-sm lg:text-base font-light tracking-[0.15em] md:tracking-[0.2em] uppercase mb-3 md:mb-4">
                  Escritório
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-playfair font-bold leading-[0.95] md:leading-[0.9] tracking-tight">
                  <span className="text-white">Cássia</span>
                  <span className="block text-primary mt-1 md:mt-2">Iglece</span>
                </h1>
              </div>

              {/* Descrição */}
              <p className="text-sm md:text-base lg:text-lg text-white/70 md:text-white/60 leading-relaxed mb-8 md:mb-12 max-w-md">
                Atendimento especializado em{" "}
                <span className="text-white/95 md:text-white/90 font-medium">Direito de Família e Sucessões</span>,{" "}
                com sensibilidade, técnica e estratégia jurídica.
              </p>

              {/* Botões */}
              <div className="flex flex-col gap-4 md:gap-5">
                <a
                  href="https://wa.me/5571993523075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-[#d4a574] text-[#1a0a0f] font-semibold text-sm tracking-wide px-6 md:px-8 py-3.5 md:py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,160,120,0.4)] hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                  <span>Falar com Especialista</span>
                </a>
                
                <button
                  onClick={() => scrollToSection("#areas")}
                  className="group inline-flex items-center justify-center gap-3 text-white/90 md:text-white/80 hover:text-primary font-medium text-sm tracking-wide px-6 py-3.5 md:py-4 rounded-full border border-white/20 md:border-white/15 hover:border-primary/40 transition-all duration-300 hover:bg-white/5"
                >
                  <span>Conheça nossas áreas</span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("#sobre")}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 text-white/40 md:text-white/30 hover:text-primary/70 transition-colors cursor-pointer group"
          aria-label="Rolar para baixo"
        >
          <div className="w-6 h-10 rounded-full border border-current flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </section>

      {/* Overlay que cobre o fundo fixo quando rola */}
      <div className="relative z-10 bg-background">
        {/* Este div vazio serve para empurrar o conteúdo e cobrir o fundo fixo */}
      </div>
    </>
  );
};

export default Hero;
