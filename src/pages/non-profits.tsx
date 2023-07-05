import Img from "next/image";
import Link from "next/link";

import Image from "../components/Image";
import PageLayout from "../components/PageLayout";
import { getCloudinaryImageUrl } from "../utils/cloudinary";

const images = [
  {
    src: "v1678240470/color-mill-design-2023/Food-Bank-Landing-Image_n17ako.png",
    alt: "Fort Bragg Food Bank",
    title: "Fort Bragg Food Bank",
    description:
      "Brand Strategy, Website Design and Development, Graphic Design, Print Design",
    url: "/fort-bragg-food-bank",
  },
  {
    src: "v1678240470/color-mill-design-2023/RCS-Landing-Image_nln6uo.png",
    alt: "Redwood Coast Seniors",
    title: "Redwood Coast Seniors",
    description:
      "Brand Strategy, Logo Design, Website Design and Development, Print Design",
    url: "/redwood-coast-seniors",
  },
  {
    src: "v1678240471/color-mill-design-2023/MendoParks-Landing_nmbmil.png",
    alt: "MendoParks",
    title: "MendoParks",
    description: "Brand Strategy, Logo Design, Print Design",
    url: "/mendo-parks",
  },
  {
    src: "v1678240470/color-mill-design-2023/Point_Arena-Landing-Image_vdppyv.png",
    alt: "Point Arena Lighthouse",
    title: "Point Arena Lighthouse",
    description: "Brand Strategy, Website Design and Development, Print Design",
    url: "/point-arena-lighthouse",
  },
];

const NonProfits = () => {
  const metaData = {
    "type": "website",
    "headline": "Non-Profits",
    "description": "Discover how Color Mill Design's specialized design services for nonprofits, including brand strategy, web design & development, and graphic design, can amplify your impact and further your mission.",
    "slug": "non-profits",
    "image": getCloudinaryImageUrl("v1678240470/color-mill-design-2023/Food-Bank-Landing-Image_n17ako.png"),
    "datePublished": null,
    "dateModified": null,
    "author": null
  }
  return (
    <PageLayout
      {...metaData}
    >
      <h1 className="w-10/12 mx-auto font-serif text-2xl font-black text-center text-black 2xl:6xl sm:w-2/3 sm:text-3xl md:mt-12 lg:w-1/2 lg:text-4xl xl:w-1/3 xl:text-5xl">
        Non-profit
      </h1>
      <div className="relative mx-auto h-16 w-[95vw] sm:w-screen md:my-8 md:h-24">
        <Img
          src="/specialists.svg"
          alt="Instagram"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h2 className="w-10/12 mx-auto text-lg font-semibold text-center text-black 2xl:6xl sm:w-2/3 sm:text-2xl lg:w-1/2 lg:text-3xl xl:text-3xl">
        Change-Makers Transformed
      </h2>
      <div className="grid justify-center w-screen gap-4 mx-auto mt-12 max-w-7xl lg:grid-cols-2">
        {images.map((image, i) => (
          <Link key={i} href={image.url} className="mb-8 justify-self-center ">
            <div className="relative h-[222px] w-[327px] shadow-lg transition-all duration-150 ease-in-out hover:scale-[102%] sm:h-[329px] sm:w-[484px] md:h-[412px] md:w-[606px] lg:h-[329px] lg:w-[484px] xl:h-[412px] xl:w-[606px]">
              <Image
                src={getCloudinaryImageUrl(image.src)}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 45vw,"
              />
            </div>
            <div className="mt-2 w-[327px] sm:w-[480px] md:mt-4 md:w-[600px] lg:w-[484px] xl:w-[606px]">
              <h3 className="mb-2 text-xl font-medium sm:text-3xl">
                {image.title}{" "}
              </h3>
              <p className="italic sm:text-lg">{image.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default NonProfits;
