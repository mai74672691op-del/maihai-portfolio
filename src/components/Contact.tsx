'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [60, 0, -30]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-paper py-32"
    >
      <motion.div style={{ opacity, y }} className="text-center px-8 max-w-2xl mx-auto">
        {/* Signature / seal mark */}
        <div className="mb-20 flex justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full relative flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(159,46,37,0.06) 0%, rgba(159,46,37,0.02) 50%, transparent 70%)',
            }}
          >
            <span className="text-cinnabar/20 text-4xl md:text-5xl font-serif leading-none select-none">印</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-[0.05em] mb-10">
          If our ideas resonate.
        </h2>

        <p className="text-sm md:text-base text-grey-ink/50 font-light tracking-wide mb-16 leading-relaxed">
          I am always open to conversations about design, AI, and the future of digital experiences.
        </p>

        <a
          href="mailto:hello@maihai.dev"
          className="group inline-flex items-center gap-3 text-grey-ink/60 hover:text-grey-ink/90 transition-colors duration-700"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-serif-en">Get in touch</span>
          <span className="block w-12 h-px bg-grey-ink/20 group-hover:w-20 group-hover:bg-grey-ink/40 transition-all duration-700" />
        </a>

        {/* Footer */}
        <div className="mt-32 space-y-4">
          <p className="text-xs tracking-[0.25em] text-grey-ink/25 font-serif-en">
            &copy; {new Date().getFullYear()} MAI HAI
          </p>
          <p className="text-xs tracking-[0.2em] text-grey-ink/15 font-serif-en">
            Building quiet things with code.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
