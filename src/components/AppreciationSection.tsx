import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import { getCloudinaryImageUrl } from "../utils/cloudinary";
import Image from "./Image";

// type Props = {}
const delayArray: number[] = [];
for (let i = 0; i <= 6; i++) {
  delayArray.push(i * 0.05);
}

const colors = [
  "#0A99B9",
  "#7107D5",
  "#5F9261",
  "#F2994A",
  "#C10682",
  "#013C81",
  "#77CAE4",
];
const Hexagon = ({ delay, color, isInView }: { delay: number; color?: string, isInView: boolean }) => {
  return (
    <motion.div
      animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0}}
      transition={{ delay: delay, duration: 0.55, ease: "easeIn" }}
      className=" flex"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 280 280"
      >
        <motion.polygon
          style={{ fill: color }}
          points="261.2,210 261.2,70 140,0 18.8,70 18.8,210 140,280"
        />
      </motion.svg>
    </motion.div>
  );
};
const HexRow = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    
  return (
    <motion.div className="flex" ref={ref} >
      {delayArray.map((delay, i) => (
        <Hexagon delay={delay} key={i} color={colors[i]} isInView={isInView}/>
      ))}
    </motion.div>
  );
};



const AppreciationSection = () => {
   


  return (
    <div className="mt-12 md:mt-48">
      
      <div className="md:mt-24 w-[75vw] md:w-[20vw]">
        <HexRow />
      </div>
      <div className="mx-auto  flex max-w-[1600px] flex-col justify-center gap-2 px-10 sm:flex-row">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-2/3 text-left hidden md:block">
            <h3 className="mb-4 text-5xl font-semibold italic text-[#002856]">
              &quot;The Color Mill&apos;s work increased donations and added
              vibrancy to our entire organization.&quot;
            </h3>
            <h4 className="md:text-xl italic">
              Amanda Friscia - Executive Director, Fort Bragg Food Bank
            </h4>
          </div>
          <div className="relative my-6 md:my-0 aspect-square h-[400px] shadow-xl">
            <Image
              src={getCloudinaryImageUrl(`/q_1,f_auto/v1677804674/color-mill-design-2023/Amanda_Friscia-Headshot_ra712c.png`
              )}
              alt="Amanda Friscia"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1024px) 25vw,"
            />
          </div>
          <div className=" text-left md:hidden">
            <h3 className="mb-2 text-2xl  font-semibold italic text-[#002856]">
            &quot;The Color Mill&apos;s work increased donations and added
              vibrancy to our entire organization.&quot;
            </h3>
            <h4 className=" italic">
            Amanda Friscia - Executive Director, Fort Bragg Food Bank
            </h4>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="mt-6 md:mt-16 w-[75vw] md:w-[20vw] transform rotate-180">
          <HexRow />
        </div>
      </div>
    </div>
  );
};

export default AppreciationSection;
