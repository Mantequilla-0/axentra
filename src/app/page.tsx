import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WebDev } from "@/components/sections/WebDev";
import { Software } from "@/components/sections/Software";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { WhyAxentra } from "@/components/sections/WhyAxentra";
import { CtaBand } from "@/components/sections/CtaBand";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />

      <div id="soluciones">
        <WebDev />
        <Software />
      </div>

      <Projects />
      <Process />
      <WhyAxentra />
      <CtaBand />
      <Contact />
    </>
  );
}
