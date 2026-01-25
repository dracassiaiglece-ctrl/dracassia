import { useEffect, useRef, useState } from "react";
import { Accessibility } from "lucide-react";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontStep, setFontStep] = useState(0);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;

    if (fontStep === 0) {
      html.style.removeProperty("font-size");
    } else {
      const percent = 100 + fontStep * 10;
      html.style.fontSize = `${percent}%`;
    }

    html.classList.toggle("accessibility-contrast", isHighContrast);

    return () => {
      html.style.removeProperty("font-size");
      html.classList.remove("accessibility-contrast");
    };
  }, [fontStep, isHighContrast]);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (!wrapperRef.current?.contains(target)) setIsOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  const increaseText = () => setFontStep((current) => clamp(current + 1, -1, 2));
  const decreaseText = () => setFontStep((current) => clamp(current - 1, -1, 2));
  const toggleContrast = () => setIsHighContrast((current) => !current);
  const reset = () => {
    setFontStep(0);
    setIsHighContrast(false);
  };

  return (
    <div ref={wrapperRef} className="fixed bottom-4 left-4 z-50">
      {isOpen && (
        <div className="mb-3 w-56 rounded-2xl bg-wine-deep border border-primary/20 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.85)] overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/80">
              Acessibilidade
            </p>
          </div>

          <div className="p-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={increaseText}
              className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 text-white/85 text-sm font-semibold py-2 transition-colors"
            >
              A+
            </button>
            <button
              type="button"
              onClick={decreaseText}
              className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 text-white/85 text-sm font-semibold py-2 transition-colors"
            >
              A-
            </button>
            <button
              type="button"
              onClick={toggleContrast}
              className="col-span-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 text-white/85 text-sm font-semibold py-2 transition-colors"
            >
              Alto Contraste
            </button>
            <button
              type="button"
              onClick={reset}
              className="col-span-2 rounded-xl bg-primary hover:bg-primary/90 text-wine-deep text-sm font-semibold py-2 transition-colors"
            >
              Resetar
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Abrir menu de acessibilidade"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="h-12 w-12 rounded-full bg-primary/15 hover:bg-primary/25 border border-primary/30 hover:border-primary/50 text-primary shadow-[0_10px_30px_-18px_rgba(212,175,55,0.55)] transition-all duration-300 grid place-items-center"
      >
        <Accessibility className="w-6 h-6" />
      </button>
    </div>
  );
};

export default AccessibilityWidget;

