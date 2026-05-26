'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [60, 0, 0, -60]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-paper py-32">
      <motion.div style={{ opacity, y }} className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24">
        <p className="text-xs tracking-[0.35em] uppercase text-grey-ink/50 mb-16 font-serif-en">
          Curator&rsquo;s Note
        </p>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-[0.05em] mb-16 font-light">
          ABOUT
        </h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-grey-ink font-light tracking-wide">
              I build at the intersection of artificial intelligence, design, and engineering.
            </p>
          </div>
          <div className="space-y-8">
            <p className="text-base leading-relaxed text-grey-ink/80 font-light tracking-wide">
              Currently exploring how AI transforms the way we create digital experiences.
              My work focuses on building tools that feel both intelligent and human — quiet
              technology that amplifies rather than overwhelms.
            </p>
            <p className="text-base leading-relaxed text-grey-ink/80 font-light tracking-wide">
              Based between Shanghai and the internet. I believe the best interfaces are
              the ones you barely notice.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-grey-ink/10 to-transparent" />
      </motion.div>
    </section>
  );
}
