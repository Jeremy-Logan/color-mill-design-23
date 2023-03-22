import PageLayout from "../components/PageLayout";
import Image from "../components/Image";
import CaseStudyHeader from "../components/CaseStudyHeader";
import InfoImageSection from "../components/InfoImageSection";
import WebsiteSection from "../components/WebsiteSection";
import FullScreenImageSection from "../components/FullScreenImageSection";
import TestimonialSection from "../components/TestimonialSection";
import { getCloudinaryImageUrl } from "../utils/cloudinary";
import InfoImageSectionTwoRows from "../components/InfoImageSectionTwoRows";

const primaryColor = "#002856";

const headerContent = {
  primaryColor: primaryColor,
  hexagonColors: ["#01489A", "#0061D0", "#0378FF", "#0696E8", "#04C3FF"],

  title: "Fort Bragg Food Bank",
  subHeading: "Providing nutritious food for a healthy and better life.",
  description:
    "Fort Bragg Food Bank is a community resource, distributing food to those who need it most. They are a lifeline for many people, but felt their brand didn’t portray the vibrancy and hope of what they offer. We were tasked with bringing this buzz into their brand and to their web presence.",
  scope:
    "Brand Strategy, Collateral Design, Annual Reports, Signage, Web design, Booth Graphics",
};

const brandStrategySectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "v1677804673/color-mill-design-2023/FB-Business_card_Images_oywplp.png",
  imageAlt: "Fort Bragg Food Bank Business Cards",
  title: "Brand Strategy",
  subHeading: "Building Around an \n Existing Legacy",
  description:
    "Their logo was designed nearly 30 years ago, and had an established and revered place in the community. This was a legacy they wanted to maintain. So, we created a bright palette and a luscious watercolor texture that added vibrant contrast to the clean, monochrome logo and splashed it across everything we did.",
};

const newsletterSectionContent = {
  imageUrl: "/v1677804687/color-mill-design-2023/Newsletters-Image_facaqq.png",
  imageAlt: "Fort Bragg Food Bank Newsletter",
  title: "Newsletters",
  subHeading: "An inspirational message",
  description:
    "The newsletter is the Food Bank's primary means of communicating directly with its members and the community. It showcases the organization's achievements in an inspiring and easily understandable format. \n \n With our extensive experience in print production, we were able to efficiently set up and print the newsletters, and mail them to the constituents. This made the process easy and hands-off for the busy Food Bank team. ",
}

const annualReportSectionContent = {
  imageUrl:
    "/v1677804673/color-mill-design-2023/Annual-Report-Photo_rbiwc3.jpg",
  primaryColor: primaryColor,
  imageAlt: "Fort Bragg Food Bank Annual Report",
  title: "Annual Report",
  subHeading: "Sharing Community Contributions",
  description:
    "Working closely with the Food Bank, we created a visually stunning and informative annual report that showcased the organization’s accomplishments and future goals. Our state-of-the-art printing technology made sure every detail was crisp and vibrant, leaving a lasting impression on stakeholders, donors and community members. The annual report was a powerful tool for the Food Bank to showcase their important work and inspire continued support.",
};

const websiteSectionContent = {
  imageUrl: "/v1678396053/color-mill-design-2023/Website-on-Devices_wp0haf.png",
  imageAlt: "Fort Bragg Food Bank Website",
  title: "Website",
  subHeading: "A clean, uncluttered user experience",
  description:
    "The Food Bank’s website was sadly lacking modern appeal and used an outdated platform that was difficult to navigate. As a result, the organization’s essential information was buried deep in a maze of pages, making it difficult for visitors to find what they were looking for.\n \n Through our discovery process, we identified the information most important to their visitors and made sure it was easily accessible, creating a clean user experience with less to navigate. \n \n The website also made things easier for the Food Bank team. With an intuitive backend and a more streamlined presentation, they got less calls, spent less time fighting with updates and had more time for what they value most: their clients. ",
};


const collateralDesignSectionContent = {
  imageUrl: "/v1677804674/color-mill-design-2023/FB-Collateral_nmqg1d.png",
  image2Url: "/v1678398772/color-mill-design-2023/Stickers_c8ngxq.png",
  primaryColor: primaryColor,
  imageAlt: "Fort Bragg Food Bank Collateral Design",
  image2Alt: "Fort Bragg Food Bank Giveaways",
  title: "Collateral",
  subHeading: "Connecting with community in a tangible way",
  descriptionOne:
    "Marketing collateral like brochures, business cards and magnets allow the Food Bank to interact with the community on a personal level. These “leave-behinds” raise awareness of their mission and offerings, reminding potential donors, volunteers and supporters to interact with the brand. Eye catching designs and color palettes encourage people to keep these giveaways and strengthen the organizations connection with the community. ",
};

const infographicSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1678397306/color-mill-design-2023/FB-Donation-Infographic_x65ukn.png",
  imageAlt: "Fort Bragg Food Bank Infographic",
  title: "Infographic",
  subHeading: "Information at a glance",
  description:
    "The Food Bank has multiple income streams and community programs, which can make it challenging to provide a clear and concise overview of its work. To address this, we created a colorful and easy-to-read graphic that summarizes their contributions to the community at a glance. \n\nThe infographic helps the Food Bank's team to explain their mission and helps clients to understand the value of their contributions. This clarity has lead to an increase in donations, engagement, and emotional investment from donors, volunteers, and staff alike.",
};

const testimonialSectionContent = {
  imageUrl:
    "/v1677804674/color-mill-design-2023/Amanda_Friscia-Headshot_ra712c.png",
  primaryColor: primaryColor,
  hexagonColors: [
    "#04C3FF",
    "#0696E8",
    "#0378FF",
    "#0061D0",
    "#01489A",
    "#013C81",
    "#002856",
  ],
  imageAlt: "Amanda Friscia - Executive Director, Fort Bragg Food Bank",
  heading:
    "'\"The Color Mill's work increased donations and added vibrancy to our entire organization.'\"",
  attribution: "Amanda Friscia - Executive Director, Fort Bragg Food Bank",
};

const FortBraggFoodBank = () => {
  return (
    <div>
      <PageLayout
        title="Color Mill Design"
        description={`${headerContent.title} Case Study`}
      >
        <CaseStudyHeader {...headerContent} />
        <InfoImageSection {...brandStrategySectionContent} />
        <div className="relative flex h-auto w-screen flex-col justify-center gap-4 bg-white py-2 text-center md:py-8">
          <div className="mx-auto max-w-[1600px]">
            <h1 className="z-10 mx-4 font-serif text-4xl font-black leading-relaxed tracking-wide text-gray-900 md:mb-6 md:text-5xl lg:text-6xl">
              {newsletterSectionContent.title}
            </h1>
            <h2 className="z-10 mx-8 text-xl leading-relaxed tracking-wide text-gray-900 md:text-2xl lg:text-4xl">
              {newsletterSectionContent.subHeading}
            </h2>
            <div className=" my-6 flex w-full flex-col items-center justify-center sm:mx-auto md:my-16 lg:flex-row lg:items-start">
              <div className="relative  aspect-square w-[327px] md:w-[450px] lg:mr-12 lg:w-[500px] xl:w-[650px]">
                <Image
                  src={getCloudinaryImageUrl(
                    newsletterSectionContent.imageUrl
                  )}
                  alt="The Fort Bragg Food Bank Newsletter"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 45vw,"
                />
              </div>
              <div className="lg:h-[500px] lg:w-[30%] xl:h-[650px]">
                <p className="whitespace-pre-line mt-4 md:mb-8 w-[327px] text-left leading-relaxed tracking-wide text-gray-900 md:w-[450px] text-sm sm:text-base lg:mt-0 lg:w-full lg:text-lg xl:text-xl">
                 {newsletterSectionContent.description}
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto mb-12 flex h-48 w-9/12 max-w-[1400px] flex-col items-center justify-center bg-[#067893] sm:px-12 ring-[20px] ring-[#067893] ring-offset-2 sm:flex-row">
            <h3 className="sm:my-auto sm:w-2/3 font-semibold text-white text-lg md:text-2xl xl:text-4xl">
              The newly designed newsletter
              <br className='hidden sm:block' /> increased donations by over
            </h3>
            <h3 className="sm:mt-0 text-5xl sm:w-1/3 sm:text-[8rem] font-bold text-white">125%</h3>
          </div>
        </div>
        <InfoImageSection {...annualReportSectionContent} />
        <WebsiteSection {...websiteSectionContent} />
        <InfoImageSectionTwoRows {...collateralDesignSectionContent} />
        <FullScreenImageSection {...infographicSectionContent} />
        <TestimonialSection {...testimonialSectionContent} />
      </PageLayout>
    </div>
  );
};

export default FortBraggFoodBank;
