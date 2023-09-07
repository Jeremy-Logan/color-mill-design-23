import Img from "next/image";

import PageLayout from "../components/PageLayout";
import WorkImageGrid from "../components/WorkImageGrid";
import { getCloudinaryImageUrl } from "../utils/cloudinary";



const nonProfitImages = [
    {
        src: "v1678240470/color-mill-design-2023/Food-Bank-Landing-Image_n17ako.png",
        alt: "Fort Bragg Food Bank",
        title: "Fort Bragg Food Bank",
        description:
            "Brand Strategy, Website Design and Development, Graphic Design, Print Design",
        url: "/fort-bragg-food-bank",
    },
    {
        src: "v1678240470/color-mill-design-2023/RCS-Landing-Image_nln6uo.png",
        alt: "Redwood Coast Seniors",
        title: "Redwood Coast Seniors",
        description:
            "Brand Strategy, Logo Design, Website Design and Development, Print Design",
        url: "/redwood-coast-seniors",
    },
    {
        src: "v1678240471/color-mill-design-2023/MendoParks-Landing_nmbmil.png",
        alt: "MendoParks",
        title: "MendoParks",
        description: "Brand Strategy, Logo Design, Print Design",
        url: "/mendo-parks",
    },
    {
        src: "v1678240470/color-mill-design-2023/Point_Arena-Landing-Image_vdppyv.png",
        alt: "Point Arena Lighthouse",
        title: "Point Arena Lighthouse",
        description: "Brand Strategy, Website Design and Development, Print Design",
        url: "/point-arena-lighthouse",
    },
    {
        src: "v1678240470/color-mill-design-2023/Point_Arena-Landing-Image_vdppyv.png",
        alt: "Humanity and Inclusion",
        title: "Humanity and Inclusion",
        description: "Print Design",
        modalDescription:"Humanity and Inclusion is an international non-profit that works to improve the lives of people living with disabilities in over 60 countries. We were approached by their US office to help them create a series of print materials for their planned giving campaign. We created a full color brochure that was not only visually appealing, but also helped them communicate their mission and impact in a clear and compelling way.",
        modalImages:[
            {
                src: "v1678240470/color-mill-design-2023/Point_Arena-Landing-Image_vdppyv.png",
                alt: "Humanity and Inclusion",
                title: "Humanity and Inclusion",
                description: "Print Design",
            },
            {
                src: "v1678240471/color-mill-design-2023/MendoParks-Landing_nmbmil.png",
                alt: "Humanity and Inclusion",
                title: "Humanity and Inclusion",
                description: "Print Design",
            },
            {
                src: "v1678240470/color-mill-design-2023/Point_Arena-Landing-Image_vdppyv.png",
                alt: "Humanity and Inclusion",
                title: "Humanity and Inclusion",
                description: "Print Design",
            },
            
        ]
    },
    {
        src: "v1680385485/color-mill-design-2023/MendoHigh-Landing_ykiifp.png",
        alt: "Mendocino High School",
        title: "Mendocino High School",
        description: "Brand Strategy, Logo Design, Print Design",
        modalDescription: "Mendocino High School is a public high school located in Mendocino, California. We were approached by the school to help them create a new logo that would represent their school and community. We created a logo that was not only visually appealing, but also helped them communicate their mission and impact in a clear and compelling way.",
        modalImages: [
            {
                src: "v1680385485/color-mill-design-2023/MendoHigh-Landing_ykiifp.png",
                alt: "Humanity and Inclusion",
                title: "Humanity and Inclusion",
                description: "Print Design",
            },
            {
                src: "v1680385485/color-mill-design-2023/MendoHigh-Landing_ykiifp.png",
                alt: "Humanity and Inclusion",
                title: "Humanity and Inclusion",
                description: "Print Design",
            },
            {
                src: "v1680385485/color-mill-design-2023/MendoHigh-Landing_ykiifp.png",
                alt: "Humanity and Inclusion",
                title: "Humanity and Inclusion",
                description: "Print Design",
            },]
    },
];

