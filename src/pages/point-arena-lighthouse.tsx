import PageLayout from "../components/PageLayout";
import Img from "next/image";
import CaseStudyHeader from "../components/CaseStudyHeader";

const headerContent = { 
  primaryColor: "#01657D",
  hexagonColors:["#0A99B9", "#07A4C7", "#4FC3DF", "#81D5EA", "#ADEFFF"],
title : "Point Arena Lighthouse",
  subHeading: "Preservation Through Education",
  description: "Along with bright new leadership, facility upgrades, new delivery vans and an expanded staff, FBFB was ready for an upgrade to their brand. Their logo, established around the organization’s conception, is steadfast and very recognizable.",
scope: 'Brand Strategy, Collateral Design, Web Design'
}

const PointArenaLighthouse = () => {
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

export default PointArenaLighthouse;