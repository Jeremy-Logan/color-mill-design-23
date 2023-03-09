import React from "react";
import { InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <div className="mt-12 md:mt-24 flex w-full items-center justify-between bg-gradient-to-r from-[#C10682] via-purple-500 to-[#0A99B9] p-4">
      <div className="md:flex-row flex flex-col justify-between items-start mx-auto md:items-center gap-2 md:gap-4 w-full max-w-[1400px]">
        <div className="md:flex-row flex flex-col justify-start md:items-center md:gap-8">
        <h2 className="text-xl text-left font-semibold text-white md:text-2xl">
          Color Mill Design
        </h2>
        <h3 className=" text-left text-sm font-medium text-white md:text-lg">
          339 E Redwood Ave. - Fort Bragg, CA 95437 - 707.964.9645
        </h3></div>
        <div className="relative h-8 w-8">
        <InstagramIcon color="white" />
      </div>
      </div>
      
    </div>
  );
}
