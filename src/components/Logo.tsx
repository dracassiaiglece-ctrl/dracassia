import logoImg from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: {
      logo: "h-10",
      name: "text-sm",
      sub: "text-[6px]",
      gap: "gap-2"
    },
    md: {
      logo: "h-12 md:h-14",
      name: "text-base md:text-lg",
      sub: "text-[7px] md:text-[8px]",
      gap: "gap-2"
    },
    lg: {
      logo: "h-14 md:h-16",
      name: "text-lg md:text-xl",
      sub: "text-[8px] md:text-[9px]",
      gap: "gap-2"
    }
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      {/* Logo PNG */}
      <img 
        src={logoImg} 
        alt="CI" 
        className={`${s.logo} w-auto object-contain brightness-0 invert`}
      />

      {/* Texto */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`${s.name} font-playfair font-semibold tracking-[0.1em] text-white`}>
            CÁSSIA IGLECE
          </span>
          <span className={`${s.sub} tracking-[0.15em] uppercase text-white/60`}>
            Advocacia e Consultoria Jurídica
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
