import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  title: string;
  subHeading: string;
  description: string;
  scope: string;
  primaryColor: string;
  hexagonColors: string[];
};

const delayArray: number[] = [];
for (let i = 0; i <= 4; i++) {
  delayArray.push(i * 0.05);
}

function CaseStudyHeader(props: Props) {
  const { title, primaryColor, hexagonColors, subHeading, description, scope} = props;
  const Hexagon = ({
    delay,
    color,
    isInView,
  }: {
    delay: number;
    color?: string;
    isInView: boolean;
  }) => {
    return (
      <motion.div
        animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
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
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
      <motion.div className="flex" ref={ref}>
        {delayArray.map((delay, i) => (
          <Hexagon
            delay={delay}
            key={i}
            color={colors[i]}
            isInView={isInView}
          />
        ))}
      </motion.div>
    );
  };

  return (
    <div>
      <div
        className="relative flex h-60 w-screen flex-col justify-center gap-4 py-4 text-center"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="sm:opcaity-1 absolute -left-10 z-0 h-0 w-60 rotate-90 opacity-40 ">
          <HexRow colors={hexagonColors} />
        </div>
        <h1 className="z-10 mx-4 font-serif text-3xl font-black text-white sm:text-4xl lg:text-6xl tracking-wide leading-relaxed">
          {title}
        </h1>
        <h2 className="z-10 mx-4 text-lg italic text-white sm:text-xl lg:text-3xl tracking-wide leading-relaxed">
          {subHeading}
        </h2>
      </div>
      <div className="mx-2 my-12 flex flex-col justify-around sm:flex-row md:mx-12">
        <div className="w-full md:w-1/3">
          <p className="md:text-xl font-medium tracking-wide leading-relaxed mb-8">{description}</p>
        </div>
        <div className="w-full md:w-1/3">
          <h3
            className="mb-1 text-lg md:text-xl font-semibold uppercase"
            style={{ color: primaryColor }}
          >
            Scope
          </h3>
          <p className="md:text-xl font-medium tracking-wide leading-relaxed">{scope}</p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyHeader;
