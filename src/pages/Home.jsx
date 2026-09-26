import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import CTA from "../components/sections/CTA";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

function Home() {
  return (
    <>
      <Helmet>
        <title>John Mark M. Frias | Full Stack Developer</title>
        <meta
          name="description"
          content="Full stack developer based in Lucena City, Quezon, specializing in WordPress builds, React, and Tailwind CSS."
        />
        <link rel="canonical" href="https://jmfrias.dev/" />
      </Helmet>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <CTA />
    </>
  );
}

export default Home;
