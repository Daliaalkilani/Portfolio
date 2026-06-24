"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  layer: number;
  idx: number;
  glow: number;
}

interface Pulse {
  srcLayer: number;
  srcIdx: number;
  t: number;
  speed: number;
}

const LAYERS = [3, 5, 6, 5, 3];

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);

      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      nodesRef.current = [];

      LAYERS.forEach((count, li) => {
        const x = (W / (LAYERS.length + 1)) * (li + 1);
        for (let ni = 0; ni < count; ni++) {
          nodesRef.current.push({
            x,
            y: (H / (count + 1)) * (ni + 1),
            layer: li,
            idx: ni,
            glow: Math.random() * Math.PI * 2,
          });
        }
      });
    };

    const addPulse = () => {
      const srcNodes = nodesRef.current.filter((n) => n.layer === 0);
      const src = srcNodes[Math.floor(Math.random() * srcNodes.length)];
      pulsesRef.current.push({
        srcLayer: 0,
        srcIdx: src.idx,
        t: 0,
        speed: 0.007 + Math.random() * 0.005,
      });
    };

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const nodes = nodesRef.current;
      const pulses = pulsesRef.current;

      // Draw connections
      nodes.forEach((a) => {
        nodes
          .filter((b) => b.layer === a.layer + 1)
          .forEach((b) => {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = "rgba(131,56,236,0.08)";
            ctx.lineWidth = 0.6;
            ctx.stroke();
          });
      });

      // Draw pulses
      pulses.forEach((p) => {
        const src = nodes.find(
          (n) => n.layer === p.srcLayer && n.idx === p.srcIdx
        );
        const dsts = nodes.filter((n) => n.layer === p.srcLayer + 1);
        if (!src || !dsts.length) return;

        dsts.forEach((dst) => {
          const px = src.x + (dst.x - src.x) * p.t;
          const py = src.y + (dst.y - src.y) * p.t;
          const grad = ctx.createRadialGradient(px, py, 0, px, py, 5);
          grad.addColorStop(0, "rgba(203,166,247,0.9)");
          grad.addColorStop(1, "rgba(203,166,247,0)");
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        });

        p.t += p.speed;
        if (p.t >= 1) {
          p.srcLayer++;
          p.t = 0;
          const nextNodes = nodes.filter((n) => n.layer === p.srcLayer);
          if (nextNodes.length)
            p.srcIdx =
              nextNodes[Math.floor(Math.random() * nextNodes.length)].idx;
        }
        if (p.srcLayer >= LAYERS.length - 1) p.t = 999;
      });

      pulsesRef.current = pulses.filter((p) => p.t < 999);

      // Draw nodes
      nodes.forEach((n) => {
        n.glow = (n.glow + 0.012) % (Math.PI * 2);
        const alpha = 0.3 + Math.sin(n.glow) * 0.25;
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 8);
        grad.addColorStop(0, `rgba(203,166,247,${alpha})`);
        grad.addColorStop(1, "rgba(131,56,236,0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(203,166,247,${alpha + 0.2})`;
        ctx.fill();
      });

      if (Math.random() < 0.025) addPulse();
      animRef.current = requestAnimationFrame(draw);
    };

    setup();
    addPulse();
    addPulse();
    draw();

    const onResize = () => setup();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
    />
  );
}
