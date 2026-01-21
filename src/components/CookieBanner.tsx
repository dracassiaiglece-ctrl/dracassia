import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cookieConsent";

const readLocalStorage = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const writeLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    return;
  }
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = readLocalStorage(STORAGE_KEY);
    if (consent !== "true") setIsVisible(true);
  }, []);

  const accept = () => {
    writeLocalStorage(STORAGE_KEY, "true");
    setIsVisible(false);
  };

  const decline = () => {
    writeLocalStorage(STORAGE_KEY, "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
      <div className="mx-auto max-w-5xl">
        <div className="bg-neutral-900/95 backdrop-blur-md border border-white/10 border-t-primary/40 rounded-2xl px-5 py-4 md:px-6 md:py-5 shadow-2xl shadow-black/40">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda
              com nossa{" "}
              <Link to="/privacidade" className="text-gold-400 hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={accept}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-gold-light text-wine-deep font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.35)] hover:-translate-y-0.5"
              >
                Aceitar
              </button>
              <button
                type="button"
                onClick={decline}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm font-medium"
              >
                Recusar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
