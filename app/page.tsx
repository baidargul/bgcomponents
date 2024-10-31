import AddNoise from "@/components/Experimental/_components/AddNoise";
import BackgroundWave from "@/components/Experimental/_components/BackgroundWave";
import MouseGravity from "@/components/Experimental/_components/MouseGravity";
import Section from "@/components/Experimental/_components/Section";
import Seperator from "@/components/Experimental/_components/Seperator";
import Slot from "@/components/Experimental/_components/Slot";
import WiggleWrapper from "@/components/Experimental/_components/WiggleWrapper";
import WindowImage from "@/components/Experimental/_components/WindowImage";
import NewsSection from "@/components/NewsSection";
import {
  Fingerprint,
  Keyboard,
  Laptop,
  Microchip,
  Server,
  ServerCrash,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="grid grid-cols-3 justify-items-center items-center place-items-center p-10 group ">
        <div className="group-hover:skew-x-0 group-hover:scale-100 group-hover:blur-0 blur-lg skew-x-2 transition-all duration-1000   ease-in-out">
          <WiggleWrapper>
            <MouseGravity intensity={15}>
              <NewsSection
                style="general"
                title="Biography"
                description="I help startups connect with their audience. Focuses on creating
              smooth, intuitive experiences that make digital products easy to
              use and impactful. I'm Known for my practical approach and
              reliability, to delivers solutions that work for both users and
              businesses."
              />
            </MouseGravity>
          </WiggleWrapper>
          <WiggleWrapper>
            <MouseGravity intensity={20}>
              <NewsSection
                style="general"
                title="Contact"
                description={[
                  "Gul Mobiles,",
                  "Shaheed Road, Jhang",
                  "+92 3438 7934 71",
                ]}
              />
            </MouseGravity>
          </WiggleWrapper>
          <WiggleWrapper>
            <MouseGravity intensity={25}>
              <NewsSection
                style="general"
                title="Services"
                description={[
                  "Custom Website Design & Development",
                  "eCommerce Solutions",
                  "Website Maintenance & Updates",
                  "SEO & Content Strategy",
                  "Mobile-Friendly & Responsive Design",
                  "Web App Development",
                ]}
              />
            </MouseGravity>
          </WiggleWrapper>
        </div>
        <WiggleWrapper>
          <WindowImage size="medium" className="w-[600px]" />
          <MouseGravity>
            <div className="text-5xl flex items-center gap-1 justify-center font-semibold tracking-wide text-center mt-10 duration-1000 ease-in-out">
              <div>I'M</div>
              <div className="p-3 bg-zinc-200 rounded-md">BAIDAR GUL</div>
            </div>
          </MouseGravity>
        </WiggleWrapper>
        <div className="group-hover:skew-x-0 group-hover:scale-100 group-hover:blur-0 blur-lg -skew-x-2 transition-all duration-1000 ease-in-out">
          <WiggleWrapper>
            <MouseGravity intensity={15}>
              <NewsSection
                style="focused"
                title="Years of experience"
                description="8"
              />
            </MouseGravity>
          </WiggleWrapper>
          <WiggleWrapper>
            <MouseGravity intensity={20}>
              <NewsSection
                style="focused"
                title="Satisfied Clients"
                description="100%"
              />
            </MouseGravity>
          </WiggleWrapper>
          <WiggleWrapper>
            <MouseGravity intensity={25}>
              <NewsSection
                style="focused"
                title="Clients worldwide"
                description="36"
              />
            </MouseGravity>
          </WiggleWrapper>
          <WiggleWrapper>
            <MouseGravity intensity={40}>
              <NewsSection
                style="focused"
                title="Projects Closed"
                description="375"
              />
            </MouseGravity>
          </WiggleWrapper>
        </div>
      </div>
      <div className="bg-zinc-50 ">
        <BackgroundWave color="bg-zinc-50" waveHeightResistance={1400} />
        <div className="h-[110px]"></div>
        <div className="px-10 mb-10">
          <Section
            isFirst
            backgroundColor="bg-cyan-50"
            color="bg-zinc-100"
            zIndex={3}
          >
            <div className="grid grid-cols-[2fr_1fr]">
              <div>Center</div>
              <div>
                <Slot
                  position="first"
                  icon={<Keyboard />}
                  label="All-in-One Development Solutions"
                />
                <Slot
                  position="center"
                  icon={<Server />}
                  label="Seamless Server Operations & Deployment"
                />
                <Slot
                  position="last"
                  icon={<ServerCrash />}
                  label="Reliable Disaster Management & Recovery"
                />
              </div>
            </div>
          </Section>
          <Section zIndex={2} backgroundColor="bg-cyan-50" color="bg-zinc-200">
            <Seperator
              className="tracking-widest"
              label="Projects"
              labelBackgroundColor="bg-zinc-300"
            />
            <div className="flex gap-10 justify-center items-center mt-10">
              <div>Blank</div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
