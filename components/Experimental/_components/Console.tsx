"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Terminal = (props: Props) => {
  const [logs, setLogs] = useState([]);
  const commandRef: any = useRef(null);
  const [command, setCommand] = useState("");

  const handleCommandChange = (e: any) => {
    setCommand(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      getCommandResponse(command, setLogs);
      setCommand("");
    }
  };

  const handleFocusToCommand = () => {
    if (commandRef.current) {
      commandRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <div className="py-3 w-full bg-zinc-900 relative flex gap-2 items-center rounded-t-md">
          <div className="absolute left-2 z-10 flex gap-2">
            <ControlBoxControl type="close" />
            <ControlBoxControl type="maximize" />
            <ControlBoxControl type="minimize" />
          </div>
        </div>
        <div className="w-full selection:bg-white selection:text-black bg-zinc-400 h-[200px] appearance-none outline-none border-transparent ring-0 p-2 text-sm text-black font-mono tracking-widest relative">
          <div
            onClick={handleFocusToCommand}
            className="overflow-y-scroll h-[160px] pl-2 select-none"
          >
            {logs.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
          <div className="absolute bottom-2 left-2 tracking-widest font-bold w-full pl-2 flex">
            @baidargul◾
            <input
              ref={commandRef}
              value={command}
              onChange={handleCommandChange}
              onKeyDown={handleKeyDown}
              className="appearance-none ring-0 outline-none border-transparent bg-transparent w-[91%]"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Terminal;

type ControlBoxControlProps = {
  type: "close" | "minimize" | "maximize";
};

const ControlBoxControl = (props: ControlBoxControlProps) => {
  const [color, setColor] = useState("#FF4746");

  useEffect(() => {
    if (props.type === "close") {
      setColor("#FF4746");
    } else if (props.type === "minimize") {
      setColor("#FFD700");
    } else if (props.type === "maximize") {
      setColor("#00FF00");
    }
  }, []);

  return (
    <div
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: color }}
    ></div>
  );
};

const getCommandResponse = (command: string, setValue: any) => {
  switch (command) {
    case "clear":
      setValue([]);
      break;

    case "help":
      setValue((prev: any) => [
        ...prev,
        "clear - clears the console",
        "help - shows this message",
        "exit - exits the console",
      ]);
      break;

    default:
      break;
  }
};
