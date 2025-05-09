import { motion, useInView, AnimatePresence } from "framer-motion";
import TechnologyCarousel from "../components/TechnologyCarousel";
import { useRef } from "react";
/* import Container from '@mui/material' */

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const techStack = [
    // Frontend
    {
      name: "React",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "JavaScript",
      image: "https://cdn.worldvectorlogo.com/logos/javascript-2.svg",
    },
    {
      name: "HTML5",
      image: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    },
    { name: "CSS3", image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      name: "Bootstrap",
      image: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
    },
    { name: "Axios", image: "https://cdn.worldvectorlogo.com/logos/axios.svg" },

    // Backend
    {
      name: "Node.js",
      image: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg",
    },
    {
      name: "Spring Boot",
      image: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
    },

    // Bases de Datos
    {
      name: "MongoDB",
      image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
      name: "MySQL",
      image: "https://worldvectorlogo.com/logos/mysql-logo-pure.svg",
    },

    // Lenguajes
    { name: "Java", image: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
    {
      name: "Python",
      image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    { name: "R", image: "https://cdn.worldvectorlogo.com/logos/r-lang.svg" },

    // Data Science
    {
      name: "Pandas",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
    },
    {
      name: "NumPy",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
    },

    // Herramientas
    { name: "Git", image: "https://cdn.worldvectorlogo.com/logos/git.svg" },
    {
      name: "GitHub",
      image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    },
    { name: "Jira", image: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },

    // Diseño
    {
      name: "Figma",
      image: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="py-[2.75rem] sm:py-16 text-white"
      ref={ref}
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  textShadow: "0 0 20px rgba(0,255,255,0.7)",
                  filter: "brightness(1.2)",
                }
              : {}
          }
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Sobre mí
        </motion.h2>

        {/* Texto animado con hover */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : {}}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.03 },
            },
          }}
          className="text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-relaxed mb-8 sm:mb-10 text-white/80 px-2 sm:px-0"
        >
          {"Técnica Superior en Desarrollo de Software con dos años de experiencia y sólida formación en frontend moderno (React.js, APIs REST) y experiencia en backend (Java, Spring Boot, Node.js). Actualmente estoy aprendiendo python para Ciencia de Datos. Me apasiona el aprendizaje constante y la creación de soluciones innovadoras "
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 300 },
                  },
                }}
                className="inline-block mr-2"
              >
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    className="inline-block cursor-default"
                    whileHover={{
                      scale: 1.2,
                      color: "#ff00ff",
                      textShadow: "0 0 10px rgba(255,0,255,0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="py-6 w-full overflow-x-hidden"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-pink-400"
          >
            My Tech Stack
          </motion.h2>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ delay: 0.7 }}
            className="w-full max-w-[90vw] mx-auto"
          >
            <TechnologyCarousel
              technologies={techStack}
              className="px-2 sm:px-4"
            />
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
};

export default Hero;
