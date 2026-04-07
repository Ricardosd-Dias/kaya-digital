import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import logo from "../assets/asset/44b72344ef51367e7c76d195028708a7b2d42159.png";

const navLinks = [
  { label: "Serviços", hash: "#servicos" },
  { label: "Casos de Estudo", hash: "#casos", to: "/casos" },
  { label: "Sobre Nós", hash: "#sobre" },
  { label: "Contactos", hash: "#contacto" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < 60 || currentY < lastScrollY.current);
      setScrolled(currentY > 20);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname === "/") {
      // Already on home page, just scroll
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home with hash
      navigate("/" + hash);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between transition-all duration-300"
      style={{
        fontFamily: "Inter, sans-serif",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        backgroundColor: scrolled ? "rgba(245, 240, 235, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.05)"
          : "1px solid transparent",
      }}
    >
      <Link to="/">
        <img src={logo} alt="Kaya Digital Collective" className="h-12" />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) =>
          link.to ? (
            <Link
              key={link.label}
              to={link.to}
              className="text-[#1a1a1a] hover:text-[#FF9941] transition-colors"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.hash}
              href={"/" + link.hash}
              onClick={(e) => handleNavClick(e, link.hash)}
              className="text-[#1a1a1a] hover:text-[#FF9941] transition-colors"
            >
              {link.label}
            </a>
          ),
        )}
      </div>

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F5F0EB]/95 backdrop-blur-md z-50 px-6 py-6 flex flex-col gap-4 border-b border-border md:hidden">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-[#1a1a1a]"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.hash}
                href={"/" + link.hash}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="text-[#1a1a1a]"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      )}
    </nav>
  );
}
