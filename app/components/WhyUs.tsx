import { motion } from "motion/react";
import { BadgeCheck, Headphones, Route, Wrench } from "lucide-react";
import camionPrincipal from "../../imports/camion_principal.png";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Personal Certificado",
    desc: "Operadores con licencias profesionales actualizadas y capacitación continua en seguridad vial.",
  },
  {
    icon: Headphones,
    title: "Soporte Permanente",
    desc: "Asesoría y seguimiento en tiempo real durante toda la operación de transporte.",
  },
  {
    icon: Route,
    title: "Planificación de Rutas",
    desc: "Análisis previo de rutas, permisos especiales y coordinación con autoridades para garantizar el tránsito seguro.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    desc: "Flota sometida a mantenimiento riguroso para garantizar disponibilidad y fiabilidad en cada operación.",
  },
];

export function WhyUs() {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-sm uppercase tracking-widest mb-4 block"
              style={{ color: "#f97316", fontWeight: 600 }}
            >
              ¿Por qué elegirnos?
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
              Su carga en manos{" "}
              <span style={{ color: "#f97316" }}>expertas</span>
            </h2>
            <p
              className="mb-10"
              style={{ color: "#4B5563", lineHeight: 1.8, fontSize: "1rem" }}
            >
              En UNIGRUAS entendemos que cada carga es única. Por eso
              diseñamos soluciones a medida, combinando experiencia,
              tecnología y un equipo humano altamente comprometido.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(220,38,38,0.08))",
                      border: "1px solid rgba(249,115,22,0.25)",
                    }}
                  >
                    <r.icon size={20} style={{ color: "#f97316" }} />
                  </div>
                  <div>
                    <h4
                      className="mb-1"
                      style={{ color: "#0A182F", fontWeight: 700, fontSize: "0.95rem" }}
                    >
                      {r.title}
                    </h4>
                    <p style={{ color: "#6B7280", fontSize: "0.85rem", lineHeight: 1.6 }}>
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — truck image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute -top-8 -right-8 w-72 h-72 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)",
              }}
            />
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 30px 80px rgba(10,24,47,0.15)" }}
            >
              <img
                src={camionPrincipal}
                alt="Camión principal Unigruas"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
              {/* Bottom badge */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-4"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(10,24,47,0.95) 0%, transparent 100%)",
                }}
              >
                <p className="text-white text-sm" style={{ fontWeight: 600 }}>
                  UNIGRUAS CIA. LTDA.
                </p>
                <p className="text-orange-400 text-xs">
                  Excelencia en Transporte · Carga Especial
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
