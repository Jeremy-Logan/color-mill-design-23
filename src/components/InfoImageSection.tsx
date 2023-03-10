import React from "react";
import Image from "./Image";
import { getCloudinaryImageUrl } from "../utils/cloudinary";
import { CldImage } from 'next-cloudinary';

type Props = {
  primaryColor: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  subHeading: string;
  description: string;
};

function InfoImageSection(props: Props) {
  const { primaryColor, imageUrl, imageAlt, title, subHeading, description } =
    props;
  return (
    <div
      className="relative flex h-auto w-screen flex-col justify-center gap-4 py-2 md:py-8 text-center"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="mx-auto max-w-[1600px]">
        <h1 className="z-10 mx-4 md:mb-6 font-serif text-4xl font-black leading-relaxed tracking-wide text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <h2 className="z-10 mx-8 text-xl leading-relaxed tracking-wide text-white md:text-2xl lg:text-4xl">
          {subHeading}
        </h2>
        <div className=" my-6 lg:my-16 flex flex-col lg:flex-row lg:mx-12">
          <div className="lg:w-[40%] self-center hidden lg:block">
            <p className="text-left w-[327px] lg:w-full mb-8  md:text-2xl leading-relaxed tracking-wide text-white">
              {description}
            </p>
          </div>
          <div className="relative mx-auto mb-4 lg:mb-0 h-[204px] w-[327px] md:h-[444px] md:w-[535px] lg:h-[444px] lg:w-[713px]">
          
            <Image
              src={getCloudinaryImageUrl(`${imageUrl}`)}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 45vw,"
            />
          </div>
          <div className="md:w-[535px] w-[327px] self-center lg:hidden">
            <p className="text-left mb-8 text-sm md:text-base lg:text-2xl leading-relaxed tracking-wide text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoImageSection;
