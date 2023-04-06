import PageLayout from "../components/PageLayout";

const Policies = () => {
  return (
    <div>
      <PageLayout
        title="About"
        description="Learn about Color Mill Design, our mission, values, and the passionate team of creative experts behind our innovative design solutions for nonprofits and small businesses."
      >
        <main className="oveflow-hidden mx-auto max-w-[1800px] bg-white sm:mt-[120px] md:mt-16 lg:mt-24">
          <h1 className="2xl:6xl mx-auto mb-12 w-10/12 pt-12 text-left font-serif text-2xl font-black text-black sm:w-2/3 sm:text-3xl md:mt-8 md:mb-36 md:text-center lg:w-10/12 lg:text-4xl xl:mt-24 xl:text-4xl 2xl:text-5xl">
            Color Mill Design Website Policies
          </h1>
          <section
            id="privacy"
            className="mx-8 border-2 border-teal-400 py-12 px-24"
          >
            <h2 className="text-2xl font-semibold">Privacy Policy</h2>
            <p>
              At Color Mill Design, we take your privacy very seriously. We are
              committed to protecting your personal information and complying
              with the General Data Protection Regulation (GDPR) when processing
              your data.
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              What information do we collect?
            </h3>
            <p>
              When you use our website and contact form, we may collect the
              following personal information:{" "}
              <ul className="list-outside list-disc indent-4">
                <li>Your name</li> <li>Your email address</li>{" "}
                <li>Your phone number (optional)</li>
              </ul>
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              Why do we collect this information?
            </h3>
            <p>
              We collect this information to:{" "}
              <ul className="list-outside list-disc indent-4">
                <li>Respond to your inquiries and provide customer support</li>{" "}
                <li>Keep a record of our communication with you</li>{" "}
                <li>Improve our products and services</li>
              </ul>
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              How do we use your information?
            </h3>
            <p>
              We use your information only for the purposes for which it was
              collected, which include:{" "}
              <ul className="list-outside list-disc indent-4">
                <li>
                  Responding to your inquiries and providing customer support
                </li>{" "}
                <li>Keeping a record of our communication with you</li>{" "}
                <li>Improving our products and services</li>
                <li>
                  Sending you occasional promotional emails or newsletters (if
                  you have opted in to receive them)
                </li>
              </ul>
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              Do we share your information?
            </h3>
            <p>
              We do not sell or rent your personal information to third parties.
              However, we may share your information with third-party service
              providers who assist us in operating our website and providing our
              products and services.{" "}
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              How do we protect your information?
            </h3>
            <p>
              We take reasonable and appropriate measures to protect your
              personal information from loss, misuse, unauthorized access,
              disclosure, alteration, and destruction.{" "}
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              What are your rights?
            </h3>
            <p>Under the GDPR, you have the following rights: </p>
            <ul className="list-outside list-disc indent-4">
              <li>The right to access your personal information</li>{" "}
              <li>The right to rectify inaccurate or incomplete information</li>{" "}
              <li>The right to erasure of your personal information</li>
              <li>
                The right to restrict processing of your personal information
              </li>
              <li>The right to data portability</li>
              <li>
                The right to object to processing of your personal information
              </li>
              <li>
                The right to lodge a complaint with a supervisory authority
              </li>
            </ul>
            <br />
            <p>
              {" "}
              If you would like to exercise any of these rights, please contact
              us at hello@mycolormill.com.
            </p>
          </section>
          <section
            id="cookies"
            className="mx-8 mt-12 border-2 border-teal-400 py-12 px-24"
          >
            <h2 className="text-2xl font-semibold">Cookie Policy</h2>
            <p>
              Our website uses cookies to improve your browsing experience and
              to personalize content. Cookies are small text files that are
              stored on your device when you visit our website.
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              What types of cookies do we use?
            </h3>
            <ul className="list-outside list-disc indent-4">
              <li>
                Strictly necessary cookies: These cookies are essential for the
                operation of our website and cannot be turned off in our
                systems. They enable basic functions like page navigation,
                filling out forms, and accessing secure areas of our website.
              </li>{" "}
              <li>
                Performance cookies: These cookies help us understand how
                visitors use our website by collecting information about the
                number of visitors, the pages visited, and the time spent on our
                website. This information is used to improve our website and its
                content.
              </li>{" "}
              <li>
                Functionality cookies: These cookies allow our website to
                remember your preferences (such as language or region) and
                provide enhanced features.
              </li>
            </ul>
            <h3 className="mt-4 text-xl font-semibold">
              How can you control cookies?
            </h3>
            <p>
              You can control and/or delete cookies as you wish. You can delete
              all cookies that are already on your device and you can set most
              browsers to prevent them from being placed. However, if you do
              this, you may have to manually adjust some preferences every time
              you visit our website and some features may not work as intended.
            </p>
           
          </section>
        </main>
      </PageLayout>
    </div>
  );
};

export default Policies;
