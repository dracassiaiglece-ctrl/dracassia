import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  delay?: number;
  duration?: number;
  y?: number;
  opacity?: number;
  stagger?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const {
    delay = 0,
    duration = 0.8,
    y = 50,
    opacity = 0,
    stagger = 0.1,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Configurar animação inicial
    gsap.set(element, {
      opacity: opacity,
      y: y,
    });

    // Criar animação com ScrollTrigger
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, y, opacity]);

  return elementRef;
};

// Hook para animar múltiplos elementos com stagger
export const useScrollStagger = (
  selector: string,
  options: UseScrollAnimationOptions = {}
) => {
  const containerRef = useRef<HTMLElement>(null);
  const {
    delay = 0,
    duration = 0.6,
    y = 30,
    opacity = 0,
    stagger = 0.1,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(selector);
    if (elements.length === 0) return;

    // Configurar animação inicial
    gsap.set(elements, {
      opacity: opacity,
      y: y,
    });

    // Criar animação com ScrollTrigger e stagger
    const animation = gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [selector, delay, duration, y, opacity, stagger]);

  return containerRef;
};








