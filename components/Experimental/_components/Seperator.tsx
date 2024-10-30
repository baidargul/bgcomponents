import React from "react";

type Props = {
  label?: string;
  className?: string;
  labelBackgroundColor?: string;
  labelColor?: string;
  lineColor?: string;
  labelSize?: "small" | "medium" | "large";
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

  return (
    <div className="relative flex justify-center items-center w-full select-none">
      {props.label && props.label.length > 0 && (
        <div
          className={`absolute  ${labelSize} ${labelColor} ${labelBackgroundColor} rounded-full py-2 flex justify-center items-center px-8 ${
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
