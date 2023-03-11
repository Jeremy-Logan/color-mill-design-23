import PageLayout from "../components/PageLayout";
import CaseStudyHeader from "../components/CaseStudyHeader";
import InfoImageSection from "../components/InfoImageSection";
import FullScreenImageSection from "../components/FullScreenImageSection";
import TestimonialSection from "../components/TestimonialSection";
import StylescapeSection from "../components/StylescapeSection";
import InfoImageSectionTwoRows from "../components/InfoImageSectionTwoRows";

const primaryColor = "#01657D";

const headerContent = {
  primaryColor: primaryColor,
  hexagonColors: ["#0A99B9", "#07A4C7", "#4FC3DF", "#81D5EA", "#ADEFFF"],

  title: "Mendo Parks",
  subHeading: "Preservation Through Education",
  description:
    "Along with bright new leadership, facility upgrades, new delivery vans and an expanded staff, FBFB was ready for an upgrade to their brand. Their logo, established around the organization’s conception, is steadfast and very recognizable. ",
  scope: "Brand Strategy, Logo Design, Collateral Design",
};

const brandStrategySectionContent = {
  primaryColor: primaryColor,
  image1Url: "/v1678487517/color-mill-design-2023/MP-Stylescape-1_r4efhk.jpg",
  image2Url: "/v1678487521/color-mill-design-2023/MP-Stylescape-2_owxeag.jpg",
  imageAlt: "Mendo Parks Brand Strategy",
  title: "Brand Strategy",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const appealContent = {
  imageUrl: "/v1678500126/color-mill-design-2023/MP-EYO-2022_nroxlu.png",
  image2Url: "/v1678500130/color-mill-design-2023/MP-Membership_kyytzs.png",
  primaryColor: primaryColor,
  bg: 'white',
  imageAlt: "Mendo parks Appeal Design",
  image2Alt: "Mendo parks Appeal Design",
  title: "Appeal Mailers",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
  description2:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const collateralDesignSectionContent = {
  imageUrl: "/v1678499683/color-mill-design-2023/MP-BC-Photo_xqxncv.png",
  image2Url: "/v1678499682/color-mill-design-2023/MP-Brochure_trwi0n.png",
  primaryColor: primaryColor,
  imageAlt: "Mendo parks Collateral Design",
  image2Alt: "Mendo parks Collateral Design",
  title: "Collateral Design",
  subHeading: "Say Something Here",
  description:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
  description2:
    "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const logoSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1678499217/color-mill-design-2023/mendo-parks-logo-comp_rxn1lt.png",
  imageAlt: "A New Logo for the Mendo Parks",
  title: "Logo Design",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};

const preservationContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1678499682/color-mill-design-2023/MP-Glass-Beach-Card_dznp8p.png",
  imageAlt: "Mendo parks Collateral Design",
  title: "Preservation",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};

const infographicSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1678499679/color-mill-design-2023/MP-Donation-Graphic_pq8aet.png",
  imageAlt: "Mendo Parks Infographic",
  title: "Infographics",
  subHeading: "Say Something Here",
  description:
    "Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur. Henis et alicill uptatem ratur? Acest pel imustem fugiam ventibus, to inum ipsam qui senima sumquamet quam res repro minihil lestis doluptin re sit, quis acerrum autemporerum vid moditatur aut ut dolum hiciusape cusdant otatur simi, sim fugitatur.",
};

const testimonialSectionContent = {
  imageUrl: "/v1678482351/color-mill-design-2023/Jill-Headshot_os71b7.jpg",
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
  imageAlt: "Jill Rexrode - Executive Director, Redwood Coast Seniors",
  heading:
    "'\"The Color Mill's work increased donations and added vibrancy to our entire organization.'\"",
  attribution: "Jill Rexrode - Executive Director, Redwood Coast Seniors",
};

const MendoParks = () => {
  return (
    <div>
      <PageLayout
        title="Color Mill Design"
        description={`${headerContent.title} Case Study`}
      >
        <CaseStudyHeader {...headerContent} />
        <StylescapeSection {...brandStrategySectionContent} />
        <FullScreenImageSection {...logoSectionContent} />
        <InfoImageSectionTwoRows {...collateralDesignSectionContent} />
        <InfoImageSectionTwoRows {...appealContent} />
        <InfoImageSection {...preservationContent} />
       <FullScreenImageSection {...infographicSectionContent} />
        <TestimonialSection {...testimonialSectionContent} />
      </PageLayout>
    </div>
  );
};

export default MendoParks;
