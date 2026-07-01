import { motion } from "motion/react";
import { Truck, Construction, Package, MapPin, Clock, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Transporte de Carga Pesada",
    desc: "Movilización de maquinaria, estructuras metálicas y equipos industriales de gran tonelaje mediante plataformas especializadas.",
  },
  {
    icon: Construction,
    title: "Grúa Hidráulica",
    desc: "Servicio de carga y descarga con grúas hidráulicas, ideales para obras de construcción y montaje industrial.",
  },
  {
    icon: Package,
    title: "Carga Sobredimensionada",
    desc: "Transporte de cargas que exceden las dimensiones estándar, con gestión de permisos y escoltas de seguridad vial.",
  },
  {
    icon: MapPin,
    title: "Rutas Nacionales",
    desc: "Cobertura en todo el territorio ecuatoriano, con planificación de rutas especiales para garantizar la entrega segura.",
  },
  {
    icon: Clock,
    title: "Servicio 24/7",
    desc: "Atención permanente para emergencias logísticas. Nuestro equipo está disponible las 24 horas, los 7 días de la semana.",
  },
  {
    icon: ShieldCheck,
    title: "Carga Asegurada",
    desc: "Todos nuestros servicios incluyen cobertura de seguro integral para su tranquilidad y la protección de su mercancía.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="py-24"
      style={{
        background: "linear-gradient(160deg, #0A182F 0%, #0f2545 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm uppercase tracking-widest mb-4 block"
            style={{ color: "#f97316", fontWeight: 600 }}
          >
            Lo que hacemos
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Soluciones integrales de logística y transporte especializado para
            los sectores de construcción, minería, energía e industria.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl p-8 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                cursor: "default",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(220,38,38,0.2))",
                  border: "1px solid rgba(249,115,22,0.3)",
                }}
              >
                <svc.icon size={24} style={{ color: "#f97316" }} />
              </div>

              <h3
                className="text-white mb-3"
                style={{ fontWeight: 700, fontSize: "1.05rem" }}
              >
                {svc.title}
              </h3>
              <p className="text-gray-400" style={{ lineHeight: 1.7, fontSize: "0.9rem" }}>
                {svc.desc}
              </p>

              {/* Hover accent line */}
              <div
                className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: "linear-gradient(90deg, #f97316, #dc2626)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
