import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { keyframes } from "@emotion/react";

const floating = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const SubTitleIA = ({ mode = "entrevista" }) => {
  const modeColors = {
    entrevista: {
      primary: '#00e5ff',
      secondary: '#0066ff',
      gradient: 'linear-gradient(135deg, #0066ff 0%, #00e5ff 100%)'
    },
    emocional: {
      primary: '#ff69b4',
      secondary: '#ff1493',
      gradient: 'linear-gradient(135deg, #ff1493 0%, #ff69b4 100%)'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ textAlign: 'center', marginBottom: '2rem' }}
    >
      <h3
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 700,
          letterSpacing: "1px",
          marginBottom: "1rem",
          lineHeight: 1.3,
        }}
      >
        <span
          style={{
            background: modeColors[mode].gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            position: "relative",
            padding: "0 0.5rem",
          }}
        >
          <Typewriter
            words={[
              '¿Querés preguntarme algo?',
              '¡Conversemos! 💬',
              '¿Te interesa mi perfil?',
              '¡Hablemos de tecnología! 🚀'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            cursorColor={modeColors[mode].primary}
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </span>
      </h3>
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          color: modeColors[mode].primary,
          fontSize: '1.5rem',
          animation: `${floating} 2.5s ease-in-out infinite`
        }}
      >
        ↓
      </motion.div>
    </motion.div>
  );
};

export default SubTitleIA;