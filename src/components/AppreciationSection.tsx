import Image from "./Image";
import Img from "next/image";
import { getCloudinaryImageUrl } from "../utils/cloudinary";
import { motion } from "framer-motion";

// type Props = {}
const delayArray: number[] = [];
for (let i = 0; i <= 6; i++) {
  delayArray.push(i * 0.04);
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
const Hexagon = ({ delay, color }: { delay: number; color?: string }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
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
  return (
    <motion.div className="flex">
      {delayArray.map((delay, i) => (
        <Hexagon delay={delay} key={i} color={colors[i]} />
      ))}
    </motion.div>
  );
};

const ProcessSection = () => {
  return (
    <div className="mt-36">
      <h3 className="mb-8 text-center font-serif text-6xl font-black">
        Performance
      </h3>
      <div className="oveflow-hidden relative h-24 w-screen">
        <Img
          src="/appreciation.svg"
          alt="Appreciation"
          fill
          style={{ objectFit: "contain" }}
          sizes="100vw"
        />
      </div>
      <div className="mt-24 w-[20vw]">
        <HexRow />
      </div>
      <div className="mx-auto  flex max-w-[1600px] flex-col justify-center gap-2 px-10 sm:flex-row">
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <div className="w-2/3 text-left">
            <h3 className="mb-4 text-5xl font-semibold italic text-[#002856]">
              &quot;The Color Mill&apos;s work increased donations and added
              vibrancy to our entire organization.&quot;
            </h3>
            <h4 className="text-xl italic">
              Amanda Friscia - Executive Director, Fort Bragg Food Bank
            </h4>
          </div>
          <div className="relative aspect-square h-[400px] shadow-xl">
            <Image
              src={getCloudinaryImageUrl(
                "/v1677804674/Color Mill Design 2023/Amanda_Friscia-Headshot_ra712c.png"
              )}
              alt="Amanda Friscia"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 45vw,"
              blurDataUrl={getCloudinaryImageUrl(
                "/t_placeholder/v1677804674/Color Mill Design 2023/Amanda_Friscia-Headshot_ra712c.png"
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="mt-16 w-[20vw] transform rotate-180">
          <HexRow />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
