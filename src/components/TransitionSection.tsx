const TransitionSection = () => {
  return (
    <div 
      className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] pointer-events-none"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.2) 20%, hsl(var(--background) / 0.5) 40%, hsl(var(--background) / 0.75) 60%, hsl(var(--background) / 0.9) 80%, hsl(var(--background)) 100%)",
      }}
    />
  );
};

export default TransitionSection;
