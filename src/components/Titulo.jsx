import { Typewriter } from 'react-simple-typewriter';

export default function Titulo() {
  return (
    <div 
    id='hero'
      style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "1.5rem",
        flexDirection: "column",
        gap: "1.5rem",
        textAlign: "center"
      }}
    >
      <h2 style={{ 
        fontSize: "clamp(2rem, 6vw, 4rem)", // Escala entre 2rem (mobile) y 4rem (desktop)
        color: "#fff", 
        fontWeight: "bold", 
        lineHeight: "1.2",
        marginBottom: "2.5rem",
        maxWidth: "90vw"
      }}>
        Hola, soy{" "}
        <span style={{ 
          color: "#00ffe0",
          textShadow: "0 0 15px rgba(0,255,224,0.5)",
          display: "inline-block",
          padding: "0.2em 0.5em",
          borderRadius: "8px"
        }}>
          <Typewriter
            words={[
              'Florencia Zoni',
              'Técnica Superior en Desarrollo de Software', 
              'Frontend Dev', 
              'Apasionada por la IA 🤖'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            cursorColor="#00ffe0"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </span>
      </h2>

      {/* Línea decorativa responsiva */}
      <div style={{
        width: "min(60%, 200px)", // Usa hasta 60% del contenedor o máx 200px
        height: "4px",
        background: "linear-gradient(90deg, transparent, #00ffe0, transparent)",
        borderRadius: "2px"
      }} />
    </div>
  );
}
