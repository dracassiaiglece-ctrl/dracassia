import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TransitionSection from "@/components/TransitionSection";
import AboutSection from "@/components/AboutSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import HonorariosSection from "@/components/HonorariosSection";
import TeamSection from "@/components/TeamSection";
import PracticeAreas from "@/components/PracticeAreas";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dra. Cássia Iglece | Advogada em Salvador - BA</title>
        <meta
          name="description"
          content="Advogada em Salvador - BA, com atuação em Direito de Família e Sucessões: divórcio, pensão alimentícia, guarda e convivência, inventário e planejamento sucessório."
        />
        <meta
          name="keywords"
          content="advogada salvador ba, direito de família salvador, divórcio salvador, pensão alimentícia salvador, guarda de filhos salvador, inventário salvador, planejamento sucessório"
        />
        <link rel="canonical" href="https://cassiaiglece.adv.br" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta property="og:title" content="Dra. Cássia Iglece | Advogada em Salvador - BA" />
        <meta
          property="og:description"
          content="Atuação em Direito de Família e Sucessões em Salvador - BA. Atendimento humanizado, técnico e estratégico."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://cassiaiglece.adv.br" />
        <meta property="og:site_name" content="Dra. Cássia Iglece" />
        <meta property="og:image" content="https://cassiaiglece.adv.br/icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dra. Cássia Iglece | Advogada em Salvador - BA" />
        <meta
          name="twitter:description"
          content="Atuação em Direito de Família e Sucessões em Salvador - BA. Atendimento humanizado, técnico e estratégico."
        />
        <meta name="twitter:image" content="https://cassiaiglece.adv.br/icon.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Cássia Iglece Advocacia",
            description:
              "Atuação em Direito de Família e Sucessões em Salvador - BA, com atendimento humanizado, técnico e estratégico.",
            url: "https://cassiaiglece.adv.br",
            image: "https://cassiaiglece.adv.br/icon.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Salvador",
              addressRegion: "BA",
              addressCountry: "BR",
            },
            areaServed: [
              { "@type": "City", name: "Salvador" },
              { "@type": "State", name: "Bahia" },
              { "@type": "Country", name: "Brasil" },
            ],
            telephone: "+55-71-99352-3075",
            email: "cassiaiglece.adv@gmail.com",
            openingHours: "Mo-Fr 09:00-18:00",
            sameAs: ["https://www.instagram.com/cassiaigleceadv_/"],
            serviceType: [
              "Direito de Família",
              "Direito de Família Internacional",
              "Sucessões",
              "Planejamento Sucessório",
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          {/* Wrapper com z-index e background para cobrir o fundo fixo */}
          <div className="relative z-10">
            {/* Seção de transição suave entre Hero e AboutSection */}
            <TransitionSection />
            <div className="bg-background">
              <AboutSection />
              <DifferentiatorsSection />
              <PracticeAreas />
              <HonorariosSection />
              <TeamSection />
              <CTASection />
              <FAQSection />
              <ContactForm />
            </div>
          </div>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
