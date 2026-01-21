import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona a primeira consulta?",
    answer: "A primeira consulta é orientativa e tem como objetivo entender sua situação, esclarecer dúvidas jurídicas e apresentar as possíveis soluções para o seu caso. Durante a consulta, analisamos os documentos relevantes, explicamos o procedimento adequado e orientamos sobre os próximos passos.",
  },
  {
    question: "Quanto custa uma consulta jurídica?",
    answer: "Os honorários são definidos de acordo com a complexidade do caso e os serviços necessários. Oferecemos transparência total na proposta de honorários, que é apresentada após a análise inicial do seu caso. Entre em contato para agendar uma consulta e receber uma proposta personalizada.",
  },
  {
    question: "Quanto tempo leva um processo de divórcio?",
    answer: "O tempo varia conforme o tipo de divórcio. O divórcio extrajudicial (em cartório) pode ser concluído em poucos dias, desde que seja consensual e não haja filhos menores ou incapazes. O divórcio judicial consensual geralmente leva de 2 a 4 meses. Já o divórcio litigioso pode levar de 1 a 2 anos, dependendo da complexidade e da necessidade de perícias.",
  },
  {
    question: "Como é calculado o valor da pensão alimentícia?",
    answer: "A pensão alimentícia é calculada com base no binômio necessidade e possibilidade. Considera-se a necessidade de quem recebe (filhos, cônjuge, etc.) e a capacidade financeira de quem paga. Não existe um percentual fixo, mas geralmente varia entre 20% a 30% da renda do alimentante, podendo ser ajustado conforme as circunstâncias específicas de cada caso.",
  },
  {
    question: "Posso alterar a guarda dos meus filhos?",
    answer: "Sim, é possível alterar a guarda quando houver mudança significativa nas circunstâncias que justifique a modificação, sempre priorizando o melhor interesse da criança ou adolescente. A alteração pode ser consensual (por acordo entre os pais) ou judicial (quando há divergência). É necessário demonstrar que a mudança beneficiará o menor.",
  },
  {
    question: "O que é um inventário e quando é necessário?",
    answer: "O inventário é o processo de regularização dos bens deixados por uma pessoa falecida. É necessário quando há bens a partilhar entre os herdeiros. Pode ser feito de forma extrajudicial (em cartório) quando todos os herdeiros são maiores, capazes e concordam, ou judicial quando há menores, incapazes ou divergências. O prazo legal para iniciar é de até 60 dias após o falecimento.",
  },
  {
    question: "O que é um pacto antenupcial?",
    answer: "O pacto antenupcial é um contrato feito antes do casamento para estabelecer o regime de bens do casal, diferente do regime legal (comunhão parcial de bens). Permite escolher entre separação total de bens, participação final nos aquestos ou comunhão universal. Deve ser feito em cartório antes do casamento e é obrigatório em alguns casos, como quando um dos cônjuges tem mais de 70 anos.",
  },
  {
    question: "Como funciona a adoção?",
    answer: "A adoção é um processo judicial que estabelece vínculo de filiação entre o adotante e o adotado. O processo envolve habilitação dos pretendentes, avaliação psicossocial, estágio de convivência e sentença judicial. A adoção confere ao adotado os mesmos direitos de filho biológico, incluindo direito a herança. O processo pode levar de 1 a 2 anos, dependendo das circunstâncias.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-wine-deep" />
      
      {/* Gradiente sutil no topo */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none" 
        style={{
          background: "linear-gradient(to bottom, hsl(var(--background) / 0.9), transparent)",
        }}
      />

      {/* Elemento decorativo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 md:w-12 bg-primary/60" />
            <span className="text-primary/90 text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase">
              Dúvidas Frequentes
            </span>
            <div className="h-px w-8 md:w-12 bg-primary/60" />
          </div>

          {/* Título */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center text-foreground mb-4 md:mb-6 leading-tight">
            Perguntas{" "}
            <span className="text-primary">Frequentes</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Encontre respostas para as principais dúvidas sobre Direito de Família e Sucessões. 
            Se sua pergunta não estiver aqui, entre em contato conosco.
          </p>

          {/* Lista de FAQs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-primary/60 bg-white/10"
                      : "bg-white/[0.02] border-white/10 hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <HelpCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pl-20 md:pl-24 border-t border-white/10 pt-4">
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA no final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Ainda tem dúvidas? Entre em contato conosco.
            </p>
            <a
              href="https://wa.me/5571993523075?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20Direito%20de%20Família%20e%20Sucessões."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm md:text-base transition-colors"
            >
              <span>Falar com especialista</span>
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;




