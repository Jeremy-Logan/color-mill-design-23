import type { GetStaticProps } from "next";
import PageLayout from "../components/PageLayout";
import HexGrid from "../components/HexGrid";
import Img from "next/image";
import { motion } from "framer-motion";
import WhatWeDoSection from "../components/WhatWeDoSection";
import ProcessSection from "../components/ProcessSection";
import InstagramSection from "../components/InstagramSection";
import AppreciationSection from "../components/AppreciationSection";

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

const Home = ({ feed }: Feed) => {
  return (
    <>
      <PageLayout
        title="Color Mill Design"
        description="Maximize your impact with Color Mill Design."
      >
        <main className="oveflow-hidden bg-white sm:mt-[100px] md:mt-12 lg:mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeIn" }}
            className="oveflow-hidden relative h-20 md:h-24 w-11/12 mx-auto"
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
            transition={{ delay: 0.1, duration: 0.55, ease: "easeIn" }} style={{lineHeight: '1.2em'}}
            className=" 2xl:6xl mx-auto md:mt-8 mb-12 md:mb-36 w-10/12 text-left font-serif text-2xl font-black text-black sm:w-2/3 sm:text-3xl md:text-center lg:w-7/12 lg:text-4xl xl:mt-24 xl:w-1/2 xl:text-4xl 2xl:text-5xl"
          >
            A purpose driven boutique design agency working for people <br/> who make
            a difference.
          </motion.h1>
          <HexGrid />
          <WhatWeDoSection />
          <ProcessSection />
          <AppreciationSection />
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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const feed: Feed = await data.json();

  return {
    props: {
      feed,
    },
  };
};
