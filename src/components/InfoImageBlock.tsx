import React from "react";
import Image from "./Image";
import { getCloudinaryImageUrl } from "../utils/cloudinary";

type Props = {
  primaryColor: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  subHeading: string;
  description: string;
};

function InfoImageBlock(props: Props) {
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
        <div className="mx-2 my-6 md:my-16 flex flex-col md:flex-row md:mx-12">
          <div className="md:w-[40%] self-center hidden md:block">
            <p className="text-left w-[327px] md:w-full mb-8  md:text-2xl leading-relaxed tracking-wide text-white">
              {description}
            </p>
          </div>
          <div className="relative mx-auto h-[204px] w-[327px] md:h-[444px] md:w-[713px]">
            <Image
              src={getCloudinaryImageUrl(imageUrl)}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 45vw,"
              blurDataUrl={getCloudinaryImageUrl(`/t_placeholder${imageUrl}`)}
            />
          </div>
          <div className="md:w-1/3 self-center md:hidden">
            <p className="text-left w-[327px] md:w-full mb-8  md:text-2xl leading-relaxed tracking-wide text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoImageBlock;
