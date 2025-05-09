import Particles from "react-tsparticles";
import { useCallback } from "react";
import { tsParticles } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async () => {
    await loadBasic(tsParticles); 
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0d0d0d" },
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1.5 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
            width: 1
          }
        }
      }}
    />
  );
}

