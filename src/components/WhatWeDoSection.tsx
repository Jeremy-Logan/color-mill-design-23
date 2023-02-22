import React, { useState } from "react";
import CurvyButton from "./CurvyButton";

// type Props = {}

const categoryProperties = [
  {
    color: "#0A99B9",
    name: "WEB DESIGN",
    heading: "Web Design and Development",
    subHeading: "Custom built for you",
    description:
      "We build beautiful, responsive websites that are lightning fast, inherently secure and require virtually zero monthly maintenance.",
  },
  {
    color: "#F2994A",
    name: "GRAPHIC DESIGN",
    heading: "Graphic Design",
    subHeading: "Custom built for you",
    description:
      "We build beautiful, responsive websites that are lightning fast, inherently secure and require virtually zero monthly maintenance.",
  },
  {
    color: "#219653",
    name: "BRANDING",
    heading: "Branding",
    subHeading: "Custom built for you",
    description:
      "We build beautiful, responsive websites that are lightning fast, inherently secure and require virtually zero monthly maintenance.",
  },
  {
    color: "#EB5757",
    name: "MESSAGING",
    heading: "Messaging",
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
      <div className="mt-36  mx-auto">
        <h3 className="mb-6 font-sans w-full text-center text-4xl sm:text-6xl font-medium">WHAT WE DO</h3>
      </div>
      <div
        className="relative mx-auto h-[550px] w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] rounded-bl-3xl rounded-tr-3xl p-0.5"
        style={{ background: outlineGradient }}
      >
        <div className="relative h-full w-full rounded-bl-3xl rounded-tr-3xl bg-white">
          <div className="absolute top-0 left-[5%] sm:left-[0%] md:-left-[20%] lg:-left-40 flex h-full flex-row md:flex-col md:justify-start md:mt-12 justify-center gap-4 md:gap-6 md:rotate-0 -rotate-90">
            {categoryProperties.map((button, index) => (
              <CurvyButton
                color={button.color}
                key={index}
                onClick={() => handleButtonClick(index)}
                isActive={activeButtonIndex === index}
              >
                {button.name}
              </CurvyButton>
            ))}
          </div>
          {categoryProperties.map((category, index) => (
            <div key={index}>
              {activeButtonIndex === index && (
               
                  <div key={index} className="flex h-full pt-12 flex-col pl-[20%] md:pl-[30%] lg:pl-[25%] pr-[10%] md:pr-[10%] md:items-center justify-start gap-4">
                    <h3 className="text-left sm:text-center text-2xl md:text-4xl font-medium" style={{color: category.color}}>{category.heading}</h3>
                    <h4 className="text-left sm:text-center text-xl md:text-2xl lg:text-3xl font-medium">
                      {category.subHeading}
                    </h4>
                    <p className="text-lg md:text-xl mt-4">{category.description}</p>{" "}
                  </div>
                
              )}
            </div >
          ))}
        </div>
      </div>
    </>
  );
}

export default WhatWeDoSection;
