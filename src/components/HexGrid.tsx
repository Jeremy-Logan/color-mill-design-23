import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Hexagon from "./Hexagon";

export default function HexGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const delayArray: number[] = [];
  for (let i = 0; i <= 48; i++) {
    delayArray.push(i * 0.01);
  }
  return (
    <div className="" ref={ref}>
      <div className="relative flex h-[160px] sm:h-[150px] md:h-[200px] 2xl:h-[300px] w-[475vw] items-start justify-center overflow-hidden sm:w-[385vw] md:w-[300vw] lg:w-[245vw] xl:w-[225vw] 2xl:w-[150vw]">
        <div className="absolute my-auto h-[500px] w-full sm:mt-0">
          <motion.div className="absolute flex">
            {delayArray.map((delay, i) => (
              <Hexagon delay={delay} key={i} isInView={isInView} />
            ))}
          </motion.div>
          <motion.div className="absolute -mt-0 flex translate-y-[100%] translate-x-[-1%] transform">
            {delayArray.map((delay, i) => (
              <Hexagon delay={delay} key={i} isInView={isInView} />
            ))}
          </motion.div>
          <motion.div className="absolute -mt-0 flex translate-y-[200%] transform">
            {delayArray.map((delay, i) => (
              <Hexagon delay={delay} key={i} isInView={isInView} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
