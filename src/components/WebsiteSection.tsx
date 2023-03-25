import React from "react";

import { getCloudinaryImageUrl } from "../utils/cloudinary";
import Image from "./Image";

type Props = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subHeading: string;
  description: string;
};

function WebsiteSection(props: Props) {
  const {  imageUrl, imageAlt, title, subHeading, description } =
    props;
  return (
    <div
      className="relative flex bg-white h-auto w-full flex-col justify-center gap-4 py-2 md:py-12 text-center"
      
    >
      <div className="mx-auto">
        <h1 className="z-10 mx-4 md:mb-6 font-serif text-4xl font-black leading-relaxed tracking-wide text-gray-900 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <h2 className="z-10 mx-8 text-xl leading-relaxed tracking-wide text-gray-900 md:text-2xl lg:text-4xl">
          {subHeading}
        </h2>
        <div className="mx-2 my-6 md:my-16 flex flex-col ">
         
          <div className="relative mx-auto h-[200px] w-[90vw] sm:h-[300px] md:h-[400px] xl:h-[600px] 2xl:h-[800px]">
            <Image
              src={getCloudinaryImageUrl(`/q_auto,f_auto${imageUrl}`)}
              alt={imageAlt}
              fill
              quality={60}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 90vw,
                80vw"
                
            />
          </div>
          <div className=" self-center mt-4">
            <p className="whitespace-pre-line text-left max-w-[1440px] w-[85vw] xl:w-[80vw] mb-8 text-sm md:text-2xl leading-relaxed tracking-wide text-gray-900">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteSection;