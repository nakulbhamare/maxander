import React from 'react';
import './LogoLoop.css';

export interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
  id?: string | number;
  ariaLabel?: string;
  [key: string]: any;
}

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // Speed factor / px per second (higher is faster, e.g. 100)
  direction?: 'left' | 'right' | 'up' | 'down';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number; // Speed when hovered (0 to pause)
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  renderItem?: (item: LogoItem, index: number) => React.ReactNode;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos = [],
  speed = 100,
  direction = 'left',
  logoHeight = 40,
  gap = 36,
  hoverSpeed = 0,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = '#0A0C11',
  ariaLabel = 'Technology partners and integrations',
  className = '',
  style = {},
  renderItem
}) => {
  if (!logos || logos.length === 0) return null;

  // Calculate duration from speed factor
  // Base speed: 100px/s => duration = total estimated width/height / speed
  const baseDurationSeconds = Math.max(10, Math.round(3000 / Math.max(10, speed)));
  const hoverDurationSeconds = hoverSpeed > 0 ? Math.max(10, Math.round(3000 / hoverSpeed)) : baseDurationSeconds;
  const hoverPlayState = hoverSpeed === 0 ? 'paused' : 'running';

  const isVertical = direction === 'up' || direction === 'down';

  const customStyle: React.CSSProperties & Record<string, string | number> = {
    '--loop-duration': `${baseDurationSeconds}s`,
    '--loop-hover-duration': `${hoverDurationSeconds}s`,
    '--loop-hover-play-state': hoverPlayState,
    '--fade-color': fadeOutColor,
    gap: `${gap}px`,
    ...style
  };

  const renderSingleItem = (item: LogoItem, idx: number, trackId: string) => {
    const key = `${trackId}-${item.id || idx}-${item.title || item.alt || idx}`;

    if (renderItem) {
      return (
        <div
          key={key}
          className={`logo-loop-item ${scaleOnHover ? 'scale-hover' : ''}`}
          style={{ height: `${logoHeight}px`, margin: isVertical ? `${gap / 2}px 0` : `0 ${gap / 2}px` }}
        >
          {renderItem(item, idx)}
        </div>
      );
    }

    const content = (
      <>
        {item.node ? (
          <div className="flex items-center justify-center text-current" style={{ fontSize: `${Math.round(logoHeight * 0.7)}px` }}>
            {item.node}
          </div>
        ) : item.src ? (
          <img
            src={item.src}
            alt={item.alt || item.title || 'Logo'}
            style={{ height: `${logoHeight}px`, width: 'auto', objectFit: 'contain' }}
            loading="lazy"
          />
        ) : (
          <span className="font-semibold text-sm">{item.title}</span>
        )}
        {item.title && item.node && (
          <span className="ml-2 text-xs font-medium tracking-tight whitespace-nowrap">{item.title}</span>
        )}
      </>
    );

    if (item.href) {
      return (
        <a
          key={key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.title || item.alt}
          className={`logo-loop-item ${scaleOnHover ? 'scale-hover' : ''} text-[#828B9E] hover:text-[#F4F2ED] transition-colors`}
          style={{ height: `${logoHeight}px`, margin: isVertical ? `${gap / 2}px 0` : `0 ${gap / 2}px` }}
        >
          {content}
        </a>
      );
    }

    return (
      <div
        key={key}
        className={`logo-loop-item ${scaleOnHover ? 'scale-hover' : ''} text-[#828B9E] hover:text-[#F4F2ED] transition-colors`}
        style={{ height: `${logoHeight}px`, margin: isVertical ? `${gap / 2}px 0` : `0 ${gap / 2}px` }}
      >
        {content}
      </div>
    );
  };

  // Duplicate the list 2-3 times to ensure infinite smooth marquee without gaps
  const copies = [0, 1, 2];

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={`logo-loop-container direction-${direction} ${className}`}
      style={customStyle}
    >
      {/* Edge Fade Gradients */}
      {fadeOut && !isVertical && (
        <>
          <div className="logo-loop-fade-left" />
          <div className="logo-loop-fade-right" />
        </>
      )}
      {fadeOut && isVertical && (
        <>
          <div className="logo-loop-fade-top" />
          <div className="logo-loop-fade-bottom" />
        </>
      )}

      {/* Repeating Tracks for seamless infinite loop */}
      {copies.map((copyIdx) => (
        <div
          key={`track-${copyIdx}`}
          className="logo-loop-track"
          aria-hidden={copyIdx > 0}
          style={{
            marginRight: !isVertical ? `${gap}px` : undefined,
            marginBottom: isVertical ? `${gap}px` : undefined
          }}
        >
          {logos.map((item, idx) => renderSingleItem(item, idx, `t${copyIdx}`))}
        </div>
      ))}
    </div>
  );
};

export default LogoLoop;
