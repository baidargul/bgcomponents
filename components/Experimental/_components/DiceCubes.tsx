import React from "react";

type Props = {
  items?: DiceCubeCollection;
  size?: "small" | "base" | "medium" | "large" | "xlarge";
  delay?: number;
};

export type DiceCube = {
  name: string;
  image: string;
} | null;

export type DiceCubeCollection = DiceCube[] | null;

const DiceCubes = (props: Props) => {
  let size = "w-[320px] h-[320px]";

  switch (props.size) {
    case "small":
      size = "w-[160px] h-[160px]";
      break;
    case "base":
      size = "w-[250px] h-[250px]";
      break;
    case "medium":
      size = "w-[320px] h-[320px]";
      break;
    case "large":
      size = "w-[380px] h-[380px]";
      break;
    case "xlarge":
      size = "w-[400px] h-[400px]";
      break;
    default:
      size = "w-[320px] h-[320px]";
  }

  return (
    <div className="grid grid-cols-3 gap-4 group">
      {props.items &&
        props.items.map((item, index) => {
          const random = Math.floor(Math.random() * 100);
          let multiplier = random < 10 ? 1 : -1;
          let delay = props.delay ? props.delay : 200;

          return (
            <div
              key={index}
              style={{
                transitionDelay: `${index * delay}ms`,
              }}
              className={`overflow-hidden rounded-xl ${size} transform transition-transform duration-1000 ease-in-out ${
                multiplier < 0
                  ? "group-hover:-rotate-2"
                  : "group-hover:rotate-2"
              }`}
            >
              <img
                src={item?.image}
                alt={item?.name}
                className={`object-cover ${size} opacity-70 hover:opacity-100 rounded-xl hover:scale-125 transition-all duration-300 delay-200`}
              />
            </div>
          );
        })}
    </div>
  );
};

export default DiceCubes;
