"use client";
import React, { useEffect, useState } from "react";

type Props = {
  size?: number;
  lampWidth: number;
  glowWidth: number;
  intensity?: `${number}%`; // Simplified type for percentages
  glowFallOff?: number;
  glowRange?: `${number}%`;
  color?: [number, number, number]; // RGB array
  glowColor?: [number, number, number];
  flicker?: boolean; // Enable/disable flicker
};

const Lamp: React.FC<Props> = ({
  size = 2,
  lampWidth,
  glowWidth = 100,
  intensity = "0%",
  glowFallOff = 120,
  glowRange = "100%",
  color = [255, 255, 255],
  glowColor = [255, 255, 255],
  flicker = false,
}) => {
  const [opacity, setOpacity] = useState(1);

  const lampColor = `rgba(${color.join(", ")}, 1)`;
  const lampGlowColor = `rgba(${glowColor.join(", ")}, 0.5)`;

  // Generate a random number within a range
  const getRandom = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  // Organic flicker effect
  useEffect(() => {
    if (flicker) {
      let flickerInterval: NodeJS.Timeout;

      const startFlicker = () => {
        setOpacity(getRandom(0.6, 1)); // Randomize opacity between 0.6 and 1
        flickerInterval = setTimeout(startFlicker, getRandom(50, 300)); // Randomize interval between 50ms and 300ms
      };

      startFlicker();
      return () => clearTimeout(flickerInterval);
    }
  }, [flicker]);

  return (
    <div className="w-full flex justify-center items-center relative">
      {/* Top glow */}
      <div
        className="w-[80%] rounded-full absolute top-0 z-10 mix-blend-color-dodge blur-sm"
        style={{
          backgroundColor: lampColor,
          height: `${size}px`,
        }}
      ></div>

      {/* Lamp body and glow */}
      <div
        className={`w-[${lampWidth}px] h-[220px] flex justify-center items-start relative overflow-hidden`}
      >
        {/* Lamp body */}
        <div
          className="w-full rounded-full mx-1"
          style={{
            boxShadow: `0 0 10px ${lampColor}`,
            height: `${size}px`,
            backgroundColor: lampColor,
            opacity, // Apply organic opacity here
          }}
        ></div>

        {/* Wrapper for downward glow */}
        <div
          className="absolute w-[140%] flex justify-center items-center overflow-hidden h-full top-[4px]"
          style={{
            pointerEvents: "none",
            borderRadius: "23%",
          }}
        >
          {/* Downward glow */}
          <div
            className={`absolute h-[${glowFallOff}px] blur-[50px] opacity-50 -top-16 mix-blend-color-dodge`}
            style={{
              background: `radial-gradient(circle at 50% 0, ${lampColor} ${intensity}, ${lampGlowColor} ${glowRange})`,
              width: `${glowWidth}px`,
              borderRadius: "23%",
              opacity, // Apply the same organic opacity to the glow
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Lamp;
