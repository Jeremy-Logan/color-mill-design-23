import { motion } from "framer-motion";
import type { GetStaticProps } from "next";
import Img from "next/image";

import HexGrid from "../components/HexGrid";
import InstagramSection from "../components/InstagramSection";
import PageLayout from "../components/PageLayout";
import ProcessSection from "../components/ProcessSection";
import TestimonialSection from "../components/TestimonialSection";
import WhatWeDoSection from "../components/WhatWeDoSection";

interface Feed {
  feed: {
    data: {
      id: string;
      caption: string;
      media_url: string;
      timestamp: string;
      media_type: string;
      permalink: string;
    }[];
  };
}
const primaryColor = "#002856";
const testimonialSectionContent = {
  imageUrl:
    "/v1677804674/color-mill-design-2023/Amanda_Friscia-Headshot_ra712c.png",
  primaryColor: primaryColor,
  hexagonColors: [
    "#0A99B9",
    "#7107D5",
    "#5F9261",
    "#F2994A",
    "#C10682",
    "#013C81",
    "#77CAE4",
  ],
  imageAlt: "Amanda Friscia - Executive Director, Fort Bragg Food Bank",
  heading:
    "\"The Color Mill's work increased donations and added vibrancy to our entire organization.\"",
  attribution: "Amanda Friscia - Executive Director, Fort Bragg Food Bank",
};

const Home = ({ feed }: Feed) => {
  return (
    <>
      <PageLayout
        title="Color Mill Design | Branding, Web Design, and Graphic Design"
        description="A purpose driven boutique design agency working for people who make a difference."
      >
        <main className="oveflow-hidden bg-white sm:mt-[100px] md:mt-12 lg:mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeIn" }}
            className="oveflow-hidden relative mx-auto h-20 w-11/12 md:h-24"
          >
            <Img
              src="/gradientIndexHeader.svg"
              alt="Color Mill Design"
              fill
              style={{ objectFit: "contain" }}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.55, ease: "easeIn" }}
            style={{ lineHeight: "1.2em" }}
            className=" 2xl:6xl mx-auto mb-12 w-10/12 text-left font-serif text-2xl font-black text-black sm:w-2/3 sm:text-3xl md:mt-8 md:mb-36 md:text-center lg:w-7/12 lg:text-4xl xl:mt-24 xl:w-1/2 xl:text-4xl 2xl:text-5xl"
          >
            A purpose driven boutique design agency working for people{" "}
            <br className="hidden sm:block lg:hidden" /> who make a difference.
          </motion.h1>
          <HexGrid />
          <WhatWeDoSection />
          <ProcessSection />
          <TestimonialSection {...testimonialSectionContent} />
          <InstagramSection {...feed} />
        </main>
      </PageLayout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${
    process.env.INSTAGRAM_KEY as string
  }`;
  const data = await fetch(url);

  const feed: Feed = await data.json();

  return {
    props: {
      feed,
    },
  };
};
