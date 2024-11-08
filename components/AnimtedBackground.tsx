"use client";
import { useEffect, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
  originX?: number;
  originY?: number;
  closest?: Point[];
  active?: number;
};

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const points = useRef<Point[]>([]);
  const target = useRef({
    x: 0,
    y: 0,
  });
  const animateHeader = useRef(true);

  const initHeader = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Create points only once to prevent recalculation on resize
    if (points.current.length === 0) {
      for (let x = 0; x < canvasWidth; x += canvasWidth / 20) {
        for (let y = 0; y < canvasHeight; y += canvasHeight / 20) {
          const px = x + (Math.random() * canvasWidth) / 20;
          const py = y + (Math.random() * canvasHeight) / 20;
          const p: Point = { x: px, y: py, originX: px, originY: py };
          points.current.push(p);
        }
      }

      // Find the 5 closest points for each point
      points.current.forEach((p1) => {
        const closest: Point[] = [];
        points.current.forEach((p2) => {
          if (p1 !== p2) {
            closest.push(p2);
            closest.sort((a, b) => getDistance(p1, a) - getDistance(p1, b));
            if (closest.length > 5) closest.pop();
          }
        });
        p1.closest = closest;
      });
    }
  };

  const addListeners = () => {
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("resize", resize);
  };

  const mouseMove = (e: MouseEvent) => {
    const y = window.scrollY;
    target.current = { x: e.pageX, y: e.pageY - y };
  };

  const resize = () => {
    initHeader();
  };

  const getDistance = (p1: Point, p2: Point) => {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    points.current.forEach((p) => {
      const distance = getDistance(target.current, p);
      if (distance < 4000) p.active = 0.3;
      else if (distance < 20000) p.active = 0.1;
      else if (distance < 40000) p.active = 0.05;
      else if (distance < 100000) p.active = 0.02;
      else p.active = 0;

      if (p.active) drawLines(ctx, p);
      if (p.active) drawCircle(ctx, p);
    });

    requestAnimationFrame(animate);
  };

  const drawLines = (ctx: CanvasRenderingContext2D, p: Point) => {
    if (!p.closest) return;

    ctx.beginPath();
    p.closest.forEach((c) => {
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(c.x, c.y);
      ctx.strokeStyle = `rgba(0,198,183,${p.active ? p.active * 0.2 : 0})`;
      ctx.stroke();
    });
  };

  const drawCircle = (ctx: CanvasRenderingContext2D, p: Point) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(0,198,183,${p.active ? p.active * 0.7 : 0})`;
    ctx.fill();
  };

  useEffect(() => {
    initHeader();
    addListeners();
    animate();
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      id="large-header"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        id="demo-canvas"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
