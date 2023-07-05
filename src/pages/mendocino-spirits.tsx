import CaseStudyHeader from "../components/CaseStudyHeader";
import FullScreenImageSection from "../components/FullScreenImageSection";
import InfoImageSection from "../components/InfoImageSection";
import InfoImageSectionTwoRows from "../components/InfoImageSectionTwoRows";
import PageLayout from "../components/PageLayout";
import StylescapeSection from "../components/StylescapeSection";
import WebsiteSection from "../components/WebsiteSection";
import { getCloudinaryImageUrl } from "../utils/cloudinary";

const primaryColor = "#1A3D44";

const headerContent = {
  primaryColor: primaryColor,
  hexagonColors: ["#41565c", "#778288", "#929a9f", "#b4b8bc", "#eaebed"],
  title: "Mendocino Spirits",
  subHeading: "Quality. Integrity. Excellence.",
  description:
    "Mendocino Spirits is a perfect blend of tradition and innovation. In a market where people often choose their drinks based on labels, we knew that Mendocino Spirits needed a brand that was as unique and inspiring as their whiskey in order to attract new and old customers alike. \n\n We've been fans of Mendocino Spirits for years, attending their whiskey dinners and tastings, so we were thrilled when they approached us to do their branding.",
  scope: "Brand Strategy, Web Development, Logo Design, Collateral Design, Label Illustration, Packaging Design",
};

const brandStrategySectionContent = {
  primaryColor: primaryColor,
  image1Url: "/v1680107311/color-mill-design-2023/MS-Stylecaspe-LR_mtsu48.png",
  image2Url: "/v1680107469/color-mill-design-2023/MS-StyleScape-crop2_fgfghk.jpg",
  imageAlt: "Mendocino Spirits Brand Strategy",
  title: "Brand Strategy",
  subHeading: "Crafting a sophisticated feel",
  description:
    "We started with a vague notion that the brand should be Art Nouveau inspired, feminine feeling and embody the local Mendocino County, California area. Inspiration was drawn from the deep golden grains, the bright copper still and of course, the amber liquid inside the bottles. We wanted to evoke thoughts of sitting in a velvet parlor chair, sipping a glass of the warming, spicy, smooth whiskey.",
};

const logoSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1680212105/color-mill-design-2023/mendo-spirits-logo-comp_w0wdhi.png",
  imageAlt: "A New Logo for the Mendo Parks",
  title: "Logo Design",
  subHeading: "Distilling their essence",
  bg: 'white',
  description:
    "The logo was distilled from the essence of the discovery, the Art Nouveau illustrations, and a desire to establish Mendocino Spirits as a premium product. Swirling grains and a distinct font subtly hint at the Art Nouveau style without restricting the brand to that narrow style. The blue evokes images of blue sky above wheat fields, while the copper not only represents the grains, but also the copper stills the spirits spend much of their lives in. ",
};

const labelDesignSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1680212700/color-mill-design-2023/Mendo-Bottleshots-on_Bar-02_ya9cut.png",
  imageAlt: "Label Design",
  title: "Label Design",
  subHeading: "The four seasons of spirits",
  description:
    "We were thrilled to create the labels for Mendocino Spirits’ four spirits, each representing one of the four seasons. Drawing inspiration from the Art Nouveau style, we hand-drew intricate illustrations for each label, capturing the unique essence of the spirits inside. From the warm and spicy winter whiskey to the light and refreshing summer gin, each label was designed to perfectly embody the spirit it represents. We are proud of the result, each of the labels helping Mendocino Spirits to really stand out on any shelf.",
};


const websiteSectionContent = {
  primaryColor: primaryColor,
  imageUrl: "/v1680108468/color-mill-design-2023/Website-on-Devices_gthkxi.png",
  imageAlt: "Mendocino Spirits Website",
  title: "Website",
  bg: 'white',
  subHeading: "Bringing the brand to the world",
  description:
    "Mendocino Spirits are truly amazing artists, but we noticed that their brand wasn't getting the recognition it deserved. So we designed a website that showcases their unique spirits and positions them as a top-shelf brand where people all over the world can discover and experience their delicious spirits. Plus, with the integration of a strong ecommerce platform, Mendocino Spirits can now sell and ship their spirits nationwide! We made sure the website was easy to use on both mobile and desktop, so no matter what, it is a great experience browsing and shopping.",
};

const collateralDesignSectionContent = {
  imageUrl: "/v1680107770/color-mill-design-2023/MS-Business_Card-Layout_purnhe.png",
  image2Url: "/v1680107769/color-mill-design-2023/MS-Brochure-Layout_lbxmkw.png",
  primaryColor: primaryColor,
  imageAlt: "Mendocino Spirits Business Cards",
  image2Alt: "Mendocino Spirits Brochures",
  title: "Collateral",
  subHeading: "Crafting a beautiful message ",
  descriptionOne:
    "We created stunning brochures for Mendocino Spirits that showcase all of their spirits through high-quality images and descriptions of the spirits and their ingredients, making it easy for customers to get a sense of the unique flavors and aromas of each product. In addition, we created beautiful foil-stamped business cards and foil stickers that match the brand's sophisticated look and feel. These details all come together to create a cohesive and professional image for Mendocino Spirits, helping them stand out in a crowded market.",
};

const largeFormatSectionContent = {
  primaryColor: primaryColor,
  imageUrl: "/v1680107314/color-mill-design-2023/MS-Banners-Instgram_udzzbh.png",
  imageAlt: "Mendo Spirits Banners",
  title: "Trade Show Displays",
  subHeading: "Stunning and eye catching displays",
  bg: 'white',
  description:
    "Banners are an excellent way to showcase the unique label artwork and branding at trade shows and tastings, catching the eye of everyone in the room. We made sure to design the banners to complement the brand's sophisticated look and feel, while also standing out among other exhibitors. These banners help Mendocino Spirits make a memorable impression on potential customers and fans.",
};

const MendocinoSpirits = () => {
  const metaData = {
    "type": "website",
    "headline": "Mendocino Spirits Case Study",
    "description": "Mendocino Spirits, blending tradition and innovation, needed a unique brand. As longtime fans, we were thrilled to create their inspiring branding.",
    "slug": "mendocino-spirits",
    "image": getCloudinaryImageUrl("v1680108504/color-mill-design-2023/Mendocino-Spirits-Landing-Image_kt9oby.png"),
    "datePublished": null,
    "dateModified": null,
    "author": null
  }
  return (
    <div>
      <PageLayout
      {...metaData}
      >
        <CaseStudyHeader {...headerContent} />
        <StylescapeSection {...brandStrategySectionContent}/>
        <FullScreenImageSection {...logoSectionContent} />
        <FullScreenImageSection {...labelDesignSectionContent} />
        <WebsiteSection {...websiteSectionContent} />
        <InfoImageSectionTwoRows {...collateralDesignSectionContent} />
        <InfoImageSection {...largeFormatSectionContent} />
      </PageLayout>
    </div>
  );
};

export default MendocinoSpirits;
