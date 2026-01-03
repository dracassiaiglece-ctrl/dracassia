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
        <div className="min-h-screen bg-[#1a0a0f] flex items-center justify-center">
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

  const Icon = service.icon;

  const openWhatsApp = () => {
    const phoneNumber = "5571993523075";
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais informações sobre ${service.title}.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
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
      <main className="min-h-screen bg-[#1a0a0f]">
        {/* Hero Section da Página */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a0a0f]" />
          
          <div 
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none" 
            style={{
              background: "linear-gradient(to bottom, rgba(26, 10, 15, 0.9), transparent)",
            }}
          />

          <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              {/* Botão Voltar - com espaçamento adequado do header */}
              <div className="pt-32 md:pt-36 mb-8">
                <Link
                  to="/#areas"
                  onClick={handleBackToAreas}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm">Voltar para áreas de atuação</span>
                </Link>
              </div>

              {/* Badge */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 md:w-12 bg-primary/60" />
                <span className="text-primary/90 text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase">
                  Área de Atuação
                </span>
                <div className="h-px w-8 md:w-12 bg-primary/60" />
              </div>

              {/* Ícone e Título */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-foreground text-center">
                  {service.title}
                </h1>
              </div>

              {/* Descrição */}
              <p className="text-base md:text-lg text-muted-foreground text-center mb-10 leading-relaxed max-w-3xl mx-auto">
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conteúdo Detalhado */}
        <section className="relative py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-6">
                  Como podemos ajudar
                </h2>

                <div className="space-y-4 mb-8">
                  {service.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-relaxed">{detail}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA WhatsApp */}
                <div className="pt-8 border-t border-white/10">
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-foreground mb-3">
                      Quer saber mais sobre este serviço?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Entre em contato conosco pelo WhatsApp e tire todas as suas dúvidas. 
                      Estamos prontos para ajudá-lo com dedicação e excelência.
                    </p>
                    <button
                      onClick={openWhatsApp}
                      className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-[#d4a574] text-[#1a0a0f] font-semibold text-sm md:text-base tracking-wide px-8 md:px-10 py-4 md:py-5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,160,120,0.4)] hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                      <span>Falar com Especialista</span>
                    </button>
                  </div>
                </div>
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

