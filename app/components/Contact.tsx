import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Construir el mensaje formateado para WhatsApp
    const phoneNumber = "593995023519";
    const text = `*Nueva Solicitud Web*%0A%0A*Nombre:* ${form.name}%0A*Teléfono:* ${form.phone || 'No especificado'}%0A*Correo:* ${form.email}%0A*Servicio requerido:* ${form.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    // 2. Abrir WhatsApp en una nueva pestaña con los datos listos
    window.open(whatsappUrl, "_blank");

    // 3. Mostrar mensaje de éxito en la web y limpiar el formulario
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.07)",
    color: "#fff",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contacto"
      className="py-24"
      style={{
        background: "linear-gradient(160deg, #0A182F 0%, #111d35 100%)",
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
            Hablemos
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Contáctenos
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
            ¿Necesita transportar carga especial? Cuéntenos los detalles de su
            proyecto y le enviamos una cotización sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Teléfono / WhatsApp",
                  lines: ["0995023519"], 
                },
                {
                  icon: Mail,
                  title: "Correo electrónico",
                  lines: ["trans_unigruas@hotmail.com"], 
                },
                {
                  icon: MapPin,
                  title: "Oficina principal",
                  lines: ["Quito, Ecuador", "Servicio a nivel nacional"],
                },
              ].map(({ icon: Icon, title, lines }) => (
                <div
                  key={title}
                  className="flex gap-5 p-6 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(220,38,38,0.2))",
                      border: "1px solid rgba(249,115,22,0.3)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#f97316" }} />
                  </div>
                  <div>
                    <p
                      className="text-gray-400 text-sm mb-1"
                      style={{ textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.75rem" }}
                    >
                      {title}
                    </p>
                    {lines.map((l) => (
                      <p key={l} className="text-white" style={{ fontWeight: 500 }}>
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div
              className="mt-6 p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(220,38,38,0.08))",
                border: "1px solid rgba(249,115,22,0.2)",
              }}
            >
              <p
                className="text-orange-400 text-sm uppercase tracking-widest mb-3"
                style={{ fontWeight: 600 }}
              >
                Horario de atención
              </p>
              <div className="space-y-1">
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Lunes – Viernes</span>
                  <span className="text-white" style={{ fontWeight: 600 }}>07:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Sábados</span>
                  <span className="text-white" style={{ fontWeight: 600 }}>08:00 – 13:00</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Emergencias</span>
                  <span style={{ color: "#f97316", fontWeight: 600 }}>24 / 7</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 h-full py-20 text-center"
              >
                <CheckCircle2 size={64} style={{ color: "#25D366" }} />
                <h3 className="text-white" style={{ fontWeight: 700, fontSize: "1.4rem" }}>
                  ¡Abriendo WhatsApp!
                </h3>
                <p className="text-gray-400">
                  Continúe la conversación desde la aplicación.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Nombre completo *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ej: Juan Pérez"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Teléfono
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Ej: 099 123 4567" // Placeholder genérico
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="su_correo@ejemplo.com" // Placeholder genérico
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-2">
                    Descripción del servicio requerido *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describa el tipo de carga, origen, destino y cualquier detalle relevante..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)", // AHORA ES VERDE WHATSAPP
                    boxShadow: "0 8px 30px rgba(37,211,102,0.35)",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  <Send size={18} />
                  Enviar por WhatsApp
                </button>

                <p className="text-gray-500 text-xs text-center">
                  Al enviar, se abrirá WhatsApp con los detalles de su solicitud para una atención rápida.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}