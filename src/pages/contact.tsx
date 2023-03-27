import Img from "next/image";

import ContactForm from "../components/ContactForm";
import PageLayout from "../components/PageLayout";


const Contact = () => {
  return (
    <div>
        <PageLayout
        title="Color Mill Design"
        description="Maximize your impact with Color Mill Design."
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