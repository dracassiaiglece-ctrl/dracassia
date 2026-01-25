import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getServiceBySlug } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? getServiceBySlug(slug) : undefined;

  // Scroll to top quando a página carregar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!service) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-wine-deep flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Serviço não encontrado
            </h1>
            <Link
              to="/#areas"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Voltar para áreas de atuação
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const openWhatsApp = () => {
    const phoneNumber = "5571993523075";
    const message = encodeURIComponent(`Olá, preciso de atendimento jurídico em ${service.title}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (opened) opened.opener = null;
  };

  const handleBackToAreas = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
    // Aguardar a navegação e renderização antes de fazer scroll
    setTimeout(() => {
      const areasSection = document.querySelector("#areas");
      if (areasSection) {
        // Calcular offset para considerar o header fixo
        const headerOffset = 100;
        const elementPosition = areasSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  return (
    <>
      <Helmet>
        <title>{service.title} | Cássia Iglece Advocacia</title>
        <meta
          name="description"
          content={service.shortDescription}
        />
        <meta
          name="keywords"
          content={service.keywords.join(", ")}
        />
        <link rel="canonical" href={`https://cassiaiglece.adv.br/servicos/${service.slug}`} />
        <meta property="og:title" content={`${service.title} | Cássia Iglece Advocacia`} />
        <meta property="og:description" content={service.shortDescription} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <main className="min-h-screen bg-wine-deep">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-wine-deep" />
          
          <div 
            className="absolute top-0 left-0 right-0 h-40 pointer-events-none" 
            style={{
              background: "linear-gradient(to bottom, hsl(var(--background) / 0.9), transparent)",
            }}
          />

          <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-7xl mx-auto pt-32 md:pt-36 pb-14 md:pb-18"
            >
              <div className="mb-10 md:mb-12">
                <Link
                  to="/#areas"
                  onClick={handleBackToAreas}
                  className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm">Voltar</span>
                </Link>
              </div>

              <div className="max-w-3xl">
                <span className="block text-primary/90 text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                  Área de Atuação
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-[1.05] mb-6">
                  {service.title}
                </h1>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                  {service.shortDescription}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-20 md:pb-28">
          <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
                <div className="lg:col-span-2 space-y-12">
                  <section className="space-y-5">
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white">
                      Sobre
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </section>

                  {service.details.length > 0 && (
                    <section className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white">
                        Como podemos ajudar
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.details.map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.04 }}
                            className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-gray-300 leading-relaxed">{detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>

                <aside className="lg:col-span-1">
                  <div className="lg:sticky lg:top-28">
                    <div className="bg-white/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                      <h3 className="text-2xl font-playfair font-bold text-white mb-3">
                        Precisa de orientação?
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-7">
                        {`Nossos especialistas em ${service.title} estão prontos para analisar seu caso.`}
                      </p>

                      <button
                        onClick={openWhatsApp}
                        className="w-full inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 text-wine-deep font-semibold text-sm md:text-base px-5 py-4 rounded-xl transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                        <span>Falar com Especialista</span>
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default ServicePage;
