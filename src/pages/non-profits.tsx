import PageLayout from "../components/PageLayout";
import Img from "next/image";
const NonProfits = () => {
  return (
    <div>
        <PageLayout
        title="Color Mill Design"
        description="Maximize your impact with Color Mill Design."
      >
      <div className="relative h-24 w-[95vw] mx-auto sm:w-screen">
        <Img
          src="/hello.svg"
          alt="Instagram"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h2 className="mt-12 2xl:6xl mx-auto mb-36 w-10/12 sm:w-2/3 lg:w-1/2 xl:w-1/3 text-left md:text-center font-serif text-2xl font-black text-black sm:text-3xl lg:text-4xl xl:text-4xl"
          >We are Color Mill Design</h2></PageLayout>
    </div>
  );
};  

export default NonProfits;