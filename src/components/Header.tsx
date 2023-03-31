import {
  Dialog,
  Menu,
  Popover,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  AnimatePresence,
  motion,
  useCycle,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { Fragment, useEffect,useRef, useState } from "react";

const categories = [
  {
    name: "Non-Profits",
    description: "Building brands with purpose",
    href: "/non-profits",
    caseStudies: [
      {
        name: "Fort Bragg Food Bank",
        href: "/fort-bragg-food-bank",
        primaryColor: "#002856"
      },
      {
        name: "Redwood Coast Seniors",
        href: "/redwood-coast-seniors",
        primaryColor: "#450265"
      },
      {
        name: "Mendo Parks",
        href: "/mendo-parks",
        primaryColor: "#01657D"
      },
      {
        name: "Point Arena Lighthouse",
        href: "/point-arena-lighthouse",
        primaryColor: "#008FB1"
      },
    ],
  },
  {
    name: "Businesses",
    description: "Speak directly to your customers",
    href: "/businesses",
    caseStudies: [
      {
        name: "Mendocino Spirits",
        href: "/mendocino-spirits",
        primaryColor: "#008FB1"
      },
    ],
  },
];
// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(" ");
// }

const inRange = (num: number, rangeStart: number, rangeEnd = 0) => // This function is used as a buffer for the scroll event
  (rangeStart < num && num < rangeEnd) || (rangeEnd < num && num < rangeStart);

export default function Header() {
  const [mobileMenuOpen, toggleMobileMenuOpen] = useCycle(false, true);
  const pictureRef = useRef<HTMLPictureElement>(null);
  const [isPageLoaded, setPageLoaded] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const { scrollY } = useScroll();
  

  useMotionValueEvent(scrollY, "change", (latest) => { // This event controls the header shadow and height
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
 
  useEffect(() => {
    if (pictureRef.current) {
      const sources = pictureRef.current.querySelectorAll("source");
      sources.forEach((source) => {
        const srcset = source.srcset;
        source.removeAttribute("srcset");
        source.setAttribute("srcset", `${srcset}?t=${new Date().getTime()}`);
      });
    }

    // Set `isPageLoaded` to `true` when the page finishes loading
    window.addEventListener("load", () => setPageLoaded(true));

    // Clean up the event listener
    return () => {
      window.removeEventListener("load", () => setPageLoaded(true));
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 origin-top bg-white transition-all duration-300 ${
        scrollDirection === "down" ? "shadow-md " : ""
      }`}
    >
      <div
        className={`z-50  w-full origin-top bg-gradient-to-r from-[#C10682] to-[#0A99B9] transition-all duration-300 ${
          scrollDirection === "down" ? "h-2" : "h-3"
        }`}
      />
      <nav
        className={`mx-auto flex max-w-[1800px] origin-top items-center justify-between transition-all duration-300 lg:px-8 ${
          scrollDirection === "down" ? "p-1" : "p-6"
        }`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <motion.button
            initial={{ opacity: 1 }}
            onClick={() => (mobileMenuOpen ? toggleMobileMenuOpen() : null)}
            className="z-40 flex flex-col items-center justify-center outline-none focus:outline-none sm:right-4"
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
            className="group relative z-40"
            onClick={() => toggleMobileMenuOpen()}
          >
            <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden  ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 group-focus:ring-4">
              <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
                <div
                  className={`h-[2px] w-7 origin-left transform bg-gray-700 transition-all duration-300 ${
                    mobileMenuOpen ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`h-[2px] w-7 transform rounded bg-gray-700 transition-all delay-75 duration-300 ${
                    mobileMenuOpen ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`h-[2px] w-7 origin-left transform bg-gray-700 transition-all delay-150 duration-300 ${
                    mobileMenuOpen ? "translate-x-10" : ""
                  }`}
                ></div>

                <div
                  className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500  ${
                    mobileMenuOpen ? "w-12 translate-x-0" : ""
                  }`}
                >
                  <div
                    className={`absolute h-[2px] w-5 rotate-0 transform bg-gray-700 transition-all delay-300 duration-500 ${
                      mobileMenuOpen ? "rotate-45" : ""
                    }`}
                  ></div>
                  <div
                    className={`absolute h-[2px] w-5 -rotate-0 transform bg-gray-700 transition-all delay-300 duration-500 ${
                      mobileMenuOpen ? "-rotate-45" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </div>

        <Popover.Group className="z-30 hidden lg:flex lg:gap-x-12">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
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
              <Menu.Items className="absolute left-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-4">
                  {categories.map((item) => (
                    <Menu.Item key={item.name}>
                      <div
                        key={item.name}
                        className=" relative flex items-center gap-x-6 p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                          <div className="flex flex-col">
                              {item.caseStudies &&
                                item.caseStudies.map((caseStudy) => (
                                  
                                    <Link
                                      href={caseStudy.href} key={caseStudy.name} 
                                      className="z-50 my-2 text-sm font-medium bg-slate-100 rounded-md p-1 hover:bg-slate-200" style={{color: caseStudy.primaryColor}}
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
          <button
            type="button"
            className="relative inline-flex items-center gap-x-1.5 rounded-md border-2 border-[#625BE4] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <Link
              href="/contact"
              className="text-lg font-semibold leading-6 text-[#625BE4]"
            >
              Contact
            </Link>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            key="menuKey"
            as={motion.div}
            open={mobileMenuOpen}
            onClose={() => null}
            initial={{ opacity: 0, translateX: "100%" }}
            animate={{
              opacity: 1,
              translateX: "0",
              transition: { duration: 0.3 },
            }}
            exit={{
              opacity: 0,
              translateX: "100%",
              transition: { duration: 0.5 },
            }}
            className="fixed inset-0 z-10 origin-right"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <div
                  className={`${scrollDirection === "down" ? "h-12 " : "h-24"}`}
                />
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {/* <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                            Work
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none text-[#06b2a0]"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...categories].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                <Link
                                  href={item.href}
                                  onClick={() =>
                                    isPageLoaded && toggleMobileMenuOpen()
                                  }
                                >
                                  {item.name}
                                </Link>
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure> */}
                    <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
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
              <Menu.Items className="absolute left-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-4">
                  {categories.map((item) => (
                    <Menu.Item key={item.name}>
                      <div
                        key={item.name}
                        className=" relative flex items-center gap-x-6 p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                          <div className="flex flex-col">
                              {item.caseStudies &&
                                item.caseStudies.map((caseStudy) => (
                                  
                                    <Link
                                      href={caseStudy.href} key={caseStudy.name} 
                                      className="z-50 my-2 text-sm font-medium bg-slate-100 rounded-md p-1 hover:bg-slate-200" style={{color: caseStudy.primaryColor}}
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
                    <Link
                      href="/about"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => isPageLoaded && toggleMobileMenuOpen()}
                    >
                      About
                    </Link>
                    {/* <Link
                      href="/purpose"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => isPageLoaded && toggleMobileMenuOpen()}
                    >
                      Purpose
                    </Link> */}
                    <Link
                      href="/news"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => isPageLoaded && toggleMobileMenuOpen()}
                    >
                      News
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => isPageLoaded && toggleMobileMenuOpen()}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
