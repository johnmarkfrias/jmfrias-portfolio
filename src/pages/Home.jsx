// src/pages/Home.jsx
// Ito ang pinagsasamahan ng lahat ng homepage sections.
// Ang Helmet dito ay para sa SEO meta tags (title, description) na
// unique kada page — kailangan mo munang i-install: npm install react-helmet-async

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

      <Section className="bg-green-500">
        <Container className="bg-gray-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-yellow-500">Column 1 content</div>
            <div className="bg-red-500">Column 2 content</div>
          </div>
        </Container>
      </Section>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <CTA />
    </>
  );
}

export default Home;
