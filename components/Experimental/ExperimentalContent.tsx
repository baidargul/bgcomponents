import React from "react";
import WindowImage from "./_components/WindowImage";

type Props = {};

const ExperimentalContent = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="opacity-60 tracking-wider py-1 border-y pointer-events-none select-none text-center mb-2">
        Experimental Content
      </div>
      <div></div>
    </div>
  );
};

export default ExperimentalContent;
