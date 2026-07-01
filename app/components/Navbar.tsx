import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../imports/logo_unigruas_sinfondo.png";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Flota", href: "#flota" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // URL de WhatsApp preconfigurada
  const whatsappUrl = "https://wa.me/593995023519?text=Hola%20TransUnigruas,%20vengo%20de%20su%20página%20web%20y%20deseo%20información.";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 24, 47, 0.97)"
          : "rgba(10, 24, 47, 0.85)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
        borderBottom: scrolled ? "1px solid rgba(249,115,22,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#inicio")}
            className="flex items-center gap-3 group"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <img
              src={logo}
              alt="Unigruas CIA. LTDA."
              className="h-14 w-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-gray-200 hover:text-orange-400 transition-colors duration-200 text-sm tracking-wide relative group"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Desktop - AHORA ES WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #25D366, #128C7E)", // Colores de WhatsApp
              boxShadow: "0 4px 15px rgba(37,211,102,0.3)",
            }}
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(10, 24, 47, 0.98)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-gray-200 hover:text-orange-400 transition-colors py-2 text-left border-b border-white/10"
                  style={{ background: "none", border: "none", cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px" }}
                >
                  {link.label}
                </button>
              ))}
              
              {/* CTA Mobile - AHORA ES WHATSAPP */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-full text-white text-sm mt-2"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
              >
                <MessageCircle size={16} />
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}