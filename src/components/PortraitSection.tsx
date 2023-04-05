import React from "react";

import { getCloudinaryImageUrl } from "../utils/cloudinary";
import Image from "./Image";

type Props = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subHeading: string;
  description: string;
  givingBack: string;
};

function PortraitSection(props: Props) {
  const {
    imageUrl,
    imageAlt,
    title,
    subHeading,
    description,
    givingBack
  } = props;
  return (
    <div
      className="relative mt-20 flex h-auto w-full flex-col justify-center gap-4 py-2 text-center md:py-8"
      
    >
      <div className="mx-auto max-w-[1600px]">
        <h1
          className="hidden mb-6 lg:block z-10 mx-4 font-serif font-black leading-relaxed tracking-wide text-5xl"
          
        >
          {title}
        </h1>
        
        <div className="flex flex-col items-center justify-center gap-8 mx-0 lg:mx-8 ">
          <div className="block ">
            

            <div className="relative mx-auto lg:ml-4 lg:mb-4 aspect-square h-[327px] sm:h-[400px] lg:float-right lg:h-[500px]">
              <Image
                src={getCloudinaryImageUrl(`${imageUrl}`)}
                alt={imageAlt}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 45vw,"
              />
            </div>
            <p
              className="mb-8 whitespace-pre-line text-left leading-relaxed tracking-wide md:text-base hidden lg:block  "
              
            >
              {description}
            </p>
            <h2
          className="mb-4 whitespace-pre-line text-left leading-relaxed tracking-wide md:text-base hidden font-semibold lg:block"
          
        >
          {subHeading}
        </h2>
        <p
              className="mb-8 whitespace-pre-line text-left leading-relaxed tracking-wide md:text-base  hidden lg:block  "
              
            >
              {givingBack}
            </p>
          </div>
          <div className="w-[90vw] self-center sm:w-[535px] mx-auto lg:hidden">
          <h1
          className=" z-10 mx-4 font-serif text-4xl font-black leading-relaxed tracking-wide mb-6 md:text-4xl lg:text-5xl"
          
        >
          {title}
        </h1>
            <p
              className="mb-8 whitespace-pre-line text-left text-sm leading-relaxed tracking-wide md:text-base lg:text-lg "
              
            >
              {description}
            </p>
            <h2
          className="mb-4 whitespace-pre-line text-left text-sm leading-relaxed tracking-wide md:text-base font-semibold lg:text-lg"
          
        >
          {subHeading}
        </h2>
        <p
              className="mb-8 whitespace-pre-line text-left text-sm leading-relaxed tracking-wide md:text-base lg:text-lg "
              
            >
              {givingBack}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortraitSection;
