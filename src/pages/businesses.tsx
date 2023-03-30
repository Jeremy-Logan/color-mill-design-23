import Img from "next/image";
import Link from "next/link";

import Image from "../components/Image";
import PageLayout from "../components/PageLayout";
import { getCloudinaryImageUrl } from "../utils/cloudinary";

const images = [
  {
    src: "v1680108504/color-mill-design-2023/Mendocino-Spirits-Landing-Image_kt9oby.png",
    alt: "Mendocino Spirits",
    title: "Mendocino Spirits",
    description:
      "Brand Strategy, Website Design and Development, Graphic Design, Print Design",
      url: '/mendocino-spirits'
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

const Businesses = () => {
  return (
    <div>
      <PageLayout
        title="Color Mill Design | Businesses"
        description="A purpose driven boutique design agency working for people who make a difference."
      >
        <h1 className="2xl:6xl mx-auto w-10/12 text-center font-serif text-2xl font-black text-black sm:w-2/3 sm:text-3xl md:mt-12 lg:w-1/2 lg:text-4xl xl:w-1/3 xl:text-5xl">
        Entrepreneurial Brand
        </h1>
        <div className="relative mx-auto h-16 w-[95vw] sm:w-screen md:my-8 md:h-24">
          <Img
            src="/evolutions.svg"
            alt="Instagram"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <h2 className=" 2xl:6xl mx-auto w-10/12  text-center  text-lg font-semibold text-black sm:w-2/3 sm:text-2xl lg:w-1/2 lg:text-3xl xl:text-3xl">
        Small Business Branding and Website Design
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
              <div className="mt-2 w-[327px] sm:w-[480px] md:mt-4 md:w-[600px]">
                <h3 className="text-2xl font-medium sm:text-3xl">
                  {image.title}{" "}
                </h3>
                <p className="italic sm:text-xl">{image.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default Businesses;
