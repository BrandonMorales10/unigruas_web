import { motion } from "motion/react";
import { ChevronDown, Shield, Award, Truck } from "lucide-react";
import camionPrincipal from "../../imports/camion_rojo.jpg";

export function Hero() {
  const scrollToServices = () => {
    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0A182F" }}
    >
      {/* ========================================================
          FONDO RESPONSIVO: Degradado vertical en móvil, horizontal en PC
          ======================================================== */}
      <div className="absolute inset-0 w-full h-full z-0">
        
        <img
          src={camionPrincipal}
          alt="Camión principal TransUnigruas"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            objectPosition: "85% center", 
          }}
        />

        {/* 
          
          - Móvil (por defecto): bg-gradient-to-b (de arriba a abajo). Oscuro arriba, claro abajo.
          - PC (lg:): lg:bg-gradient-to-r (de izquierda a derecha). Oscuro a la izquierda, claro a la derecha.
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A182F]/95 via-[#0A182F]/80 to-[#0A182F]/30 lg:bg-gradient-to-r lg:from-[#0A182F]/85 lg:via-[#0A182F]/50 lg:via-40% lg:to-transparent lg:to-65% z-10" />
      </div>

      {/* Línea naranja inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-20"
        style={{ background: "linear-gradient(90deg, #f97316, #dc2626, #f97316)" }}
      />

      {/* Contenedor del contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">

          {/* LADO IZQUIERDO: TEXTOS */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 w-fit backdrop-blur-sm"
              style={{
                background: "rgba(249,115,22,0.15)",
                border: "1px solid rgba(249,115,22,0.4)",
                color: "#fb923c",
              }}
            >
              <Award size={14} />
              Excelencia en Transporte · Quito, Ecuador
            </motion.div>

            {/* Título Principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-lg"
            >
              Transporte
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #f97316, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pesado
              </span>
              <br />
              <span className="text-white" style={{ opacity: 0.85 }}>
                & Especial
              </span>
            </motion.h1>

            {/* Párrafo descriptivo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 mb-8 max-w-lg drop-shadow-lg"
              style={{ fontSize: "1.05rem", lineHeight: 1.6 }}
            >
              Más de una década moviendo cargas especiales a través de Ecuador.
              Flota moderna, operadores certificados y compromiso total con la
              seguridad de su mercancía.
            </motion.p>

            {/* Iconos de confianza */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-5 mb-10 drop-shadow-lg"
            >
              {[
                { icon: Shield, text: "100% Asegurado" },
                { icon: Truck, text: "Flota propia" },
                { icon: Award, text: "+13 años" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                  <Icon size={16} style={{ color: "#f97316" }} />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Botones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #f97316, #dc2626)",
                  boxShadow: "0 8px 30px rgba(249,115,22,0.4)",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                Solicitar cotización
              </button>
              <button
                onClick={scrollToServices}
                className="px-8 py-4 rounded-xl text-white transition-all duration-300 hover:bg-white hover:text-gray-900 backdrop-blur-sm w-full sm:w-auto"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "2px solid rgba(255,255,255,0.35)",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                Ver servicios
              </button>
            </motion.div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 hidden md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ChevronDown size={20} className="text-orange-400 opacity-60" />
      </motion.div>
    </section>
  );
}