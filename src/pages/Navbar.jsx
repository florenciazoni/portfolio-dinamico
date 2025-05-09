import { motion } from "framer-motion";
import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { name: "Inicio", target: "hero" },
    { name: "Sobre mí", target: "sobre-mi" },
    { name: "Proyectos", target: "proyectos" },
    { name: "Habilidades", target: "skills" },
    { name: "Contacto", target: "contacto" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              FZ
            </span>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // Ajuste para compensar altura navbar
                onSetActive={() => setActiveSection(link.target)}
                className={`relative px-3 py-2 cursor-pointer ${
                  activeSection === link.target
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                } transition-colors text-sm font-medium`}
              >
                {link.name}
                {activeSection === link.target && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400/80"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Botón descargar CV - solo en desktop */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/cv-florZoni-.pdf"
            download
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-400/90 to-green-400/90 text-black text-sm font-medium rounded-full hover:shadow-lg transition-all"
          >
            <FiDownload className="text-lg" />
            Descargar CV
          </motion.a>

          {/* Botón Menú mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Menú Mobile */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className={`overflow-hidden md:hidden flex flex-col items-center bg-black/80 backdrop-blur-sm mt-2 rounded-b-xl`}
        >
          {isOpen && (
            <div className="flex flex-col items-center gap-4 py-6">
              {links.map((link) => (
                <Link
                  key={link.target}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <motion.a
                href="/CV-Florencia-Zoni-act.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-2 px-6 py-2.5 bg-gradient-to-r from-cyan-400/90 to-green-400/90 text-black text-sm font-medium rounded-full"
              >
                Descargar CV
              </motion.a>
            </div>
          )}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
