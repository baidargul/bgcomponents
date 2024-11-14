"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Terminal = (props: Props) => {
  const [commandList, setCommandList] = useState<string[]>([]);
  const commandRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const [command, setCommand] = useState("");

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCommandList((prev) => [...prev, command]);
      setCommand("");
    }
  };

  const handleFocusToCommand = () => {
    commandRef.current?.focus();
  };

  // Scroll to the bottom whenever commandList changes
  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [commandList]);

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
        <div className="w-full selection:bg-white selection:text-black bg-zinc-200 h-[340px] rounded-b-md appearance-none outline-none border-transparent ring-0 p-2 text-sm text-black font-mono tracking-widest relative">
          <div
            ref={terminalRef} // Attach terminalRef to the container div
            onClick={handleFocusToCommand}
            className="overflow-y-scroll h-[300px] pl-2 select-none"
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
      return [{ description: args }];
    case "hello":
      return [{ title: "Hello!", description: "World!" }];

    case "help":
      return [
        {
          title: "echo",
          description: "Displays the provided text.",
          divider: ":",
        },
        {
          title: "kill",
          description: "If you don't want to see me anymore.",
          divider: ":",
        },
        {
          title: "about",
          description: "About me. if you're interested.",
          divider: ":",
        },
        {
          title: "ssh",
          description: "SSH to a remote server.",
          divider: ":",
        },
        {
          title: "hack",
          description: "🤫",
          divider: ":",
        },
        {
          title: "help | commands | /? | /help",
          description: "Displays this help message.",
          divider: ":",
        },
        { title: "clear", description: "Clears the console.", divider: ":" },
        { title: "exit", description: "Exits the console.", divider: ":" },
      ];
    case "commands":
      return [
        {
          title: "echo",
          description: "Displays the provided text.",
          divider: ":",
        },
        {
          title: "kill",
          description: "If you don't want to see me anymore.",
          divider: ":",
        },
        {
          title: "about",
          description: "About me. if you're interested.",
          divider: ":",
        },
        {
          title: "ssh",
          description: "SSH to a remote server.",
          divider: ":",
        },
        {
          title: "hack",
          description: "🤫",
          divider: ":",
        },
        {
          title: "help | commands | /? | /help",
          description: "Displays this help message.",
          divider: ":",
        },
        { title: "clear", description: "Clears the console.", divider: ":" },
        { title: "exit", description: "Exits the console.", divider: ":" },
      ];
    case "/?":
      return [
        {
          title: "echo",
          description: "Displays the provided text.",
          divider: ":",
        },
        {
          title: "kill",
          description: "If you don't want to see me anymore.",
          divider: ":",
        },
        {
          title: "about",
          description: "About me. if you're interested.",
          divider: ":",
        },
        {
          title: "ssh",
          description: "SSH to a remote server.",
          divider: ":",
        },
        {
          title: "hack",
          description: "🤫",
          divider: ":",
        },
        {
          title: "help | commands | /? | /help",
          description: "Displays this help message.",
          divider: ":",
        },
        { title: "clear", description: "Clears the console.", divider: ":" },
        { title: "exit", description: "Exits the console.", divider: ":" },
      ];
    case "/help":
      return [
        {
          title: "echo",
          description: "Displays the provided text.",
          divider: ":",
        },
        {
          title: "kill",
          description: "If you don't want to see me anymore.",
          divider: ":",
        },
        {
          title: "about",
          description: "About me. if you're interested.",
          divider: ":",
        },
        {
          title: "ssh",
          description: "SSH to a remote server.",
          divider: ":",
        },
        {
          title: "hack",
          description: "🤫",
          divider: ":",
        },
        {
          title: "help | commands | /? | /help",
          description: "Displays this help message.",
          divider: ":",
        },
        { title: "clear", description: "Clears the console.", divider: ":" },
        { title: "exit", description: "Exits the console.", divider: ":" },
      ];

    case "about":
      return {
        title: "About",
        description:
          "This is a terminal emulator built using React and Typescript.",
        component: (
          <div className="">
            <div className="flex gap-1 items-center">
              <div className="font-bold">Hello!</div>
              <div>I'm Baidar Gul</div>
            </div>
            <div>
              <div>Here's some facts about me:</div>
              <div className="w-fit bg-zinc-100 p-1 pl-2 pr-8">
                <div className="font-semibold text-[#6b7280] hover:text-green-800 drop-shadow-sm">
                  ✅ Website developer
                </div>
                <div className="font-semibold text-[#6b7280] hover:text-green-800 drop-shadow-sm">
                  ✅ App developer
                </div>
                <div className="font-semibold text-[#6b7280] hover:text-green-800 drop-shadow-sm">
                  ✅ WordPress developer
                </div>
                <div className="font-semibold text-[#6b7280] hover:text-green-800 drop-shadow-sm">
                  ✅ Typescript expert
                </div>
                <div className="font-semibold text-[#6b7280] hover:text-green-800 drop-shadow-sm">
                  ✅ Backend specialist
                </div>
                <div className="font-semibold text-[#6b7280] hover:text-green-800 drop-shadow-sm">
                  ✅ Graphic designer
                </div>
              </div>
            </div>
          </div>
        ),
      };
    case "ssh":
      return [
        {
          title: "Seriously?",
          description: "Didn't you realized yet this is a demo terminal!",
        },
      ];
    case "hack":
      return [
        {
          image: `https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif`,
          title: "ON IT!",
        },
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
                {item.title && (
                  <div className="font-bold">
                    {item.title}
                    {item.divider && item.divider}
                  </div>
                )}
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
  } else if (typeof command === "object") {
    return <div>{command.component}</div>;
  }
};
