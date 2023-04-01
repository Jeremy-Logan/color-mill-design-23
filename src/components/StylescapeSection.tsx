import React from "react";

import { getCloudinaryImageUrl } from "../utils/cloudinary";
import Image from "./Image";


type Props = {
  primaryColor: string;
  image1Url: string;
  image2Url: string;
  imageAlt: string;
  title: string;
  subHeading: string;
  description: string;
};

function StylescapeSection(props: Props) {
  const { primaryColor, image1Url, image2Url, imageAlt, title, subHeading, description } =
    props;
  return (
    <div
      className="relative flex h-auto w-full flex-col justify-center gap-4 py-2 md:py-8 text-center"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="">
        <h1 className="z-10 mx-4 md:mb-6 font-serif text-4xl font-black leading-relaxed tracking-wide text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <h2 className="z-10 mx-8 text-xl leading-relaxed tracking-wide text-white md:text-2xl lg:text-4xl">
          {subHeading}
        </h2>
        <div className=" my-6 lg:my-16 flex flex-col w-full xl:gap-8 md:gap-0 gap-8">
          
          <div className="relative h-[170px] sm:h-[200px] w-[90vw] md:w-[70vw] md:h-[400px] lg:h-[444px] 2xl:h-[555px] place-self-center md:place-self-start">
          
            <Image
              src={getCloudinaryImageUrl(`${image1Url}`)}
              alt={imageAlt}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 45vw,"
            />
          </div>
          <div className=" relative lg:mb-0 h-[170px] sm:h-[200px] w-[90vw] md:w-[70vw] md:h-[400px] lg:h-[444px] 2xl:h-[555px] place-self-center md:place-self-end">
          
            <Image
              src={getCloudinaryImageUrl(`${image2Url}`)}
              alt={imageAlt}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 45vw,
               (max-width: 1024px) 70vw,
              "
            />
          </div>
          <div className=" self-center mt-2 md:mt-4">
            <p className="text-left max-w-[1440px] w-[85vw] xl:w-[80vw] text-sm sm:text-lg md:text-xl leading-relaxed tracking-wide text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StylescapeSection;
