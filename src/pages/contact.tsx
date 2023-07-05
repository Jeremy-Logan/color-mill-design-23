import Img from "next/image";

import ContactForm from "../components/ContactForm";
import PageLayout from "../components/PageLayout";
import { getCloudinaryImageUrl } from "../utils/cloudinary";


const Contact = () => {
  const metaData = {
    "type": "website",
    "headline": "Contact",
    "description": "Get in touch with Color Mill Design to discuss your nonprofit or small business's design needs, ask questions, or schedule a consultation with our experienced team.",
    "slug": "contact",
    "image": getCloudinaryImageUrl("v1679965329/color-mill-design-2023/COLORMILL_HEADSHOTS_2020-111-cropped_sqjoyt.jpg"),
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
          src="/letsConnect.svg"
          alt="Let's Connect"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <ContactForm/>
      </PageLayout>
    </div>
  );
};  

export default Contact;