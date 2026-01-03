import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import nathaliaImg from "@/assets/Nathalia Costa.jpeg";
import gloriaImg from "@/assets/Gloria Almeida.jpeg";
import uineImg from "@/assets/Uine Santana.jpeg";
import junialissonImg from "@/assets/Dr. Junialisson 1.JPEG";

interface TeamMember {
  name: string;
  image: string;
  areas: string[];
  university: string;
  specializations: string[];
  oab?: string;
  extraAreas?: string[];
}

// Ordenado alfabeticamente pelo primeiro nome
const teamMembers: TeamMember[] = [
  {
    name: "Glória Almeida Dutra",
    image: gloriaImg,
    areas: ["Cível", "Trabalhista"],
    university: "Universidade Ceuma - Maranhão",
    specializations: [
      "Pós-graduação em Direito Trabalhista pela Damásio Educacional",
    ],
    oab: "OAB/BA 77.373",
    extraAreas: ["Cível", "Trabalhista"],
  },
  {
    name: "Junialisson Costa",
    image: junialissonImg,
    areas: ["Criminal", "Penal"],
    university: "Universidade Católica do Salvador - UCSal",
    specializations: [
      "Pós-graduação em Ciências Criminais pela PUC Minas",
      "Pós-graduação em Advocacia Criminal pela Legale",
    ],
    oab: "OAB/BA 84.379",
    extraAreas: ["Criminal", "Penal"],
  },
  {
    name: "Nathália Costa Santos Araújo",
    image: nathaliaImg,
    areas: ["Criminal", "Empresarial"],
    university: "Universidade Católica do Salvador - UCSAL",
    specializations: [
      "Pós-graduação em Direito Processual Penal pela FAMEF",
      "Direito Previdenciário e Empresarial",
    ],
    oab: "OAB/BA -----",
    extraAreas: ["Previdenciário"],
  },
  {
    name: "Uine Santana",
    image: uineImg,
    areas: ["Contratual", "Ambiental"],
    university: "UFBA",
    specializations: [
      "Pós-graduanda em Direito Ambiental pela UFPR",
      "Pós-graduada em Direito do Agronegócio pela LEGALE",
    ],
    oab: "OAB/BA ------",
    extraAreas: ["Agrário", "Bancário", "Ambiental"],
  },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      // Swipe left = next slide
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    } else if (isRightSwipe) {
      // Swipe right = previous slide
      setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        ease: "easeOut",
      },
    },
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Card component reutilizável
  const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => (
    <div className="relative h-full bg-gradient-to-b from-[#1a0a0f] to-[#150810] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group/card flex flex-col">
      {/* Foto */}
      <div className="relative aspect-[3/4] min-h-[280px] sm:min-h-[320px] md:min-h-[300px] lg:min-h-[320px] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-[center_20%] group-hover/card:scale-105 transition-transform duration-700"
        />
        {/* Overlay gradiente mais suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0f] via-[#1a0a0f]/10 to-transparent" />
        
        {/* Badge de áreas no canto */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {member.areas.slice(0, 2).map((area, areaIndex) => (
            <span
              key={areaIndex}
              className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-primary/90 backdrop-blur-sm rounded-full text-[#1a0a0f]"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Nome */}
        <h3 className="text-lg md:text-xl font-playfair font-bold text-foreground mb-3 group-hover/card:text-primary transition-colors duration-500 leading-tight">
          {member.name}
        </h3>

        {/* Universidade */}
        <div className="flex items-start gap-2.5 mb-3">
          <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            {member.university}
          </p>
        </div>

        {/* Especializações */}
        <div className="space-y-1.5 mb-4 flex-grow">
          {member.specializations.map((spec, specIndex) => (
            <div key={specIndex} className="flex items-start gap-2">
              <Award className="w-3.5 h-3.5 text-primary/60 mt-0.5 flex-shrink-0" />
              <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                {spec}
              </p>
            </div>
          ))}
        </div>

        {/* OAB se tiver */}
        {member.oab && (
          <div className="pt-3 border-t border-primary/20">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                {member.oab}
              </span>
            </div>
          </div>
        )}

        {/* Áreas de atuação extras */}
        {member.extraAreas && member.extraAreas.length > 0 && (
          <div className="pt-3 mt-3 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {member.extraAreas.map((area, areaIndex) => (
                <span
                  key={areaIndex}
                  className="px-2 py-0.5 text-[10px] bg-white/5 border border-white/10 rounded text-muted-foreground/70"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover/card:via-primary transition-all duration-500" />
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-20 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a0a0f]" />
      
      {/* Esfumado no topo para transição suave */}
      <div 
        className="absolute top-0 left-0 right-0 h-[100px] md:h-[150px] pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(26, 10, 15, 0.5) 30%, rgba(26, 10, 15, 0.8) 60%, #1a0a0f 100%)'
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
        {/* Título */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 md:w-12 bg-primary/60" />
            <span className="text-primary/90 text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase">
              Advogados Parceiros
            </span>
            <div className="h-px w-8 md:w-12 bg-primary/60" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4 leading-tight">
            Nossa{" "}
            <span className="text-primary">Equipe</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Profissionais especializados e comprometidos com a excelência jurídica
          </p>
        </motion.div>

        {/* Desktop: Grid 4 colunas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <TeamCard member={member} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Carrossel com suporte a swipe */}
        <div className="md:hidden relative">
          {/* Card atual com touch/swipe */}
          <div 
            className="relative overflow-hidden touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="px-2"
              >
                <TeamCard member={teamMembers[currentIndex]} index={currentIndex} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles do carrossel */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {/* Botão anterior */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicadores */}
            <div className="flex items-center gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 h-2 bg-primary rounded-full"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40 rounded-full"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Botão próximo */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Contador */}
          <div className="text-center mt-4">
            <span className="text-xs text-muted-foreground">
              <span className="text-primary font-semibold">{currentIndex + 1}</span>
              <span className="mx-1">/</span>
              <span>{teamMembers.length}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

