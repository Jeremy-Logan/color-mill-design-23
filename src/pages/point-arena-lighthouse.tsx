import PageLayout from "../components/PageLayout";
import CaseStudyHeader from "../components/CaseStudyHeader";
import InfoImageSection from "../components/InfoImageSection";
import FullScreenImageSection from "../components/FullScreenImageSection";
import TestimonialSection from "../components/TestimonialSection";
import StylescapeSection from "../components/StylescapeSection";
import InfoImageSectionTwoRows from "../components/InfoImageSectionTwoRows";
import WebsiteSection from "../components/WebsiteSection";

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

const infographicSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1678499679/color-mill-design-2023/MP-Donation-Graphic_pq8aet.png",
  imageAlt: "Point Arena Infographic",
  title: "Infographics",
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
        <WebsiteSection {...websiteSectionContent} />
        <InfoImageSection {...advertisingContent} />
        <TestimonialSection {...testimonialSectionContent} />
      </PageLayout>
    </div>
  );
};

export default PointArenaLighthouse;
