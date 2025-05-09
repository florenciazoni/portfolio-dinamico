import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const socialLinks = [
    { icon: <FiGithub />, name: "GitHub", url: "https://github.com/florenciazoni" },
    { icon: <FiLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/florenciazoni" },
    { icon: <FiMail />, name: "Email", url: "mailto:florzoni@gmail.com" },
    { icon: <SiDiscord />, name: "Discord", url: "#" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
  
      setFormData({ name: "", email: "", message: "" });
      alert("¡Mensaje enviado con éxito! 🚀");
    } catch (error) {
      alert("Error al enviar el mensaje. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
      id="contacto"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
        >
          Contacto
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-gray-900/50 rounded-2xl border border-white/10 backdrop-blur-lg"
          >
            <div>
              <label className="block text-cyan-400 mb-2">Nombre</label>
              <input
                type="text"
                className="w-full bg-white/5 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-cyan-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-white/5 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-cyan-400 mb-2">Mensaje</label>
              <textarea
                rows="5"
                className="w-full bg-white/5 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-400 to-green-400 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-cyan-400/30"
            >
              {loading ? (
                <div className="h-5 w-5 border-2 border-black rounded-full animate-spin" />
              ) : (
                <>
                  <FiSend className="text-xl" />
                  Enviar Mensaje
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="p-8 bg-gray-900/50 rounded-2xl border border-white/10 backdrop-blur-lg h-fit"
          >
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Conectemos en Redes
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 flex items-center gap-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <span className="text-2xl text-cyan-400 group-hover:text-green-400 transition-colors">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Efecto Decorativo */}
            <div className="mt-8 p-4 bg-cyan-400/10 rounded-xl border border-cyan-400/20">
              <p className="text-sm text-cyan-400">
                💡 ¿Prefieres contacto directo? Envíame un mensaje por cualquier red social
                o escríbeme a <span className="text-green-400">florzoni@gmail.com</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Efecto de Partículas */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + i % 5}s infinite`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;