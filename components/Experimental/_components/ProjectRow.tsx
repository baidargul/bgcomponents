import React from "react";
import WiggleWrapper from "./WiggleWrapper";

type Props = {
  index?: number;
  name: string;
  description: string;
  icon: string | React.ReactNode;
  onClick?: () => void;
  size?: "small" | "normal" | "medium" | "large";
};

const ProjectRow = ({
  index,
  name,
  description,
  icon,
  onClick,
  size = "large",
}: Props) => {
  // Size-based styles for padding, text, and image dimensions
  const sizeStyles = {
    small: {
      padding: "py-4 px-2",
      textSize: "text-sm",
      nameTextSize: "text-xl",
      imgSize: "w-32 h-32",
      top: "-top-2",
    },
    normal: {
      padding: "py-6 px-3",
      textSize: "text-base",
      nameTextSize: "text-2xl",
      imgSize: "w-48 h-48",
      top: "-top-3",
    },
    medium: {
      padding: "py-10 px-4",
      textSize: "text-lg",
      nameTextSize: "text-3xl",
      imgSize: "w-72 h-72",
      top: "-top-5",
    },
    large: {
      padding: "py-14 px-5",
      textSize: "text-lg",
      nameTextSize: "text-3xl",
      imgSize: "w-80 h-80",
      top: "-top-4",
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <div className="relative group cursor-pointer z-[2]">
      <div
        className={`absolute ${currentSize.top} right-2 rounded-md drop-shadow-md bg-white opacity-0 group-hover:opacity-100 transition-all duration-200 ${currentSize.imgSize}`}
        style={{ zIndex: 999 }}
      >
        <img
          src="/images/sample.jpg"
          alt="project"
          className={`object-cover ${currentSize.imgSize} rounded-md`}
        />
      </div>

      <div
        className={`static grid ${
          index ? "grid-cols-[1fr_2fr_2fr_2fr]" : "grid-cols-3"
        } ${currentSize.padding} place-items-center w-full border-y`}
      >
        {index && (
          <div
            className={`mr-auto font-semibold tracking-wide ${currentSize.textSize}`}
          >
            {index < 10 ? `0${index}` : index}
          </div>
        )}
        <div className={`mr-auto font-bold ${currentSize.nameTextSize}`}>
          {name}
        </div>
        <div className={`mr-auto ${currentSize.textSize}`}>{description}</div>
        <div className="ml-auto">{icon}</div>
      </div>
    </div>
  );
};

export default ProjectRow;
