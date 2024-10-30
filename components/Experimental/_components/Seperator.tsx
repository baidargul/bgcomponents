import React from "react";

type Props = {
  label?: string;
  className?: string;
  labelBackgroundColor?: string;
  labelColor?: string;
  lineColor?: string;
  labelSize?: "small" | "medium" | "large";
  labelPosition?: "center" | "left" | "right";
};

const Seperator = (props: Props) => {
  const labelColor = props.labelColor ? props.labelColor : "bg-zinc-200";
  const labelBackgroundColor = props.labelBackgroundColor
    ? props.labelBackgroundColor
    : "bg-zinc-300";

  const lineColor = props.lineColor ? props.lineColor : "bg-zinc-300";

  let labelSize;

  switch (props.labelSize) {
    case "small":
      labelSize = "text-xs";
      break;
    case "medium":
      labelSize = "text-sm";
      break;
    case "large":
      labelSize = "text-lg";
      break;
    default:
      labelSize = "text-sm";
  }

  let position = "justify-center items-start";
  switch (props.labelPosition) {
    case "center":
      position = "justify-center items-center";
      break;

    case "left":
      position = "justify-start items-center";
      break;

    case "right":
      position = "justify-end items-center";
      break;

    default:
      position = "justify-center items-center";
      break;
  }

  return (
    <div className={`relative flex ${position} w-full select-none`}>
      {props.label && props.label.length > 0 && (
        <div
          className={`absolute  ${labelSize} ${labelColor} ${labelBackgroundColor} rounded-full py-2 ${position} flex px-8 ${
            props.className && props.className
          }`}
        >
          {props.label}
        </div>
      )}
      <div className={`w-full h-[1px] ${lineColor} rounded-full`}></div>
    </div>
  );
};

export default Seperator;
