import { Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  motion,
  useCycle,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

import MobileMenu from "./MobileMenu";
const inRange = (
  num: number,
  rangeStart: number,
  rangeEnd = 0 // This function is used as a buffer for the scroll event
) =>
  (rangeStart < num && num < rangeEnd) || (rangeEnd < num && num < rangeStart);

export default function Header() {
  const [mobileMenuOpen, toggleMobileMenuOpen] = useCycle(false, true);
  const pictureRef = useRef<HTMLPictureElement>(null);

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // This event controls the header shadow and height
    const previous = scrollY.getPrevious();
    const diff = latest - previous;
    const currentScrolledPixels = scrollY.get();
    if (currentScrolledPixels < 50 || inRange(diff, -20, 20)) {
      return;
    }
    if (latest > previous) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
  });

  useEffect(() => {
    if (pictureRef.current) {
      const sources = pictureRef.current.querySelectorAll("source");
      sources.forEach((source) => {
        const srcset = source.srcset;
        source.removeAttribute("srcset");
        source.setAttribute("srcset", `${srcset}?t=${new Date().getTime()}`);
      });
    }
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 origin-top bg-white transition-all duration-300  ${
        scrollDirection === "down" ? "shadow-md " : ""
      }`}
    >
      <div
        className={`z-30 w-full origin-top bg-gradient-to-r from-[#C10682] to-[#0A99B9] transition-all duration-300 ${
          scrollDirection === "down" ? "h-2" : "h-3"
        }`}
      />
      <nav
        className={`mx-auto hidden max-w-[1800px] origin-top items-center justify-between transition-all duration-300 lg:flex lg:px-8 ${
          scrollDirection === "down" ? "p-1" : "p-6"
        }`}
        aria-label="Global"
      >
        <div className="z-40 flex lg:flex-1">
          <motion.button
            initial={{ opacity: 1 }}
            onClick={() => (mobileMenuOpen ? toggleMobileMenuOpen() : null)}
            className="z-40 flex flex-col items-center justify-center outline-none cursor-pointer focus:outline-none sm:right-4"
          >
            <Link href="/">
              <picture ref={pictureRef}>
                <source
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1616105305/Color%20Mill%20Design/color-mill-animated-logo_bxjcpm.webp"
                  type="image/webp"
                />
                <source
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1639014317/Color%20Mill%20Design/ColorMillLogoHeader-NoText_nvtcqj.png"
                  type="image/png"
                />
                <img
                  className={`origin-top transition-all duration-300 ${
                    scrollDirection === "down"
                      ? "h-12 sm:h-16 lg:h-20 "
                      : "h-20 sm:h-24 lg:h-36"
                  }`}
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1639014317/Color%20Mill%20Design/ColorMillLogoHeader-NoText_nvtcqj.png"
                  alt="Color Mill logo"
                />
              </picture>
            </Link>
          </motion.button>
        </div>

        <Popover.Group className="z-30 hidden lg:flex lg:gap-x-12">
          <Link
            href="/work"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          {/* <Link
            href="/purpose"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            Purpose
          </Link> */}
          <Link
            href="/news"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            News
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
              href="/contact"
              className=""
            >
          <button
            type="button"
            className="relative text-lg font-semibold leading-6 text-[#625BE4] inline-flex items-center gap-x-1.5 rounded-md border-2 border-[#625BE4] px-4 py-3  shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            
              Contact
            
          </button>
          </Link>
        </div>
      </nav>

      <MobileMenu/>
    </header>
  );
}
