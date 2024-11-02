import React from "react";
import WiggleWrapper from "./WiggleWrapper";

type Props = {
  index?: number;
  name: string;
  description: string;
  icon: string | React.ReactNode;
  onClick?: () => void;
  size?: "small" | "normal" | "medium" | "large";
  lineClamp?: string;
};

const ProjectRow = ({
  index,
  name,
  description,
  icon,
  onClick,
  size = "large",
  lineClamp,
}: Props) => {
  // Size-based styles for padding, text, and image dimensions
  const sizeStyles = {
    small: {
      padding: "py-4 px-2",
      textSize: "text-sm",
      nameTextSize: "text-xl",
      imgSize: "w-32 h-32",
      top: "-top-2",
      height: "h-[110px]",
    },
    normal: {
      padding: "py-6 px-3",
      textSize: "text-base",
      nameTextSize: "text-2xl",
      imgSize: "w-48 h-48",
      top: "-top-7",
      height: "h-[140px]",
    },
    medium: {
      padding: "py-10 px-4",
      textSize: "text-lg",
      nameTextSize: "text-3xl",
      imgSize: "w-72 h-72",
      top: "-top-14",
      height: "h-[190px]",
    },
    large: {
      padding: "py-14 px-5",
      textSize: "text-lg",
      nameTextSize: "text-3xl",
      imgSize: "w-80 h-80",
      top: "-top-12",
      height: "h-[220px]",
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <div className={`relative group cursor-pointer ${currentSize.height}`}>
      {/* Wrapper div with border styling */}
      <div
        className={`absolute right-2 rounded-md ${currentSize.imgSize} opacity-0 group-hover:opacity-100 transition-all duration-200`}
        style={{ zIndex: 1 }} // Lower z-index so it appears behind the image
      >
        <div
          className={`absolute ${currentSize.top} rounded-md drop-shadow-md bg-white ${currentSize.imgSize}`}
          style={{ zIndex: 2 }} // Ensure the image appears above the border
        >
          <img
            src="/images/sample.jpg"
            alt="project"
            className={`object-cover ${currentSize.imgSize} rounded-md`}
          />
        </div>
      </div>

      <div
        className={`static grid ${
          index ? "grid-cols-[.5fr_2fr_2fr_2fr]" : "grid-cols-3"
        } ${currentSize.padding} place-items-center w-full `}
      >
        {index && (
          <div
            className={`mr-auto font-semibold tracking-wide ${currentSize.textSize}`}
          >
            {index < 10 ? `0${index}` : index}
          </div>
        )}
        <div
          className={`mr-auto font-bold ${currentSize.nameTextSize} tracking-tight transform group-hover:skew-x-2 transition-all duration-300 delay-150`}
        >
          {name}
        </div>
        <div
          className={`mr-auto ${currentSize.textSize} ${
            lineClamp && lineClamp.length > 0 && lineClamp
          }`}
        >
          {description}
        </div>
        <div className="ml-auto">{icon}</div>
      </div>
    </div>
  );
};

export default ProjectRow;
