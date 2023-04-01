import CaseStudyHeader from "../components/CaseStudyHeader";
import FullScreenImageSection from "../components/FullScreenImageSection";
import InfoImageSection from "../components/InfoImageSection";
import InfoImageSectionTwoRows from "../components/InfoImageSectionTwoRows";
import PageLayout from "../components/PageLayout";


const primaryColor = "#074B78";

const headerContent = {
  primaryColor: primaryColor,
  hexagonColors: ["#41565c", "#778288", "#929a9f", "#b4b8bc", "#eaebed"],
  title: "Noyo Harbor Inn",
  subHeading: "A luxury hotel providing seclusion, comfort and gorgeous surroundings.",
  description:
    "As a newly restored Inn on the majestic Pacific Ocean, Noyo Harbor Inn wanted a brand that would compliment the Craftsman style of its hundred year old buildings. We responded by taking inspiration from the floral patterns of the period's wallpaper and created a warm, inviting color palette.",
  scope: "Brand Strategy, Web Development, Logo Design, Collateral Design",
};

const menuSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1680385547/color-mill-design-2023/Noyo-Menus_sivqxx.png",
  imageAlt: "An elegant dining experience",
  title: "Menus",
  subHeading: "An elegant dining experience",
  bg: 'white',
  description:
    "The menus for their gourmet restaurant feature the elegant floral patterns and Craftsman fonts, adding a sophisticated touch to every dining experience. The color palette distinguishes the menu’s focus, all the while, keeping consistent with the Inn’s overall brand.",
}; 

// const websiteSectionContent = {
//   primaryColor: primaryColor,
//   imageUrl: "/v1680108468/color-mill-design-2023/Website-on-Devices_gthkxi.png",
//   imageAlt: "Mendocino Spirits Website",
//   title: "Website",
//   bg: 'white',
//   subHeading: "Bringing the brand to the world",
//   description:
//     "Mendocino Spirits are truly amazing artists, but we noticed that their brand wasn't getting the recognition it deserved. So we designed a website that showcases their unique spirits and positions them as a top-shelf brand where people all over the world can discover and experience their delicious spirits. Plus, with the integration of a strong ecommerce platform, Mendocino Spirits can now sell and ship their spirits nationwide! We made sure the website was easy to use on both mobile and desktop, so no matter what, it is a great experience browsing and shopping.",
// };

const collateralDesignSectionContent = {
  imageUrl: "/v1680385547/color-mill-design-2023/NHI-BC-PS_npn110.png",
  image2Url: "/v1680385547/color-mill-design-2023/NHI-Rackcard_lvrlvl.png",
  primaryColor: primaryColor,
  imageAlt: "Noyo Harbor Inn Collateral Design",
  image2Alt: "Noyo Harbor Inn Brochures",
  title: "Collateral",
  subHeading: "Setting themselves apart from the rest",
  descriptionOne:
    "By creating high-quality collateral, Noyo Harbor Inn was able to differentiate itself from its competitors and establish a strong brand identity. From stunning postcards and business cards to captivating menus and themed drink coasters, their collateral conveyed a consistent and polished message to guests. By providing a memorable and visually appealing experience, Noyo Harbor Inn was able to increase customer loyalty and stand out in a crowded market.",
};

const advertisingSectionContent = {
  primaryColor: primaryColor,
  imageUrl: "/v1680385544/color-mill-design-2023/NHI-Ad_pufaof.png",
  imageAlt: "Noto Harbor Inn Advertising",
  title: "Advertising",
  subHeading: "Reaching a broader audience",
  bg: 'white',
  description:
    "Advertising in various tourist-focused publications helped Noyo Harbor Inn increase its visibility and reach. We were tasked with designing eye catching ads that would give the reader pause and command their extra attention. Ultimately, these ads increased the Inn’s visibility, positioning them as a top luxury hotel destination. ",
};

const NoyoHarborInn = () => {
  return (
    <div>
      <PageLayout
        title="Color Mill Design"
        description={`${headerContent.title} Case Study`}
      >
        <CaseStudyHeader {...headerContent} />
        <InfoImageSectionTwoRows {...collateralDesignSectionContent} />
        <FullScreenImageSection {...menuSectionContent} />
        {/* <WebsiteSection {...websiteSectionContent} /> */}        
        <InfoImageSection {...advertisingSectionContent} />
      </PageLayout>
    </div>
  );
};

export default NoyoHarborInn;
