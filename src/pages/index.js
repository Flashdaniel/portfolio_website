import React from "react";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Education from "../components/Education/Education";
import About from "../components/About/About";
import OtherProjects from "../components/OtherProjects/OtherProjects";
import GitHub from "../components/GitHub/GitHub";
import Contact from "../components/Contact/Contact";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Daniel Nweze | Frontend Engineer</title>
        <meta
          name="description"
          content="Daniel Nweze is a Frontend Engineer building accessible, scalable, and user-focused digital products using React, TypeScript, Next.js, and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F1624" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Daniel Nweze | Frontend Engineer" />
        <meta
          property="og:description"
          content="Frontend Engineer building accessible, scalable, and user-focused digital products with React, TypeScript, and Next.js."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daniel Nweze | Frontend Engineer" />
        <meta
          name="twitter:description"
          content="Frontend Engineer building accessible, scalable, and user-focused digital products with React, TypeScript, and Next.js."
        />
        <meta name="twitter:creator" content="@iamflashdaniel" />
      </Head>

      {/* 1. Professional Identity (Above the fold, instant render) */}
      <Hero />

      {/* 2. Professional Experience */}
      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      {/* 3. Strongest Real Projects */}
      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      {/* 4. Engineering Skills */}
      <ScrollReveal>
        <Technologies />
      </ScrollReveal>

      {/* 5. Education */}
      <ScrollReveal>
        <Education />
      </ScrollReveal>

      {/* 6. About */}
      <ScrollReveal>
        <About />
      </ScrollReveal>

      {/* 7. Other Projects */}
      <ScrollReveal>
        <OtherProjects />
      </ScrollReveal>

      {/* 8. Open Source & GitHub */}
      <ScrollReveal>
        <GitHub />
      </ScrollReveal>

      {/* 9. Contact */}
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </Layout>
  );
};

export default Home;

