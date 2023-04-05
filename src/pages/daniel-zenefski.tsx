import CaseStudyHeader from "../components/CaseStudyHeader";
import FullScreenImageSection from "../components/FullScreenImageSection";
import PageLayout from "../components/PageLayout";
import StylescapeSection from "../components/StylescapeSection";


const primaryColor = "#5A261F";

const headerContent = {
  primaryColor: primaryColor,
  hexagonColors: ["#41565c", "#778288", "#929a9f", "#b4b8bc", "#eaebed"],
  title: "Daniel Zenefski",
  subHeading:
    "A fine woodworker with a unique sense of detail",
  description:
    "Daniel enlisted our services to develop a distinctive brand identity for his exceptional woodworking business. With a wealth of experience under his belt, he sought a brand that would encapsulate the essence of his work and enable him to grow his business. By creating a strong brand, he hoped to cement his reputation as an authority in his field.",
  scope: "Brand Strategy, Graphic Design, Print",
};

const brandStrategySectionContent = {
  primaryColor: primaryColor,
  image1Url: "/v1680385343/color-mill-design-2023/DZ-Style2-1_zezyyb.png",
  image2Url: "/v1680385343/color-mill-design-2023/DZ-Style-2_anvcgo.png",
  imageAlt: "Daniel Zenefski Brand Strategy",
  title: "Brand Strategy",
  subHeading: "Crafting a sophisticated feel",
  description:
    "We created a brand for Daniel's woodworking business that reflected the natural beauty and quality of his work. We used a color palette that featured warm earth tones to represent the various types of wood he used in his creations. The overall style was clean and minimalistic, while still being approachable and inclusive. Our design team presented two stylescapes to Daniel, which allowed him to refine his vision and choose the look that best represented his business's unique brand identity.",
};

const logoSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1680635878/color-mill-design-2023/logo-comp_ud6i8a.png",
  imageAlt: "Two visually stunning marks",
  title: "Logo",
  subHeading: "Two visually stunning marks",
  bg: 'white',
  description:
    "In addition to creating a distinctive brand identity, we developed a logo that combined a word mark and a visual mark. The visual mark was designed as an optical illusion that hinted at the intricacies of Daniel's woodworking talents, making it a unique and memorable aspect of his brand. This logo not only serves as a powerful representation of Daniel's brand identity but also doubles as a literal brand, which can be burned into the wood pieces that he creates. By combining the word mark and the visual mark, we aimed to create a logo that was not only functional but also aesthetically pleasing and truly unique.",
};


const DanielZenefski = () => {
  return (
    <div>
      <PageLayout
        title="Daniel Zenefski Case Study"
        description="Daniel's woodworking business needed a distinctive brand to showcase his expertise. We created a strong identity to support his growth and authority."
      >
        <CaseStudyHeader {...headerContent} />
        <StylescapeSection {...brandStrategySectionContent}/>
        <FullScreenImageSection {...logoSectionContent} />
      </PageLayout>
    </div>
  );
};

export default DanielZenefski;
