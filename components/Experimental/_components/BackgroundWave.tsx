"use client";
import React, { useEffect, useState } from "react";

type Props = {
  intensity?: number;
  color?: string;
  waveHeightResistance?: number;
};

const BackgroundWave = ({
  intensity = 100,
  color = "bg-cyan-50",
  waveHeightResistance = 200,
}: Props) => {
  const [leftHeight, setLeftHeight] = useState(300); // Initial top height
  const [rightHeight, setRightHeight] = useState(300);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const windowCenterX = window.innerWidth / 2;

      // Adjust heights based on mouse movement
      const leftSideHeight = 300 + ((windowCenterX - x) / intensity) * 20;
      const rightSideHeight = 300 + ((x - windowCenterX) / intensity) * 20;

      setLeftHeight(leftSideHeight);
      setRightHeight(rightSideHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [intensity]);

  const waveRes = `calc(100vh - ${waveHeightResistance}px)`;

  return (
    <div className="flex justify-center items-center">
      <div
        className={`absolute bottom-0 ${color} w-full transition-all duration-300 ease-out`}
        style={{
          clipPath: `polygon(0% 100%, 0% ${leftHeight}px, 100% ${rightHeight}px, 100% 100%)`,
          height: waveRes, // Larger base height for a taller wave bottom
          minHeight: Math.max(leftHeight, rightHeight, 500), // Minimum height to ensure enough bottom coverage
          zIndex: -1,
        }}
      ></div>
    </div>
  );
};

export default BackgroundWave;
