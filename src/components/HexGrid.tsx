import Hexagon from "./Hexagon";
import { motion } from "framer-motion";

const outlineGradient =
  "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #0B6AEA 4.37%, #9B51E0 22.78%, #EB5757 35.37%, #B38E74 50.38%, #5F9261 57.65%, #219653 62.97%, #F2994A 79.92%, #7107D5 96.39%)";

export default function HexGrid() {
  const delayArray: number[] = [];
  for (let i = 0; i <= 24; i++) {
    delayArray.push(i * 0.02);
  }
  return (
    <div className="relative flex h-[500px] w-[300vw] items-start overflow-hidden sm:w-[385vw] md:w-[300vw] lg:w-[245vw] xl:w-[225vw] 2xl:w-[150vw]">
      <div className="flex w-full items-center justify-center gap-16">
        <div
          className="relative z-30 origin-top rounded-tl-3xl rounded-br-3xl p-0.5 transition-all duration-200 ease-in-out hover:scale-105 hover:p-1 cursor-pointer"
          style={{
            background: outlineGradient,
          }}
        >
          <div className=" w-full origin-top rounded-tl-3xl rounded-br-3xl bg-white py-14 px-12 ">
            <h2 className="text-center text-4xl font-medium">
              NON-PROFIT
              <br />
              SPECIALISTS
            </h2>
          </div>
        </div>
        <div
          className="relative z-30 origin-top rounded-tr-3xl rounded-bl-3xl p-0.5 transition-all duration-200 ease-in-out hover:scale-105 hover:p-1 cursor-pointer"
          style={{
            background: outlineGradient,
          }}
        >
          <div className=" w-full rounded-tr-3xl rounded-bl-3xl bg-white py-14 px-12">
            <h2 className="text-center text-4xl font-medium">
              BRAND
              <br />
              INNOVATORS
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute my-auto h-[500px] w-full">
        <motion.div className="absolute flex">
          {delayArray.map((delay, i) => (
            <Hexagon delay={delay} key={i} />
          ))}
        </motion.div>
        <motion.div className="absolute -mt-0 flex translate-y-[100%] translate-x-[-2.1%] transform">
          {delayArray.map((delay, i) => (
            <Hexagon delay={delay} key={i} />
          ))}
        </motion.div>
        <motion.div className="absolute -mt-0 flex translate-y-[200%] transform">
          {delayArray.map((delay, i) => (
            <Hexagon delay={delay} key={i} />
          ))}
        </motion.div>
      </div>
      {/* <motion.div className='flex absolute transform translate-y-[300%] translate-x-[-2.4%] -mt-1'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
			<motion.div className='flex absolute transform translate-y-[400%] -mt-1 2xl:hidden'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute transform translate-y-[500%] translate-x-[-2.4%] -mt-1 2xl:hidden'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div> */}
    </div>
  );
}
