"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./style.css";

type Props = {
  intensity?: number;
  imageUrl?: string;
};

const WindowImage = (props: Props) => {
  const [translateX, setTranslateX] = useState("0px");
  const [translateY, setTranslateY] = useState("0px");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;

      const threshold = props.intensity ? props.intensity : 120;

      setTranslateX(`${x / threshold}px`);
      setTranslateY(`${y / threshold}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="object-cover w-[300px] h-[450px] rounded-full border-transparent ring-[2px] ring-zinc-400 ring-offset-[14px] overflow-hidden">
      <Image
        src={props.imageUrl ? props.imageUrl : "/images/sample.jpg"}
        width={800}
        height={800}
        quality={100}
        alt="sampleImage"
        className="object-cover w-full h-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${translateX}, ${translateY})`,
        }}
      />
    </div>
  );
};

export default WindowImage;
