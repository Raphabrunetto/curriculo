"use client";

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

const MIN_WIDTH = 240;
const MAX_WIDTH = 420;
const DEFAULT_WIDTH = 320;

const GRAVITY = 1400;
const BOUNCE = 0.72;
const FRICTION_X = 0.98;
const FRICTION_Y = 0.995;

const INITIAL_BALLS = [
  { id: 1, size: 36, x: 28, y: 34, color: '#FF7A7A' },
  { id: 2, size: 28, x: 120, y: 90, color: '#FFC371' },
  { id: 3, size: 32, x: 210, y: 60, color: '#FF5E62' },
  { id: 4, size: 24, x: 64, y: 150, color: '#F857A6' },
  { id: 5, size: 30, x: 190, y: 140, color: '#7EE8FA' },
];

type Ball = (typeof INITIAL_BALLS)[number];

type DragState = {
  id: number;
  pointerId: number;
  size: number;
  offsetX: number;
  offsetY: number;
  lastX: number;
  lastY: number;
  lastTime: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
} | null;

const ResponsivePreviewCard = () => {
  const [frameWidth, setFrameWidth] = useState(DEFAULT_WIDTH);
  const [isFlipped, setIsFlipped] = useState(false);
  const [balls, setBalls] = useState<Ball[]>(INITIAL_BALLS);
  const ballsRef = useRef<Ball[]>(INITIAL_BALLS);
  const velocitiesRef = useRef<Record<number, { vx: number; vy: number }>>({});
  const dragRef = useRef<DragState>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerSizeRef = useRef({ width: 0, height: 0 });
  const isFlippedRef = useRef(isFlipped);

  const isCompact = frameWidth < 320;
  const rangeProgress = ((frameWidth - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH)) * 100;

  useEffect(() => {
    isFlippedRef.current = isFlipped;
  }, [isFlipped]);

  useEffect(() => {
    ballsRef.current = balls;
  }, [balls]);

  useEffect(() => {
    const base: Record<number, { vx: number; vy: number }> = {};
    INITIAL_BALLS.forEach((ball) => {
      base[ball.id] = { vx: 0, vy: 0 };
    });
    velocitiesRef.current = base;
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateBounds = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      containerSizeRef.current = { width: rect.width, height: rect.height };
      setBalls((prev) => {
        const next = prev.map((ball) => {
          const maxX = Math.max(0, rect.width - ball.size);
          const maxY = Math.max(0, rect.height - ball.size);
          return {
            ...ball,
            x: Math.min(Math.max(ball.x, 0), maxX),
            y: Math.min(Math.max(ball.y, 0), maxY),
          };
        });
        ballsRef.current = next;
        return next;
      });
    };

    updateBounds();

    const observer = new ResizeObserver(updateBounds);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const updateDragPosition = (clientX: number, clientY: number) => {
    if (!dragRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const now = performance.now();
    const drag = dragRef.current;
    const nextX = clientX - rect.left - drag.offsetX;
    const nextY = clientY - rect.top - drag.offsetY;
    const clampedX = Math.max(0, Math.min(nextX, rect.width - drag.size));
    const clampedY = Math.max(0, Math.min(nextY, rect.height - drag.size));

    const dt = Math.max(1, now - drag.lastTime);
    drag.vx = ((clientX - drag.lastX) / dt) * 1000;
    drag.vy = ((clientY - drag.lastY) / dt) * 1000;
    drag.lastX = clientX;
    drag.lastY = clientY;
    drag.lastTime = now;
    drag.targetX = clampedX;
    drag.targetY = clampedY;
  };

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId < 0 || drag.pointerId !== event.pointerId) return;
      updateDragPosition(event.clientX, event.clientY);
    };

    const handleUp = (event: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== event.pointerId) return;
      velocitiesRef.current[drag.id] = { vx: drag.vx, vy: drag.vy };
      dragRef.current = null;
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
    window.addEventListener('pointercancel', handleUp);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
      window.removeEventListener('pointercancel', handleUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== -1) return;
      updateDragPosition(event.clientX, event.clientY);
    };

    const handleMouseUp = () => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== -1) return;
      velocitiesRef.current[drag.id] = { vx: drag.vx, vy: drag.vy };
      dragRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    let rafId = 0;
    let lastTime = performance.now();

    const step = (time: number) => {
      const dt = Math.min(0.033, (time - lastTime) / 1000);
      lastTime = time;

      if (!isFlippedRef.current && !dragRef.current) {
        rafId = window.requestAnimationFrame(step);
        return;
      }

      const { width, height } = containerSizeRef.current;
      if (!width || !height) {
        rafId = window.requestAnimationFrame(step);
        return;
      }

      let changed = false;
      const drag = dragRef.current;
      const next = ballsRef.current.map((ball) => {
        if (drag && drag.id === ball.id) {
          changed = true;
          return { ...ball, x: drag.targetX, y: drag.targetY };
        }

        if (!isFlippedRef.current) {
          return ball;
        }

        const velocity = velocitiesRef.current[ball.id] ?? { vx: 0, vy: 0 };
        let vx = velocity.vx;
        let vy = velocity.vy + GRAVITY * dt;
        let x = ball.x + vx * dt;
        let y = ball.y + vy * dt;

        const maxX = Math.max(0, width - ball.size);
        const maxY = Math.max(0, height - ball.size);

        if (x < 0) {
          x = 0;
          vx = -vx * BOUNCE;
        } else if (x > maxX) {
          x = maxX;
          vx = -vx * BOUNCE;
        }

        if (y < 0) {
          y = 0;
          vy = -vy * BOUNCE;
        } else if (y > maxY) {
          y = maxY;
          vy = -vy * BOUNCE;
        }

        vx *= FRICTION_X;
        vy *= FRICTION_Y;

        velocitiesRef.current[ball.id] = { vx, vy };

        if (Math.abs(vx) > 0.05 || Math.abs(vy) > 0.05) {
          changed = true;
        }

        return { ...ball, x, y };
      });

      if (changed) {
        ballsRef.current = next;
        setBalls(next);
      }

      rafId = window.requestAnimationFrame(step);
    };

    rafId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(rafId);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>, id: number) => {
    if (!containerRef.current) return;
    if (event.pointerType === 'mouse') return;
    event.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const ball = ballsRef.current.find((item) => item.id === id);
    if (!ball) return;

    event.currentTarget.setPointerCapture(event.pointerId);

    dragRef.current = {
      id,
      pointerId: event.pointerId,
      size: ball.size,
      offsetX: event.clientX - rect.left - ball.x,
      offsetY: event.clientY - rect.top - ball.y,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: performance.now(),
      vx: 0,
      vy: 0,
      targetX: ball.x,
      targetY: ball.y,
    };

    velocitiesRef.current[id] = { vx: 0, vy: 0 };
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>, id: number) => {
    if (!containerRef.current) return;
    event.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const ball = ballsRef.current.find((item) => item.id === id);
    if (!ball) return;

    dragRef.current = {
      id,
      pointerId: -1,
      size: ball.size,
      offsetX: event.clientX - rect.left - ball.x,
      offsetY: event.clientY - rect.top - ball.y,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: performance.now(),
      vx: 0,
      vy: 0,
      targetX: ball.x,
      targetY: ball.y,
    };

    velocitiesRef.current[id] = { vx: 0, vy: 0 };
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-[#D14949]/10 p-6 shadow-[0_24px_50px_rgba(209,73,73,0.25)] transition-all duration-300 hover:border-[#FF7A7A]/40 hover:shadow-[0_34px_70px_rgba(209,73,73,0.45)]">
      <div className="pointer-events-none absolute -top-16 right-6 h-24 w-24 rounded-full bg-[#FF7A7A]/20 blur-2xl" />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-[#E6E6E6]">Simulador de layout responsivo</h3>
          <p className="mt-2 text-sm text-[#E6E6E6]/70">
            Demonstra breakpoints, estados e microinterações em tempo real. Arraste o controle ou vire o card para validar o comportamento.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsFlipped((prev) => !prev)}
          className="rounded-full bg-gradient-to-r from-[#FF7A7A] to-[#D14949] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#141414] shadow-[0_12px_28px_rgba(209,73,73,0.45)] transition-transform hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FF7A7A]/70"
          aria-pressed={isFlipped}
        >
          {isFlipped ? 'Voltar' : 'Virar'}
        </button>
      </div>

      <div className="flip-card mt-6 h-[360px] sm:h-[380px]">
        <div className={`flip-card__inner ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="flip-card__face">
            <div className="flex h-full flex-col justify-between gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6E6E6]/60">
                  Largura do layout
                </label>
                <input
                  type="range"
                  min={MIN_WIDTH}
                  max={MAX_WIDTH}
                  value={frameWidth}
                  onChange={(event) => setFrameWidth(Number(event.target.value))}
                  aria-label="Largura do layout"
                  className="layout-range"
                  style={{ '--range-progress': `${rangeProgress}%` } as CSSProperties}
                />
              </div>

              <div className="flex justify-center">
                <div
                  className="rounded-2xl border border-white/10 bg-[#141414]/60 p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-[width] duration-300 ease-out"
                  style={{ width: `${frameWidth}px`, maxWidth: '100%' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="h-2 w-10 rounded-full bg-[#FF7A7A]/80" />
                    <span className="h-2 w-16 rounded-full bg-white/10" />
                  </div>
                  <div
                    className="mt-3 grid gap-2"
                    style={{ gridTemplateColumns: isCompact ? '1fr' : '1.1fr 0.9fr' }}
                  >
                    <div className="rounded-xl bg-white/5 p-3">
                      <div className="h-2 w-3/4 rounded bg-white/15" />
                      <div className="mt-2 h-2 w-full rounded bg-white/10" />
                      <div className="mt-2 h-2 w-2/3 rounded bg-white/10" />
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="h-12 rounded-lg bg-white/10" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="h-5 w-14 rounded-full border border-white/10 bg-white/5" />
                    <span className="h-5 w-16 rounded-full border border-white/10 bg-white/5" />
                    <span className="h-5 w-10 rounded-full border border-white/10 bg-white/5" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-medium tracking-[0.15em] text-[#E6E6E6]/60">
                {['UI/UX', 'Responsivo', 'Performance'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flip-card__face flip-card__back">
            <div className="flex h-full flex-col gap-3">
              <p className="text-sm text-[#E6E6E6]/70">
                Puxe as bolinhas e solte para ver a gravidade em ação.
              </p>
              <div
                ref={containerRef}
                className="relative flex-1 rounded-2xl border border-white/10 bg-[#141414]/60 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] touch-none"
              >
                {balls.map((ball) => (
                  <div
                    key={ball.id}
                    role="button"
                    tabIndex={0}
                    aria-label="Bola interativa"
                    onPointerDown={(event) => handlePointerDown(event, ball.id)}
                    onMouseDown={(event) => handleMouseDown(event, ball.id)}
                    className="absolute left-0 top-0 cursor-grab rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.35)] active:cursor-grabbing touch-none"
                    style={{
                      width: `${ball.size}px`,
                      height: `${ball.size}px`,
                      background: ball.color,
                      transform: `translate3d(${ball.x}px, ${ball.y}px, 0)`,
                    }}
                  />
                ))}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#E6E6E6]/50">
                Dica: arraste e solte para arremessar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsivePreviewCard;
