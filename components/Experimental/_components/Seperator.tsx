import React from "react";

type Props = {
  label?: string;
  className?: string;
  labelBackgroundColor?: string;
  labelColor?: string;
  lineColor?: string;
};

const Seperator = (props: Props) => {
  const labelColor = props.labelColor ? props.labelColor : "bg-zinc-200";
  const labelBackgroundColor = props.labelBackgroundColor
    ? props.labelBackgroundColor
    : "bg-zinc-300";

  const lineColor = props.lineColor ? props.lineColor : "bg-zinc-300";

  return (
    <div className="relative flex justify-center items-center w-full mx-5">
      {props.label && props.label.length > 0 && (
        <div
          className={`absolute text-sm ${labelColor} ${labelBackgroundColor} rounded-full py-2 flex justify-center items-center px-8`}
        >
          {props.label}
        </div>
      )}
      <div className={`w-full h-[1px] ${lineColor} rounded-full`}></div>
    </div>
  );
};

export default Seperator;
