import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { caseStudies, type CaseStudyStat } from "../data/case-studies";
import { useCountUp, parseStatValue } from "../hooks/useCountUp";
import { Lightbox } from "../components/Lightbox";

// Parafarmácia images
import paraImg1 from "../assets/6ac8a7cb90168bf6ca8a97d311974c303d8ff6ed.png";
import paraImg2 from "../assets/581b6a0ea49975c3bd9b1c0108f4259d534b709c.png";

// Moda de Luxo images
import modaImg1 from "../assets/c0e3a403519ed5798c7161b37c3c673216a2323a.png";
import modaImg2 from "../assets/19bf81ebc689a15993886024c18890d46f3b5154.png";
import modaImg3 from "../assets/850ba839d541c74c2b080e359ecf685618406b54.png";

// Cuidadores image
import cuidadoresImg1 from "../assets/fac45192486c58f5761fbe1021d5d2d0896e4656.png";

// Colégio Privado image
import colegioImg1 from "../assets/0cc9201dcf7b4b3cbacb82e7c118636654cd860a.png";

// Sapatos de Luxo image
import sapatosImg1 from "../assets/d7672908e2439e3b966a9ecbadd00c42bbd48770.png";

// Ténis image
import tenisImg1 from "../assets/d808f3b087eac84dfae3a6d6e1fa7e54f507a16d.png";

// Suplementos images
import suplementosImg1 from "../assets/679746a5da33135cd818bbe41c7bf2a0f113cdd1.png";
import suplementosImg2 from "../assets/d7ca709ed78bd91a5bc0eb956f954df462fd4274.png";

// SEO Ortopedista image
import seoImg1 from "../assets/3bf22c4fee94dd4f364ac1aa72d5b92fa8c7a7fc.png";

// Adega Labrugeira image
import adegaImg1 from "../assets/c669fe924c323acfcfce5a41b8205a0ef244752c.png";

// Dra. Bárbara Campos image
import barbaraImg1 from "../assets/b5fb7ee6a9953b7b9598b6f1f78b99d4d5879bce.png";

const imageMap: Record<string, string[]> = {
  "ecommerce-parafarmacia-google-ads": [paraImg1, paraImg2],
  "ecommerce-moda-luxo-multi-canal": [modaImg1, modaImg2, modaImg3],
  "lead-generation-cuidadores-google-ads": [cuidadoresImg1],
  "lead-generation-colegio-privado-google-facebook-ads": [colegioImg1],
  "ecommerce-sapatos-luxo-meta-ads": [sapatosImg1],
  "ecommerce-tenis-meta-ads": [tenisImg1],
  "ecommerce-suplementos-google-ads": [suplementosImg1, suplementosImg2],
  "seo-ortopedista-website": [seoImg1],
  "ecommerce-adega-labrugeira": [adegaImg1],
  "ux-seo-dra-barbara-campos": [barbaraImg1],
};

