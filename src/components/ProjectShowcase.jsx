import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const projects = [
    {
      title: "Doctor Vet",
      description: "Sistema de gestión para clínicas veterinarias",
      tech: ["React", "axios"],
      link: "#",
      repo: "https://github.com/eliascaif/doctorvet_react",
      image: "/src/assets/images/Captura de pantalla (641).png"
    },
    {
      title: "Mind Care",
      description: "App de salud mental con análisis emocional",
      tech: ["IA", "API Gemini", "React js", "Node js"],
      link: "https://front-mind-care-sz9l.vercel.app/",
      repo: "https://github.com/florenciazoni/front-mind-care",
      image: "/src/assets/images/Captura de pantalla (648).png"
    },
     {
      title: "Pagina web de Doctor vet",
      description: "Pagina de la app de Doctor Vet",/*  */
      tech: ["Boostrap", "HTML5", "CSS", "Figma"],
      link: "https://doctor-vet.netlify.app/",
      repo: "https://github.com/florenciazoni/doctor-vet-app/",
      image: "/src/assets/images/Captura de pantalla (650).png"
    }
  ];

  return (
    <section 
    id="proyectos"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group relative h-96 bg-gray-800 rounded-2xl overflow-hidden transform transition-all hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
              
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-400/20 transition-colors"
                  >
                    <FiGithub className="text-2xl text-cyan-400" />
                  </a>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-green-400/20 transition-colors"
                  >
                    <FiExternalLink className="text-2xl text-green-400" />
                  </a>
                </div>
              </div>

              {/* Efecto de brillo dinámico */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-green-400/10" />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón GitHub dinámico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: projects.length * 0.2 + 0.2 }}
          className="flex justify-center mt-16"
        >
          <a
            href={"https://github.com/florenciazoni"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-green-400/20 hover:from-cyan-400/30 hover:to-green-400/30 transition-all group border border-cyan-400/20 hover:border-cyan-400/40"
          >
            <FiGithub className="text-2xl text-cyan-400 group-hover:text-green-400 transition-colors" />
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent font-semibold">
              Explora más proyectos en GitHub
            </span>
          </a>
        </motion.div>

        {/* Efecto de partículas decorativas */}
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-16 opacity-30" />
      </motion.div>
    </section>
  );
};

export default ProjectShowcase;