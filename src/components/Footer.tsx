import React from "react";

import { GnomeWithLanternIcon } from "./icons";
import { InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <>
      <div className="mt-12 relative h-36 w-full md:mt-24 overflow-hidden">
        <div className="absolute right-1 -mr-4 bottom-0 w-24 h-24 sm:h-36 sm:w-36">
          <GnomeWithLanternIcon color={"#00c16d"} />
        </div>
      </div>
      <div className=" flex w-full items-center justify-between bg-gradient-to-r from-[#C10682] via-purple-500 to-[#0A99B9] p-4 ">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-2 md:flex-row md:items-center md:gap-4">
          <div className="flex flex-col justify-start md:flex-row md:items-center md:gap-8">
            <h2 className="text-left text-xl font-semibold text-white md:text-2xl">
              Color Mill Design
            </h2>
            <h3 className=" text-left text-sm font-medium text-white md:text-lg">
              339 E Redwood Ave. - Fort Bragg, CA 95437 - 707.964.9645
            </h3>
          </div>
          <div className="relative h-8 w-8">
            <a
              href="https://www.instagram.com/the_colormill/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
