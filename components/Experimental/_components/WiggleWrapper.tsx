"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  shakeAmount?: number;
  duration?: number;
  children: React.ReactNode;
};
const WiggleWrapper = (props: Props) => {
  const { shakeAmount = 3, duration = 0.4, children } = props;
  const wiggleRef = useRef(null);

  useEffect(() => {
    const wiggle = () => {
      if (wiggleRef.current) {
        gsap.to(wiggleRef.current, {
          x: `random(-${shakeAmount}, ${shakeAmount})`,
          y: `random(-${shakeAmount}, ${shakeAmount})`,
          duration: duration,
          onComplete: wiggle,
          ease: "none",
        });
      }
    };

    wiggle();

    return () => {
      if (wiggleRef.current) {
        gsap.killTweensOf(wiggleRef.current);
      }
    };
  }, [shakeAmount, duration]);

  return <div ref={wiggleRef}>{children}</div>;
};

export default WiggleWrapper;
