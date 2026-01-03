const TransitionSection = () => {
  return (
    <div 
      className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, rgba(26, 10, 15, 0.2) 20%, rgba(26, 10, 15, 0.5) 40%, rgba(26, 10, 15, 0.75) 60%, rgba(26, 10, 15, 0.9) 80%, #1a0a0f 100%)'
      }}
    />
  );
};

export default TransitionSection;

