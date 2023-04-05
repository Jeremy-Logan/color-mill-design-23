import Img from "next/image";

import ContactForm from "../components/ContactForm";
import PageLayout from "../components/PageLayout";


const Contact = () => {
  return (
    <div>
        <PageLayout
        title="Contact"
        description="Get in touch with Color Mill Design to discuss your nonprofit or small business's design needs, ask questions, or schedule a consultation with our experienced team."
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