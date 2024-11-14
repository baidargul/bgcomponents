import React from "react";

type Props = {
  size?: number;
  lampWidth: number;
  glowWidth: number;
  intensity?:
    | "0%"
    | "5%"
    | "10%"
    | "15%"
    | "20%"
    | "25%"
    | "30%"
    | "35%"
    | "40%"
    | "45%"
    | "50%"
    | "55%"
    | "60%"
    | "65%"
    | "70%"
    | "75%"
    | "80%"
    | "85%"
    | "90%"
    | "95%"
    | "100%";
  glowFallOff?: number;
  glowRange?:
    | "0%"
    | "5%"
    | "10%"
    | "15%"
    | "20%"
    | "25%"
    | "30%"
    | "35%"
    | "40%"
    | "45%"
    | "50%"
    | "55%"
    | "60%"
    | "65%"
    | "70%"
    | "75%"
    | "80%"
    | "85%"
    | "90%"
    | "95%"
    | "100%";
  color?: number[];
  glowColor?: number[];
};

const Lamp = (props: Props) => {
  const lampWidth = `w-[${props.lampWidth}px]`;
  const glowWidth = props.glowWidth ? `${props.glowWidth}px` : "100px";
  const glowFallOff = props.glowFallOff
    ? `h-[${props.glowFallOff}px]`
    : `h-[120px]`;
  const intensity = props.intensity ? `${props.intensity}` : "0%";
  const glowRange = props.glowRange ? `${props.glowRange}` : "100%";
  const size = props.size ? `${props.size}px` : "2px";
  const color = props.color
    ? `rgba(${props.color[0]}, ${props.color[1]}, ${props.color[2]}, 1)`
    : `rgba(255, 255, 255, 1)`;
  const glowColor = props.glowColor
    ? `rgba(${props.glowColor[0]}, ${props.glowColor[1]}, ${props.glowColor[2]}, .5)`
    : `rgba(255, 255, 255, .5)`;

  return (
    <div className="w-full flex justify-center items-center relative">
      <div
        className={`${lampWidth} h-[220px] flex justify-center items-start relative overflow-hidden`}
      >
        {/* Lamp body */}
        <div
          id="lampbody"
          className={`w-full rounded-full mx-1`}
          style={{
            boxShadow: `0 0 10px ${color}`,
            height: size,
            backgroundColor: color,
          }}
        ></div>

        {/* Wrapper with overflow-hidden to keep glow below the lamp */}
        <div
          className="absolute w-[140%] flex justify-center items-center overflow-hidden h-full top-[4px] "
          style={{ pointerEvents: "none", borderRadius: "23%" }}
        >
          {/* Downward light glow */}
          <div
            id="lampglow"
            className={`absolute ${glowFallOff} blur-[50px] -top-16 `}
            style={{
              background: `radial-gradient(circle at 50% 0, ${color} ${intensity}, ${glowColor} ${glowRange})`,
              width: glowWidth,
              borderRadius: "23%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Lamp;
