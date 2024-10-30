import React from "react";
import MouseGravity from "./Experimental/_components/MouseGravity";

type Props = {
  title: string;
  description?: string | string[];
  style: "general" | "focused";
};

const NewsSection = (props: Props) => {
  if (props.style === "general") {
    return <General {...props} />;
  } else if (props.style === "focused") {
    return <Focused {...props} />;
  }
};

export default NewsSection;

const General = (props: Props) => {
  return (
    <div className="p-6 rounded-xl w-[300px] hover:-rotate-2 transition-all duration-300 hover:first-letter:font-bold">
      <div className="font-bold text-xl tracking-widest mb-8">
        {props.title}
      </div>
      {typeof props.description === "string" ? (
        <div className="text-sm leading-tight">{props.description}</div>
      ) : (
        <div className="flex flex-col gap-1">
          {props.description?.map((item, index) => {
            return (
              <div className="text-sm leading-tight" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Focused = (props: Props) => {
  return (
    <MouseGravity>
      <div className="p-6 rounded-xl w-[300px] flex-col text-right flex justify-end items-end hover:rotate-2 hover:tracking-widest transition-all duration-100 ">
        <div className="text-md tracking-widest mb-4 w-[60%]">
          {props.title}
        </div>
        <div className="text-5xl  font-bold  leading-tight flex flex-col gap-0">
          <div className="transition-all duration-200">{props.description}</div>
        </div>
      </div>
    </MouseGravity>
  );
};
