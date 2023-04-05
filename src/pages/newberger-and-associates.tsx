import CaseStudyHeader from "../components/CaseStudyHeader";
import InfoImageSectionTwoRows from "../components/InfoImageSectionTwoRows";
import PageLayout from "../components/PageLayout";
import WebsiteSection from "../components/WebsiteSection";

const primaryColor = "#4B6A96";

const headerContent = {
  primaryColor: primaryColor,
  hexagonColors: ["#41565c", "#778288", "#929a9f", "#b4b8bc", "#eaebed"],
  title: "Newberger & Associates",
  subHeading:
    "Dedicated to design solutions that elevate the human experience.",
  description:
    "Newberger and Associates, a premier architecture firm specializing in coastal projects, approached us with the challenge of creating a brand and website that reflected their commitment to excellence. As coastal professionals, they wanted their image to match the high-quality work they deliver. Our task was to create a brand that aligned with Newberger and Associates' vision and conveyed their expertise and attention to detail.",
  scope: "Website, Brand Strategy, Graphic Design, Print",
};


const websiteSectionContent = {
  primaryColor: primaryColor,
  imageUrl: "/v1680386081/color-mill-design-2023/Newberger-website_nu1r1n.png",
  imageAlt: "Newberger & Associates Website",
  title: "Website",
  bg: "white",
  subHeading: "A gallery site with exquisite detail",
  description:
    "We designed Newberger and Associates' website with a focus on the exquisite materials used in each project, showcasing the detailed craftsmanship and beauty of the properties. We carefully selected descriptive adjectives for each case study that captured the essence of each building, evoking curiosity and a sense of wonder in potential clients. Through captivating visuals and expertly crafted copy, we emphasized Newberger and Associates' ability to create exceptional work while demonstrating their meticulous attention to detail. The website serves as a powerful tool for showcasing their brand, their outstanding portfolio, and their expertise in delivering awe-inspiring coastal projects and acts as a very effective sales tool.",
};

const collateralDesignSectionContent = {
  imageUrl:
    "/v1680385239/color-mill-design-2023/Newberger-BC_kr2ko1.png",
  image2Url:
    "/v1680385234/color-mill-design-2023/Newberger-LH_wdq9lg.png",
  primaryColor: primaryColor,
  imageAlt: "Newberger & Associates Business Cards",
  image2Alt: "Newberger & Associates Stationery",
  title: "Collateral",
  subHeading: "A look to match their vision",
  descriptionOne:
    "Newberger and Associates' collateral materials, including their business cards, stationery, and a specially designed title block, are a testament to the importance of maintaining brand consistency. By investing in high-quality materials that reflect their brand values, Newberger and Associates has been able to reinforce their brand identity, making it easier for clients to recognize and remember them. The consistency of their color palette, typography, and design elements across all touchpoints helps to create a lasting impression and reinforces their reputation for delivering high-quality work.",
    
};


const NewbergerAndAssociates = () => {
  return (
    <div>
      <PageLayout
        title="Newberger & Associates Case Study"
        description="Newberger and Associates, a coastal architecture firm, needed a brand reflecting their excellence. We aligned their brand with their vision and expertise."
      >
        <CaseStudyHeader {...headerContent} />
        <InfoImageSectionTwoRows {...collateralDesignSectionContent} />
        <WebsiteSection {...websiteSectionContent} />
      </PageLayout>
    </div>
  );
};

export default NewbergerAndAssociates;
