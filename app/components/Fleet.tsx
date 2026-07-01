import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

import img1 from "../../imports/camion1.webp";
import img2 from "../../imports/camion2.webp";
import img3 from "../../imports/camion3.webp";
import img4 from "../../imports/camion4.webp";
import img5 from "../../imports/camion5.webp";
import img6 from "../../imports/camion6.webp";
import img7 from "../../imports/camion7.webp";
import img8 from "../../imports/camion8.webp";

const photos = [
  { src: img1, alt: "Transporte de maquinaria New Holland", caption: "Transporte de maquinaria pesada" },
  { src: img2, alt: "Asistencia en montaje de estructuras metálicas", caption: "Asistencia en montaje de estructuras metálicas" },
  { src: img3, alt: "Camión de plataforma transportando múltiples bobinas grandes de cable industrial", caption: "Transporte seguro de bobinas y cableado industrial" },
  { src: img4, alt: "Grúa hidráulica en operación urbana", caption: "Movilización de plataformas elevadoras y equipos telescópicos" },
  { src: img5, alt: "Transporte de maquinaria ligera y equipo caminero", caption: "Transporte de maquinaria" },
  { src: img6, alt: "Camión grúa levantando vigas para la construcción de una nave industrial de acero", caption: "Izaje pesado para construcción de naves industriales" },
  { src: img7, alt: "Camión grúa operando con brazo extendido en zona urbana residencial", caption: "Trabajos en altura y maniobras en zonas urbanas" },
  { src: img8, alt: "Camión grúa de gran alcance elevando materiales en un edificio de hormigón en construcción", caption: "Izaje de materiales para obras civiles y edificios" },
];

type Photo = typeof photos[0];

function FleetCard({
  photo,
  onSelect,
  aspectRatio = "4/3",
  className = "",
}: {
  photo: Photo;
  onSelect: (p: Photo) => void;
  tall?: boolean;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
      style={{ aspectRatio }}
      onClick={() => onSelect(photo)}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4"
        style={{
          background: "linear-gradient(0deg, rgba(10,24,47,0.88) 0%, rgba(10,24,47,0.1) 60%, transparent 100%)",
        }}
      >
        <div className="flex items-center gap-2 w-full">
          <ZoomIn size={16} className="text-orange-400 shrink-0" />
          <p className="text-white text-sm" style={{ fontWeight: 600 }}>
            {photo.caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Fleet() {
  const [selected, setSelected] = useState<typeof photos[0] | null>(null);

  return (
    <section
      id="flota"
      className="py-24"
      style={{ background: "#f4f6f9" }}
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
            Nuestra flota
          </span>
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#0A182F",
            }}
          >
            Equipos en acción
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: "#6B7280", lineHeight: 1.7 }}
          >
            Una muestra de nuestros vehículos y operaciones en distintos
            proyectos a lo largo del Ecuador.
          </p>
        </motion.div>

        {/* Row 1: 1 wide + 2 square */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {[photos[0]].map((photo) => (
            <FleetCard key={photo.src} photo={photo} onSelect={setSelected} tall={false} className="sm:col-span-2" aspectRatio="16/9" />
          ))}
          {[photos[1]].map((photo) => (
            <FleetCard key={photo.src} photo={photo} onSelect={setSelected} tall={false} className="" aspectRatio="4/3" />
          ))}
        </div>

        {/* Row 2: 3 equal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {photos.slice(2, 5).map((photo) => (
            <FleetCard key={photo.src} photo={photo} onSelect={setSelected} aspectRatio="4/3" />
          ))}
        </div>

        {/* Row 3: 2 + 1 wide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[photos[5]].map((photo) => (
            <FleetCard key={photo.src} photo={photo} onSelect={setSelected} aspectRatio="4/3" />
          ))}
          {[photos[6]].map((photo) => (
            <FleetCard key={photo.src} photo={photo} onSelect={setSelected} aspectRatio="4/3" />
          ))}
          {[photos[7]].map((photo) => (
            <FleetCard key={photo.src} photo={photo} onSelect={setSelected} aspectRatio="4/3" />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full rounded-2xl object-contain max-h-[80vh]"
                style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
              />
              <div
                className="mt-4 text-center text-gray-300 text-sm"
                style={{ fontWeight: 500 }}
              >
                {selected.caption}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #f97316, #dc2626)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
