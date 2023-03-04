import { useCycle, motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Link from "next/link";
import { useRef, useEffect } from "react";

const menu = {
  closed: {
    clipPath: "circle(50px at 36px 36px)",
    opacity: 0,
    transition: {
      delay: 0.6,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    clipPath: `circle(50px at 36px 36px)`,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      restDelta: 2,
    },
  },
};

const logo = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <>
      <div className="z-50 h-12 overflow-hidden bg-white md:h-36 ">
        
        <motion.div>
          <motion.nav
            className=" z-30 "
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
            // custom={height}
            ref={containerRef}
          >
            <motion.div
              className={`absolute top-0 left-0 bottom-0 z-50 h-24 w-24 bg-cyan-300`}
              variants={menu}
            />
            <MenuToggle toggle={() => toggleOpen()} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 0, 1] }}
            >
              <Navigation toggle={() => toggleOpen()} />
            </motion.div>
          </motion.nav>
          <div className="bg-gradient-to-r from-[#C10682] to-[#0A99B9] w-screen h-3 "></div>
          <motion.button
            initial={{ opacity: 1 }}
            variants={logo}
            className="absolute top-4 right-2 z-10 ml-24 flex flex-col items-center justify-center outline-none focus:outline-none sm:right-4 "
          >
            <Link href="/">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1616105305/Color%20Mill%20Design/color-mill-animated-logo_bxjcpm.webp"
                  type="image/webp"
                />
                <source
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1639014317/Color%20Mill%20Design/ColorMillLogoHeader-NoText_nvtcqj.png"
                  type="image/png"
                />
                <img
                  className="h-20 sm:h-36"
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1639014317/Color%20Mill%20Design/ColorMillLogoHeader-NoText_nvtcqj.png"
                  alt="Color Mill logo"
                />
              </picture>
            </Link>
            <Link href="/">
              <h1 className="my-auto hidden text-2xl font-bold md:block md:text-3xl lg:text-4xl">
                Color Mill Design
              </h1>
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}
