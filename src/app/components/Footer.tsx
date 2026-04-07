import { Link } from "react-router";
import logo from "../assets/44b72344ef51367e7c76d195028708a7b2d42159.png";

export function Footer() {
  return (
    <footer
      className="w-full px-6 md:px-12 lg:px-20 py-12 border-t border-border"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Kaya Digital Collective"
              className="h-10 mb-4"
            />
          </Link>
          <p className="text-[#6b6b6b] text-sm">
            © 2026 Kaya Digital Collective. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex gap-8">
          <Link
            to="/#servicos"
            className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors text-sm"
          >
            Serviços
          </Link>
          <Link
            to="/casos"
            className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors text-sm"
          >
            Casos de Estudo
          </Link>
          <Link
            to="/#sobre"
            className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors text-sm"
          >
            Sobre Nós
          </Link>
          <Link
            to="/#contacto"
            className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors text-sm"
          >
            Contactos
          </Link>
        </div>
      </div>
    </footer>
  );
}
