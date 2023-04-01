import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

interface CategoriesProps {
  categories: {
    name: string;
    href: string;
    description: string;
    caseStudies: {
      name: string;
      href: string;
      primaryColor: string;
    }[];
  }[];
}

const inRange = (
  num: number,
  rangeStart: number,
  rangeEnd = 0 // This function is used as a buffer for the scroll event
) =>
  (rangeStart < num && num < rangeEnd) || (rangeEnd < num && num < rangeStart);

const MobileMenu = ({ categories }: CategoriesProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pictureRef = useRef<HTMLPictureElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // This event controls the header shadow and height
    const previous = scrollY.getPrevious();
    const diff = latest - previous;
    const currentScrolledPixels = scrollY.get();
    if (currentScrolledPixels < 40 || inRange(diff, -10, 10)) {
      return;
    }
    if (latest > previous) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
    <nav className="relative mr-2 flex lg:hidden">
      <div className="z-40 flex w-full items-center justify-between">
        <motion.button
          initial={{ opacity: 1 }}
          onClick={() => (menuOpen ? toggleMenu() : null)}
          className="z-40 flex cursor-pointer flex-col items-center justify-center outline-none focus:outline-none sm:right-4"
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
      <div className=" flex lg:hidden">
        <button
          className="group relative z-50 cursor-pointer"
          onClick={() => toggleMenu()}
        >
          <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 group-focus:ring-4">
            <div className="flex h-[25px] w-[25px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
              <div
                className={`h-[2px] w-7 origin-left transform bg-gray-700 transition-all duration-300 ${
                  menuOpen ? "translate-x-10" : ""
                }`}
              ></div>
              <div
                className={`h-[2px] w-7 transform rounded bg-gray-700 transition-all delay-75 duration-300 ${
                  menuOpen ? "translate-x-10" : ""
                }`}
              ></div>
              <div
                className={`h-[2px] w-7 origin-left transform bg-gray-700 transition-all delay-150 duration-300 ${
                  menuOpen ? "translate-x-10" : ""
                }`}
              ></div>

              <div
                className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500  ${
                  menuOpen ? "w-12 translate-x-0" : ""
                }`}
              >
                <div
                  className={`absolute h-[2px] w-5 rotate-0 transform bg-gray-700 transition-all delay-300 duration-500 ${
                    menuOpen ? "rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`absolute h-[2px] w-5 -rotate-0 transform bg-gray-700 transition-all delay-300 duration-500 ${
                    menuOpen ? "-rotate-45" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <Transition
            show={menuOpen}
            enter="transition duration-500 ease-out"
            enterFrom="transform scale-x-60 opacity-0"
            enterTo="transform scale-x-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-x-100 opacity-100"
            leaveTo="transform scale-x-60 opacity-0"
            className={`${
                menuOpen ? "block" : "hidden"
              } absolute top-full left-0 z-10 w-full bg-white px-6 shadow-lg`}
          >
        <div className="py-6 w-full">
          <Menu as="div">
            <Menu.Button className="flex  items-center gap-x-1 text-base font-semibold leading-6 text-gray-900">
              Work
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-[#06b2a0]"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Menu.Items
                className="absolute left-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                as="div"
              >
                <div className="p-4">
                  {categories.map((item) => (
                    <Menu.Item key={item.name}>
                      <div className="relative flex items-center gap-x-6 p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                          <div className="flex flex-col">
                            {item.caseStudies &&
                              item.caseStudies.map((caseStudy) => (
                                <Link
                                  key={caseStudy.name}
                                  href={caseStudy.href}
                                  className="z-50 my-2 rounded-md bg-slate-100 p-1 text-sm font-medium hover:bg-slate-200"
                                  style={{ color: caseStudy.primaryColor }}
                                >
                                  {caseStudy.name}
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <nav>
          <Link href="/about">
            <button className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              About
            </button>
          </Link>
          <Link href="/news">
            <button className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              News
            </button>
          </Link>
          <div className="py-6">
            <Link href="/contact">
              <button className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Contact
              </button>
            </Link>
          </div>
        </nav>
      </Transition>
    </nav>
  );
};

export default MobileMenu;
