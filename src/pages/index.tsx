import { type NextPage } from "next";
import PageLayout from "../components/PageLayout";
import HexGrid from "../components/HexGrid";
import Img from "next/image";
import { motion } from "framer-motion";
import WhatWeDoSection from "../components/WhatWeDoSection";

const Home: NextPage = () => {
  const outlineGradient =
    "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #0B6AEA 4.37%, #9B51E0 22.78%, #EB5757 35.37%, #B38E74 50.38%, #5F9261 57.65%, #219653 62.97%, #F2994A 79.92%, #7107D5 96.39%)";

  return (
    <>
      <PageLayout
        title="Color Mill Design"
        description="Maximize your impact with Color Mill Design."
      >
        <main className="mt-24 flex flex-col items-center justify-start bg-white sm:mt-[160px]">
          <div className="container flex flex-col items-center justify-center px-4 sm:py-16 md:gap-12 ">
            <h1 className="font-serif font-black text-2xl tracking-tight text-black sm:text-[3rem] 2xl:mb-12 lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem]">
              Maximize your impact
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, ease: "easeIn" }}
              className="relative mb-12 min-h-[80px] w-[95vw] sm:min-h-[200px] md:mb-24  2xl:w-[75vw]"
            >
              <Img
                src="/gradientIndexHeader.svg"
                alt="Color Mill Design"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            
            <HexGrid />
            <WhatWeDoSection />
          </div>
        </main>
      </PageLayout>
    </>
  );
};

export default Home;
