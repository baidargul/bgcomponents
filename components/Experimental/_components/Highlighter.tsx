"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  height?: number;
  className?: string;
};

gsap.registerPlugin(ScrollTrigger);

const Highlighter = ({ children, height = 40, className = `` }: Props) => {
  useEffect(() => {
    // Start the animation only when scrolling over the component
    gsap.to("#highlighter", {
      scrollTrigger: {
        trigger: "#highlighter", // Element that triggers the animation
        start: "top bottom", // Start when the top of highlighter enters the bottom of viewport
        end: "bottom top", // End when the bottom of highlighter leaves the top of viewport
        toggleActions: "play none none none", // Play the animation once on entering
        scrub: 1, // Smooth scrubbing as you scroll
      },
      width: "100%",
      duration: 1,
      ease: "none",
      //   repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="relative">
      <div
        id="highlighter"
        className={`absolute bg-green-200 -skew-y-[3px] left-0  ${
          className && className
        }`}
        style={{ zIndex: 1, height: `${height}px`, width: "0%" }} // Start at 0% width
      ></div>
      <div className="relative px-1" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default Highlighter;
