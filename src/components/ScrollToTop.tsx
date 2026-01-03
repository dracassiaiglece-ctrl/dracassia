import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef<string>(pathname);

  useEffect(() => {
    // Só fazer scroll para o topo se a rota mudou (não apenas o hash)
    const pathWithoutHash = pathname.split('#')[0];
    const prevPathWithoutHash = prevPathnameRef.current.split('#')[0];
    
    if (pathWithoutHash !== prevPathWithoutHash) {
      // Se não houver hash na URL, fazer scroll para o topo
      if (!pathname.includes('#')) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
    
    prevPathnameRef.current = pathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;

