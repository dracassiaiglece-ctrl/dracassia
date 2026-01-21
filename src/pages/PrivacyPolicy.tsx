import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-wine-deep">
      <Header />
      <main className="pt-28 md:pt-32 pb-16">
        <div className="container-custom px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold-400 transition-colors"
              >
                Voltar para a Home
              </Link>
            </div>

            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              <span className="text-primary">Política de Privacidade</span> e Termos de Uso
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify mb-10">
              A sua privacidade é importante para nós. É política do escritório Dra. Cássia Iglece
              respeitar a sua privacidade em relação a qualquer informação que possamos coletar.
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="font-playfair text-xl md:text-2xl font-semibold text-primary mb-3">
                  1. Coleta de Dados
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                  Coletamos apenas os dados estritamente necessários para atender sua solicitação
                  quando você utiliza o formulário de contato, como nome, telefone, e-mail e a
                  mensagem enviada.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-xl md:text-2xl font-semibold text-primary mb-3">
                  2. Uso de Dados
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                  Utilizamos os dados fornecidos para retorno de contato, esclarecimento de dúvidas,
                  atendimento inicial e, quando aplicável, agendamento de consultas.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-xl md:text-2xl font-semibold text-primary mb-3">
                  3. Cookies
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                  Podemos utilizar cookies para melhorar performance, segurança e estatísticas de
                  uso do site. Você pode gerenciar cookies pelas configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-xl md:text-2xl font-semibold text-primary mb-3">
                  4. Direitos do Titular
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                  Nos termos da LGPD, você pode solicitar acesso, correção, atualização, portabilidade
                  e exclusão de dados pessoais, além de informações sobre o tratamento.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-xl md:text-2xl font-semibold text-primary mb-3">
                  5. Contato do Encarregado de Dados
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                  Para solicitações relacionadas a dados pessoais, entre em contato pelo e-mail{" "}
                  <a
                    href="mailto:cassiaiglece.adv@gmail.com"
                    className="text-gold-400 hover:text-primary transition-colors"
                  >
                    cassiaiglece.adv@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-12">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-gold-light text-wine-deep font-semibold text-sm md:text-base tracking-wide transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.35)] hover:-translate-y-0.5"
              >
                Voltar para a Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

