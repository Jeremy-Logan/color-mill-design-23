import React from "react";

import { getCloudinaryImageUrl } from "../utils/cloudinary";
import Image from "./Image";

type Props = {
  primaryColor: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  subHeading: string;
  description: string;
  bg?: string;
};

function PortraitSection(props: Props) {
  const {
    primaryColor,
    imageUrl,
    imageAlt,
    title,
    subHeading,
    description,
    bg,
  } = props;
  return (
    <div
      className="mt-20 relative flex h-auto w-full flex-col justify-center gap-4 py-2 text-center md:py-8"
      style={{ backgroundColor: bg === "white" ? "white" : primaryColor }}
    >
      <div className="mx-auto max-w-[1600px]">
        <h1
          className=" z-10 mx-4 font-serif text-4xl font-black leading-relaxed tracking-wide md:mb-6  md:text-4xl lg:text-5xl"
          style={{ color: bg === "white" ? "#000000" : "white" }}
        >
          {title}
        </h1>
        <h2
          className="z-10 mx-8 whitespace-pre-line text-xl leading-relaxed tracking-wide  md:text-2xl lg:text-4xl"
          style={{ color: bg === "white" ? primaryColor : "white" }}
        >
          {subHeading}
        </h2>
        <div className="flex flex-col items-center gap-8 lg:mx-8 lg:flex-row lg:justify-around">
          <div className="hidden self-center lg:block lg:w-[40%]">
            <p
              className="mb-8 w-[327px] whitespace-pre-line text-left leading-relaxed tracking-wide md:text-base lg:w-full lg:text-xl "
              style={{ color: bg === "white" ? "#000000" : "white" }}
            >
              {description}
            </p>
          </div>
          <div className="relative mb-4 aspect-square w-[327px] md:w-[400px]  lg:mb-0 lg:w-[500px]">
            <Image
              src={getCloudinaryImageUrl(`${imageUrl}`)}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 45vw,"
            />
          </div>
          <div className="w-[327px] self-center md:w-[535px] lg:hidden">
            <p
              className="mb-8 whitespace-pre-line text-left text-sm leading-relaxed tracking-wide md:text-base lg:text-lg "
              style={{ color: bg === "white" ? "#000000" : "white" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortraitSection;
