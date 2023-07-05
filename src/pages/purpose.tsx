import Img from "next/image";

import PageLayout from "../components/PageLayout";
const Purpose = () => {
  const metaData = {
    "type": "website",
    "headline": "Purpose",
    "description": "A purpose driven boutique design agency working for people who make a difference.",
    "slug": "purpose",
    "image": "/color-mill-logo.jpg",
    "datePublished": null,
    "dateModified": null,
    "author": null
  }
  return (
    <div>
        <PageLayout
        {...metaData}
      >
      <div className="relative h-24 w-[95vw] mx-auto sm:w-screen">
        <Img
          src="/hello.svg"
          alt="Instagram"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h2 className="w-10/12 mx-auto mt-12 font-serif text-2xl font-black text-left text-black 2xl:6xl mb-36 sm:w-2/3 lg:w-1/2 xl:w-1/3 md:text-center sm:text-3xl lg:text-4xl xl:text-4xl"
          >We are Color Mill Design</h2></PageLayout>
    </div>
  );
};  

export default Purpose;