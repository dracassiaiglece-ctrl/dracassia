import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const content = footer.querySelector<HTMLElement>(".footer-content");
    if (!content) return;

    gsap.fromTo(
      content,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === footer || trigger.vars.trigger === content) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative z-20 bg-wine-deep border-t border-white/10">
      <div className="container-custom px-4 md:px-8 py-16">
        <div className="footer-content grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo showText={true} />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Advocacia especializada com foco em atendimento personalizado,
              ético e humanizado. Protegendo seus direitos com competência e
              dedicação.
            </p>
            <p className="text-xs text-muted-foreground">
              Este site segue as diretrizes do Código de Ética da OAB.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-foreground mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Áreas de Atuação", href: "#areas" },
                { label: "Contato", href: "#contato" },
                { label: "Política de Privacidade", href: "/privacidade" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!link.href.startsWith("#")) {
                        if (location.pathname !== link.href) {
                          navigate(link.href);
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }, 50);
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        return;
                      }
                      // Se não estiver na página inicial, navegar para lá primeiro
                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                          const element = document.querySelector(link.href);
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
                        const element = document.querySelector(link.href);
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
                    }}
                    className="inline-flex text-muted-foreground hover:text-gold-400 hover:translate-x-1 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-foreground mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a
                  href="tel:+5571993523075"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (71) 9 9352-3075
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a
                  href="mailto:cassiaiglece.adv@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  cassiaiglece.adv@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Salvador - BA
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/cassiaigleceadv_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-gold-400 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 hover:text-gold-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5571993523075"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white/70 hover:text-gold-400 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © 2026 Dra. Cássia Iglece. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Desenvolvido por:{" "}
              <a
                href="https://www.welziinho.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white transition-colors"
              >
                Wesley Sacramento
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
