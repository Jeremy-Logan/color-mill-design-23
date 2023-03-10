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
    "Brand Strategy, Collateral Design, Annual Reports, Signage,  Web design, Booth Graphics",
};

const brandStrategySectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1677804673/Color%20Mill%20Design%202023/FB-Business_card_Images_oywplp.png",
  imageAlt: "Fort Bragg Food Bank Business Cards",
  title: "Brand Strategy",
  subHeading: "Building Around an Existsing Logo",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const annualReportSectionContent = {
  imageUrl:
    "/v1677804673/Color%20Mill%20Design%202023/Annual-Report-Photo_rbiwc3.jpg",
  primaryColor: primaryColor,
  imageAlt: "Fort Bragg Food Bank Annual Report",
  title: "Annual Report",
  subHeading: "Sharing Community Contributions",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const websiteSectionContent = {
  imageUrl:
    "/v1678396053/Color%20Mill%20Design%202023/Website-on-Devices_wp0haf.png",
  imageAlt: "Fort Bragg Food Bank Website",
  title: "Website",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};

const collateralDesignSectionContent = {
  imageUrl:
    "/v1677804674/Color%20Mill%20Design%202023/FB-Collateral_nmqg1d.png",
  primaryColor: primaryColor,
  imageAlt: "Fort Bragg Food Bank Collateral Design",
  title: "Collateral Design",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const infographicSectionContent = {
  imageUrl:
    "/v1678397306/Color%20Mill%20Design%202023/FB-Donation-Infographic_x65ukn.png",
  imageAlt: "Fort Bragg Food Bank Infographic",
  title: "Infographic",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};

const giveawaysSectionContent = {
  imageUrl: "/v1678398772/Color%20Mill%20Design%202023/Stickers_c8ngxq.png",
  primaryColor: primaryColor,
  imageAlt: "Fort Bragg Food Bank Giveaways",
  title: "Giveaways",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const testimonialSectionContent = {
  imageUrl:
    "/v1677804674/Color%20Mill%20Design%202023/Amanda_Friscia-Headshot_ra712c.png",
  primaryColor: primaryColor,
  hexagonColors: ["#04C3FF", "#0696E8", "#0378FF", "#0061D0", "#01489A", "#013C81", "#002856"],
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
        <div
      className="relative flex h-auto w-screen bg-white flex-col justify-center gap-4 py-2 md:py-8 text-center"
      
    >
      <div className="mx-auto max-w-[1600px]">
        <h1 className="z-10 mx-4 md:mb-6 font-serif text-4xl font-black leading-relaxed tracking-wide text-gray-900 md:text-5xl lg:text-6xl">
          Newsletters
        </h1>
        <h2 className="z-10 mx-8 text-xl leading-relaxed tracking-wide text-gray-900 md:text-2xl lg:text-4xl">
          Expressing a message of Inspiration
        </h2>
        <div className=" my-6 md:my-16 flex flex-col justify-center items-center lg:items-start lg:flex-row sm:mx-auto w-full">
         
          <div className="relative  lg:mr-12 aspect-square w-[327px] md:w-[450px] lg:w-[500px] xl:w-[650px]">
            <Image
              src={getCloudinaryImageUrl('/v1677804687/Color%20Mill%20Design%202023/Newsletters-Image_facaqq.png')}
              alt='The Fort Bragg Food Bank Newsletter'
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 45vw,"
              blurDataURL={getCloudinaryImageUrl('/thumbnail_/v1677804687/Color%20Mill%20Design%202023/Newsletters-Image_facaqq.png')}
            />
          </div>
          <div className="lg:w-[30%] xl:h-[650px] lg:h-[500px]">
            <p className="text-left w-[327px] md:w-[450px] mt-4 lg:mt-0 lg:w-full mb-8 lg:text-lg xl:text-2xl leading-relaxed tracking-wide text-gray-900">
            The design of the Food Bank’s newsletters needed to appeal to donors and potential donors while also creating a lasting impression for the months between publications. Merging elements of the brand’s new strategy with their bright visual identity helped express their message of openness, vibrancy and inspiring the community. This created a publication that is inspiring, easy to digest and inviting. The infographics show off the organization’s accomplishments and help the potential donor see the possibilities and the achievements of the organization.
            </p>
          </div>
        </div>
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
