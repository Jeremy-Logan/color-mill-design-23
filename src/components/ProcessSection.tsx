import Img from "next/image";
import ProcessCard from "./ProcessCard";
import {DefineIcon, DeliverIcon, DiscoverIcon, DoIcon } from "./icons"

// type Props = {}

const categoryProperties = [
  {
    color: "#0A99B9",
    name: "DISCOVER",
    icon: <DiscoverIcon color='#0A99B9'/>,
    arrow: true,
    description:
      "We start with an in-depth discovery phase to immerse ourselves in your business. What we get from this is an action plan on executing a holistic brand and user experience.",
  },
  {
    color: "#F37B10",
    name: "DEFINE",
    icon: <DefineIcon color='#F37B10'/>,
    arrow: true,
    description:
      "Based on the discovery & research results, we create a static prototype that will allow you to see the aesthetics and flow before we start production—this lets us make changes easily before we start programming.",
  },
  {
    color: "#C10682",
    name: "DO",
    icon: <DoIcon color='#C10682'/>,
    arrow: true,
    description:
      "Our full-stack team provides front-end and back-end development services working closely with our designers. This ensures the websites we create are completely custom, easy to use, look great, and represent your brand in the best way possible.",
  },
  {
    color: "#EB5757",
    name: "DELIVER",
    icon: <DeliverIcon color='#EB5757'/>,
    arrow: false,
    description:
      "Once we have everything designed and functioning perfectly, we check it again. In this phase, we do thorough quality testing on the site. Once any issues have been addressed, we then launch the site to the public.",
  },
];

const ProcessSection = () => {
  return (
    <div className="mt-36">
      <h3 className="mb-8 text-center font-serif text-6xl font-black">
        Results Driven
      </h3>
      <div className="relative h-24 w-screen oveflow-hidden">
        <Img
          src="/process.svg"
          alt="Process"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-[1600px] px-10 mx-auto mt-12">
        {categoryProperties.map((category, index) => 
          <ProcessCard key={index} props={category} />
        )}
      </div>
    </div>
  );
};

export default ProcessSection;
