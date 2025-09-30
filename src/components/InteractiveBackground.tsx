"use client";

import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react"; 
import type { Container, Engine } from "@tsparticles/engine"; 

const InteractiveBackground = () => {
  // Configuração para carregar o 'slim' bundle
  const particlesInit = useCallback(async (engine: Engine) => {
    // Agora que o erro de módulo foi resolvido, essa linha funciona
    await loadSlim(engine); 
  }, []);

  // Callback para quando o container for carregado
  const particlesLoaded = useCallback(async (_container: Container | undefined) => {
    // console.log(container); 
  }, []);

  const options = {
    // Configurações de design e interatividade
    background: {
      color: {
        value: "#000000",
      },
      opacity: 0, 
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "link", 
        },
        onClick: {
          enable: false,
        },
      },
      modes: {
        link: {
          distance: 150,
          duration: 0.4,
          opacity: 1,
          width: 1,
        },
      },
    },
    particles: {
      color: {
        value: "#9333ea", // Cor roxa/púrpura
      },
      links: {
        color: "#a78bfa", // Cor roxa
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
      opacity: {
        value: 0.5,
      }
    },
    detectRetina: true,
  };

  // Prepara as propriedades que serão passadas ao componente Particles
  const particlesProps = {
    init: particlesInit,
    loaded: particlesLoaded,
    options: options,
  };

  return (
    <Particles
      id="tsparticles"
      // CORREÇÃO: Usamos o operador spread {...} para resolver a tipagem
      {...particlesProps} 
      // Garante que o fundo não atrapalhe a rolagem
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} 
    />
  );
};

export default InteractiveBackground;