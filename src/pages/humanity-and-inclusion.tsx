import CaseStudyHeader from "../components/CaseStudyHeader";
import InfoImageSectionTwoRows from "../components/InfoImageSectionTwoRows";
import PageLayout from "../components/PageLayout";
import WebsiteSection from "../components/WebsiteSection";
import { getCloudinaryImageUrl } from "../utils/cloudinary";

const primaryColor = "#011F42";

const headerContent = {
    primaryColor: primaryColor,
    hexagonColors: ["#41565c", "#778288", "#929a9f", "#b4b8bc", "#eaebed"],
    title: "Darland Software",
    subHeading:
        "An agricultural software company helping farmers be more efficient.",
    description:
        "We were approached by Darland Software, an established business of over 25 years, to help them enhance their brand identity. Recognizing the need to elevate their brand to attract a broader range of clients, they turned to us for our expertise in developing compelling brand identities that stand out among the rest.",
    scope: "Website, Brand Strategy, Graphic Design, Print",
};

const collateralDesignSectionContent = {
    imageUrl:
        "/v1680385437/color-mill-design-2023/Darland-Banners_yxz7om.png",
    image2Url:
        "/v1680385441/color-mill-design-2023/Darland-Rackcard_ef0nk5.png",
    primaryColor: primaryColor,
    imageAlt: "Darland Software Banners",
    image2Alt: "Darland Software Rack Card",
    title: "Collateral",
    subHeading: "A look to match their vision",
    descriptionOne:
        "We not only enhanced their brand identity, but also provided them with custom rack cards, show flyers, and banners for a trade show. These materials effectively communicated their brand message and strengths, reinforcing their position as a leading player in their industry. Our designs helped Darland Software stand out among competitors and communicated their value proposition in a clear and compelling way.",

};

const websiteSectionContent = {
    primaryColor: primaryColor,
    imageUrl: "/v1680655168/color-mill-design-2023/Website-on-screen_xgibnn.png",
    imageAlt: "Darland Software Website",
    title: "Interactive Design",
    bg: "white",
    // subHeading: "A gallery site with exquisite detail",
    description:
        "We also helped Darland Software by creating visuals for their websites, which consisted of static images to support their multiple landing pages. Our team worked closely with their team to understand their objectives and create visuals that accurately represented their messaging. Our work elevated the look and feel of their websites and create a more engaging user experience for their clients.",
};



const HumanityAndInclusion = () => {
    const metaData = {
        "type": "website",
        "headline": "Darland Software Case Study",
        "description": "Darland Software, an established business, sought a brand enhancement to attract diverse clients. We developed a compelling identity that stands out.",
        "slug": "darland-software",
        "image": getCloudinaryImageUrl("v1680385443/color-mill-design-2023/Darland-Landing_nrwsar.png"),
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
                <InfoImageSectionTwoRows {...collateralDesignSectionContent} />
                <WebsiteSection {...websiteSectionContent} />
            </PageLayout>
        </div>
    );
};

export default HumanityAndInclusion;
