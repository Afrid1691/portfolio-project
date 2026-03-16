import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function TechBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },

        particles: {
          number: {
            value: 55
          },

          color: {
            value: "#60a5fa"
          },

          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
            opacity: 0.3
          },

          move: {
            enable: true,
            speed: 1
          },

          size: {
            value: 2
          }
        }
      }}
    />
  );
}

export default TechBackground;