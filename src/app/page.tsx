'use client';

import { useEffect, useState } from 'react';
import InkBackground from '@/components/InkBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Works from '@/components/Works';
import Notes from '@/components/Notes';
import Contact from '@/components/Contact';

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <main className="relative bg-paper text-ink">
      <InkBackground />

      {ready && (
        <>
          <Hero />
          <About />
          <Works />
          <Notes />
          <Contact />
        </>
      )}
    </main>
  );
}
