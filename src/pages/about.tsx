import Img from "next/image";

import Image from "../components/Image";
import PageLayout from "../components/PageLayout";
import PortraitSection from "../components/PortraitSection";
import { getCloudinaryImageUrl } from "../utils/cloudinary";

const aspenContent = {
  primaryColor: "white",
  imageUrl:
    "v1679965306/color-mill-design-2023/COLORMILL_HEADSHOTS_2020-102_ebusx1.jpg",
  imageAlt: "Portrait of Aspen Logan",
  title: "Aspen",
  subHeading: "Giving Back: Volunteerism & Charitable Contributions.",
  description:
    "As the studio project manager, everyday I draw on my experience working at big corporations to help my boutique studio run smoothly and efficiently. Previously, I spent the better part of two decades in software development managing video games for huge companies like Disney, Warner Brothers, Pixar, Dreamworks and LeapFrog. I’m a thoroughly organized person so creating and managing schedules and keeping creative people on task is a natural fit. \n\nI love to travel, read and write murder mysteries and I’m a fanatical vegetable gardener. I also give time to local organizations that are dear to me. Knowing non profits and corporations from all sides has helped me to be a better strategic partner to my clients, allowing me to guide them to well informed solutions.",
 givingBack:"Aspen is the Board President at MendoParks, and has been a dedicated member of the organization for the past 3 years. With her extensive experience in non-profit work, Aspen brings a unique perspective to the table, having seen the organization from both the board and donor side. She is fully committed to her hours of volunteer work and is passionate about making a positive impact on the community through the work of MendoParks. \n\n Aspen is also a Rotarian, was on the board of the local radio station and a big part of Leadership Mendocino, which brings people throughout Mendocino County together to learn about their community. "
};

const jeremyContent = {
  primaryColor: "white",
  imageUrl:
    "v1679965314/color-mill-design-2023/Jeremy_Headshot_md-res_bbdxgk.jpg",
  imageAlt: "Portrait of Aspen Logan",
  title: "Jeremy",
  subHeading: "Giving Back: Volunteerism & Charitable Contributions.",
  description:
    "Meet Jeremy, a multi-talented artist who has mastered the art of oil painting, animation, and coding. After spending two decades in the software industry, where he breathed life into some of the biggest AAA video games, Jeremy redirected his creative energy towards design. With an insatiable curiosity, he has honed his coding skills while creating stunningly intricate illustrations that captivate the imagination.\n\nAs an expert in front-end web development, Jeremy is the driving force behind all the creative projects at The Color Mill. He has a relentless design sense that pushes creative boundaries, and his unique ability to envision the unimaginable has helped shape The Color Mill into the successful creative studio it is today. Get ready to be inspired by Jeremy's passion and innovative spirit!",
  givingBack:"Jeremy is the Committee Chair at the City of Fort Bragg Planning Commission, where he has served as a planning commissioner for the past 5 years and as chair for the past 3 years. With his passion for community growth and success, Jeremy is dedicated to ensuring that all aspects of city planning are executed with excellence, from land use and zoning to transportation and housing. \n\n He has also served on the board of the Economic Development & Financing Corporation, a local non-profit Community Development Financial Institution and as an industry advisor on Career Technical Education board at the local High School. Through his tireless efforts and leadership, Jeremy continues to make a significant contribution to the prosperity of the community he serves."
};

const About = () => {
  return (
    <div>
      <PageLayout
        title="About"
        description="Learn about Color Mill Design, our mission, values, and the passionate team of creative experts behind our innovative design solutions for nonprofits and small businesses."
      >
        <div className="relative mx-auto h-24 w-[95vw] sm:w-screen">
          <Img
            src="/hello.svg"
            alt="Instagram"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <h2
          style={{ lineHeight: "1.4em" }}
          className="mx-auto mb-12 mt-8 w-10/12 text-left font-serif text-xl font-black text-black sm:w-2/3 sm:text-2xl md:mt-8 md:mb-36 md:text-center lg:w-10/12 lg:text-2xl xl:mt-24 xl:text-3xl 2xl:text-4xl"
        >
          We are Color Mill Design, a branding and web design studio
          <br className="hidden lg:block" /> based in California and Oregon.{" "}
          <br />
          <br />
          Our mission is to help people like you find your story.
        </h2>
        <div className="relative mx-auto aspect-square w-[95vw] max-w-[860px] sm:w-screen">
          <Image
            src={getCloudinaryImageUrl(
              "v1679965329/color-mill-design-2023/COLORMILL_HEADSHOTS_2020-111-cropped_sqjoyt.jpg"
            )}
            alt="Aspen and Jeremy Logan"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 45vw,"
          />
        </div>
        <p className="mx-auto mt-6 w-[90vw] max-w-[860px] text-lg ">
          Our story begins in 2015 with a dream to leave our corporate careers
          behind and find more meaning in life. We wanted to wake up in the
          morning feeling fulfilled and productive, not busy and strained. We
          wanted to base our success on how much we’ve learned, not how many
          fires we put out that day.
          <br />
          <br /> In our previous lives, we created video games for huge
          corporations. Although this was super fun and glamorous work, we
          always longed to contribute to something with more impact and purpose.
          When we had the opportunity to go out on our own, we pledged to work
          only with people we truly believed in. <br />
          <br />
          We didn’t completely leave our former selves behind, though. We chose
          to keep the positive lessons our corporate jobs had taught us: be a
          good communicator, stick to the schedule and always set expectations
          (never surprise your clients!) On these pillars, we have built a solid
          and reliable business.
        </p>
        <PortraitSection {...aspenContent} />
        <PortraitSection {...jeremyContent} />
        <div className="h-24" />
      </PageLayout>
    </div>
  );
};

export default About;
