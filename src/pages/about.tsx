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
  subHeading: "Building Around an \n Existing Legacy",
  description:
    "As the studio project manager, everyday I draw on my experience working at big corporations to help my boutique studio run smoothly and efficiently. Previously, I spent the better part of two decades in software development managing video games for huge companies like Disney, Warner Brothers, Pixar, Dreamworks and LeapFrog. I’m a thoroughly organized person so creating and managing schedules and keeping creative people on task is a natural fit. \n\nI love to travel, read and write murder mysteries and I’m a fanatical vegetable gardener. I also give time to local organizations that are dear to me. Knowing non profits and corporations from all sides has helped me to be a better strategic partner to my clients, allowing me to guide them to well informed solutions.",
bg: 'white'
  };

const jeremyContent = {
  primaryColor: "white",
  imageUrl:
    "v1679965314/color-mill-design-2023/Jeremy_Headshot_md-res_bbdxgk.jpg",
  imageAlt: "Portrait of Aspen Logan",
  title: "Jeremy",
  subHeading: "Building Around an \n Existing Legacy",
  description:
    "Meet Jeremy, a multi-talented artist who has mastered the art of oil painting, animation, and coding. After spending two decades in the software industry, where he breathed life into some of the biggest AAA video games, Jeremy redirected his creative energy towards design. With an insatiable curiosity, he has honed his coding skills while creating stunningly intricate illustrations that captivate the imagination.\n\nAs an expert in front-end web development, Jeremy is the driving force behind all the creative projects at The Color Mill. He has a relentless design sense that pushes creative boundaries, and his unique ability to envision the unimaginable has helped shape The Color Mill into the successful creative studio it is today. Get ready to be inspired by Jeremy's passion and innovative spirit!",
    bg: 'white'
  };

const About = () => {
  return (
    <div>
      <PageLayout
        title="Color Mill Design | About"
        description="A purpose driven boutique design agency working for people who make a difference."
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
          className="2xl:w-6xl mx-auto mb-12 mt-8 w-10/12 text-left font-serif text-xl font-black text-black sm:w-2/3 sm:text-2xl md:mt-8 md:mb-36 md:text-center lg:w-7/12 lg:text-3xl xl:mt-24 xl:w-1/2 xl:text-3xl 2xl:text-4xl"
        >
          We are Color Mill Design, a branding and web design studio based in
          California and Oregon. Our mission is to help people like you find
          your story.
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
        <p className="w-[95vw] max-w-[860px] text-lg sm:w-screen mx-auto mt-6">
          Our story begins in 2015 with a dream to leave our corporate careers
          behind and find more meaning in life. We wanted to wake up in the
          morning feeling fulfilled and productive, not busy and strained. We
          wanted to base our success on how much we’ve learned, not how many
          fires we put out that day.<br/><br/> In our previous lives, we created video
          games for huge corporations. Although this was super fun and glamorous
          work, we always longed to contribute to something with more impact and
          purpose. When we had the opportunity to go out on our own, we pledged
          to work only with people we truly believed in. <br/><br/>We didn’t completely
          leave our former selves behind, though. We chose to keep the positive
          lessons our corporate jobs had taught us: be a good communicator,
          stick to the schedule and always set expectations (never surprise your
          clients!) On these pillars, we have built a solid and reliable
          business.
        </p>
        <PortraitSection {...aspenContent}/>
        <PortraitSection {...jeremyContent}/>
        <div className="h-24"/>
      </PageLayout>
    </div>
  );
};

export default About;
