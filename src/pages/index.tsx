import { motion } from "framer-motion";
import _ from "lodash";
import type { GetStaticProps } from "next";
import Img from "next/image";

import BlogPreviewSection from '../components/BlogPreviewSection';
import HexGrid from "../components/HexGrid";
import InstagramSection from "../components/InstagramSection";
import PageLayout from "../components/PageLayout";
import ProcessSection from "../components/ProcessSection";
import TestimonialSection from "../components/TestimonialSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import { POST_DATA_QUERY } from "../lib/queries";
import { sanityClient } from "../lib/sanity-server";
import type { PageData } from "../lib/types";


interface PageProps {
  postData: PageData | null
  feed: any
  preview: boolean;
  slug: string | null;
  token: string | null;
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



const Home = ( props: PageProps) => {
  const posts = _.flatMap(props.postData);
  const firstThreePosts = posts.slice(0, 3);
  return (
    <>
      <PageLayout
        title="Home"
        description="Discover Color Mill Design's tailored brand strategy, web design & development, and graphic design services that empower nonprofits and small businesses to create meaningful impact."
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
              style={{ objectFit: "contain" }} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.55, ease: "easeIn" }}
            style={{ lineHeight: "1.2em" }}
            className=" 2xl:6xl mx-auto mb-12 w-10/12 text-left font-serif text-2xl font-black text-black sm:w-2/3 sm:text-3xl md:mt-8 md:mb-36 md:text-center lg:w-7/12 lg:text-4xl xl:mt-24 xl:w-1/2 xl:text-4xl 2xl:text-5xl"
          >
            A boutique design agency, dedicated to empowering {" "}
            <br className="hidden sm:block lg:hidden" /> purpose-driven visionaries.
          </motion.h1>
          <HexGrid />
          <WhatWeDoSection />
          <ProcessSection />
          <TestimonialSection {...testimonialSectionContent} />
          <div className='h-8'></div>
          <BlogPreviewSection posts={firstThreePosts} title="Featured Articles & News" />
          <InstagramSection {...props.feed} />
        </main>
      </PageLayout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const url = `https://feeds.behold.so/tXuTH17S5apHkjYNR7Zv`;
  const instagram = await fetch(url);
  const postData = await sanityClient.fetch<PageData | null>(POST_DATA_QUERY);

  const feed = await instagram.json();

  return {
    props: {
      feed,
      postData
    },
  };
};
