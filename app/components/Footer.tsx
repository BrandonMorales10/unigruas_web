import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../../imports/logo_unigruas_sinfondo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Flota", href: "#flota" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Transporte de carga pesada",
  "Grúa hidráulica",
  "Carga sobredimensionada",
  "Rutas nacionales",
  "Servicio de emergencia 24/7",
  "Asesoría logística",
];

export function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#060e1e" }}>
      {/* Top accent */}
      <div
        className="h-1"
        style={{ background: "linear-gradient(90deg, #f97316, #dc2626, #f97316)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Unigruas CIA. LTDA."
              className="h-32 w-auto mb-6 object-contain"
              style={{ filter: "brightness(1.05)" }}
            />
            <p className="text-gray-400 text-sm" style={{ lineHeight: 1.7 }}>
              Empresa ecuatoriana especializada en transporte pesado y carga
              especial. Excelencia, seguridad y confianza en cada operación.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-widest"
              style={{ fontWeight: 600 }}
            >
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-widest"
              style={{ fontWeight: 600 }}
            >
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc} className="text-gray-400 text-sm">
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-widest"
              style={{ fontWeight: 600 }}
            >
              Contacto
            </h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+593 99 502 3519" },
                { icon: Mail, text: "trans_unigruas@hotmail.com" },
                { icon: MapPin, text: "Quito, Ecuador" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={15} style={{ color: "#f97316", marginTop: "2px", flexShrink: 0 }} />
                  <span className="text-gray-400 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p>
            © {new Date().getFullYear()} UNIGRUAS CIA. LTDA. — Todos los derechos reservados.
          </p>
          <p>Quito, Ecuador · Excelencia en Transporte</p>
        </div>
      </div>
    </footer>
  );
}