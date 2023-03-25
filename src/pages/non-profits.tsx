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
      "Brand Stategy, Website Design and Development, Graphic Design, Print Design",
      url: '/fort-bragg-food-bank'
  },
  {
    src: "v1678240470/color-mill-design-2023/RCS-Landing-Image_nln6uo.png",
    alt: "Redwood Coast Seniors",
    title: "Redwood Coast Seniors",
    description:
      "Brand Strategy, Logo Design, Website Design and Development, Print Design",
      url: '/redwood-coast-seniors'
  },
  {
    src: "v1678240471/color-mill-design-2023/MendoParks-Landing_nmbmil.png",
    alt: "MendoParks",
    title: "MendoParks",
    description:
      "Brand Strategy, Logo Design, Print Design",
      url: '/mendo-parks'
  },
  {
    src: "v1678240470/color-mill-design-2023/Point_Arena-Landing-Image_vdppyv.png",
    alt: "Point Arena Lighthouse",
    title: "Point Arena Lighthouse",
    description:
      "Brand Strategy, Website Design and Development, Print Design",
      url: '/point-arena-lighthouse'
  },
];

const NonProfits = () => {
  return (
    <PageLayout
      title="Color Mill Design"
      description="Maximize your non-profit impact with Color Mill Design."
    >
      <h1 className="2xl:6xl mx-auto md:mt-12 w-10/12 text-center font-serif text-2xl font-black text-black sm:w-2/3 sm:text-3xl lg:w-1/2 lg:text-4xl xl:w-1/3 xl:text-5xl">
        Non-profit
      </h1>
      <div className="relative md:my-8 mx-auto h-16 md:h-24 w-[95vw] sm:w-screen">
        <Img
          src="/specialists.svg"
          alt="Instagram"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h2 className=" 2xl:6xl mx-auto w-10/12  text-center  text-lg font-semibold text-black sm:w-2/3 sm:text-2xl lg:w-1/2 lg:text-3xl xl:text-3xl">
      Building brands with purpose
      </h2>
      <div className="mx-auto mt-12 grid w-screen max-w-7xl justify-center gap-4 lg:grid-cols-2">
        {images.map((image, i) => (
          <Link key={i} href={image.url} className="mb-8 ">
            <div className="relative h-[222px] w-[327px] shadow-lg transition-all duration-150 ease-in-out hover:scale-[102%] sm:h-[329px] sm:w-[484px] md:h-[412px] md:w-[606px]">
              <Image
                src={getCloudinaryImageUrl(image.src)}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 45vw,"
                
              />
            </div>
            <div className="mt-2 md:mt-4 w-[327px] sm:w-[480px] md:w-[600px]">
              <h3 className="text-2xl font-medium sm:text-3xl">
                {image.title}{" "}
              </h3>
              <p className="italic sm:text-xl">{image.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default NonProfits;
