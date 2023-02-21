import { motion } from "framer-motion";
import Link from "next/link";

type links = string[];

type Props = { i: number };

export const MenuItem = ({ i }: Props) => {
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
  const rotate = [0.001, 15, 30, 46, 60];
  const links: links = ["/home", "/contact", "/non-profits", "/", "/"];
  const names = ["Home", "Non-Profits", "Businesses", "Contact", "News"];
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const menuLink = `${links[i]}`;
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const menuName = `${names[i]}`;
  const variants = {
    open: {
      rotate: rotate[i],
      y: 0,
      scaleX: 1,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: 100 },
      },
    },
    closed: {
      rotate: 0,
      width: 0,
      scaleX: [1, 0],
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.li variants={variants}>
      <motion.div
        className="absolute h-[800px] w-[300vw] origin-top-left transform overflow-hidden md:w-[180vw]"
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        style={{ backgroundColor: `${colors[i]}` }}
      >
        {" "}
        <h2 className="m:pl-0 ml-[40vw] mt-2 origin-left rotate-6 transform pl-16 text-4xl font-bold text-white transition duration-300 ease-in-out hover:scale-110 md:mt-4 md:text-6xl lg:mt-6 lg:pl-16 lg:text-7xl xl:mt-[3.2vw] xl:text-8xl">
          <Link href={menuLink}>{menuName}</Link>
        </h2>
      </motion.div>
    </motion.li>
  );
};
