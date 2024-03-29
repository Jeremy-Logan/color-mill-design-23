import React from "react";

import { getCloudinaryImageUrl } from "../utils/cloudinary";
import Image from "./Image";

type Props = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subHeading?: string;
  description: string;
  primaryColor: string;
  bg?: string;
};

function FullScreenImageSection(props: Props) {
  const {  imageUrl, imageAlt, title, subHeading, description, primaryColor, bg } =
    props;
  return (
    <div
      className="relative flex bg-white h-auto w-full flex-col justify-center gap-4 py-2 md:py-12 text-center"
      style={{ backgroundColor: bg === 'white' ? 'white' : primaryColor }}
    >
      <div className="mx-auto">
        <h1 className="z-10 mx-4 md:mb-4 font-serif text-4xl font-black leading-relaxed tracking-wide text-gray-900 md:text-5xl lg:text-6xl" style={{ color: bg === 'white' ? '#000000' : 'white' }}>
          {title}
        </h1>
        <h2 className="z-10 mx-8 text-xl leading-relaxed tracking-wide  md:text-2xl lg:text-4xl" style={{ color: bg === 'white' ? primaryColor : 'white' }}>
          {subHeading}
        </h2>
        <div className="mx-2 my-6 md:my-16 flex flex-col ">
         
          <div className="relative mx-auto h-[300px] w-[90vw] 2xl:w-[85vw] sm:h-[500px] md:h-[600px] xl:h-[800px] 2xl:h-[900px] max-w-[1440px]">
            <Image
              src={getCloudinaryImageUrl(`/q_auto,f_auto${imageUrl}`)}
              alt={imageAlt}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 90vw,
                80vw"
                
            />
          </div>
          <div className=" self-center md:mt-4">
            <p className="text-left max-w-[1440px] w-[85vw] xl:w-[80vw] mb-8 text-sm md:text-lg leading-relaxed tracking-wide text-gray-900" style={{ color: bg === 'white' ? '#000000' : 'white' }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenImageSection;