import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Briefcase, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { multidisciplinaryAreas } from "@/data/multidisciplinaryAreas";

const AtuacaoMultidisciplinar = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const sortedAreas = useMemo(() => {
    return [...multidisciplinaryAreas].sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-animate='card']");
      gsap.set(cards, { autoAlpha: 0, y: 50 });
      gsap.to(cards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleCardMouseEnter: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const linkEl = e.currentTarget;
    const iconEl = linkEl.querySelector<HTMLElement>("[data-card-icon]");
    const ctaEl = linkEl.querySelector<HTMLElement>("[data-card-cta]");
    const arrowEl = linkEl.querySelector<HTMLElement>("[data-card-arrow]");

    if (iconEl) {
      gsap.killTweensOf(iconEl);
      gsap.to(iconEl, {
        y: -4,
        duration: 0.25,
        ease: "power2.out",
      });
      gsap.to(iconEl, {
        filter: "drop-shadow(0 0 12px rgba(212,175,55,0.25))",
        duration: 0.25,
        ease: "power2.out",
      });
    }

    if (ctaEl) {
      gsap.killTweensOf([ctaEl, arrowEl].filter(Boolean) as HTMLElement[]);
      gsap.to(ctaEl, { x: 5, duration: 0.25, ease: "power2.out" });
      if (arrowEl) gsap.to(arrowEl, { x: 5, duration: 0.25, ease: "power2.out" });
    }
  };

  const handleCardMouseLeave: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const linkEl = e.currentTarget;
    const iconEl = linkEl.querySelector<HTMLElement>("[data-card-icon]");
    const ctaEl = linkEl.querySelector<HTMLElement>("[data-card-cta]");
    const arrowEl = linkEl.querySelector<HTMLElement>("[data-card-arrow]");

    if (iconEl) {
      gsap.killTweensOf(iconEl);
      gsap.to(iconEl, { y: 0, duration: 0.25, ease: "power2.out" });
      gsap.to(iconEl, { filter: "none", duration: 0.25, ease: "power2.out" });
    }

    if (ctaEl) {
      gsap.killTweensOf([ctaEl, arrowEl].filter(Boolean) as HTMLElement[]);
      gsap.to(ctaEl, { x: 0, duration: 0.25, ease: "power2.out" });
      if (arrowEl) gsap.to(arrowEl, { x: 0, duration: 0.25, ease: "power2.out" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Atuação Multidisciplinar | Dra. Cássia</title>
        <meta
          name="description"
          content="Conheça as demais áreas de atuação oferecidas por meio de parceiros, com atendimento técnico e direcionado."
        />
      </Helmet>

      <div ref={pageRef} className="min-h-screen bg-wine-deep">
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
                  Demais{" "}
                  <span className="text-primary">Áreas de Atuação</span>
                </h1>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Além de Direito de Família e Sucessões, a equipe de parceiros também atua em outras frentes jurídicas
                  para atender necessidades específicas dos clientes.
                </p>
              </div>
            </div>
          </section>

          <section className="relative w-full overflow-hidden pb-20 md:pb-28">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/atuacao-multidisciplinar/${area.slug}`}
                      className="group block h-full"
                      onMouseEnter={handleCardMouseEnter}
                      onMouseLeave={handleCardMouseLeave}
                    >
                      <div
                        data-animate="card"
                        className="relative h-full bg-white/[0.03] border border-white/10 rounded-xl p-6 transition-all duration-500 hover:border-primary/60 hover:bg-white/[0.04] hover:shadow-[0_0_15px_-5px_rgba(212,175,55,0.3)] flex flex-col overflow-hidden"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            data-card-icon
                            className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/35 transition-colors duration-300"
                          >
                            <Briefcase className="w-5 h-5 text-primary/90 group-hover:text-primary transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-lg font-playfair font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                              {area.title}
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">{area.shortDescription}</p>
                          </div>
                        </div>

                        <div className="flex-grow" />

                        <div
                          data-card-cta
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                        >
                          <span>Saiba mais</span>
                          <ArrowRight data-card-arrow className="w-4 h-4" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/25 transition-all duration-500" />
                      </div>
                    </Link>
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

export default AtuacaoMultidisciplinar;
