'use client';

import { useEffect, useRef } from 'react';

export default function GlassCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const move = (e: PointerEvent) => {
      // position the cursor - subtract radius (10px)
      el.style.transform = `translate3d(${e.clientX - 60}px, ${e.clientY - 60}px, 0)`;
    };

    window.addEventListener('pointermove', move);

    return () => {
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return <div ref={cursorRef} className="glass cursor-glass"></div>;
} 