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
  subHeading: "A welcoming community",
  description:
    "RCS needed a major update to leave behind their aging reputation and become the happening place for seniors to gather. The community loved the center, but RCS didn’t have a clear vision to share or an inviting story seniors could get behind. \n\n We created a brand that was friendly and playful but also clean and professional with bright color palettes, easy to read text for our senior audience and pictures of seniors enjoying life together to make them feel this was a fun, welcoming place.",
};

const yearEndAppealContent = {
  imageUrl: "/v1678482304/color-mill-design-2023/EOY-Appeal_hfbom6.png",
  primaryColor: primaryColor,
  imageAlt: "Redwood Coast Seniors Year End Appeal",
  title: "Year End Appeal",
  subHeading: "Standing out with bold color",
  description:
    "Year end is when most non profits do their big push for donations, and because all appeals go out at the same time, it’s important to really stand out in mailboxes. To increase the likelihood that RCS’s appeal would be opened and not thrown directly into the trash, we created a bright envelope that would look unique against a sea of white. This approach paid off: RCS’s donations increased by 28% and garnered many comments from donors that this was the most striking appeal they’d seen from RCS in its 30 year history.",
};

const websiteSectionContent = {
  imageUrl: "/v1678484500/color-mill-design-2023/RCSwebsiteComp_yysynz.png",
  imageAlt: "Redwood Coast Seniors Website",
  title: "Website",
  subHeading: "Accessible and informative",
  description:
    "RCS had an outdated website with no consistent visual appeal and the overly complex menu system made it impossible for visitors to find information. Not to mention, the backend was costing the staff countless hours in lost productivity as they tried to navigate the outdated interface.\n\n We were tasked with creating a website with a simple navigation system that was easily accessible and beautifully presented. First, we identified the most important things people came to RCS for: Food, Transportation and Activities. Then, we built a site that highlighted those key areas. \n\n We created a calendar that clearly showed their lunch offerings and classes all in one place and connected it with their established system. The backend was created to their specific needs which reduced downtime and allowed for a faster transition from the old site.\n\n We also created a rich and varied photo library from on site photoshoots with actual clients of the center. The thought was: if people recognize their neighbor, they’re more likely to join in the fun too! \n\n The streamlined and updated website increased the volume of visitors coming through the door each day because now they could clearly see what the center was offering.",
};

const collateralDesignSectionContent = {
  imageUrl: "/v1678482304/color-mill-design-2023/RCS-Brochure-photo_fgbfjd.png",
  primaryColor: primaryColor,
  imageAlt: "Redwood Coast Seniors Collateral Design",
  title: "Collateral Design",
  subHeading: "Raising community awareness",
  description:
    "Brochures and informational rack cards are a great way for RCS to get their programs and general information about the center out to the community. They raise awareness of their brand in the community as well as remind clients what RCS has to offer. ",
};

const logoSectionContent = {
  primaryColor: primaryColor,
  imageUrl:
    "/v1678484188/color-mill-design-2023/logosComp_a9s4m7.png",
  imageAlt: "A New Logo for the Redwood Coast Seniors",
  title: "Logo Design",
  subHeading: "I heart RCS",
  description:
    "RCS had a logo they treasured, but it wasn’t exhibiting the lighthearted playfulness they wanted to exude. Using their idea as a guide, we implemented the bright color palette and swirled the colors around the heart, adding movement and light. We paired this with an open, flowing font and created a mark that accentuated the active vibrancy of the center itself. ",
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
