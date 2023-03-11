import React, { useState } from "react";
import CurvyButton from "./CurvyButton";

// type Props = {}

const categoryProperties = [
  {
    color: "#0A99B9",
    name: "WEB DESIGN",
    heading: "Web Design and Development",
    subHeading: "Custom web solutions built for effective results.",
    description:
      "A great website shows off what makes you unique. We take the time to understand just what this means: who you are, what your goals are and who your target audience is. This lays a foundation for solid, custom solutions that in turn, get you the best results for your organization. ",
  },

  {
    color: "#219653",
    name: "BRAND STRATEGY",
    heading: "Brand Strategy",
    subHeading: "Your organization is unique. Your brand should be too.",
    description:
      "Your brand is more than your logo: it’s how your audience perceives you and it’s what they say about you when you’re not in the room. Through strategic thinking and collaborative workshops, we'll define a brand that carries your organization successfully into the future. ",
  },
  {
    color: "#F2994A",
    name: "GRAPHIC DESIGN",
    heading: "Graphic Design",
    subHeading: "Great design grows your brand by continuing your story.",
    description:
      "People interact with your brand in many different ways so it’s more important than ever to maintain a consistent brand experience from channel to channel. From business cards and brochures to annual reports to trade show displays and banners, great design creates a lasting, unified image that carries your brand through everything it touches. ",
  },
  {
    color: "#EB5757",
    name: "PRINT DESIGN",
    heading: "Print Design",
    subHeading: "Custom built for you",
    description:
      "We build beautiful, responsive websites that are lightning fast, inherently secure and require virtually zero monthly maintenance.",
  },
];

const outlineGradient =
  "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #0B6AEA 4.37%, #9B51E0 22.78%, #EB5757 35.37%, #B38E74 50.38%, #5F9261 57.65%, #219653 62.97%, #F2994A 79.92%, #7107D5 96.39%)";

function WhatWeDoSection({}) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  function handleButtonClick(index: number) {
    setActiveButtonIndex(index);
  }

  return (
    <>
      <div className="mx-auto lg:mt-20">
        <h3 className="mb-6 w-full text-center font-sans text-4xl font-medium sm:text-6xl">
          WHAT WE DO
        </h3>
      </div>
      <div
        className="relative mx-auto w-[90vw] rounded-bl-3xl rounded-tr-3xl p-0.5 md:w-[70vw] lg:w-[60vw] xl:w-[50vw]"
        style={{ background: outlineGradient }}
      >
        <div className="relative flex h-full min-h-[500px] w-full items-start rounded-bl-3xl rounded-tr-3xl bg-white py-8">
          <div className="-ml-[6%] flex w-2/12 flex-col items-center justify-center self-center md:-ml-[10%] md:w-4/12 2xl:w-3/12 ">
            {categoryProperties.map((button, index) => (
              <div
                className="my-9 -rotate-90 md:my-2 md:w-full md:rotate-0"
                key={index}
              >
                <CurvyButton
                  color={activeButtonIndex === index ? button.color : "gray"}
                  onClick={() => handleButtonClick(index)}
                  isActive={activeButtonIndex === index}
                >
                  {button.name}
                </CurvyButton>
              </div>
            ))}
          </div>
          <div className="flex h-full w-11/12 items-start md:w-10/12">
            {categoryProperties.map((category, index) => (
              <div key={index}>
                {activeButtonIndex === index && (
                  <div
                    key={index}
                    className="mx-8 flex h-full flex-col items-start justify-center gap-4 md:my-8 sm:mx-12 md:items-center xl:mx-24 2xl:mx-36"
                  >
                    <h3
                      className="text-left text-2xl font-medium sm:text-center sm:text-4xl"
                      style={{ color: category.color }}
                    >
                      {category.heading}
                    </h3>
                    <h4 className="text-left text-lg font-medium sm:text-center sm:text-2xl lg:text-3xl">
                      {category.subHeading}
                    </h4>
                    <p className="text-sm sm:mt-4 md:text-xl">
                      {category.description}
                    </p>{" "}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeDoSection;
