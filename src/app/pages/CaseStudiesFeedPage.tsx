import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { caseStudies } from "../data/case-studies";
import { CaseStudyCard } from "../components/CaseStudyCard";

// Channel tags
const channelTags = Array.from(
  new Set(caseStudies.flatMap((c) => c.tag.split(" · ").map((t) => t.trim())))
);

export function CaseStudiesFeedPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos"
      ? caseStudies
      : caseStudies.filter((c) => c.tag.includes(activeFilter));

  return (
    <div className="pt-28 md:pt-36 pb-20 px-6 md:px-12 lg:px-20" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Voltar ao início
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[2.25rem] md:text-[3rem] leading-[1.1] tracking-tight text-[#1a1a1a] mb-4">
            Casos de{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Estudo
            </span>
          </h1>
          <p className="text-[#6b6b6b] max-w-lg mb-10 leading-relaxed">
            Resultados reais de clientes reais. Cada caso é uma história de crescimento construída com estratégia, dados e dedicação.
          </p>
        </motion.div>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveFilter("Todos")}
            className="px-5 py-2 rounded-full text-sm transition-colors cursor-pointer"
            style={{
              backgroundColor: activeFilter === "Todos" ? "#1a1a1a" : "transparent",
              color: activeFilter === "Todos" ? "#fff" : "#6b6b6b",
              border: activeFilter === "Todos" ? "1px solid #1a1a1a" : "1px solid rgba(0,0,0,0.12)",
            }}
          >
            Todos
          </button>
          {channelTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className="px-5 py-2 rounded-full text-sm transition-colors cursor-pointer"
              style={{
                backgroundColor: activeFilter === tag ? "#1a1a1a" : "transparent",
                color: activeFilter === tag ? "#fff" : "#6b6b6b",
                border: activeFilter === tag ? "1px solid #1a1a1a" : "1px solid rgba(0,0,0,0.12)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <CaseStudyCard study={c} isDark={i % 2 === 0} showSummary />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}