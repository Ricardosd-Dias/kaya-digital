import drBarbaraImg from "../assets/253ef51bfe2ec606bf4de111a9e9d82178e66334.png";
import kleedImg from "../assets/d1462288a6e3df776da93d61fc9ac14a618144b8.png";
import hirundoImg from "../assets/6cf1e9cf81d49259b47c92cb6d14ae42922765e1.png";
import pharmaScalabisImg from "../assets/96709d12c8fefc947440ce8b49adeed192485f59.png";
import lachoixImg from "../assets/c2abd865768c356668f01588fb835953dd833ca4.png";
import editImg from "../assets/af3a06795308f30a84368bb473c1c6c19aaa5afa.png";
import flairImg from "../assets/40274b33716da121c57136146bbfe23d9ab41e7b.png";
import internationalImg from "../assets/ed77ed396d3ca0f752ea0d88b1532c10da52d969.png";
import domiSaudeImg from "../assets/580b40a4aca557980a61bfbecdd25d2fe1bd6317.png";
import { useEffect, useRef } from "react";

const clients = [
  { name: "Dra. Bárbara Campos", image: drBarbaraImg },
  { name: "KLEED", image: kleedImg },
  { name: "Hirundo", image: hirundoImg },
  { name: "Pharma Scalabis", image: pharmaScalabisImg },
  { name: "Lachoix", image: lachoixImg },
  { name: "EDIT", image: editImg },
  { name: "Flair", image: flairImg },
  { name: "International School Torres Vedras", image: internationalImg },
  { name: "Domisaude", image: domiSaudeImg },
];

export function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (!scrollContainer) return;

      scrollPosition += scrollSpeed;

      // Reset position when first set of logos is fully scrolled
      const resetPoint = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= resetPoint) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 py-12 border-t border-border"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <p className="text-center text-[#6b6b6b] mb-8">
        Pequenas e grandes empresas já confiam em nós
      </p>

      <div
        ref={scrollRef}
        className="overflow-hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-14 md:gap-20" style={{ width: "max-content" }}>
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={client.image}
                alt={client.name}
                className="h-16 md:h-24 w-auto object-contain grayscale"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`${client.name}-duplicate-${index}`}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={client.image}
                alt={client.name}
                className="h-16 md:h-24 w-auto object-contain grayscale"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
