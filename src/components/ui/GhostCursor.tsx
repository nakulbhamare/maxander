import React, { useRef, useEffect } from 'react';
import './GhostCursor.css';

export interface GhostCursorProps {
  color?: string;
  brightness?: number;
  edgeIntensity?: number;
  trailLength?: number;
  inertia?: number;
  grainIntensity?: number;
  bloomStrength?: number;
  bloomRadius?: number;
  bloomThreshold?: number;
  fadeDelayMs?: number;
  fadeDurationMs?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const GhostCursor: React.FC<GhostCursorProps> = ({
  color = '#B497CF',
  brightness = 1,
  edgeIntensity = 0,
  trailLength = 50,
  inertia = 0.5,
  grainIntensity = 0.05,
  bloomStrength = 0.1,
  bloomRadius = 1.0,
  bloomThreshold = 0.025,
  fadeDelayMs = 1000,
  fadeDurationMs = 1500,
  className = '',
  style = {}
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let width = 0;
    let height = 0;

    const points: Array<{ x: number; y: number; age: number; speed: number }> = [];
    let target = { x: -1000, y: -1000 };
    let current = { x: -1000, y: -1000 };
    let lastMoveTime = performance.now();
    let isInside = false;

    const parseColor = (col: string) => {
      if (col.startsWith('#')) {
        const c = col.substring(1);
        const num = parseInt(c.length === 3 ? c.split('').map((x) => x + x).join('') : c, 16);
        return {
          r: (num >> 16) & 255,
          g: (num >> 8) & 255,
          b: num & 255
        };
      }
      return { r: 180, g: 151, b: 207 };
    };

    const rgb = parseColor(color);

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() || canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) {
      ro.observe(canvas.parentElement);
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      lastMoveTime = performance.now();
      isInside = true;
    };

    const onPointerLeave = () => {
      isInside = false;
    };

    const parent = canvas.parentElement || canvas;
    parent.addEventListener('pointermove', onPointerMove as EventListener);
    parent.addEventListener('pointerleave', onPointerLeave as EventListener);

    let lastTime = performance.now();

    const render = (now: number) => {
      rafId = requestAnimationFrame(render);
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      const idleDuration = now - lastMoveTime;
      let globalFade = 1;
      if (idleDuration > fadeDelayMs) {
        globalFade = Math.max(0, 1 - (idleDuration - fadeDelayMs) / fadeDurationMs);
      }

      if (globalFade <= 0.001) {
        points.length = 0;
        return;
      }

      // Physics interpolation for smooth inertia
      const ease = 1 - Math.pow(inertia, dt * 60);
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;

      const dist = Math.hypot(target.x - current.x, target.y - current.y);
      const speed = Math.min(dist / 10, 4);

      if (isInside && current.x > -500) {
        points.unshift({ x: current.x, y: current.y, age: 0, speed });
      }

      while (points.length > trailLength) {
        points.pop();
      }

      if (points.length < 2) return;

      // Update point ages
      for (let i = 0; i < points.length; i++) {
        points[i].age += dt;
      }

      // Draw ghost ribbon / trail
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Multiple passes for bloom / soft glow
      const passes = [
        { widthMult: bloomRadius * 18, alphaMult: bloomStrength * 0.4 },
        { widthMult: bloomRadius * 8, alphaMult: bloomStrength * 0.7 },
        { widthMult: 3, alphaMult: brightness }
      ];

      passes.forEach((pass) => {
        ctx.beginPath();
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const progress = 1 - i / points.length;
          const alpha = progress * pass.alphaMult * globalFade;

          if (i === 0) {
            ctx.moveTo(p1.x, p1.y);
          } else {
            const xc = (p1.x + p2.x) / 2;
            const yc = (p1.y + p2.y) / 2;
            ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
          }

          ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.min(1, alpha)})`;
          ctx.lineWidth = Math.max(1, (pass.widthMult * progress + p1.speed * 1.5));
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(p2.x, p2.y);
        }
      });

      // Leading ethereal glow point
      if (points.length > 0 && isInside) {
        const p0 = points[0];
        const radial = ctx.createRadialGradient(p0.x, p0.y, 0, p0.x, p0.y, 25 * bloomRadius);
        radial.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.8 * brightness * globalFade})`);
        radial.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.3 * bloomStrength * globalFade})`);
        radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(p0.x, p0.y, 25 * bloomRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      parent.removeEventListener('pointermove', onPointerMove as EventListener);
      parent.removeEventListener('pointerleave', onPointerLeave as EventListener);
    };
  }, [
    color,
    brightness,
    edgeIntensity,
    trailLength,
    inertia,
    grainIntensity,
    bloomStrength,
    bloomRadius,
    bloomThreshold,
    fadeDelayMs,
    fadeDurationMs
  ]);

  return <canvas ref={canvasRef} className={`ghost-cursor-canvas ${className}`} style={style} />;
};

export default GhostCursor;
