import React from "react";

type Props = {
  children: React.ReactNode;
  isFirst?: boolean;
  zIndex?: number;
  className?: string;
  color?: string;
  backgroundColor?: string;
};

const Section = (props: Props) => {
  const zIndex = `${props.zIndex ? props.zIndex : 0}`;

  const backgroundColor = props.backgroundColor
    ? props.backgroundColor
    : "bg-white";
  const foregroundColor = props.color ? props.color : "bg-zinc-100";

  return (
    <div
      className={`relative overflow-hidden -mt-24`}
      style={{ zIndex: zIndex || 0 }}
    >
      <div
        className={`${foregroundColor} ${
          props.className && props.className
        } w-[1200px] h-full rounded-b-[90px] ${
          props.isFirst ? "rounded-t-[90px]" : "pb-12 pt-32"
        } p-24`}
      >
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Section;
