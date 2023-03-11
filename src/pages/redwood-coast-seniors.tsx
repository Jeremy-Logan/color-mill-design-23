import PageLayout from "../components/PageLayout";
import CaseStudyHeader from "../components/CaseStudyHeader";
import InfoImageSection from "../components/InfoImageSection";
import WebsiteSection from "../components/WebsiteSection";
import FullScreenImageSection from "../components/FullScreenImageSection";
import TestimonialSection from "../components/TestimonialSection";
import StylescapeSection from "../components/StylescapeSection";


const primaryColor = "#450265";

const headerContent = {
  primaryColor: primaryColor,
  hexagonColors: ["#7313AD", "#823BBA", "#975EC3", "#CD97F8", "#E6C9FC"],

  title: "Redwood Coast Seniors",
  subHeading:
    "Providing stimulating activities, essential services & programs for seniors.",
  description:
    "Along with bright new leadership, facility upgrades, new delivery vans and an expanded staff, FBFB was ready for an upgrade to their brand. Their logo, established around the organization’s conception, is steadfast and very recognizable. ",
  scope: "Brand Strategy, Collateral Design, Signage, Web design",
};

const brandStrategySectionContent = {
  primaryColor: primaryColor,
  image1Url:
    "/v1678482351/color-mill-design-2023/Style-Scape-1_znbiga.png",
    image2Url: "/v1678482351/color-mill-design-2023/Style-Scape-2_s0r2pu.png",
  imageAlt: "Redwood Coast Seniors Brand Strategy",
  title: "Brand Strategy",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const yearEndAppealContent = {
  imageUrl: "/v1678482304/color-mill-design-2023/EOY-Appeal_hfbom6.png",
  primaryColor: primaryColor,
  imageAlt: "Redwood Coast Seniors Year End Appeal",
  title: "Year End Appeal",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const websiteSectionContent = {
  imageUrl: "/v1678484500/color-mill-design-2023/RCSwebsiteComp_yysynz.png",
  imageAlt: "Redwood Coast Seniors Website",
  title: "Website",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};

const collateralDesignSectionContent = {
  imageUrl: "/v1678482304/color-mill-design-2023/RCS-Brochure-photo_fgbfjd.png",
  primaryColor: primaryColor,
  imageAlt: "Redwood Coast Seniors Collateral Design",
  title: "Collateral Design",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const logoSectionContent = {
  imageUrl:
    "/v1678484188/color-mill-design-2023/logosComp_a9s4m7.png",
  imageAlt: "A New Logo for the Redwood Coast Seniors",
  title: "Logo Design",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};



const testimonialSectionContent = {
  imageUrl:
    "/v1678482351/color-mill-design-2023/Jill-Headshot_os71b7.jpg",
  primaryColor: primaryColor,
  hexagonColors: [
    "#E6C9FC",
    "#CD97F8",
    "#975EC3",
    "#823BBA",
    "#7313AD",
    "#580F85",
    "#390265",
  ],
  imageAlt: "Jill Rexrode - Executive Director, Redwood Coast Seniors",
  heading:
    "'\"The Color Mill's work increased donations and added vibrancy to our entire organization.'\"",
  attribution: "Jill Rexrode - Executive Director, Redwood Coast Seniors",
};

const RedwoodCoastSeniors = () => {
  return (
    <div>
      <PageLayout
        title="Color Mill Design"
        description={`${headerContent.title} Case Study`}
      >
        <CaseStudyHeader {...headerContent} />
        <StylescapeSection {...brandStrategySectionContent} />
        <FullScreenImageSection {...logoSectionContent} />
        <InfoImageSection {...yearEndAppealContent} />
        <WebsiteSection {...websiteSectionContent} />
        <InfoImageSection {...collateralDesignSectionContent} />
        <TestimonialSection {...testimonialSectionContent} />
      </PageLayout>
    </div>
  );
};

export default RedwoodCoastSeniors;
