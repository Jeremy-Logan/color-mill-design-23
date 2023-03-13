import PageLayout from "../components/PageLayout";
import CaseStudyHeader from "../components/CaseStudyHeader";
import InfoImageSection from "../components/InfoImageSection";
import TestimonialSection from "../components/TestimonialSection";
import StylescapeSection from "../components/StylescapeSection";
import WebsiteSection from "../components/WebsiteSection";
import { getCloudinaryImageUrl } from "../utils/cloudinary";
import Image from "../components/Image"

const primaryColor = "#008FB1";

const headerContent = {
  primaryColor: primaryColor,
  hexagonColors: ["#025B6F", "#02768F", "#4FC3DF", "#81D5EA", "#ADEFFF"],

  title: "Point Arena",
  subHeading: "Preservation Through Education",
  description:
    "Along with bright new leadership, facility upgrades, new delivery vans and an expanded staff, FBFB was ready for an upgrade to their brand. Their logo, established around the organization’s conception, is steadfast and very recognizable. ",
  scope: "Brand Strategy, Website Design, Collateral Design",
};

const brandStrategySectionContent = {
  primaryColor: primaryColor,
  image1Url: "/v1678501732/color-mill-design-2023/PA-Stylescape1_xmxc8x.png",
  image2Url: "/v1678501732/color-mill-design-2023/PA-Stylescape2_xff5pm.png",
  imageAlt: "Point Arena Brand Strategy",
  title: "Brand Strategy",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const collateralContent = {
  primaryColor: primaryColor,
  bg: "white",
  imageUrl: "/v1678501749/color-mill-design-2023/PA-Rackcards-Photo_te3vwn.png",
  imageAlt: "Point Arena Collateral Design",
  title: "Collateral",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};

const newsletterSectionContent = {
  image1Url: "v1678736684/color-mill-design-2023/PA-Newsletter-Layout-split-01_v2ehxk.png",
  image2Url: "/v1678736684/color-mill-design-2023/PA-Newsletter-Layout-split-02_di8akb.png",
  imageAlt: "The Point Arena Lighthouse Newsletter",
  title: "Newsletters",
  subHeading: "An inspirational message",
  description:
    "The newsletter is the Food Bank's primary means of communicating directly with its members and the community. It showcases the organization's achievements in an inspiring and easily understandable format. \n \n With our extensive experience in print production, we were able to efficiently set up and print the newsletters, and mail them to the constituents. This made the process easy and hands-off for the busy Food Bank team. ",
}

const websiteSectionContent = {
  imageUrl: "/v1678502841/color-mill-design-2023/PA-website-comp_t8cldx.png",
  imageAlt: "Point Arena Lighthouse Website",
  title: "Website",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};

const advertisingContent = {
  primaryColor: primaryColor,
  imageUrl: "/v1678501755/color-mill-design-2023/PA-Ad_qundkt.png",
  imageAlt: "Point Arena Collateral Design",
  title: "Advertising",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};


const testimonialSectionContent = {
  imageUrl:
    "/v1678501748/color-mill-design-2023/Mark_Hancock_ED_Report_ba3qc3.jpg",
  primaryColor: primaryColor,
  hexagonColors: [
    "#ADEFFF",
    "#81D5EA",
    "#4FC3DF",
    "#07A4C7",
    "#0A99B9",
    "#004E60",
    "#002A33",
  ],
  imageAlt: "Mark Hancock - Executive Director, Point Arena Lighthouse",
  heading:
    "'\"The Color Mill's work increased donations and added vibrancy to our entire organization.'\"",
  attribution: "Mark Hancock - Executive Director, Point Arena Lighthouse",
};

const PointArenaLighthouse = () => {
  return (
    <div>
      <PageLayout
        title="Color Mill Design"
        description={`${headerContent.title} Case Study`}
      >
        <CaseStudyHeader {...headerContent} />
        <StylescapeSection {...brandStrategySectionContent} />
        <InfoImageSection {...collateralContent} />
        <div className="relative w-full justify-center gap-4 py-2 text-center md:py-8" >
          <div className='py-8' style={{backgroundColor: primaryColor}}>
          <div className="mx-auto max-w-[1400px]" >
            <h1 className="z-10 mx-4 font-serif text-4xl font-black leading-relaxed tracking-wide text-white md:mb-6 md:text-5xl lg:text-6xl">
              {newsletterSectionContent.title}
            </h1>
            <h2 className="z-10 mx-8 text-xl leading-relaxed tracking-wide text-white md:text-2xl lg:text-4xl">
              {newsletterSectionContent.subHeading}
            </h2>
            <div className="w-[90%] mx-auto mt-4">
                <p className="whitespace-pre-line mt-4 md:mb-8 text-left leading-relaxed tracking-wide text-white text-sm sm:text-base lg:mt-0 w-full lg:text-lg xl:text-xl">
                 {newsletterSectionContent.description}
                </p>
              </div>
            
          </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center md:mx-auto md:flex-row md:items-start bg-[#D9FFFF]">
              <div className="relative h-[250px] w-[350px] sm:w-[420px] sm:h-[300px] xl:w-[630px] xl:h-[450px] lg:w-[525px] lg:h-[375px] 2xl:h-[625px] 2xl:w-[875px]">
                <Image
                  src={getCloudinaryImageUrl(
                    newsletterSectionContent.image1Url
                  )}
                  alt={newsletterSectionContent.imageAlt}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 45vw,"
                />
              </div>
              <div className="relative h-[250px] w-[350px] sm:w-[420px] sm:h-[300px] xl:w-[630px] xl:h-[450px] lg:w-[525px] lg:h-[375px] 2xl:h-[625px] 2xl:w-[875px] ">
                <Image
                  src={getCloudinaryImageUrl(
                    newsletterSectionContent.image2Url
                  )}
                  alt={newsletterSectionContent.imageAlt}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 45vw,"
                />
              </div>
             
            </div>
            <div className="h-4 w-full" style={{backgroundColor: primaryColor}}/>
        </div>
        <WebsiteSection {...websiteSectionContent} />
        <InfoImageSection {...advertisingContent} />
        <TestimonialSection {...testimonialSectionContent} />
      </PageLayout>
    </div>
  );
};

export default PointArenaLighthouse;
