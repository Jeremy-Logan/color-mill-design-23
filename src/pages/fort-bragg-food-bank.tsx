import PageLayout from "../components/PageLayout";
import Img from "next/image";
import CaseStudyHeader from "../components/CaseStudyHeader";
import InfoImageBlock from '../components/InfoImageBlock';

const primaryColor = "#002856";

const headerContent = {
  primaryColor: primaryColor ,
  hexagonColors: ["#01489A", "#0061D0", "#0378FF", "#0696E8", "#04C3FF"],

  title: "Fort Bragg Food Bank",
  subHeading: "Providing nutritious food for a healthy and better life.",
  description:
    "Along with bright new leadership, facility upgrades, new delivery vans and an expanded staff, FBFB was ready for an upgrade to their brand. Their logo, established around the organization’s conception, is steadfast and very recognizable. ",
  scope:
    "Brand Strategy, Collateral Design, Annual Reports, Signage,  Web design, Booth Graphics",
};

const infoImageBlockContent1 = {
  primaryColor: primaryColor,
  imageUrl: "/v1677804673/Color%20Mill%20Design%202023/FB-Business_card_Images_oywplp.png",
  imageAlt: "Fort Bragg Food Bank Business Cards",
  title: "Brand Strategy",
  subHeading: "Building Around an Existsing Logo",
  description: "It’s a legacy they want to maintain. So how do we build a brand that radiates vibrancy and progress around a B&W logo created in the 80s? We create a palette of bright painterly colors and watercolor textures, adding splashes of color to everything: accentuating the intricate line work of the pen and ink drawing while also expressing their vibrant new direction."
}

const FortBraggFoodBank = () => {
  return (
    <div>
      <PageLayout
        title="Color Mill Design"
        description={`${headerContent.title} Case Study`}
      >
        <CaseStudyHeader {...headerContent} />
        <InfoImageBlock {...infoImageBlockContent1}/>
      </PageLayout>
    </div>
  );
};

export default FortBraggFoodBank;
