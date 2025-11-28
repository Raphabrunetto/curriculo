"use client";

import type { CSSProperties } from 'react';

type LayerConfig = {
  top: string;
  opacity: number;
  rotate: number;
  duration: number;
};

type LayerDefinition = LayerConfig & {
  paths: { d: string; strokeWidth: number }[];
};

const SEGMENTS = 10;
const WIDTH = 2200;
const HEIGHT = 620;
const OFFSETS = [0, 1, 2];

const baseLayers: LayerConfig[] = [
  { top: '8%', rotate: -18, opacity: 0.32, duration: 28 },
  { top: '22%', rotate: -12, opacity: 0.28, duration: 32 },
  { top: '38%', rotate: -7, opacity: 0.24, duration: 30 },
  { top: '52%', rotate: -4, opacity: 0.2, duration: 26 },
];

const createWavePath = (offset: number) => {
  const amplitude = 70 + offset * 18;
  const frequency = 1.8 + offset * 0.15;
  const phaseShift = offset * Math.PI * 0.35;
  const baseline = HEIGHT / (2 + offset * 0.35);
  const points: string[] = [];

  for (let i = -2; i <= SEGMENTS + 2; i++) {
    const x = (i / SEGMENTS) * WIDTH;
    const y =
      baseline +
      Math.sin(i * frequency + phaseShift) * amplitude +
      Math.sin((i + 1) * frequency * 0.6 + phaseShift) * (amplitude * 0.4);
    points.push(`${x},${y}`);
  }

  return `M ${points.join(' L ')} L ${WIDTH} ${HEIGHT + 200} L -200 ${HEIGHT + 200} Z`;
};

const waveLayers: LayerDefinition[] = baseLayers.map((layer) => ({
  ...layer,
  paths: OFFSETS.map((offset) => ({
    d: createWavePath(offset),
    strokeWidth: 1.1 - offset * 0.2,
  })),
}));

const InteractiveBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#191718]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,98,208,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(243,216,73,0.1),transparent_55%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {waveLayers.map((layer, index) => (
          <svg
            key={index}
            width={WIDTH}
            height={HEIGHT}
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            preserveAspectRatio="none"
            className="wave-layer absolute left-1/2"
            style={
              {
                top: layer.top,
                opacity: layer.opacity,
                '--wave-duration': `${layer.duration}s`,
                '--wave-rotation': `${layer.rotate}deg`,
              } as CSSProperties & {
                '--wave-duration': string;
                '--wave-rotation': string;
              }
            }
          >
            {layer.paths.map((path, pathIndex) => (
              <path
                key={pathIndex}
                d={path.d}
                className="wave-path"
                style={
                  {
                    strokeWidth: path.strokeWidth,
                  } as CSSProperties
                }
              />
            ))}
          </svg>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#191718] via-transparent" />
    </div>
  );
};

export default InteractiveBackground;
