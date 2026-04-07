import { BarChart3, Globe, Search, LineChart } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    number: "01",
    title: "Publicidade Digital",
    description: "Gestão de campanhas no Google Ads, Meta Ads, TikTok Ads e LinkedIn Ads com foco em performance e retorno do investimento.",
  },
  {
    icon: Globe,
    number: "02",
    title: "Desenvolvimento Web",
    description: "Criação e otimização de websites e landing pages focados em conversão, velocidade e experiência do utilizador.",
  },
  {
    icon: Search,
    number: "03",
    title: "SEO",
    description: "Estratégias de otimização para motores de busca que aumentam a visibilidade orgânica e geram tráfego qualificado.",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Web Analytics",
    description: "Implementação de tracking avançado e dashboards de dados para tomada de decisões informadas e mensuráveis.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="w-full px-6 md:px-12 lg:px-20 py-20 bg-[#1a1a1a]" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        <div className="md:flex md:gap-16 md:items-start">
          <div className="md:w-1/3 mb-10 md:mb-0 md:sticky md:top-8">
            <h2 className="text-[2rem] md:text-[2.5rem] leading-tight tracking-tight text-white">
              O que podemos fazer pelo teu negócio
            </h2>
          </div>
          <div className="md:w-2/3 space-y-0">
            {services.map((service) => (
              <div
                key={service.number}
                className="py-8 border-t border-white/10 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#FF9941] text-sm mt-1">{service.number}</span>
                  <div>
                    <h3 className="text-xl text-white tracking-tight mb-3">{service.title}</h3>
                    <p className="text-white/60 leading-relaxed max-w-lg">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
