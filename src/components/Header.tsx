import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.dispatchEvent(
      new CustomEvent("mobile-menu-toggle", {
        detail: { isOpen: isMobileMenuOpen },
      })
    );
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas de Atuação", href: "#areas" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    // Se não estiver na página inicial, navegar para lá primeiro
    if (location.pathname !== "/") {
      navigate("/");
      // Aguardar a navegação e renderização antes de fazer scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 200);
    } else {
      // Se já estiver na página inicial, apenas fazer scroll
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-10 opacity-100"
      }`}>
        <div className="h-full bg-[#0d0508]/90 backdrop-blur-sm border-b border-primary/10">
          <div className="container-custom h-full px-6 md:px-8 flex items-center justify-center md:justify-end gap-6 md:gap-8">
            <a 
              href="tel:+5571993523075" 
              className="flex items-center gap-2 text-[11px] sm:text-xs text-white/50 hover:text-primary transition-colors group whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>(71) 9 9352-3075</span>
            </a>
            <a 
              href="mailto:cassiaiglece.adv@gmail.com" 
              className="hidden md:flex items-center gap-2 text-xs text-white/50 hover:text-primary transition-colors group min-w-0"
            >
              <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span className="truncate max-w-[220px] lg:max-w-none">cassiaiglece.adv@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-[#1a0a0f]/95 backdrop-blur-md border-b border-primary/10 shadow-2xl shadow-black/20"
            : "top-10 bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-8">
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 200);
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="relative group"
            >
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="relative px-5 py-2 text-[13px] text-white/60 hover:text-white transition-all duration-300 font-medium tracking-wide group"
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Underline animado */}
                  <span className="absolute bottom-1 left-5 right-5 h-px bg-gradient-to-r from-primary to-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </nav>

            {/* CTA Desktop - Botão elegante */}
            <a
              href="https://wa.me/5571993523075"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-3 group"
            >
              <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-[#d4a574] p-[1px]">
                <div className="flex items-center gap-2.5 bg-[#1a0a0f] hover:bg-transparent px-6 py-2.5 rounded-full transition-all duration-300">
                  <MessageCircle className="w-4 h-4 text-primary group-hover:text-[#1a0a0f] transition-colors" />
                  <span className="text-sm font-semibold text-white group-hover:text-[#1a0a0f] transition-colors">
                    Falar com Especialista
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:text-[#1a0a0f] group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={`block w-full h-[2px] bg-current transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                }`} />
                <span className={`block w-full h-[2px] bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : ""
                }`} />
                <span className={`block w-full h-[2px] bg-current transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Fullscreen */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div 
          className={`absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <nav className="relative h-full flex flex-col items-center justify-center gap-3">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`relative text-2xl sm:text-3xl font-playfair text-white/70 hover:text-primary py-3 transition-all duration-500 group ${
                isMobileMenuOpen 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : "0ms" }}
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
          
          <div 
            className={`mt-10 transition-all duration-500 ${
              isMobileMenuOpen 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? `${navItems.length * 80}ms` : "0ms" }}
          >
            <a
              href="https://wa.me/5571993523075"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-[#d4a574] text-[#1a0a0f] px-8 py-4 rounded-full font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar com Especialista</span>
            </a>
          </div>

          <div 
            className={`absolute bottom-10 left-0 right-0 flex flex-col items-center gap-3 transition-all duration-500 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? `${(navItems.length + 1) * 80}ms` : "0ms" }}
          >
            <a href="mailto:cassiaiglece.adv@gmail.com" className="text-xs text-white font-medium drop-shadow-md hover:text-primary transition-colors">
              cassiaiglece.adv@gmail.com
            </a>
            <a href="tel:+5571993523075" className="text-xs text-white font-medium drop-shadow-md hover:text-primary transition-colors">
              (71) 9 9352-3075
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
