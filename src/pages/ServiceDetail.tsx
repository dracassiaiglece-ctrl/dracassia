import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getMultidisciplinaryAreaBySlug } from "@/data/multidisciplinaryAreas";
import { getServiceContentBySlug } from "@/data/servicesContent";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const legacySlugMap: Record<string, string> = {
    bancario: "direito-bancario",
    trabalhista: "direito-trabalhista",
    criminal: "direito-criminal",
    empresarial: "direito-empresarial",
    ambiental: "direito-ambiental",
    agronegocio: "direito-agronegocio",
  };

  const mappedSlug = slug ? legacySlugMap[slug] ?? slug : undefined;
  const content = mappedSlug ? getServiceContentBySlug(mappedSlug) : undefined;
  const area = slug ? getMultidisciplinaryAreaBySlug(slug) : undefined;

  const title = content?.title ?? area?.title;
  const intro = content?.intro ?? area?.shortDescription;
  const description = content?.description ?? area?.description;
  const services = content?.services ?? [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const openWhatsApp = () => {
    const phoneNumber = "5571993523075";
    const message = encodeURIComponent(`Olá, preciso de atendimento jurídico em ${title}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (opened) opened.opener = null;
  };

  if (!title || !intro || !description) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-wine-deep flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Área não encontrada
            </h1>
            <Link to="/atuacao-multidisciplinar" className="text-primary hover:text-primary/80 transition-colors">
              Voltar para atuação multidisciplinar
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const canonicalUrl = `https://cassiaiglece.adv.br/atuacao-multidisciplinar/${slug}`;

  return (
    <>
      <Helmet>
        <title>{title} | Atuação Multidisciplinar</title>
        <meta name="description" content={intro} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta property="og:title" content={`${title} | Atuação Multidisciplinar`} />
        <meta property="og:description" content={intro} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Dra. Cássia Iglece" />
        <meta property="og:image" content="https://cassiaiglece.adv.br/icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Atuação Multidisciplinar`} />
        <meta name="twitter:description" content={intro} />
        <meta name="twitter:image" content="https://cassiaiglece.adv.br/icon.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: title,
            description: intro,
            url: canonicalUrl,
            areaServed: [
              { "@type": "City", name: "Salvador" },
              { "@type": "State", name: "Bahia" },
              { "@type": "Country", name: "Brasil" },
            ],
            provider: {
              "@type": "LegalService",
              name: "Cássia Iglece Advocacia",
              url: "https://cassiaiglece.adv.br",
              image: "https://cassiaiglece.adv.br/icon.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Salvador",
                addressRegion: "BA",
                addressCountry: "BR",
              },
              telephone: "+55-71-99352-3075",
              email: "cassiaiglece.adv@gmail.com",
              sameAs: ["https://www.instagram.com/cassiaigleceadv_/"],
            },
            serviceType: title,
          })}
        </script>
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
                  to="/atuacao-multidisciplinar"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm">Voltar</span>
                </Link>
              </div>

              <div className="max-w-3xl">
                <span className="block text-primary/90 text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                  Atuação Multidisciplinar
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-[1.05] mb-6">
                  {title}
                </h1>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                  {intro}
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
                      {description}
                    </p>
                  </section>

                  {services.length > 0 && (
                    <section className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white">
                        Como podemos ajudar
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.04 }}
                            className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-gray-300 leading-relaxed">{item}</p>
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
                        {`Nossos especialistas em ${title} estão prontos para analisar seu caso.`}
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

export default ServiceDetail;
