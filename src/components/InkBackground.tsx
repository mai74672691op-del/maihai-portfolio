'use client';

import { useEffect, useRef } from 'react';

export default function InkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const blobsRef = useRef<Array<{ x: number; y: number; r: number; vx: number; vy: number; opacity: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    // Create initial ink blobs
    const blobs: typeof blobsRef.current = [];
    for (let i = 0; i < 8; i++) {
      blobs.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 120 + Math.random() * 300,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        opacity: 0.015 + Math.random() * 0.025,
      });
    }
    blobsRef.current = blobs;

    const drawInkBlob = (blob: (typeof blobs)[0]) => {
      if (!ctx) return;
      const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
      gradient.addColorStop(0, `rgba(17, 17, 17, ${blob.opacity * 1.4})`);
      gradient.addColorStop(0.3, `rgba(17, 17, 17, ${blob.opacity})`);
      gradient.addColorStop(0.6, `rgba(17, 17, 17, ${blob.opacity * 0.4})`);
      gradient.addColorStop(1, 'rgba(17, 17, 17, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      blobs.forEach((blob) => {
        // Slow drift + mouse influence
        const mx = (mouseRef.current.x - 0.5) * 40;
        const my = (mouseRef.current.y - 0.5) * 40;
        blob.x += blob.vx + mx * 0.005;
        blob.y += blob.vy + my * 0.005;

        // Bounce off edges
        if (blob.x < -blob.r) blob.x = w + blob.r;
        if (blob.x > w + blob.r) blob.x = -blob.r;
        if (blob.y < -blob.r) blob.y = h + blob.r;
        if (blob.y > h + blob.r) blob.y = -blob.r;

        drawInkBlob(blob);
      });

      animFrame = requestAnimationFrame(animate);
    };

    animate();

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / w, y: e.clientY / h };
    };
    window.addEventListener('mousemove', onMouse);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
