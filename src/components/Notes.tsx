'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const notes = [
  {
    date: '2025 / 12',
    title: 'On Designing with Silence',
    excerpt: 'The best interfaces are not the ones that impress you. They are the ones that leave room for thought. White space is not empty — it is the canvas on which meaning appears.',
    readTime: '3 min read',
  },
  {
    date: '2025 / 10',
    title: 'Why AI Should Ask, Not Tell',
    excerpt: 'We have built machines that answer. The harder, more interesting problem is building machines that question. A good question opens doors; a premature answer closes them.',
    readTime: '5 min read',
  },
  {
    date: '2025 / 08',
    title: 'The Texture of Paper in a Digital World',
    excerpt: 'There is something irreplaceable about grain, about imperfection, about the way ink bleeds into fiber. As screens get sharper, we crave the organic — not nostalgia, but texture.',
    readTime: '4 min read',
  },
];

export default function Notes() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  return (
    <section ref={ref} className="relative bg-paper py-32 md:py-48">
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        <motion.div style={{ opacity: headerOpacity, y: headerY }}>
          <p className="text-xs tracking-[0.35em] uppercase text-grey-ink/50 mb-16 font-serif-en">
            Journal
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-[0.05em] mb-24 font-light">
            NOTES
          </h2>
        </motion.div>

        <div className="space-y-24">
          {notes.map((note, i) => (
            <NoteCard key={note.title} note={note} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NoteCard({
  note,
  index,
}: {
  note: (typeof notes)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity, y }}
      className="group cursor-default border-b border-grey-ink/5 pb-12"
    >
      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <div className="text-xs tracking-[0.2em] text-grey-ink/35 font-serif-en pt-1">
          {note.date}
        </div>
        <div className="space-y-5 max-w-2xl">
          <h3 className="text-xl md:text-2xl font-serif font-light tracking-[0.03em] group-hover:text-grey-ink transition-colors duration-500">
            {note.title}
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-grey-ink/55 font-light tracking-wide">
            {note.excerpt}
          </p>
          <span className="inline-block text-xs tracking-[0.2em] text-grey-ink/30 font-serif-en">
            {note.readTime}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
