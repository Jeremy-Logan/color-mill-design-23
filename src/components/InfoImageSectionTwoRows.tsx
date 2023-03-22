import React from "react";
import Image from "./Image";
import { getCloudinaryImageUrl } from "../utils/cloudinary";

type Props = {
  primaryColor: string;
  imageUrl: string;
  imageAlt: string;
  image2Url: string;
  image2Alt: string;
  title: string;
  subHeading: string;
  descriptionOne: string;
  descriptionTwo?: string;
  bg?: string
};

function InfoImageSectionTwoRows(props: Props) {
  const {
    primaryColor,
    imageUrl,
    image2Url,
    imageAlt,
    image2Alt,
    title,
    subHeading,
    descriptionOne,
    descriptionTwo,
    bg
  } = props;
  return (
    <div
      className="relative flex h-auto w-full flex-col justify-center gap-4 py-2 text-center md:py-8"
      style={{ backgroundColor: bg === 'white' ? 'white' : primaryColor }}
    >
      <div className="mx-auto max-w-[1600px]">
        <h1 className="z-10 mx-4 font-serif text-4xl font-black leading-relaxed tracking-wide md:mb-6 md:text-5xl lg:text-6xl" style={{ color: bg === 'white' ? '#000000' : 'white' }}>
          {title}
        </h1>
        <h2 className="z-10 mx-8 text-xl leading-relaxed tracking-wide  md:text-2xl lg:text-4xl" style={{ color: bg === 'white' ? primaryColor : 'white' }}>
          {subHeading}
        </h2>
        <div className=" my-6 flex flex-col items-center gap-8 lg:my-16 lg:mx-auto lg:flex-row lg:justify-around">
          <div className="hidden self-center lg:block lg:w-[40%]">
            <p className="mb-8 w-[327px] text-left leading-relaxed tracking-wide  md:text-2xl lg:w-full" style={{ color: bg === 'white' ? '#000000' : 'white' }}>
              {descriptionOne}
            </p>
          </div>
          <div className="relative mb-4 h-[204px] w-[327px] md:h-[444px] md:w-[535px] lg:mb-0 lg:h-[444px] lg:w-[713px]">
            <Image
              src={getCloudinaryImageUrl(`${imageUrl}`)}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 45vw,"
            />
          </div>
          <div className="w-[327px] self-center md:w-[535px] lg:hidden">
            <p className="mb-8 text-left text-sm leading-relaxed tracking-wide  md:text-base lg:text-2xl" style={{ color: bg === 'white' ? '#000000' : 'white' }}>
              {descriptionOne}
            </p>
          </div>
        </div>
        <div className=" my-6 flex flex-col items-center gap-8 lg:my-16 lg:mx-auto lg:flex-row lg:justify-around">
          
          <div className="relative mb-4 h-[204px] w-[327px] md:h-[444px] md:w-[535px] lg:mb-0 lg:h-[444px] lg:w-[713px]">
            <Image
              src={getCloudinaryImageUrl(`${image2Url}`)}
              alt={image2Alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 45vw,"
            />
          </div>
          { descriptionTwo && <><div className="hidden self-center lg:block lg:w-[40%]">
            <p className="mb-8 w-[327px] text-left leading-relaxed tracking-wide md:text-2xl lg:w-full" style={{ color: bg === 'white' ? '#000000' : 'white' }}>
              {descriptionTwo}
            </p>
          </div><div className="w-[327px] self-center md:w-[535px] lg:hidden">
              <p className="mb-8 text-left text-sm leading-relaxed tracking-wide md:text-base lg:text-2xl" style={{ color: bg === 'white' ? '#000000' : 'white' }}>
                {descriptionTwo}
              </p>
            </div></>}
        </div>
      </div>
    </div>
  );
}

export default InfoImageSectionTwoRows;
