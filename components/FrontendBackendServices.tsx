import React from "react";
import Slot from "./Experimental/_components/Slot";
import {
  DatabaseZap,
  LaptopMinimal,
  Monitor,
  MonitorCheck,
  ServerCog,
  ServerCrash,
  Shield,
  TabletSmartphone,
} from "lucide-react";
import Section from "./Experimental/_components/Section";

type Props = {};

const FrontendBackendServices = (props: Props) => {
  return (
    <div className="grid grid-cols-[1fr] select-none">
      <div></div>
      <div className="px-10 mb-10">
        <Section
          isFirst
          backgroundColor="bg-cyan-50"
          color="bg-zinc-100"
          zIndex={3}
        >
          <div className="grid grid-cols-[2fr_1fr] group">
            <div className="flex justify-center items-center">
              <div className="flex gap-8  justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-2">
                  <div>
                    <Monitor
                      size={80}
                      className="group-hover:text-cyan-900 delay-1000 transition-all duration-1000"
                    />
                  </div>
                  <div className="font-semibold text-3xl">Frontend</div>
                </div>
                <div className="text-5xl font-bold w-[60%] transition-all duration-500 group-hover:leading-snug delay-200">
                  Beautiful, Interactive Frontend Experiences
                </div>
              </div>
            </div>
            <div>
              <Slot
                position="first"
                icon={<LaptopMinimal />}
                label="Responsive, Engaging UI Design"
                className="group-hover:tracking-tight"
              />
              <Slot
                position="center"
                icon={<MonitorCheck />}
                label="Pixel Perfect, High Performance Web Apps"
                className="group-hover:tracking-tight"
              />
              <Slot
                position="last"
                icon={<TabletSmartphone />}
                label="User Friendly Experiences Across all Devices"
                className="group-hover:tracking-tight"
              />
            </div>
          </div>
        </Section>
        <Section zIndex={2} backgroundColor="bg-cyan-50" color="bg-zinc-200">
          <div className="grid grid-cols-[1fr_2fr] py-10 group">
            <div>
              <Slot
                position="first"
                icon={<ServerCrash />}
                label="Robust and Scalable Backend Architecture"
                borderColor="border-zinc-300"
                className="group-hover:tracking-tight"
                reverse
              />
              <Slot
                position="center"
                icon={<DatabaseZap />}
                label="Efficient Data Management & API Integration"
                borderColor="border-zinc-300"
                className="group-hover:tracking-tight"
                reverse
              />
              <Slot
                position="last"
                icon={<Shield />}
                label="24/7 Monitoring & Secure Disaster Recovery"
                borderColor="border-zinc-300"
                className="group-hover:tracking-tight"
                reverse
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex gap-8 justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-2">
                  <div>
                    <ServerCog
                      size={80}
                      className="group-hover:text-blue-900 delay-1000 transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="font-semibold text-3xl">Backend</div>
                </div>
                <div className="text-5xl font-bold w-[60%] transition-all duration-500 group-hover:leading-snug delay-200">
                  Fully Scalable Backend Architecture
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default FrontendBackendServices;
