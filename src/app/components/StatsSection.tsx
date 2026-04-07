import { useEffect, useRef, useState } from "react";

interface StatItem {
  prefix: string;
  numericValue: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { prefix: "+", numericValue: 10, suffix: "", label: "Anos de Experiência" },
  { prefix: "+", numericValue: 50, suffix: "", label: "Clientes Ativos" },
  { prefix: "+", numericValue: 2, suffix: "M€", label: "Em Budget Gerido" },
  { prefix: "+", numericValue: 300, suffix: "%", label: "ROAS Médio" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, start]);

  return value;
}

function StatCounter({ stat, inView }: { stat: StatItem; inView: boolean }) {
  const count = useCountUp(stat.numericValue, 2000, inView);
  return (
    <div className="flex flex-col">
      <span className="text-[2.5rem] md:text-[3rem] tracking-tight text-white leading-none">
        {stat.prefix}{count}{stat.suffix}
      </span>
      <span className="text-white/50 mt-3 text-sm">{stat.label}</span>
    </div>
  );
}

export function StatsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    null
  );
}