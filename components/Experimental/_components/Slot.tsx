import React from "react";

type Props = {
  icon?: string | React.ReactNode;
  label?: string;
  position: "center" | "first" | "last";
  reverse?: boolean;
  animate?: boolean;
  borderColor?: string;
  className?: string;
};

const Slot = (props: Props) => {
  let border = "border-l-2";

  if (props.reverse) {
    border = "border-r-2 justify-end items-end text-right";
  }

  if (props.position === "center") {
    return (
      <div
        className={`flex flex-col p-4 gap-2 ${
          props.animate && "hover:py-6"
        } transition-all duration-300 pr-8 ${border} ${
          props.borderColor && props.borderColor
        } border-y-2 ${props.className && props.className}`}
      >
        <div className="text-2xl">{props.icon ? props.icon : "Icon"}</div>
        <div className="text-base">{props.label ? props.label : "Label"}</div>
      </div>
    );
  } else if (props.position === "first") {
    return (
      <div
        className={`flex flex-col p-4 gap-2 ${
          props.animate && "hover:py-6"
        } transition-all duration-300 pr-8 ${border} ${
          props.borderColor && props.borderColor
        } ${props.className && props.className}`}
      >
        <div className="text-2xl">{props.icon ? props.icon : "Icon"}</div>
        <div className="text-base">{props.label ? props.label : "Label"}</div>
      </div>
    );
  } else if (props.position === "last") {
    return (
      <div
        className={`flex flex-col p-4 gap-2 ${
          props.animate && " hover:py-6"
        } transition-all duration-300 pr-8 ${border} ${
          props.borderColor && props.borderColor
        } ${props.className && props.className}`}
      >
        <div className="text-2xl">{props.icon ? props.icon : "Icon"}</div>
        <div className="text-base">{props.label ? props.label : "Label"}</div>
      </div>
    );
  }
};

export default Slot;
