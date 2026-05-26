'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'Silk Graph',
    subtitle: 'AI-Native Knowledge Mapping',
    description: 'A tool that visualizes connections between ideas using language models. Like spreading ink on paper, each node ripples outward to reveal hidden relationships.',
    tags: ['Next.js', 'AI', 'Graph Visualization'],
    accent: '#9F2E25',
  },
  {
    title: 'Paper Plane',
    subtitle: 'Minimalist Writing Environment',
    description: 'A distraction-free writing space where words breathe. Designed for thinkers who need clarity — no toolbars, no formatting, just text and white space.',
    tags: ['Design', 'React', 'Typography'],
    accent: '#5B5B5B',
  },
  {
    title: 'Quiet Mirror',
    subtitle: 'Reflective AI Journal',
    description: 'An AI companion that asks better questions than it gives answers. Built on the philosophy that technology should help us think, not think for us.',
    tags: ['AI', 'UX Research', 'Product Design'],
    accent: '#111111',
  },
];

export default function Works() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} className="relative bg-paper py-32 md:py-48">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        <p className="text-xs tracking-[0.35em] uppercase text-grey-ink/50 mb-16 font-serif-en">
          Selected Works
        </p>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-[0.05em] mb-24 font-light">
          WORKS
        </h2>

        <div className="space-y-48 md:space-y-64">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 1], [0, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.25, 1], [80, 0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 1], [0.95, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="group cursor-default"
    >
      {/* Number */}
      <div className="mb-8">
        <span className="text-xs tracking-[0.3em] text-grey-ink/30 font-serif-en">
          {(index + 1).toString().padStart(2, '0')}
        </span>
      </div>

      {/* Ink reveal area on hover */}
      <div className="relative">
        {/* Background plate that appears on hover */}
        <div
          className="absolute -inset-8 md:-inset-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 rounded-sm"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${project.accent}08 0%, transparent 70%)`,
          }}
        />

        <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-[0.04em] mb-4 group-hover:text-ink transition-colors duration-700">
              {project.title}
            </h3>
            <p className="text-sm tracking-[0.2em] uppercase text-grey-ink/50 mb-8 font-serif-en">
              {project.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-grey-ink/70 font-light tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-2 group-hover:translate-y-0">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-[0.15em] px-3 py-1.5 border border-grey-ink/10 text-grey-ink/50 font-serif-en"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 h-px bg-gradient-to-r from-grey-ink/15 via-grey-ink/05 to-transparent group-hover:from-grey-ink/20 transition-colors duration-700" />
      </div>
    </motion.div>
  );
}
