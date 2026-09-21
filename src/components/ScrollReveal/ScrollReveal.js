import React, { useEffect, useRef, useState } from 'react';

/**
 * Lightweight, accessible scroll-reveal component using native IntersectionObserver.
 * - Animates once when scrolled into view.
 * - Completely disabled when prefers-reduced-motion is requested.
 * - Zero external library dependencies.
 */
export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    // Graceful fallback if IntersectionObserver is unsupported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''} ${className}`.trim()}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
