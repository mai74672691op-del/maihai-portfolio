'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const onMouse = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    };
    window.addEventListener('mousemove', onMouse);
    return () => window.removeEventListener('mousemove', onMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper">
      <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
        {/* Subtle ink mark behind name */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(17,17,17,0.015) 0%, transparent 70%)',
            transform: `translate(calc(-50% + ${mousePos.x * 0.3}px), calc(-50% + ${mousePos.y * 0.3}px))`,
            transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        <h1
          className="text-7xl md:text-8xl lg:text-9xl font-serif tracking-[0.08em] mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span className="block font-light tracking-[0.15em] text-grey-ink text-lg md:text-xl mb-6 font-serif-en">
            MAI HAI
          </span>
        </h1>

        <div
          className="space-y-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
          }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-grey-ink font-serif-en">
            Digital Builder
          </p>
          <p className="text-xs tracking-[0.25em] uppercase text-grey-ink/60 font-serif-en">
            AI / Design / Code
          </p>
        </div>

        <div
          className="mt-16"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
          }}
        >
          <p className="text-sm md:text-base italic font-light tracking-wider text-grey-ink/70 font-serif-en">
            Building quiet things with code.
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 1.2s',
          }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-grey-ink/30 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
