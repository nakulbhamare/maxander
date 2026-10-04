import React, { useState, useRef, useEffect } from 'react';
import './DepthText.css';

export interface DepthTextProps {
  text: string;
  layers?: number;
  depth?: number;
  faceColor?: string;
  depthColor?: string;
  tilt?: number;
  pointerTracking?: boolean;
  smoothing?: number;
  perspective?: number;
  autoOrbit?: boolean;
  orbitSpeed?: number;
  fontSize?: string;
  fontWeight?: number | string;
  shadow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const DepthText: React.FC<DepthTextProps> = ({
  text,
  layers = 34,
  depth = 2.4,
  faceColor = '#f8fafc',
  depthColor = '#7c3aed',
  tilt = 7.5,
  pointerTracking = true,
  smoothing = 0.14,
  perspective = 900,
  autoOrbit = false,
  orbitSpeed = 0.35,
  fontSize = 'clamp(2rem, 5vw, 4rem)',
  fontWeight = 900,
  shadow = true,
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);

  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    let startTime = performance.now();

    const handlePointerMove = (e: MouseEvent) => {
      if (!pointerTracking || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / (window.innerWidth / 2);
      const ny = (e.clientY - cy) / (window.innerHeight / 2);
      targetRot.current.y = nx * tilt;
      targetRot.current.x = -ny * tilt;
    };

    if (pointerTracking) {
      window.addEventListener('mousemove', handlePointerMove);
    }

    const loop = (now: number) => {
      rafId = requestAnimationFrame(loop);
      const t = (now - startTime) / 1000;

      if (autoOrbit) {
        targetRot.current.y = Math.sin(t * orbitSpeed * Math.PI) * tilt * 1.5;
        targetRot.current.x = Math.cos(t * orbitSpeed * Math.PI * 0.7) * (tilt * 0.8);
      }

      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * smoothing;
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * smoothing;

      setRotX(currentRot.current.x);
      setRotY(currentRot.current.y);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      if (pointerTracking) {
        window.removeEventListener('mousemove', handlePointerMove);
      }
    };
  }, [pointerTracking, autoOrbit, orbitSpeed, tilt, smoothing]);

  // Generate depth layers along -Z axis
  const layerElements = [];
  for (let i = 1; i <= layers; i++) {
    const progress = i / layers;
    const zOffset = -i * (depth / layers) * 15;
    const opacity = 1 - progress * 0.65;
    layerElements.push(
      <span
        key={i}
        aria-hidden="true"
        className="depth-text-layer"
        style={{
          transform: `translateZ(${zOffset}px)`,
          color: depthColor,
          opacity,
          filter: shadow && i === layers ? 'drop-shadow(0 20px 25px rgba(0,0,0,0.5))' : undefined
        }}
      >
        {text}
      </span>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`depth-text-container ${className}`}
      style={{
        perspective: `${perspective}px`,
        fontSize,
        fontWeight,
        ...style
      }}
    >
      <div
        className="depth-text-inner"
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <span
          className="depth-text-face"
          style={{
            color: faceColor,
            transform: 'translateZ(0px)'
          }}
        >
          {text}
        </span>
        {layerElements}
      </div>
    </div>
  );
};

export default DepthText;
