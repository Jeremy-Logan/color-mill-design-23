import React from "react";
import { InstagramIcon } from "./icons";


export default function Footer() {
  return (
    <div className="mt-24 flex w-full justify-between items-center bg-gradient-to-r from-[#C10682] via-purple-500 to-[#0A99B9] p-4">
      <div className="flex gap-4 items-center"><h2 className="text-2xl font-semibold text-white">Color Mill Design</h2>
      <h3 className="mt-2 text-lg font-medium text-white">
        339 E Redwood Ave. - Fort Bragg, CA 95437 - 707.964.9645
      </h3></div>
      <div className="relative h-8 w-8"><InstagramIcon color='white'/></div>
    </div>
  );
}
