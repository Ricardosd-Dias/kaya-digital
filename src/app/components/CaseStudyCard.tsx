import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import type { CaseStudy } from "../data/case-studies";

interface CaseStudyCardProps {
  study: CaseStudy;
  isDark: boolean;
  showSummary?: boolean;
}

export function CaseStudyCard({ study, isDark, showSummary = false }: CaseStudyCardProps) {
  return (
    <Link to={`/casos/${study.slug}`} className="block h-full">
      <div
        className="relative overflow-hidden rounded-xl group cursor-pointer transition-all hover:shadow-lg h-full flex flex-col"
        style={{ backgroundColor: isDark ? "#1a1a1a" : "#ebe5de" }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10"
          style={{ backgroundColor: study.accent }}
        />
        <div
          className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full opacity-[0.06]"
          style={{ backgroundColor: study.accent }}
        />

        {/* Content */}
        <div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
          {/* Tags row */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span
              className="text-[0.65rem] tracking-wide uppercase px-2.5 py-1 rounded-full border"
              style={{
                color: isDark ? "rgba(255,255,255,0.5)" : "#6b6b6b",
                borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
              }}
            >
              {study.tag}
            </span>
          </div>

          {/* Headline metric */}
          <span
            className="block text-[1.75rem] md:text-[2rem] tracking-tight leading-none mb-3"
            style={{
              color: "#FF9941",
              fontWeight: 700,
            }}
          >
            {study.headline}
          </span>

          {/* Descriptive title */}
          <h3
            className="text-[0.95rem] tracking-tight mb-1.5 leading-snug"
            style={{ color: isDark ? "rgba(255,255,255,0.85)" : "#1a1a1a" }}
          >
            {study.title}
          </h3>

          {/* Client */}
          <p
            className="text-sm mb-4"
            style={{ color: isDark ? "rgba(255,255,255,0.4)" : "#6b6b6b" }}
          >
            {study.client}
          </p>

          {/* Summary (optional, for feed page) */}
          {showSummary && (
            <p
              className="text-sm leading-relaxed mb-4 flex-1"
              style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.4)" }}
            >
              {study.summary}
            </p>
          )}

          {/* Spacer when no summary */}
          {!showSummary && <div className="flex-1" />}

          {/* CTA */}
          <span className="inline-flex items-center gap-2 text-[#FF9941] group-hover:gap-3 transition-all text-sm mt-auto">
            Ver caso
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#FF9941]">
              <ArrowRight size={13} className="text-white" />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}