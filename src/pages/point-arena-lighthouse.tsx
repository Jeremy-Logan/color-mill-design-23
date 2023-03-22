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
  subHeading: "Maintaining the historic Light Station for the inspiration, education and enjoyment of generations to come.",
  description:
    "Point Arena Lighthouse wanted a brand that was as vibrant and inspirational as the light station itself. They offer miles of majestic natural beauty and an historic, functioning lighthouse but their brand showed very little of this. Our task was to bring the beauty of the site to the brand and inspire visitors to appreciate the guidance and safety a lighthouse offers to passing ships.",
  scope: "Brand Strategy, Website Design, Collateral Design",
};

const brandStrategySectionContent = {
  primaryColor: primaryColor,
  image1Url: "/v1678501732/color-mill-design-2023/PA-Stylescape1_xmxc8x.png",
  image2Url: "/v1678501732/color-mill-design-2023/PA-Stylescape2_xff5pm.png",
  imageAlt: "Point Arena Brand Strategy",
  title: "Brand Strategy",
  subHeading: "A Sense of Adventure",
  description:
    "Our goal was to capture the essence of the rugged Pacific Ocean and evoke a sense of adventure and exploration. To achieve this, we designed a color palette inspired by the ocean and the wildflowers and the lightkeeper’s buildings on the site, incorporating nautical themes and patterns throughout. The result is a brand that encourages reflection and invites visitors to discover the beauty of the outdoors.",
};

const collateralContent = {
  primaryColor: primaryColor,
  bg: "white",
  imageUrl: "/v1678501749/color-mill-design-2023/PA-Rackcards-Photo_te3vwn.png",
  imageAlt: "Point Arena Collateral Design",
  title: "Collateral",
  subHeading: "Strengthening Connections in the Community",
  description:
    "Collateral, like brochures, business cards, and rack cards, offer Pt Arena Lighthouse a tangible way to connect with the community. These materials serve as a reminder of the organization's mission and offerings, encouraging potential donors, volunteers, and supporters to engage with the brand.\n\n Our bright design and vibrant color palette make these materials memorable and encourage people to hold on to them. By strengthening their connection with the community, Pt Arena Lighthouse can continue their great mission of providing a beautiful natural space for people to enjoy.",
};

const newsletterSectionContent = {
  image1Url: "v1678736684/color-mill-design-2023/PA-Newsletter-Layout-split-01_v2ehxk.png",
  image2Url: "/v1678736684/color-mill-design-2023/PA-Newsletter-Layout-split-02_di8akb.png",
  imageAlt: "The Point Arena Lighthouse Newsletter",
  title: "Newsletters",
  subHeading: "Inspiring Community",
  description:
    "A newsletter is a powerful way for Pt Arena Lighthouse to connect with their members and the wider community. Through eye-catching design, photos and infographics, we helped Pt Arena to share their achievements and to inspire readers with stories of impact and change. \n\n Drawing on our expertise in print production as well as design, we streamlined the process of creating and distributing the newsletter. We took care of everything from setting up the layout to printing and mailing, freeing up time for the busy team to focus on their important work.",
}

const websiteSectionContent = {
  imageUrl: "/v1678502841/color-mill-design-2023/PA-website-comp_t8cldx.png",
  imageAlt: "Point Arena Lighthouse Website",
  title: "Website",
  subHeading: "A Streamlined User Experience",
  description:
    "Pt Arena Lighthouse's old website was a little outdated and difficult to navigate, which made it hard for visitors to find what they needed. We knew that a clean, user-friendly experience was essential, so we reimagined the site with simplicity in mind. \n\n We started by identifying the information that was most important to their visitors and made sure it was front and center, with a simplified navigation structure. The result was a more intuitive and efficient user experience, making it easier for visitors to find what they needed and engage with the organization online. \n\n We also made sure that the new website was just as easy for the Pt Arena Lighthouse team to manage, with a streamlined backend that reduced the time and energy required to make updates and changes.",
};

const advertisingContent = {
  primaryColor: primaryColor,
  imageUrl: "/v1678501755/color-mill-design-2023/PA-Ad_qundkt.png",
  imageAlt: "Point Arena Collateral Design",
  title: "Ad Design",
  subHeading: "Say Something Here",
  description:
    "Advertising in magazines, trade publications and tourist publications is a powerful way for Pt Arena Lighthouse to reach new audiences and spread awareness of their mission and offerings. These channels offer targeted reach to audiences who may not be familiar with the organization, increasing the chances of attracting new donors, volunteers and supporters. Our colorful design jumps out at people, keeping eyes on the ad and giving them time to really absorb the message and remember the organization.",
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
