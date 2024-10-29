import React from "react";
import ClipedImage from "./_components/ClipedImage";

type Props = {};

const ExperimentalContent = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="opacity-60 tracking-wider py-1 border-y ">
        Experimental Content
      </div>
      <div>
        <ClipedImage />
      </div>
    </div>
  );
};

export default ExperimentalContent;
