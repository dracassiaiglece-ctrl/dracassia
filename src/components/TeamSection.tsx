import { useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";
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
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  // Card component reutilizável
  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="relative h-full bg-wine-deep border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group/card flex flex-col">
      {/* Foto */}
      <div className="relative aspect-[3/4] min-h-[280px] sm:min-h-[320px] md:min-h-[300px] lg:min-h-[320px] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-[center_20%] brightness-90 saturate-75 group-hover/card:brightness-110 group-hover/card:saturate-100 group-hover/card:scale-105 transition-[transform,filter] duration-700"
          loading="lazy"
          decoding="async"
        />
        {/* Overlay gradiente mais suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-wine-deep via-wine-deep/15 to-transparent" />
        
        {/* Badge de áreas no canto */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {member.areas.slice(0, 2).map((area, areaIndex) => (
            <span
              key={areaIndex}
              className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-primary/90 backdrop-blur-sm rounded-full text-wine-deep"
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
      <div className="absolute inset-0 bg-wine-deep" />
      
      {/* Esfumado no topo para transição suave */}
      <div 
        className="absolute top-0 left-0 right-0 h-[100px] md:h-[150px] pointer-events-none" 
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.5) 30%, hsl(var(--background) / 0.8) 60%, hsl(var(--background)) 100%)",
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

        {/* Grid responsivo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
