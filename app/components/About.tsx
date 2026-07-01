import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import logo from "../../imports/logo_unigruas_sinfondo.png";

const highlights = [
  "Transporte de maquinaria pesada y equipos industriales",
  "Operadores con certificación y amplia experiencia",
  "Cobertura nacional con rutas especiales",
  "Equipos con grúas hidráulicas de alta capacidad",
  "Gestión de permisos para cargas sobredimensionadas",
  "Atención personalizada 24/7 para emergencias",
];

export function About() {
  return (
    <section id="nosotros" className="py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — logo + decorative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="relative flex items-center justify-center p-8">
              <img
                src={logo}
                alt="Logo Unigruas CIA. LTDA."
                className="w-80 max-w-full drop-shadow-2xl"
              />
            </div>

            {/* Accent block */}
            <div
              className="mt-8 px-8 py-5 rounded-2xl text-center w-full max-w-sm"
              style={{
                background: "linear-gradient(135deg, #f97316, #dc2626)",
                color: "#fff",
              }}
            >
              <p className="text-sm uppercase tracking-widest mb-1 opacity-90">
                Sede principal
              </p>
              <p style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                Quito, Ecuador
              </p>
              <p className="text-sm opacity-80 mt-1">
                Carga Especial · Transporte Pesado
              </p>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-sm uppercase tracking-widest mb-4 block"
              style={{ color: "#f97316", fontWeight: 600 }}
            >
              Quiénes somos
            </span>
            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#0A182F",
              }}
            >
              Líderes en transporte{" "}
              <span style={{ color: "#f97316" }}>especial y pesado</span>
            </h2>
            <p
              className="mb-4"
              style={{ color: "#4B5563", lineHeight: 1.8, fontSize: "1rem" }}
            >
              <strong>UNIGRUAS CIA. LTDA.</strong> es una empresa ecuatoriana
              especializada en el transporte de carga especial y pesada,
              fundada con el firme compromiso de brindar soluciones logísticas
              seguras, eficientes y confiables.
            </p>
            <p
              className="mb-8"
              style={{ color: "#4B5563", lineHeight: 1.8, fontSize: "1rem" }}
            >
              Contamos con una flota moderna equipada con grúas hidráulicas,
              plataformas de bajo perfil y unidades de alto tonelaje, capaces
              de movilizar desde maquinaria de construcción hasta equipos
              industriales de gran envergadura a lo largo de todo el territorio
              nacional.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#f97316" }}
                  />
                  <span style={{ color: "#374151", fontSize: "0.9rem" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
