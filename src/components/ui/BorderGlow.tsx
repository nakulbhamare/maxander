import React, { useState, useRef, useEffect } from 'react';
import './BorderGlow.css';

export interface BorderGlowProps {
  children?: React.ReactNode;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  className?: string;
  style?: React.CSSProperties;
}

export const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  edgeSensitivity = 30,
  glowColor,
  backgroundColor = '#120F17',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1.0,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; active: boolean; nearEdge: boolean }>({
    x: 0,
    y: 0,
    active: false,
    nearEdge: false
  });
  const [animAngle, setAnimAngle] = useState(0);

  useEffect(() => {
    if (!animated) return;
    let rafId: number;
    const loop = () => {
      setAnimAngle((prev) => (prev + 1.2) % 360);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [animated]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check distance to edges
    const distToLeft = x;
    const distToRight = rect.width - x;
    const distToTop = y;
    const distToBottom = rect.height - y;
    const minEdgeDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);

    const nearEdge = minEdgeDist <= edgeSensitivity || edgeSensitivity <= 0;

    setMousePos({
      x,
      y,
      active: true,
      nearEdge
    });
  };

  const handlePointerLeave = () => {
    setMousePos((prev) => ({
      ...prev,
      active: false,
      nearEdge: false
    }));
  };

  // Build the gradient colors
  const gradientColors = colors.length > 0 ? colors.join(', ') : '#c084fc, #f472b6, #38bdf8';
  const effectiveGlowOpacity = mousePos.active ? (mousePos.nearEdge ? glowIntensity : glowIntensity * 0.4) : 0;

  return (
    <div
      ref={containerRef}
      className={`border-glow-wrapper ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        borderRadius: `${borderRadius}px`,
        backgroundColor,
        padding: '1px', // 1px border track for glow to shine through
        ...style
      }}
    >
      {/* Dynamic Cursor-following Glow Filter / Gradient Layer */}
      <div
        className="border-glow-gradient"
        style={{
          opacity: effectiveGlowOpacity,
          background: animated
            ? `conic-gradient(from ${animAngle}deg, ${gradientColors}, ${colors[0] || '#c084fc'})`
            : `radial-gradient(circle ${glowRadius * 2}px at ${mousePos.x}px ${mousePos.y}px, ${colors[0] || '#D6A856'} 0%, ${colors[1] || '#ECC67A'} 35%, transparent 70%)`,
          filter: `drop-shadow(0 0 ${glowRadius / 2}px ${colors[0] || '#D6A856'})`
        }}
      />

      {/* Inner Container with Background */}
      <div
        className="border-glow-inner"
        style={{
          borderRadius: `${Math.max(0, borderRadius - 1)}px`,
          backgroundColor
        }}
      >
        {children}
      </div>

      {/* Subtle border outline */}
      <div
        className="border-glow-border"
        style={{
          borderColor: mousePos.nearEdge ? 'rgba(214, 168, 86, 0.35)' : 'rgba(255, 255, 255, 0.07)'
        }}
      />
    </div>
  );
};

export default BorderGlow;
