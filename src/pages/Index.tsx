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
        <title>Cássia Iglece | Advocacia e Consultoria Jurídica</title>
        <meta
          name="description"
          content="Assessoria jurídica personalizada e estratégica. Atuação ética, técnica e humanizada em Direito Civil, Trabalhista, Família, Imobiliário e Empresarial."
        />
        <meta
          name="keywords"
          content="advogada Salvador, advogado trabalhista, direito de família, advocacia empresarial, consultoria jurídica"
        />
        <link rel="canonical" href="https://cassiaiglece.adv.br" />
        <meta property="og:title" content="Cássia Iglece | Advocacia e Consultoria Jurídica" />
        <meta
          property="og:description"
          content="Assessoria jurídica personalizada e estratégica. Atuação ética, técnica e humanizada."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Cássia Iglece Advocacia",
            description:
              "Assessoria jurídica personalizada e estratégica em Direito Civil, Trabalhista, Família, Imobiliário e Empresarial.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Salvador",
              addressRegion: "BA",
              addressCountry: "BR",
            },
            telephone: "+55-71-99352-3075",
            email: "cassiaiglece.adv@gmail.com",
            openingHours: "Mo-Fr 09:00-18:00",
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
