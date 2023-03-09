import PageLayout from "../components/PageLayout";
import Img from "next/image";
import CaseStudyHeader from "../components/CaseStudyHeader";

const headerContent = {
  primaryColor: "#450265",
  hexagonColors: ["#7313AD", "#823BBA", "#975EC3", "#CD97F8", "#E6C9FC"],
  title: "Redwood Coast Seniors",
  subHeading:
    "Providing stimulating activities, essential services & programs for seniors.",
  description:
    "Along with bright new leadership, facility upgrades, new delivery vans and an expanded staff, FBFB was ready for an upgrade to their brand. Their logo, established around the organization’s conception, is steadfast and very recognizable.",
  scope: "Brand Strategy, Collateral Design, Web Design, Signage ",
};

const RedwoodCoastSeniors = () => {
  return (
    <div>
      <PageLayout
        title="Color Mill Design"
        description={`${headerContent.title} Case Study`}
      >
        <CaseStudyHeader {...headerContent} />
      </PageLayout>
    </div>
  );
};

export default RedwoodCoastSeniors;
