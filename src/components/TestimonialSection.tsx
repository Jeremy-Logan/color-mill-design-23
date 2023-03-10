import React, { useRef } from "react";
import Image from "./Image";
import { getCloudinaryImageUrl } from "../utils/cloudinary";
import { motion, useInView } from "framer-motion";

type Props = {
    hexagonColors: string[];
    imageUrl: string;
    imageAlt: string;
    heading: string;
    attribution: string;
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
    const {imageUrl, imageAlt, heading, hexagonColors, attribution} = props;


  return (
    <div className="mt-36">
      
      <div className="mt-24 w-[20vw]">
        <HexRow colors={hexagonColors}/>
      </div>
      <div className="mx-auto  flex max-w-[1600px] flex-col justify-center gap-2 px-10 sm:flex-row">
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <div className="w-2/3 text-left">
            <h3 className="mb-4 text-5xl font-semibold italic text-[#002856]">
              {heading}
            </h3>
            <h4 className="text-xl italic">
             {attribution}
            </h4>
          </div>
          <div className="relative aspect-square h-[400px] shadow-xl">
            <Image
              src={getCloudinaryImageUrl(imageUrl)}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 45vw,"
              blurDataURL={getCloudinaryImageUrl(`/thumbnail_${imageUrl}`)}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="mt-16 w-[20vw] transform rotate-180">
          <HexRow colors={hexagonColors}/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
