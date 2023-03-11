import PageLayout from "../components/PageLayout";
import Image from "../components/Image";
import CaseStudyHeader from "../components/CaseStudyHeader";
import InfoImageSection from "../components/InfoImageSection";
import WebsiteSection from "../components/WebsiteSection";
import FullScreenImageSection from "../components/FullScreenImageSection";
import TestimonialSection from "../components/TestimonialSection";
import { getCloudinaryImageUrl } from "../utils/cloudinary";

const primaryColor = "#002856";

const headerContent = {
  primaryColor: primaryColor,
  hexagonColors: ["#01489A", "#0061D0", "#0378FF", "#0696E8", "#04C3FF"],

  title: "Fort Bragg Food Bank",
  subHeading: "Providing nutritious food for a healthy and better life.",
  description:
    "Along with bright new leadership, facility upgrades, new delivery vans and an expanded staff, FBFB was ready for an upgrade to their brand. Their logo, established around the organization’s conception, is steadfast and very recognizable. ",
  scope:
    "Brand Strategy, Collateral Design, Annual Reports, Signage, Web design, Booth Graphics",
};

const brandStrategySectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "v1677804673/color-mill-design-2023/FB-Business_card_Images_oywplp.png",
  imageAlt: "Fort Bragg Food Bank Business Cards",
  title: "Brand Strategy",
  subHeading: "Building Around an Existsing Logo",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const annualReportSectionContent = {
  imageUrl:
    "/v1677804673/color-mill-design-2023/Annual-Report-Photo_rbiwc3.jpg",
  primaryColor: primaryColor,
  imageAlt: "Fort Bragg Food Bank Annual Report",
  title: "Annual Report",
  subHeading: "Sharing Community Contributions",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const websiteSectionContent = {
  imageUrl: "/v1678396053/color-mill-design-2023/Website-on-Devices_wp0haf.png",
  imageAlt: "Fort Bragg Food Bank Website",
  title: "Website",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};

const collateralDesignSectionContent = {
  imageUrl: "/v1677804674/color-mill-design-2023/FB-Collateral_nmqg1d.png",
  primaryColor: primaryColor,
  imageAlt: "Fort Bragg Food Bank Collateral Design",
  title: "Collateral Design",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const infographicSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1678397306/color-mill-design-2023/FB-Donation-Infographic_x65ukn.png",
  imageAlt: "Fort Bragg Food Bank Infographic",
  title: "Infographic",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};

const giveawaysSectionContent = {
  imageUrl: "/v1678398772/color-mill-design-2023/Stickers_c8ngxq.png",
  primaryColor: primaryColor,
  imageAlt: "Fort Bragg Food Bank Giveaways",
  title: "Giveaways",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
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
              Newsletters
            </h1>
            <h2 className="z-10 mx-8 text-xl leading-relaxed tracking-wide text-gray-900 md:text-2xl lg:text-4xl">
              Expressing a message of Inspiration
            </h2>
            <div className=" my-6 flex w-full flex-col items-center justify-center sm:mx-auto md:my-16 lg:flex-row lg:items-start">
              <div className="relative  aspect-square w-[327px] md:w-[450px] lg:mr-12 lg:w-[500px] xl:w-[650px]">
                <Image
                  src={getCloudinaryImageUrl(
                    "/v1677804687/color-mill-design-2023/Newsletters-Image_facaqq.png"
                  )}
                  alt="The Fort Bragg Food Bank Newsletter"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 45vw,"
                />
              </div>
              <div className="lg:h-[500px] lg:w-[30%] xl:h-[650px]">
                <p className="mt-4 md:mb-8 w-[327px] text-left leading-relaxed tracking-wide text-gray-900 md:w-[450px] text-sm sm:text-base lg:mt-0 lg:w-full lg:text-lg xl:text-2xl">
                  The design of the Food Bank’s newsletters needed to appeal to
                  donors and potential donors while also creating a lasting
                  impression for the months between publications. Merging
                  elements of the brand’s new strategy with their bright visual
                  identity helped express their message of openness, vibrancy
                  and inspiring the community. This created a publication that
                  is inspiring, easy to digest and inviting. The infographics
                  show off the organization’s accomplishments and help the
                  potential donor see the possibilities and the achievements of
                  the organization.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto mb-12 flex h-48 w-9/12 max-w-[1400px] flex-col items-center justify-center bg-[#067893] sm:px-12 ring-[20px] ring-[#067893] ring-offset-2 sm:flex-row">
            <h3 className="sm:my-auto sm:w-2/3 font-semibold text-white text-lg md:text-2xl xl:text-4xl">
              The newly designed newsletter
              <br className='hidden sm:block' /> increased donations by over
            </h3>
            <h3 className="sm:my-auto mt-2 sm:mt-0 text-5xl sm:w-1/3 sm:text-[8rem] font-bold text-white">125%</h3>
          </div>
        </div>
        <InfoImageSection {...annualReportSectionContent} />
        <WebsiteSection {...websiteSectionContent} />
        <InfoImageSection {...collateralDesignSectionContent} />
        <FullScreenImageSection {...infographicSectionContent} />
        <InfoImageSection {...giveawaysSectionContent} />
        <TestimonialSection {...testimonialSectionContent} />
      </PageLayout>
    </div>
  );
};

export default FortBraggFoodBank;
