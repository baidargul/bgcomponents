"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type Props = {
  intensity?: number;
  imageUrl?: string;
  size?: "small" | "base" | "medium" | "large" | "xlarge";
  className?: string;
};

const WindowImage = (props: Props) => {
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

  let size = "";
  let ringOffset = "";

  switch (props.size) {
    case "small":
      size = "w-[100px] h-[150px]";
      ringOffset = "ring-offset-[8px]";
      break;
    case "base":
      size = "w-[200px] h-[300px]";
      ringOffset = "ring-offset-[14px]";
      break;
    case "medium":
      size = "w-[300px] h-[450px]";
      ringOffset = "ring-offset-[14px]";
      break;
    case "large":
      size = "w-[400px] h-[600px]";
      ringOffset = "ring-offset-[18px]";
      break;
    case "xlarge":
      size = "w-[500px] h-[750px]";
      ringOffset = "ring-offset-[24px]";
      break;
    default:
      size = "w-[300px] h-[450px]";
      ringOffset = "ring-offset-[14px]";
      break;
  }

  return (
    <div
      className={`object-cover my-4 ${size} rounded-full border-transparent ring-[2px] ring-zinc-400 ${ringOffset} overflow-hidden ${
        props.className && props.className
      }`}
    >
      <img
        src={props.imageUrl ? props.imageUrl : "/images/sample.jpg"}
        width={800}
        height={800}
        alt="sampleImage"
        className="object-cover w-full h-full transition-transform duration-300 ease-out select-none pointer-events-none"
        style={{
          transform: `translate(${translateX}, ${translateY})`,
        }}
      />
    </div>
  );
};

export default WindowImage;
