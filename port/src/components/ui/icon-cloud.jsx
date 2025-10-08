"use client";

import { useEffect, useRef, useState } from "react";

export function IconCloud({ images }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current || !images || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const container = containerRef.current;

    // Set canvas size
    const updateSize = () => {
      const size = Math.min(container.offsetWidth, 600);
      canvas.width = size;
      canvas.height = size;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Icon cloud state - distribute icons evenly on a sphere using Fibonacci sphere algorithm
    const icons = images.map((src, i) => {
      const img = new Image();
      img.src = src;
      img.crossOrigin = "anonymous";
      
      // Extract skill name from URL
      const skillName = src.split('/').pop().replace(/-/g, ' ');
      
      // Fibonacci sphere algorithm for even distribution
      const phi = Math.acos(1 - 2 * (i + 0.5) / images.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      
      const radius = 0.8;
      
      return {
        img,
        name: skillName,
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        size: 40,
        loaded: false,
      };
    });

    icons.forEach(icon => {
      icon.img.onload = () => {
        icon.loaded = true;
      };
    });

    let rotation = 0;
    const rotationSpeed = 0.002;

    // Mouse move handler for hover detection
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = canvas.width * 0.4;
      
      let foundHover = null;
      
      for (const icon of icons) {
        if (!icon.loaded) continue;
        
        const x = icon.x * Math.cos(rotation) + icon.z * Math.sin(rotation);
        const z = icon.z * Math.cos(rotation) - icon.x * Math.sin(rotation);
        const y = icon.y;
        
        const perspective = 2;
        const projectedScale = perspective / (perspective + z);
        const projectedX = x * scale * projectedScale + centerX;
        const projectedY = y * scale * projectedScale + centerY;
        const projectedSize = icon.size * projectedScale;
        
        const distance = Math.sqrt(
          Math.pow(mouseX - projectedX, 2) + Math.pow(mouseY - projectedY, 2)
        );
        
        if (distance < projectedSize / 2) {
          foundHover = {
            name: icon.name,
            x: e.clientX,
            y: e.clientY
          };
          break;
        }
      }
      
      if (foundHover) {
        setHoveredSkill(foundHover.name);
        setTooltipPos({ x: foundHover.x, y: foundHover.y });
        canvas.style.cursor = 'pointer';
      } else {
        setHoveredSkill(null);
        canvas.style.cursor = 'default';
      }
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', () => {
      setHoveredSkill(null);
      canvas.style.cursor = 'default';
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      rotation += rotationSpeed;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = canvas.width * 0.4;

      // Sort icons by z-index for proper layering
      const sortedIcons = [...icons].sort((a, b) => {
        const az = a.z * Math.cos(rotation) - a.x * Math.sin(rotation);
        const bz = b.z * Math.cos(rotation) - b.x * Math.sin(rotation);
        return az - bz;
      });

      sortedIcons.forEach(icon => {
        if (!icon.loaded) return;

        // Rotate around Y axis
        const x = icon.x * Math.cos(rotation) + icon.z * Math.sin(rotation);
        const z = icon.z * Math.cos(rotation) - icon.x * Math.sin(rotation);
        const y = icon.y;

        // Perspective projection
        const perspective = 2;
        const projectedScale = perspective / (perspective + z);
        const projectedX = x * scale * projectedScale + centerX;
        const projectedY = y * scale * projectedScale + centerY;
        const projectedSize = icon.size * projectedScale;

        // Opacity based on z-position
        const opacity = (z + 1) / 2 * 0.6 + 0.4;
        ctx.globalAlpha = opacity;

        // Draw icon
        ctx.drawImage(
          icon.img,
          projectedX - projectedSize / 2,
          projectedY - projectedSize / 2,
          projectedSize,
          projectedSize
        );
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [images]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center relative">
      <canvas ref={canvasRef} className="max-w-full" />
      {hoveredSkill && (
        <div
          className="fixed z-50 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg pointer-events-none capitalize"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y - 40}px`,
            transform: 'translateX(-50%)',
          }}
        >
          {hoveredSkill}
        </div>
      )}
    </div>
  );
}
