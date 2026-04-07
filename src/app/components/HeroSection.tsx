import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

function WavyBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 700"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M-100 620 C120 560, 240 520, 360 480 S600 400, 720 380 S960 320, 1080 280 S1320 200, 1540 160"
        stroke="rgba(0,0,0,0.07)"
        strokeWidth="2"
        fill="none"
        animate={{ translateX: [0, -40, 0], translateY: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M-60 660 C160 590, 280 550, 420 500 S660 420, 780 390 S1020 320, 1140 280 S1340 210, 1500 180"
        stroke="rgba(0,0,0,0.055)"
        strokeWidth="1.5"
        fill="none"
        animate={{ translateX: [0, 30, 0], translateY: [0, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M-80 570 C100 530, 200 490, 340 460 S540 390, 680 360 S900 300, 1040 260 S1280 190, 1520 140"
        stroke="rgba(0,0,0,0.045)"
        strokeWidth="1.5"
        fill="none"
        animate={{ translateX: [0, -25, 0], translateY: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function HeroSection() {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-16 overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <WavyBackground />
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.08] tracking-tight text-[#1a1a1a]"
        >Marketing Digital de Performance<br /><span
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >sem fidelização</span></motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-8 max-w-2xl mx-auto text-[#6b6b6b] leading-relaxed"
        >
          Ajudamos empresas a aumentar as vendas através de campanhas publicitárias
          no digital. Quando necessário, apoiamos no desenvolvimento e otimização de
          websites, SEO, Web Analytics e qualquer outra área de suporte à performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#contacto"
            onClick={handleClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative inline-flex items-center gap-3 bg-[#FF9941] text-[#1a1a1a] pl-8 pr-2 py-2 rounded-full overflow-hidden"
            style={{ fontWeight: 600 }}
          >
            {/* Expanding white circle - positioned at the arrow, scales to cover entire button */}
            <span
              className="absolute bg-white rounded-full transition-all duration-500 ease-out pointer-events-none"
              style={{
                width: "40px",
                height: "40px",
                right: "8px",
                top: "50%",
                marginTop: "-20px",
                transform: hovered ? "scale(20)" : "scale(1)",
                transformOrigin: "center center",
              }}
            />
            <span className="relative z-10">Pede a tua Auditoria Gratuita</span>
            <span className="relative z-10 flex items-center justify-center w-10 h-10">
              <ArrowRight size={18} className="text-[#1a1a1a]" />
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          <div className="flex items-center gap-2">
            <Check size={18} className="text-[#FF9941]" />
            <span className="text-[#1a1a1a]">Sem Fidelizações</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={18} className="text-[#FF9941]" />
            <span className="text-[#1a1a1a]">100% Transparência</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={18} className="text-[#FF9941]" />
            <span className="text-[#1a1a1a]">Focados em Resultados</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}