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
      "Website, Brand Strategy, Logo Design, Graphic Design, Print, Illustrations",
    url: "/mendocino-spirits",
  },
  {
    src: "v1680385225/color-mill-design-2023/Newberger-Landing-Image_d39dhp.png",
    alt: "Newberger & Associates",
    title: "Newberger & Associates",
    description: "Website, Brand Strategy, Graphic Design, Print",
    url: "/newberger-and-associates",
  },
  {
    src: "v1680385546/color-mill-design-2023/Noyo-Landing_dyhaqj.png",
    alt: "Noyo Harbor Inn",
    title: "Noyo Harbor Inn",
    description: "Website, Brand Strategy, Graphic Design, Print",
    url: "/noyo-harbor-inn",
  },
  {
    src: "v1680385379/color-mill-design-2023/Zenefski-Landing-Page_c8k1pi.png",
    alt: "Daniel Zenefski",
    title: "Daniel Zenefski",
    description: "Brand Strategy, Logo Design",
    url: "/daniel-zenefski",
  },
  {
    src: "v1680385485/color-mill-design-2023/MendoHigh-Landing_ykiifp.png",
    alt: "Mendocino High School",
    title: "Mendocino High School",
    description: "Brand Strategy, Logo Design, Print Design",
    url: "/mendocino-high-school",
  },
  {
    src: "v1680385443/color-mill-design-2023/Darland-Landing_nrwsar.png",
    alt: "Darland Software",
    title: "Darland Software",
    description: "Graphic Design, Print, Interactive Design",
    url: "/darland-software",
  },
  {
    src: "v1680385589/color-mill-design-2023/Shaw-coffee-Landing_dqbszf.png",
    alt: "Shaw Coffee",
    title: "Shaw Coffee",
    description: "Package Design",
  },
  {
    src: "v1680385613/color-mill-design-2023/RCC-BC-Landing_rpasr3.png",
    alt: "Redwood Coast Construction",
    title: "Redwood Coast Construction",
    description: "Print Design",
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
          Small Business
        </h1>
        <div className="relative mx-auto h-16 w-[95vw] sm:w-screen md:my-8 md:h-24">
          <Img
            src="/experts.svg"
            alt="Instagram"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <h2 className=" 2xl:6xl mx-auto w-10/12  text-center  text-lg font-semibold text-black sm:w-2/3 sm:text-2xl lg:w-1/2 lg:text-3xl xl:text-3xl">
          Branding and Website Design
        </h2>
        <div className="mx-auto mt-12 grid w-screen max-w-7xl justify-center gap-4 lg:grid-cols-2">
          {images.map((image, i) => (
            <div key={i} className="justify-self-center mb-8 ">
              {image.url ? (
                <Link href={image.url}>
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
              ) : (
                <div >
                  <div className="relative cursor-pointer h-[222px] w-[327px] shadow-lg transition-all duration-150 ease-in-out hover:scale-[102%] sm:h-[329px] sm:w-[484px] md:h-[412px] md:w-[606px] lg:h-[329px] lg:w-[484px] xl:h-[412px] xl:w-[606px]">
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
                </div>
              )}
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default Businesses;
