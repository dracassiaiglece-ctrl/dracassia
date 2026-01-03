import { useState } from "react";
import { Send, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatar mensagem para email
    const emailBody = `De: ${formData.name}\n` +
      `Telefone: ${formData.phone}\n` +
      `E-mail: ${formData.email}\n\n` +
      `Mensagem:\n${formData.message}`;
    
    const subject = encodeURIComponent("Contato através do site - Cássia Iglece Advocacia");
    const body = encodeURIComponent(emailBody);
    
    // Tentar abrir o app de email
    const mailtoLink = `mailto:contato@cassiaiglece.adv.br?subject=${subject}&body=${body}`;
    
    // Criar um link temporário para tentar abrir o email
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Após tentar abrir o email, oferecer WhatsApp como alternativa
    // (o usuário pode escolher se o email não abrir)
    setTimeout(() => {
      const useWhatsApp = window.confirm(
        "Se o aplicativo de email não abriu, deseja enviar a mensagem pelo WhatsApp?"
      );
      
      if (useWhatsApp) {
        const whatsappMessage = encodeURIComponent(
          `*Contato através do site*\n\n` +
          `De: ${formData.name}\n` +
          `Telefone: ${formData.phone}\n` +
          `E-mail: ${formData.email}\n\n` +
          `Mensagem:\n${formData.message}`
        );
        
        window.open(`https://wa.me/5571993523075?text=${whatsappMessage}`, "_blank");
      }
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const whatsappMessage = encodeURIComponent(
      `Olá! Gostaria de entrar em contato para uma consulta jurídica.`
    );
    window.open(`https://wa.me/5571993523075?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="contato" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a0a0f]" />
      
      {/* Gradiente sutil no topo */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none" 
        style={{
          background: "linear-gradient(to bottom, rgba(26, 10, 15, 0.9), transparent)",
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
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 md:w-12 bg-primary/60" />
            <span className="text-primary/90 text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase">
              Entre em Contato
            </span>
            <div className="h-px w-8 md:w-12 bg-primary/60" />
          </div>

          {/* Título */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center text-foreground mb-4 md:mb-6 leading-tight">
            Entre em contato e{" "}
            <span className="text-primary">iremos te ajudar</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Preencha o formulário ou utilize nossos canais diretos de atendimento. 
            Responderemos o mais breve possível.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Telefone/WhatsApp */}
              <div className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground mb-1">
                    Telefone / WhatsApp
                  </div>
                  <a
                    href="tel:+5571993523075"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (71) 9 9352-3075
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground mb-1">
                    E-mail
                  </div>
                  <a
                    href="mailto:contato@cassiaiglece.adv.br"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    contato@cassiaiglece.adv.br
                  </a>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground mb-1">
                    Horário de Atendimento
                  </div>
                  <div className="text-muted-foreground">
                    Segunda a Sexta: 9h às 18h
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-3">
                  {["Atendimento Sigiloso", "Primeira Consulta Orientativa", "Resposta Rápida"].map(
                    (badge) => (
                      <div
                        key={badge}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/10"
                      >
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">{badge}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Botão WhatsApp Direto */}
              <button
                onClick={handleWhatsAppDirect}
                className="w-full group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white font-semibold text-sm md:text-base tracking-wide px-6 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                <span>Falar pelo WhatsApp</span>
              </button>
            </motion.div>

            {/* Formulário */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 space-y-5"
            >
              <h3 className="text-xl md:text-2xl font-playfair font-semibold text-foreground mb-6">
                Envie sua mensagem
              </h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(71) 99999-9999"
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Descreva brevemente sua situação..."
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-[#d4a574] text-[#1a0a0f] font-semibold text-sm md:text-base tracking-wide px-6 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,160,120,0.4)] hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5" strokeWidth={2.5} />
                <span>Enviar Mensagem</span>
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Seus dados estão seguros e serão tratados com sigilo.
              </p>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
