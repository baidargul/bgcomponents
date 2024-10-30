import React from "react";
// import "./addNoise.css";

type Props = {
  className?: string;
  opacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  zIndex?: number;
};

const AddNoise = (props: Props) => {
  return (
    <div
      style={{ opacity: props.opacity ? props.opacity : 1 }}
      className="pointer-events-none"
    >
      <div
        style={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/noise.gif')",
          opacity: 0.1,
          zIndex: props.zIndex ? props.zIndex : 0,
        }}
        className={`${props.className && props.className}`}
      ></div>
    </div>
  );
};

export default AddNoise;
