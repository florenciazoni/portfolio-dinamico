import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TbBrandReact, TbBrandPython } from "react-icons/tb";
import {  SiMongodb, SiTensorflow } from "react-icons/si";
import { SiJavascript,SiSpring,SiPandas } from "react-icons/si";
import { FaHtml5,FaNode } from "react-icons/fa";




const SkillsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const categories = [
    {
      title: "Frontend",
      color: "#00e5ff",
      skills: [
        { name: "React.js", icon: <TbBrandReact />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript />, level: 85 },
        { name: "HTML5/CSS3", icon: <FaHtml5 />, level: 95 }
      ]
    },
    {
      title: "Backend",
      color: "#00ff88",
      skills: [
        { name: "Node.js", icon: <FaNode />, level: 80 },
        { name: "Python", icon: <TbBrandPython />, level: 75 },
        { name: "Spring Boot", icon: <SiSpring />, level: 70 }
      ]
    },
    {
      title: "Data & IA",
      color: "#ff00ff",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "TensorFlow", icon: <SiTensorflow />, level: 65 },
        { name: "Pandas", icon: <SiPandas /> , level: 75 }
      ]
    }
  ];

  return (
    <section  id="skills"
  ref={ref}
  className="py-20 px-4 relative"
>
  <motion.div
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    className="max-w-7xl mx-auto"
  >
    {/* Título con gradiente */}
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
      Habilidades Técnicas
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          className="p-8 rounded-2xl border-2 border-white/20 backdrop-blur-lg hover:border-cyan-400/50 transition-all group" // Borde transparente con efecto hover
        >
          {/* Título de categoría */}
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            {category.title}
          </h3>
          
          {/* Lista de habilidades */}
          <div className="space-y-6">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-colors"
              >
                {/* Ícono */}
                <div className="text-3xl text-cyan-400">
                  {skill.icon}
                </div>
                
                {/* Barra de progreso */}
                <div className="flex-1">
                  <div className="flex justify-between mb-2 text-white">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-green-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>
  );
};

export default SkillsShowcase;