import { ImageWithFallback } from "./figma/ImageWithFallback";
import afonsoImg from "../assets/d8693ecc5891d2552bb588748540808815a5f28a.png";
import bernardoImg from "figma:asset/0fdadf4af9aa4eea39ec2c66144781b255282ff5.png";
import diogoImg from "figma:asset/7e5acfd647f43081c9df6c4c6e5d2ee1fbc0d44d.png";
import ricardoImg from "figma:asset/b59daad7cc624dc5f3532671a2ae3276909d7d66.png";
import pedroImg from "figma:asset/693e89800adb46d1565f13f517dc55eb22ecb946.png";
import riazeImg from "figma:asset/77c4854515191d7f1bb89bd22db8be032fa5826f.png";
import tomasImg from "figma:asset/a37159d313064be9db4d4b0c642d2c24a8beb866.png";
import franciscoImg from "figma:asset/35849cbfed1b0f7f5afe76e392a0c8809c04f510.png";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Afonso Monteiro",
    role: "Co-Founder",
    expertise: "Performance Marketing Expert",
    image: afonsoImg,
  },
  {
    name: "Ricardo Dias",
    role: "Co-Founder",
    expertise: "UX Designer and Usability Expert",
    image: ricardoImg,
  },
  {
    name: "Bernardo Pedro",
    role: "SEO Manager",
    expertise: "Local and LLM SEO Expert",
    image: bernardoImg,
  },
  {
    name: "Diogo Luís",
    role: "Design Specialist",
    expertise: "Web Design and Social Media Expert",
    image: diogoImg,
  },
  {
    name: "Pedro Camacho",
    role: "Performance Manager",
    expertise: "Performance Marketing Expert",
    image: pedroImg,
  },
  {
    name: "Riaze Issá",
    role: "Web Analytics Specialist",
    expertise: "GA4 and Web Analytics Expert",
    image: riazeImg,
  },
  {
    name: "Tomás Rugeroni",
    role: "Strategic Advisor",
    expertise: "Digital Marketing and Performance Strategist",
    image: tomasImg,
  },
  {
    name: "Francisco Chagas",
    role: "UX&UI Specialist",
    expertise: "UX&UI and Web Design Expert",
    image: franciscoImg,
  },
];

export function AboutSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="sobre"
      className="w-full px-6 md:px-12 lg:px-20 py-20"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p
          className="text-center text-sm tracking-widest uppercase mb-6"
          style={{ color: "#FF9941" }}
        >
          Sobre Nós
        </p>

        {/* Headline */}
        <h2 className="text-[1.75rem] md:text-[2.25rem] leading-snug tracking-tight text-[#1a1a1a] text-center max-w-3xl mx-auto mb-14">
          Somos um{" "}
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
            }}
          >
            coletivo digital
          </span>{" "}
          baseado em Portugal que une estratégia, performance e criatividade para
          que cada disciplina do digital trabalhe como uma só.
        </h2>

        {/* Team Carousel */}
        <div className="relative">
          <div className="overflow-hidden -mx-[10px] px-[10px]" ref={emblaRef}>
            <div className="flex" style={{ gap: "20px" }}>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-[500px]:flex-[0_0_calc(50%-10px)] md:flex-[0_0_calc(33.333%-14px)] lg:flex-[0_0_calc(25%-15px)] min-w-0"
                  style={{ marginRight: index === teamMembers.length - 1 ? '20px' : '0' }}
                >
                  <div
                    className="rounded-xl p-7 flex flex-col justify-between h-full"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    {/* Top section */}
                    <div>
                      <h3
                        className="text-[1.55rem] tracking-tight text-[#1a1a1a] leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {member.name.split(" ")[0]}
                        <br />
                        {member.name.split(" ").slice(1).join(" ")}
                      </h3>
                    </div>

                    {/* Avatar — positioned right, overlapping middle area */}
                    <div className="flex justify-end -mr-1 my-4">
                      <div
                        className="w-[88px] h-[88px] rounded-full overflow-hidden"
                        style={{ boxShadow: "0 4px 20px rgba(255,153,65,0.18)" }}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Bottom description */}
                    <div
                      className="pt-4"
                      style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      <p className="text-sm text-[#1a1a1a]">{member.role}</p>
                      <p className="text-sm mt-0.5" style={{ color: "#6b6b6b" }}>
                        {member.expertise}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
              style={{
                backgroundColor: "#FF9941",
                color: "#fff",
              }}
              aria-label="Previous team members"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
              style={{
                backgroundColor: "#FF9941",
                color: "#fff",
              }}
              aria-label="Next team members"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}