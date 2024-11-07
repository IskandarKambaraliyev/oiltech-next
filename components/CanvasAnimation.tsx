// components/CanvasAnimation.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";

// Define types for point objects
interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest: Point[];
  active?: number;
}

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const controls: AnimationControls = useAnimation();
  const width = window.innerWidth;
  const height = window.innerHeight;
  const target = { x: width / 2, y: height / 2 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    
    canvas.width = width;
    canvas.height = height;

    // Initialize points with types and calculate closest points
    const generatedPoints: Point[] = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        generatedPoints.push({
          x: px,
          y: py,
          originX: px,
          originY: py,
          closest: [],
        });
      }
    }
    findClosestPoints(generatedPoints);
    setPoints(generatedPoints);

    // Animate each point
    generatedPoints.forEach((p) => shiftPoint(p));

    // Draw the points and lines
    function draw() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      generatedPoints.forEach((p) => {
        drawLines(ctx, p);
        drawPoint(ctx, p);
      });
      requestAnimationFrame(draw);
    }
    draw();

    return () => controls.stop();
  }, [controls]);

  // Function to find and assign the closest points
  function findClosestPoints(points: Point[]) {
    points.forEach((p1) => {
      const distances = points
        .filter((p2) => p1 !== p2)
        .map((p2) => ({ point: p2, dist: getDistance(p1, p2) }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 5); // Take the 5 closest points
      p1.closest = distances.map((item) => item.point);
    });
  }

  // Animation function for each point using Framer Motion
  function shiftPoint(p: Point) {
    controls.start({
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      transition: {
        duration: 1 + Math.random(),
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }

  // Function to draw each point
  function drawPoint(ctx: CanvasRenderingContext2D, p: Point) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI, false);
    ctx.fillStyle = "rgba(156,217,249,0.3)";
    ctx.fill();
  }

  // Function to draw lines between each point and its closest neighbors
  function drawLines(ctx: CanvasRenderingContext2D, p: Point) {
    p.closest.forEach((neighbor) => {
      const distance = getDistance(p, neighbor);
      if (distance < 20000) {
        // Proximity threshold for drawing lines
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(neighbor.x, neighbor.y);
        ctx.strokeStyle = `rgba(156,217,249,${1 - distance / 20000})`;
        ctx.stroke();
      }
    });
  }

  // Utility function to calculate distance
  function getDistance(p1: Point, p2: Point): number {
    return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
  }

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100vh" }} />;
};

export default CanvasAnimation;
