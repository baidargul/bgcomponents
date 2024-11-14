"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Terminal = (props: Props) => {
  const [commandList, setCommandList] = useState<string[]>([]);
  const commandRef: any = useRef(null);
  const [command, setCommand] = useState("");

  const handleCommandChange = (e: any) => {
    setCommand(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setCommandList((prev: any) => [...prev, command]);
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
      <style>
        {`
    /* Custom scrollbar styling */
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #333; /* Track color */
    }
    ::-webkit-scrollbar-thumb {
      background: #666; /* Thumb color */
      border-radius: 5px;
    }
  `}
      </style>

      <div>
        <div className="py-3 w-full bg-zinc-900 relative flex gap-2 items-center rounded-t-md">
          <div className="absolute left-2 z-10 flex gap-2">
            <ControlBoxControl type="close" />
            <ControlBoxControl type="maximize" />
            <ControlBoxControl type="minimize" />
          </div>
        </div>
        <div className="w-full selection:bg-white selection:text-black bg-zinc-200 h-[200px] appearance-none outline-none border-transparent ring-0 p-2 text-sm text-black font-mono tracking-widest relative">
          <div
            onClick={handleFocusToCommand}
            className="overflow-y-scroll h-[160px] pl-2 select-none"
          >
            {commandList.map((item, index) => {
              return (
                <div key={index}>
                  <Command command={item} setCommandList={setCommandList} />
                </div>
              );
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
  const mainCommand = command.split(" ")[0].toLocaleLowerCase(); // Extract the main command (e.g., "echo")
  const args = command.split(" ").slice(1).join(" "); // Get any additional arguments after the command

  switch (mainCommand) {
    case "clear":
    case "cls":
    case "clear console":
    case "new":
      setValue([]);
      return null;

    case "exit":
      setValue([]);
      return null;

    case "kill":
      return [
        {
          title: "Goodbye!",
          description: "Cruel world!",
          image: "https://media.giphy.com/media/uC8SQoaY5EHhC/giphy.gif",
        },
      ];

    case "echo":
      return [{ description: args }]; // Return the additional text as output

    case "help":
      return [
        { title: "echo", description: "Displays the provided text." },
        { title: "kill", description: "If you don't want to see me anymore." },
        { title: "help", description: "Displays this help message." },
        { title: "clear", description: "Clears the console." },
        { title: "exit", description: "Exits the console." },
      ];

    default:
      return `Unknown command: ${command}`;
  }
};

type CommandProps = {
  command: string;
  setCommandList: any;
};

const Command = (props: CommandProps) => {
  const command = getCommandResponse(props.command, props.setCommandList);

  if (!command) {
    return null;
  }

  if (typeof command === "string") {
    return <div>{command}</div>;
  } else if (Array.isArray(command)) {
    return (
      <div>
        <div className="text-cyan-800 font-bold">{`> ${props.command}`}</div>
        {command.map((item: any, index) => {
          return (
            <div key={index}>
              <div className="flex gap-1 items-center">
                {item.title && <div className="font-bold">{item.title} - </div>}
                {item.description && (
                  <div className="text-xs">{item.description}</div>
                )}
              </div>
              {item.image && (
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="rounded-md pointer-events-none select-none object-contain"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
};
