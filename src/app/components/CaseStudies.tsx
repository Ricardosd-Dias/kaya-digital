import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { caseStudies } from "../data/case-studies";
import { CaseStudyCard } from "./CaseStudyCard";

// Show first 4 on homepage
const homeCases = caseStudies.slice(0, 4);

export function CaseStudies() {
  return (
    <section id="casos" className="w-full px-6 md:px-12 lg:px-20 py-20" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[2rem] md:text-[2.5rem] leading-tight tracking-tight text-[#1a1a1a] text-center mb-4">
          Casos Selecionados
        </h2>
        <p className="text-[#6b6b6b] text-center mb-12 max-w-lg mx-auto">
          Resultados reais de clientes reais. Cada caso é uma história de crescimento.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {homeCases.map((c, i) => (
            <CaseStudyCard key={c.slug} study={c} isDark={i % 2 === 0} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/casos"
            className="inline-flex items-center gap-2 border border-[#1a1a1a] text-[#1a1a1a] px-6 py-3 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Ver todos os casos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
