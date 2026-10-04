import React, { useState, useRef, useEffect, useCallback } from 'react';
import './FlipCard.css';

export interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  axis?: 'x' | 'y';
  flipOnClick?: boolean;
  draggable?: boolean;
  dragDistance?: number;
  tilt?: boolean;
  tiltMax?: number;
  glare?: boolean;
  glareOpacity?: number;
  hoverScale?: number;
  perspective?: number;
  stiffness?: number;
  damping?: number;
  width?: number | string;
  height?: number | string;
  radius?: number;
  background?: string;
  color?: string;
  shadow?: boolean;
  shadowColor?: string;
  shadowOpacity?: number;
  onFlipChange?: (flipped: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  axis = 'y',
  flipOnClick = true,
  draggable = false,
  dragDistance = 0,
  tilt = true,
  tiltMax = 12,
  glare = true,
  glareOpacity = 0.22,
  hoverScale = 1.03,
  perspective = 1100,
  width = 300,
  height = 400,
  radius = 22,
  background = '#27272a',
  color = '#f5f5f5',
  shadow = true,
  shadowColor = '#000000',
  shadowOpacity = 0.45,
  onFlipChange,
  className = '',
  style = {}
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const startPos = useRef<{ x: number; y: number } | null>(null);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => {
      const next = !prev;
      if (onFlipChange) onFlipChange(next);
      return next;
    });
  }, [onFlipChange]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 to 1
    const py = (e.clientY - rect.top) / rect.height; // 0 to 1

    if (tilt) {
      const tiltX = (py - 0.5) * -2 * tiltMax;
      const tiltY = (px - 0.5) * 2 * tiltMax;
      setRotX(tiltX);
      setRotY(tiltY);
    }

    if (glare) {
      setGlarePos({
        x: px * 100,
        y: py * 100,
        opacity: glareOpacity
      });
    }
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggable) {
      startPos.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggable && startPos.current) {
      const dx = Math.abs(e.clientX - startPos.current.x);
      const dy = Math.abs(e.clientY - startPos.current.y);
      if (dx > dragDistance || dy > dragDistance) {
        handleFlip();
      }
      startPos.current = null;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If click happens on a button or link inside, don't flip unless intended
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      return;
    }
    if (flipOnClick && !draggable) {
      handleFlip();
    }
  };

  // Base rotation from flip
  const flipAngle = isFlipped ? 180 : 0;
  const currentRotX = axis === 'x' ? flipAngle + rotX : rotX;
  const currentRotY = axis === 'y' ? flipAngle + rotY : rotY;
  const scale = isHovered ? hoverScale : 1;

  const resolvedWidth = typeof width === 'number' ? `${width}px` : width;
  const resolvedHeight = typeof height === 'number' ? `${height}px` : height;

  const boxShadow = shadow
    ? `0 20px 40px ${shadowColor}${Math.round(shadowOpacity * 255).toString(16).padStart(2, '0')}`
    : 'none';

  return (
    <div
      ref={containerRef}
      className={`flip-card-container ${className}`}
      onClick={handleClick}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      style={{
        width: resolvedWidth,
        height: resolvedHeight,
        perspective: `${perspective}px`,
        cursor: flipOnClick ? 'pointer' : 'default',
        ...style
      }}
    >
      <div
        className={`flip-card-inner ${axis === 'x' ? 'is-flipped-x' : ''}`}
        style={{
          transform: `scale(${scale}) rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`,
          borderRadius: `${radius}px`,
          boxShadow
        }}
      >
        {/* Front Face */}
        <div
          className="flip-card-front"
          style={{
            borderRadius: `${radius}px`,
            backgroundColor: background,
            color
          }}
        >
          {front}
          {glare && (
            <div
              className="flip-card-glare"
              style={{
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 65%)`
              }}
            />
          )}
        </div>

        {/* Back Face */}
        <div
          className="flip-card-back"
          style={{
            borderRadius: `${radius}px`,
            backgroundColor: background,
            color
          }}
        >
          {back}
          {glare && (
            <div
              className="flip-card-glare"
              style={{
                background: `radial-gradient(circle at ${100 - glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 65%)`
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
