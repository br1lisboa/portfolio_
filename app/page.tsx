import { Metadata } from "next";
import {
  About,
  Contact,
  Footer,
  Hero,
  NavBar,
  Portfolio,
  Skills,
} from "./components";
import { FixedBar } from "./components/fixed-bar/FixedBar";

export const metadata: Metadata = {
  title: "Portfolio | Software Developer",
  description: "My personal portfolio website, showcasing my work and skills.",
};

export default function Home() {
  return (
    <div className="h-full relative">
      <FixedBar />
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
