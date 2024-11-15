import AddNoise from "@/components/Experimental/_components/AddNoise";
import BackgroundWave from "@/components/Experimental/_components/BackgroundWave";
import Terminal from "@/components/Experimental/_components/Console";
import Lamp from "@/components/Experimental/_components/Lamp";
import MouseGravity from "@/components/Experimental/_components/MouseGravity";
import ProjectRow from "@/components/Experimental/_components/ProjectRow";
import WiggleWrapper from "@/components/Experimental/_components/WiggleWrapper";
import WindowImage from "@/components/Experimental/_components/WindowImage";
import FrontendBackendServices from "@/components/FrontendBackendServices";
import NewsSection from "@/components/NewsSection";
import { Projects } from "@/extra/projects";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col overflow-hidden">
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
          <WindowImage size="medium" className="w-[600px] rounded-full" />
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
        <FrontendBackendServices />
      </div>
      <div className="my-10 grid grid-cols-[1.2fr_2fr]">
        <div className="p-2 bg-zinc-100 flex justify-center items-center">
          <div>Place content here</div>
        </div>
        <div>
          {Projects.map((project, index) => {
            return (
              <div className="border-y" key={project.name}>
                <ProjectRow
                  size="normal"
                  index={index + 1}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  icon={
                    <ChevronRight
                      className="p-2 rounded-full border text-center flex justify-center items-center"
                      size={50}
                    />
                  }
                  lineClamp="line-clamp-4"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-2 w-full h-[440px] bg-zinc-900 flex justify-center items-center">
        <Lamp
          lampWidth={200}
          glowWidth={30}
          size={4}
          color={[255, 99, 71]} // Tomato Red
          glowColor={[255, 99, 71]}
        />
        <Lamp
          lampWidth={200}
          glowWidth={30}
          size={4}
          color={[138, 43, 226]} // Blue Violet
          glowColor={[138, 43, 226]}
        />
        <Lamp
          lampWidth={200}
          glowWidth={30}
          size={4}
          color={[60, 179, 113]} // Medium Sea Green
          glowColor={[60, 179, 113]}
        />
        <Lamp
          lampWidth={200}
          glowWidth={30}
          size={4}
          color={[255, 215, 0]} // Gold
          glowColor={[255, 215, 0]}
        />
        <Lamp
          lampWidth={200}
          glowWidth={30}
          size={4}
          color={[255, 20, 147]} // Deep Pink
          glowColor={[255, 20, 147]}
        />
        <Lamp
          lampWidth={200}
          glowWidth={30}
          size={4}
          color={[0, 191, 255]} // Deep Sky Blue
          glowColor={[0, 191, 255]}
        />
        <Lamp
          lampWidth={200}
          glowWidth={30}
          size={4}
          color={[173, 255, 47]} // Green Yellow
          glowColor={[173, 255, 47]}
        />
      </div>
      <div className="bg-zinc-900 grid grid-cols-[1fr_auto] justify-items-center place-items-center p-2">
        <div className="w-[400px] relative flex flex-col justify-center items-center">
          <Lamp
            lampWidth={320}
            glowWidth={70}
            size={4}
            color={[173, 255, 47]} // Green Yellow
            glowColor={[173, 255, 47]}
          />
          <div className="absolute top-3">
            <div className=" text-center font-semibold tracking-wider uppercase bg-gradient-to-r from-lime-800 via-lime-300 to-lime-800 text-transparent bg-clip-text text-6xl">
              Backend
            </div>
          </div>
        </div>
        <div className="my-10 p-5 w-[800px]">
          <Terminal />
        </div>
      </div>
    </div>
  );
}
