import React from "react";

type Props = {
  index?: number;
  name: string;
  description: string;
  icon: string | React.ReactNode;
  onClick?: () => void;
};

const ProjectRow = (props: Props) => {
  return (
    <div
      className={`grid ${
        props.index ? "grid-cols-[1fr_2fr_2fr_2fr]" : "grid-cols-3"
      }  py-14 px-2 place-items-center border-y text-lg w-full`}
    >
      {props.index && (
        <div className="mr-auto text-2xl font-semibold tracking-wide">
          {props.index < 10 ? `0${props.index}` : props.index}
        </div>
      )}
      <div className="text-3xl mr-auto font-bold">{props.name}</div>
      <div className="mr-auto text-base">{props.description}</div>
      <div className="ml-auto">{props.icon}</div>
    </div>
  );
};

export default ProjectRow;