function AnimatedStat({
  stat,
  inView,
}: {
  stat: CaseStudyStat;
  inView: boolean;
}) {
  const parsed = parseStatValue(stat.value);

  // If the stat is purely text (no numeric value), display it as-is without animation
  const isTextOnly = parsed.numericValue === 0 && !stat.value.match(/^\d/);

  if (isTextOnly) {
    return (
      <div className="text-center">
        <span className="block text-[1.75rem] md:text-[2rem] tracking-tight text-white leading-none">
          {stat.value}
        </span>
        <span className="block text-white/50 mt-2 text-sm">{stat.label}</span>
      </div>
    );
  }

  const count = useCountUp(parsed.numericValue, 2000, inView, parsed.decimals);

  const displayValue =
    parsed.decimals > 0
      ? count.toFixed(parsed.decimals).replace(".", ",")
      : count.toString();

  return (
    <div className="text-center">
      <span className="block text-[1.75rem] md:text-[2rem] tracking-tight text-white leading-none">
        {parsed.prefix}
        {displayValue}
        {parsed.suffix}
      </span>
      <span className="block text-white/50 mt-2 text-sm">{stat.label}</span>
    </div>
  );
}

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((c) => c.slug === slug);
  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  // Counter animation via IntersectionObserver
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset when slug changes
    setStatsInView(false);
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [slug]);

  if (!study) {
    return (
      <div
        className="pt-36 pb-20 px-6 md:px-12 lg:px-20 text-center"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <h1 className="text-2xl text-[#1a1a1a] mb-4">
          Caso de estudo não encontrado
        </h1>
        <Link to="/casos" className="text-[#FF9941] hover:underline">
          Ver todos os casos
        </Link>
      </div>
    );
  }

  const images = imageMap[study.slug] || [];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Website links for UX/Web Design cases
  const websiteLinkMap: Record<string, string> = {
    "ecommerce-adega-labrugeira": "https://adegalabrugeira.pt/",
    "ux-seo-dra-barbara-campos": "https://barbaracampos.pt/",
  };
  const websiteLink = websiteLinkMap[study.slug];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div
      className="pt-28 md:pt-36 pb-20 px-6 md:px-12 lg:px-20"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          to="/casos"
          className="inline-flex items-center gap-2 text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Todos os casos
        </Link>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-5"
        >
          <span
            className="inline-block text-xs tracking-wide uppercase px-3 py-1 rounded-full border"
            style={{ color: "#6b6b6b", borderColor: "rgba(0,0,0,0.12)" }}
          >
            {study.tag}
          </span>
          <span
            className="inline-block text-xs tracking-wide uppercase px-3 py-1 rounded-full"
            style={{ color: "#5a5040", backgroundColor: "rgba(0,0,0,0.06)" }}
          >
            {study.industry}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-tight text-[#1a1a1a] mb-3"
        >
          {study.title}
        </motion.h1>

        {/* Client */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#6b6b6b] mb-10"
        >
          {study.client}
        </motion.p>

        {/* Stats bar with counter animation */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#1a1a1a] rounded-xl px-6 md:px-10 py-8 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.stats.map((stat) => (
              <AnimatedStat key={stat.label} stat={stat} inView={statsInView} />
            ))}
          </div>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 mb-12"
        >
          {study.body.map((paragraph, i) => (
            <p key={i} className="text-[#1a1a1a] leading-[1.75]">
              {paragraph.includes("Clique aqui para Visitar") ? (
                <>
                  {paragraph.split("Clique aqui para Visitar")[0]}
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF9941] hover:underline"
                  >
                    Clique aqui para Visitar
                  </a>
                  {paragraph.split("Clique aqui para Visitar")[1]}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </motion.div>

        {/* Images */}
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 mb-16 max-w-xl mx-auto"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-border bg-white p-4 cursor-zoom-in hover:shadow-md transition-shadow"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={src}
                  alt={`${study.title} — resultado ${i + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </motion.div>
        )}

        {/* Lightbox */}
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev > 0 ? prev - 1 : images.length - 1,
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev < images.length - 1 ? prev + 1 : 0,
            )
          }
          alt={study.title}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-[#ebe5de] rounded-xl p-8 md:p-12 text-center mb-16"
        >
          <h3 className="text-xl md:text-2xl tracking-tight text-[#1a1a1a] mb-3">
            Queres resultados semelhantes?
          </h3>
          <p className="text-[#6b6b6b] mb-6 max-w-md mx-auto">
            Pede a tua auditoria gratuita e descobre como podemos escalar o teu
            negócio.
          </p>
          <Link
            to="/#contacto"
            className="inline-flex items-center gap-3 bg-[#FF9941] text-[#1a1a1a] pl-8 pr-2 py-2 rounded-full hover:bg-[#e8872e] transition-colors"
            style={{ fontWeight: 600 }}
          >
            <span>Pedir Auditoria Gratuita</span>
            <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <ArrowRight size={18} className="text-[#1a1a1a]" />
            </span>
          </Link>
        </motion.div>

        {/* Prev / Next navigation */}
        <div className="flex items-stretch gap-4">
          {prevStudy ? (
            <Link
              to={`/casos/${prevStudy.slug}`}
              className="flex-1 group p-6 rounded-xl border border-border hover:border-[#FF9941]/30 transition-colors"
            >
              <span className="text-xs text-[#6b6b6b] uppercase tracking-wide flex items-center gap-1 mb-2">
                <ArrowLeft size={12} /> Anterior
              </span>
              <span className="text-[#1a1a1a] group-hover:text-[#FF9941] transition-colors text-sm">
                {prevStudy.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextStudy ? (
            <Link
              to={`/casos/${nextStudy.slug}`}
              className="flex-1 group p-6 rounded-xl border border-border hover:border-[#FF9941]/30 transition-colors text-right"
            >
              <span className="text-xs text-[#6b6b6b] uppercase tracking-wide flex items-center justify-end gap-1 mb-2">
                Seguinte <ArrowRight size={12} />
              </span>
              <span className="text-[#1a1a1a] group-hover:text-[#FF9941] transition-colors text-sm">
                {nextStudy.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  );
}
