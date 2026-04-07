import { useState } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    website: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-079be383/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit form");
      }

      console.log("Form submission successful:", data);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setError(err instanceof Error ? err.message : "Ocorreu um erro. Por favor, tenta novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="w-full px-6 md:px-12 lg:px-20 py-20" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[2rem] md:text-[2.5rem] leading-tight tracking-tight text-[#1a1a1a] mb-4">
          Pede a tua auditoria gratuita e começa já a ganhar clientes online
        </h2>
        <p className="text-[#6b6b6b] mb-10">
          Preenche o formulário e a nossa equipa entrará em contacto brevemente.
        </p>

        {submitted ? (
          <div className="bg-white border border-border rounded-lg p-10">
            <p className="text-[#1a1a1a] text-lg">Obrigado! Entraremos em contacto em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-3.5 rounded-lg">
                {error}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-5 py-3.5 bg-white border border-border rounded-lg focus:outline-none focus:border-[#FF9941] transition-colors"
                disabled={isSubmitting}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3.5 bg-white border border-border rounded-lg focus:outline-none focus:border-[#FF9941] transition-colors"
                disabled={isSubmitting}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full px-5 py-3.5 bg-white border border-border rounded-lg focus:outline-none focus:border-[#FF9941] transition-colors"
                disabled={isSubmitting}
              />
              <input
                type="text"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                className="w-full px-5 py-3.5 bg-white border border-border rounded-lg focus:outline-none focus:border-[#FF9941] transition-colors"
                disabled={isSubmitting}
              />
            </div>
            <input
              type="text"
              placeholder="Website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-5 py-3.5 bg-white border border-border rounded-lg focus:outline-none focus:border-[#FF9941] transition-colors"
              disabled={isSubmitting}
            />
            <textarea
              placeholder="Mensagem (opcional)"
              rows={4}
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              className="w-full px-5 py-3.5 bg-white border border-border rounded-lg focus:outline-none focus:border-[#FF9941] transition-colors resize-none"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full hover:bg-[#333] transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "A enviar..." : "Pedir Auditoria Gratuita"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}