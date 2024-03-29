import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import { getCloudinaryImageUrl } from "../utils/cloudinary";
import Image from "./Image";


type Props = {
    hexagonColors: string[];
    imageUrl: string;
    imageAlt: string;
    heading: string;
    attribution: string;
    primaryColor: string;
  };
const delayArray: number[] = [];
for (let i = 0; i <= 6; i++) {
  delayArray.push(i * 0.05);
}

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
const HexRow = ({ colors }: { colors: string[] }) => {
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



const TestimonialSection = (props: Props) => {
    const {imageUrl, imageAlt, heading, hexagonColors, attribution, primaryColor} = props;
    

  return (
    <div className="mt-12 md:mt-24">
      
      <div className="md:mt-24 2xl:mb-10 w-[75vw] md:w-[20vw] 2xl:w-[25vw]">
        <HexRow colors={hexagonColors}/>
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col justify-center gap-2 px-6 md:px-10 md:flex-row">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-2/3 px-2 text-left hidden md:block">
            <h3 className="mb-4 lg:text-3xl xl:text-4xl font-semibold italic" style={{color: primaryColor}}>
              {heading}
            </h3>
            <h4 className="md:text-xl italic">
             {attribution}
            </h4>
          </div>
          <div className="relative m-6 md:my-0 aspect-square h-[340px] md:h-[400px] shadow-xl">
            <Image
              src={getCloudinaryImageUrl(`/q_1,f_auto${imageUrl}`)}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1024px) 25vw,
                "
              
            />
          </div>
          <div className=" text-left md:hidden">
            <h3 className="mb-2 text-2xl font-semibold italic" style={{color: primaryColor}}>
              {heading}
            </h3>
            <h4 className=" italic">
             {attribution}
            </h4>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="mt-6 md:mt-16 2xl:mt-24 w-[75vw] md:w-[20vw] 2xl:w-[25vw] transform rotate-180">
          <HexRow colors={hexagonColors}/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
