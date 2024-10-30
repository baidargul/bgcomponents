import React from "react";

type Props = {
  icon?: string;
  text?: string;
  position: "center" | "first" | "last";
  reverse?: boolean;
  animate?: boolean;
};

const Slot = (props: Props) => {
  let border = "border-l-2";

  if (props.reverse) {
    border = "border-r-2";
  }

  if (props.position === "center") {
    return (
      <div
        className={`flex flex-col p-4 ${
          props.animate && "hover:py-6"
        } transition-all duration-300 pr-8 ${border} border-y-2`}
      >
        <div className="text-2xl">Icon</div>
        <div className="text-sm">Text</div>
      </div>
    );
  } else if (props.position === "first") {
    return (
      <div
        className={`flex flex-col p-4 ${
          props.animate && "hover:py-6"
        } transition-all duration-300 pr-8 ${border}`}
      >
        <div className="text-2xl">Icon</div>
        <div className="text-sm">Text</div>
      </div>
    );
  } else if (props.position === "last") {
    return (
      <div
        className={`flex flex-col p-4 ${
          props.animate && " hover:py-6"
        } transition-all duration-300 pr-8 ${border}`}
      >
        <div className="text-2xl">Icon</div>
        <div className="text-sm">Text</div>
      </div>
    );
  }
};

export default Slot;
