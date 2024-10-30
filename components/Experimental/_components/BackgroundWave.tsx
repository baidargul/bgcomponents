"use client";
import React, { useEffect, useState } from "react";

type Props = {
  intensity?: number;
};

const BackgroundWave = ({ intensity = 100 }: Props) => {
  const [leftHeight, setLeftHeight] = useState(200); // starting height
  const [rightHeight, setRightHeight] = useState(200);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const windowCenterX = window.innerWidth / 2;

      const leftSideHeight = 100 + ((windowCenterX - x) / intensity) * 20;
      const rightSideHeight = 100 + ((x - windowCenterX) / intensity) * 20;

      setLeftHeight(leftSideHeight);
      setRightHeight(rightSideHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [intensity]);

  return (
    <div className="flex justify-center items-center z-[-1]">
      <div
        className={`absolute bottom-0 bg-cyan-50 w-full transition-all duration-300 ease-out`}
        style={{
          clipPath: `polygon(0% 100%, 0% ${leftHeight}px, 100% ${rightHeight}px, 100% 100%)`,
          height: Math.max(leftHeight, rightHeight),
          zIndex: -1,
        }}
      ></div>
    </div>
  );
};

export default BackgroundWave;
