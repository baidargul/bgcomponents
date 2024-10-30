import BackgroundWave from "@/components/Experimental/_components/BackgroundWave";
import MouseGravity from "@/components/Experimental/_components/MouseGravity";
import Section from "@/components/Experimental/_components/Section";
import Seperator from "@/components/Experimental/_components/Seperator";
import WindowImage from "@/components/Experimental/_components/WindowImage";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-[100dvh] overflow-hidden">
      <div className="grid grid-cols-3 justify-items-center p-10 group">
        <div className="group-hover:skew-x-0 group-hover:scale-100 group-hover:blur-0 blur-sm scale-0 skew-x-2 transition-all duration-1000   ease-in-out">
          <MouseGravity>
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
          <MouseGravity intensity={80}>
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
          <MouseGravity>
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
        </div>
        <WindowImage size="medium" />
        <div className="group-hover:skew-x-0 group-hover:scale-100 group-hover:blur-0 blur-sm scale-0 -skew-x-2 transition-all duration-1000 ease-in-out">
          <MouseGravity intensity={15}>
            <NewsSection
              style="focused"
              title="Years of experience"
              description="8"
            />
          </MouseGravity>
          <MouseGravity intensity={20}>
            <NewsSection
              style="focused"
              title="Satisfied Clients"
              description="100%"
            />
          </MouseGravity>
          <MouseGravity intensity={25}>
            <NewsSection
              style="focused"
              title="Clients worldwide"
              description="36"
            />
          </MouseGravity>
          <MouseGravity intensity={40}>
            <NewsSection
              style="focused"
              title="Projects Closed"
              description="375"
            />
          </MouseGravity>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <BackgroundWave />
      </div>
      {/* <div className="mt-24">
        <Section
          isFirst
          backgroundColor="bg-white"
          color="bg-zinc-100"
          zIndex={3}
        >
          This is a section
        </Section>
        <Section zIndex={2} backgroundColor="bg-white" color="bg-zinc-200">
          <Seperator
            className="tracking-widest"
            label="Projects"
            labelBackgroundColor="bg-zinc-300"
          />
          <div className="flex gap-10 justify-center items-center mt-10">
            <WindowImage size="small" />
            <WindowImage size="small" />
            <WindowImage size="small" />
            <WindowImage size="small" />
            <WindowImage size="small" />
            <WindowImage size="small" />
            <WindowImage size="small" />
            <WindowImage size="small" />
            <WindowImage size="small" />
            <WindowImage size="small" />
          </div>
        </Section>
      </div> */}
    </div>
  );
}
