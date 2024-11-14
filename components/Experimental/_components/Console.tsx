"use client";
import React, { useEffect, useState } from "react";

type Props = {};

const Terminal = (props: Props) => {
  return (
    <div>
      <div>
        <div className="py-3 w-full bg-zinc-900 relative flex gap-2 items-center">
          <div className="absolute left-2 z-10 flex gap-2">
            <ControlBoxControl type="close" />
            <ControlBoxControl type="maximize" />
            <ControlBoxControl type="minimize" />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Terminal;

type ControlBoxControlProps = {
  type: "close" | "minimize" | "maximize";
};

const ControlBoxControl = (props: ControlBoxControlProps) => {
  const [color, setColor] = useState("#FF4746");

  useEffect(() => {
    if (props.type === "close") {
      setColor("#FF4746");
    } else if (props.type === "minimize") {
      setColor("#FFD700");
    } else if (props.type === "maximize") {
      setColor("#00FF00");
    }
  }, []);

  return (
    <div
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: color }}
    ></div>
  );
};
