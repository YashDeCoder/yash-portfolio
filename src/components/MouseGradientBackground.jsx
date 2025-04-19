"use client";

import { useState, useEffect } from "react";

export default function MouseGradientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientX = windowSize.width
    ? (mousePosition.x / windowSize.width) * 100
    : 50;
  const gradientY = windowSize.height
    ? (mousePosition.y / windowSize.height) * 100
    : 50;

  return (
    <div
      className="fixed inset-0 w-full h-full -z-10 transition-all duration-300 ease-out"
      style={{
        backgroundColor: "#171717",
        backgroundImage: `radial-gradient(circle at ${gradientX}% ${gradientY}%, 
                          rgba(255, 255, 255, 0.25) 0%, 
                          rgba(255, 255, 255, 0.1) 20%, 
                          transparent 45%)`,
      }}
    />
  );
}
