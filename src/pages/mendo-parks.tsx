import CaseStudyHeader from "../components/CaseStudyHeader";
import FullScreenImageSection from "../components/FullScreenImageSection";
import InfoImageSectionTwoRows from "../components/InfoImageSectionTwoRows";
import PageLayout from "../components/PageLayout";
import StylescapeSection from "../components/StylescapeSection";

const primaryColor = "#01657D";

const headerContent = {
  primaryColor: primaryColor,
  hexagonColors: ["#0A99B9", "#07A4C7", "#4FC3DF", "#81D5EA", "#ADEFFF"],

  title: "Mendo Parks",
  subHeading: "Preservation Through Education",
  description:
    "MendoParks is the leading nonprofit dedicated to supporting California State Parks in Mendocino County. MendoParks was Mendocino County’s best kept secret- and they didn’t want to stay that way! We were tasked with increasing the organization’s visibility by providing branding and marketing that would truly embody their mission of keeping parks open, accessible and thriving for everyone. ",
  scope: "Brand Strategy, Logo Design, Collateral Design",
};

const brandStrategySectionContent = {
  primaryColor: primaryColor,
  image1Url: "/v1678487517/color-mill-design-2023/MP-Stylescape-1_r4efhk.jpg",
  image2Url: "/v1678487521/color-mill-design-2023/MP-Stylescape-2_owxeag.jpg",
  imageAlt: "Mendo Parks Brand Strategy",
  title: "Brand Strategy",
  subHeading: "Increasing visibility",
  description:
    "We wanted their brand to evoke feelings of calm reflection; a reminder of what can be discovered in the outdoors. We created a color palette inspired by the forest and the ocean and paired it with creative animal line drawings of local fauna. The font is flowy and glides around the brand like water or wind, all bringing you back to the parks. ",
};

const appealContent = {
  imageUrl: "/v1678500126/color-mill-design-2023/MP-EYO-2022_nroxlu.png",
  image2Url: "/v1678500130/color-mill-design-2023/MP-Membership_kyytzs.png",
  primaryColor: primaryColor,
  bg: "white",
  imageAlt: "Mendo parks Appeal Design",
  image2Alt: "Mendo parks Appeal Design",
  title: "Appeal Mailers",
  subHeading: "Distinct and eye-catching",
  descriptionOne:
    "Many non-profits vie for attention in donors' mailboxes. To set MendoParks apart from the rest, we employed out-of-the-box strategies to increase the likelihood that our appeal would be opened and read. Rather than blending in with the expected form letter, we created bright distinctive envelopes and unique greeting card style appeals. We sent mailers consistently 2-3x annually to keep in people’s minds, which ultimately lead to higher donation and member retention rates. ",
  // descriptionTwo:
  //   "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const collateralDesignSectionContent = {
  imageUrl: "/v1678499683/color-mill-design-2023/MP-BC-Photo_xqxncv.png",
  image2Url:
    "/v1678499682/color-mill-design-2023/MP-Glass-Beach-Card_dznp8p.png",
  primaryColor: primaryColor,
  imageAlt: "Mendo parks Collateral Design",
  image2Alt: "Mendo parks Collateral Design",
  title: "Collateral Design",
  subHeading: "Keeping top of mind",
  descriptionOne:
    "Collateral materials serve as a tangible reminder to supporters, donors and volunteers of MendoParks’ mission, projects and educational programs as well as their many preservation efforts. The naturally inspired color palette and striking design make their brochures, business cards and stickers memorable and encourage people to keep them. These materials keep MendoParks and their mission top of mind throughout the year.",
  // descriptionTwo:
  //   "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction.",
};

const logoSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1678499217/color-mill-design-2023/mendo-parks-logo-comp_rxn1lt.png",
  imageAlt: "A New Logo for the Mendo Parks",
  title: "Logo Design",
  subHeading: "Iconic Symbolism",
  bg: 'white',
  description:
    "As MendoParks is all about the ocean and the forest, we thought their logo should be too. Using the iconic symbols of waves and rolling hills, the mark says exactly what they do at first glance and it retains its recognisable qualities no matter what size it is presented at. ",
};

const infographicSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1678499679/color-mill-design-2023/MP-Donation-Graphic_pq8aet.png",
  imageAlt: "Mendo Parks Infographic",
  title: "Infographics",
  // subHeading: "Say Something Here",
  description:
    "Infographics were a game-changer for MendoParks. They made conveying important information easy for donors to understand and therefore easy for them to engage with the work MendoParks does. Utilizing this approach to make complex information accessible has increased the community’s understanding of and appreciation for MendoParks’ mission and all they accomplish.",
};

// const testimonialSectionContent = {
//   imageUrl: "/v1678482351/color-mill-design-2023/Jill-Headshot_os71b7.jpg",
//   primaryColor: primaryColor,
//   hexagonColors: [
//     "#ADEFFF",
//     "#81D5EA",
//     "#4FC3DF",
//     "#07A4C7",
//     "#0A99B9",
//     "#004E60",
//     "#002A33",
//   ],
//   imageAlt: "Jill Rexrode - Executive Director, Redwood Coast Seniors",
//   heading:
//     "'\"The Color Mill's work increased donations and added vibrancy to our entire organization.'\"",
//   attribution: "Jill Rexrode - Executive Director, Redwood Coast Seniors",
// };

const MendoParks = () => {
  return (
    <div>
      <PageLayout
        title="Mendo Parks Case Study"
        description="MendoParks, supporting Mendocino County State Parks, sought increased visibility. We provided branding and marketing that embodied their mission."
      >
        <CaseStudyHeader {...headerContent} />
        <StylescapeSection {...brandStrategySectionContent} />
        <FullScreenImageSection {...logoSectionContent} />
        <InfoImageSectionTwoRows {...collateralDesignSectionContent} />
        <InfoImageSectionTwoRows {...appealContent} />
        <FullScreenImageSection {...infographicSectionContent} />
        {/* <TestimonialSection {...testimonialSectionContent} /> */}
      </PageLayout>
    </div>
  );
};

export default MendoParks;
