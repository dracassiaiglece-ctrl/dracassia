import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (event: Event) => {
      const { detail } = event as CustomEvent<{ isOpen: boolean }>;
      setIsMobileMenuOpen(Boolean(detail?.isOpen));
    };

    window.addEventListener("mobile-menu-toggle", handler);
    return () => window.removeEventListener("mobile-menu-toggle", handler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "5571993523075"; // Número do WhatsApp (sem + e espaços)
    const message = encodeURIComponent(
      "Olá! Gostaria de mais informações sobre os serviços jurídicos."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (opened) opened.opener = null;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {!isMobileMenuOpen && (
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="hidden md:block pointer-events-none absolute right-[4.25rem] top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              <div className="whitespace-nowrap rounded-lg bg-wine-deep/95 border border-white/10 px-3 py-2 shadow-lg backdrop-blur-sm">
                <span className="text-xs text-white/90 font-medium">Precisa de ajuda? Fale comigo</span>
              </div>
            </div>

            <button
              type="button"
              onClick={openWhatsApp}
              aria-label="Falar no WhatsApp"
              className="w-14 h-14 rounded-full bg-gold-400 hover:bg-gold-400/90 text-wine-deep shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
            >
              <span className="relative z-10">
                <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
              </span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gold-400 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Voltar ao Topo - aparece ao rolar */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;