const businessImages = [
    {
        src: "v1680108504/color-mill-design-2023/Mendocino-Spirits-Landing-Image_kt9oby.png",
        alt: "Mendocino Spirits",
        title: "Mendocino Spirits",
        description:
            "Website, Brand Strategy, Logo Design, Graphic Design, Print, Illustrations",
        url: "/mendocino-spirits",
    },
    {
        src: "v1680385225/color-mill-design-2023/Newberger-Landing-Image_d39dhp.png",
        alt: "Newberger & Associates",
        title: "Newberger & Associates",
        description: "Website, Brand Strategy, Graphic Design, Print",
        url: "/newberger-and-associates",
    },
    {
        src: "v1680385546/color-mill-design-2023/Noyo-Landing_dyhaqj.png",
        alt: "Noyo Harbor Inn",
        title: "Noyo Harbor Inn",
        description: "Website, Brand Strategy, Graphic Design, Print",
        url: "/noyo-harbor-inn",
    },
    {
        src: "v1680385379/color-mill-design-2023/Zenefski-Landing-Page_c8k1pi.png",
        alt: "Daniel Zenefski",
        title: "Daniel Zenefski",
        description: "Brand Strategy, Logo Design",
        url: "/daniel-zenefski",
    },
    {
        src: "v1680385443/color-mill-design-2023/Darland-Landing_nrwsar.png",
        alt: "Darland Software",
        title: "Darland Software",
        description: "Graphic Design, Print, Interactive Design",
        url: "/darland-software",
    },
    {
        src: "v1680385589/color-mill-design-2023/Shaw-coffee-Landing_dqbszf.png",
        alt: "Shaw Coffee",
        title: "Shaw Coffee",
        description: "Package Design",
        modalDescription: "Humanity and Inclusion is an international non-profit that works to improve the lives of people living with disabilities in over 60 countries. We were approached by their US office to help them create a series of print materials for their planned giving campaign. We created a full color brochure that was not only visually appealing, but also helped them communicate their mission and impact in a clear and compelling way.",
        modalImages: [
            {
                src: "v1680385589/color-mill-design-2023/Shaw-coffee-Landing_dqbszf.png",
                alt: "Shaw Coffee",
                title: "Shaw Coffee",
                description: "Package Design",
            },
            {
                src: "v1680385589/color-mill-design-2023/Shaw-coffee-Landing_dqbszf.png",
                alt: "Shaw Coffee",
                title: "Shaw Coffee",
                description: "Package Design",
            },
            {
                src: "v1680385589/color-mill-design-2023/Shaw-coffee-Landing_dqbszf.png",
                alt: "Shaw Coffee",
                title: "Shaw Coffee",
                description: "Package Design",
            }
        ]
    },
    {
        src: "v1680385613/color-mill-design-2023/RCC-BC-Landing_rpasr3.png",
        alt: "Redwood Coast Construction",
        title: "Redwood Coast Construction",
        description: "Print Design",
        modalDescription: "Humanity and Inclusion is an international non-profit that works to improve the lives of people living with disabilities in over 60 countries. We were approached by their US office to help them create a series of print materials for their planned giving campaign. We created a full color brochure that was not only visually appealing, but also helped them communicate their mission and impact in a clear and compelling way.",
        modalImages: [
            {
                src: "v1680385613/color-mill-design-2023/RCC-BC-Landing_rpasr3.png",
                alt: "Redwood Coast Construction",
                title: "Redwood Coast Construction",
                description: "Print Design",
            },
            {
                src: "v1680385613/color-mill-design-2023/RCC-BC-Landing_rpasr3.png",
                alt: "Redwood Coast Construction",
                title: "Redwood Coast Construction",
                description: "Print Design",
            },
            {
                src: "v1680385613/color-mill-design-2023/RCC-BC-Landing_rpasr3.png",
                alt: "Redwood Coast Construction",
                title: "Redwood Coast Construction",
                description: "Print Design",
            }
        ]
    },
];

const Work = () => {
    const metaData = {
        "type": "website",
        "headline": "Work",
        "description": "Explore our tailored design services for non-profits and small businesses, including brand strategy, web design & development, and graphic design, that drive growth and make a lasting impact.",
        "slug": "work",
        "image": getCloudinaryImageUrl("v1680108504/color-mill-design-2023/Mendocino-Spirits-Landing-Image_kt9oby.png"),
        "datePublished": null,
        "dateModified": null,
        "author": null
    }
    return (
        <div>
            <PageLayout
                {...metaData}
            ><h1 className="w-10/12 mx-auto font-serif text-2xl font-black text-center text-black 2xl:6xl sm:w-2/3 sm:text-3xl md:mt-12 lg:w-1/2 lg:text-4xl xl:w-1/3 xl:text-5xl">
                    Non-profit
                </h1>
                <div className="relative mx-auto h-16 w-[95vw] sm:w-screen md:my-8 md:h-24">
                    <Img
                        src="/specialists.svg"
                        alt="Instagram"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <h2 className="w-10/12 mx-auto text-lg font-semibold text-center text-black 2xl:6xl sm:w-2/3 sm:text-2xl lg:w-1/2 lg:text-3xl xl:text-3xl">
                    Change-Makers Transformed
                </h2>
                <WorkImageGrid images={nonProfitImages} />
                <h1 className="w-10/12 mx-auto font-serif text-2xl font-black text-center text-black 2xl:6xl sm:w-2/3 sm:text-3xl md:mt-12 lg:w-1/2 lg:text-4xl xl:w-1/3 xl:text-5xl">
                    Small Business
                </h1>
                <div className="relative mx-auto h-16 w-[95vw] sm:w-screen md:my-8 md:h-24">
                    <Img
                        src="/experts.svg"
                        alt="Instagram"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <h2 className="w-10/12 mx-auto text-lg font-semibold text-center text-black 2xl:6xl sm:w-2/3 sm:text-2xl lg:w-1/2 lg:text-3xl xl:text-3xl">
                    Branding and Website Design
                </h2>
                <WorkImageGrid images={businessImages} />
            </PageLayout>
        </div>
    );
};

export default Work;
