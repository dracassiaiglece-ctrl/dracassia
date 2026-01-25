import { motion } from "framer-motion";
import {
  HeartHandshake,
  Lock,
  MessageCircle,
  ShieldCheck,
  Target,
  Umbrella,
  type LucideIcon,
} from "lucide-react";

const differentiators: Array<{ text: string; icon: LucideIcon }> = [
  { text: "Atuação familiarista com responsabilidade e estratégia", icon: ShieldCheck },
  { text: "Escuta qualificada e atendimento humanizado", icon: HeartHandshake },
  { text: "Estratégia jurídica desde o início", icon: Target },
  { text: "Comunicação clara e orientação contínua", icon: MessageCircle },
  { text: "Ética, sigilo e responsabilidade profissional", icon: Lock },
  { text: "Foco na proteção de quem é mais vulnerável", icon: Umbrella },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

const DifferentiatorsSection = () => {
  return (
    <section id="diferenciais" className="relative w-full overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="absolute inset-0 bg-wine-deep" />

      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--background) / 0.9), transparent)",
        }}
      />

      <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground leading-tight">
            Por que nos <span className="text-primary">escolher?</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                variants={itemVariants}
                className="h-full bg-wine-deep border border-white/5 rounded-xl p-7 md:p-8 text-center transition-all duration-500 hover:border-primary/40 hover:bg-white/5 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <Icon
                    className="w-12 h-12 text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                    strokeWidth={2.5}
                  />
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
