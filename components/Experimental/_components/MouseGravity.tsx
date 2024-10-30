"use client";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  intensity?: number;
};

const MouseGravity = (props: Props) => {
  const [translateX, setTranslateX] = useState("0px");
  const [translateY, setTranslateY] = useState("0px");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;

      const threshold = props.intensity || 120;

      setTranslateX(`${x / threshold}px`);
      setTranslateY(`${y / threshold}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translate(${translateX}, ${translateY})`,
      }}
    >
      {props.children}
    </div>
  );
};

export default MouseGravity;
