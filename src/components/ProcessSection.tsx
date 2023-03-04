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
      "We start with a deep dive into your organization. Through close collaboration, we’ll ask a bunch of questions about your audience, strategic goals and desired outcomes. We’ll gather valuable information about your long term goals and what you do best. We may even discover a few things you didn’t know about yourself.",
  },
  {
    color: "#F37B10",
    name: "DEFINE",
    icon: <DefineIcon color='#F37B10'/>,
    arrow: true,
    description:
      "We take all that insight from our discovery phase and explore how to use it to best express your brand personality. Whether we’re building an interactive prototype of your website design or creating a stylescape to begin the branding process, this is the phase that sets the foundation for everything we do next.",
  },
  {
    color: "#C10682",
    name: "DO",
    icon: <DoIcon color='#C10682'/>,
    arrow: true,
    description:
      "This is the time when your brand really comes to life. All that intangible inspiration turns into reality through a well executed website, an inspiring logo or a gorgeous annual report (just to name a few.) Throughout this process, we constantly refer back to our foundation, keep a consistent message.",
  },
  {
    color: "#EB5757",
    name: "DELIVER",
    icon: <DeliverIcon color='#EB5757'/>,
    arrow: false,
    description:
      "The most successful brands are more than just a mission or a product. They are a well told story; one that draws people in on an emotional level. We now get to see that story come to life, reflected in the website, the logo or that gorgeous annual report. And the rest of the world gets to see it too.",
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
