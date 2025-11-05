"use client";

import { motion } from 'framer-motion';

const InteractiveBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#191718]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,98,208,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(243,216,73,0.1),transparent_55%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { top: '8%', rotate: -18, opacity: 0.32, duration: 28 },
          { top: '22%', rotate: -12, opacity: 0.28, duration: 32 },
          { top: '38%', rotate: -7, opacity: 0.24, duration: 30 },
          { top: '52%', rotate: -4, opacity: 0.2, duration: 26 },
        ].map((layer, index) => (
          <motion.svg
            key={index}
            width="2200"
            height="620"
            viewBox="0 0 2200 620"
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: layer.top, rotate: `${layer.rotate}deg`, opacity: layer.opacity }}
            preserveAspectRatio="none"
          >
            {[0, 1, 2].map((offset) => {
              const amplitude = 70 + offset * 18;
              const frequency = 1.8 + offset * 0.15;
              const phaseShift = offset * Math.PI * 0.35;
              const points: string[] = [];
              const segments = 10;
              const width = 2200;
              const height = 620;
              const baseline = height / (2 + offset * 0.35);

              for (let i = -2; i <= segments + 2; i++) {
                const x = (i / segments) * width;
                const y =
                  baseline +
                  Math.sin(i * frequency + phaseShift) * amplitude +
                  Math.sin((i + 1) * frequency * 0.6 + phaseShift) * (amplitude * 0.4);
                points.push(`${x},${y}`);
              }

              const path = `M ${points.join(' L ')} L ${width} ${height + 200} L -200 ${height + 200} Z`;

              return (
                <motion.path
                  key={`${index}-${offset}`}
                  d={path}
                  fill="none"
                  stroke="rgba(224,229,233,0.55)"
                  strokeWidth={1.1 - offset * 0.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0.95 }}
                  animate={{
                    pathLength: [0.95, 1, 0.97],
                    strokeDashoffset: [-120 * (offset + 1), 120 * (offset + 1), -120 * (offset + 1)],
                  }}
                  transition={{
                    duration: layer.duration + offset * 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    mixBlendMode: 'screen',
                    filter: 'blur(0.2px)',
                  }}
                />
              );
            })}
          </motion.svg>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#191718] via-transparent" />
    </div>
  );
};

export default InteractiveBackground;
