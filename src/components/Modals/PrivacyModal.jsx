const PrivacyModal = ({ ...modalProps }) => {
  return (
    <section
      id="privacy-modal"
      className={`privacy-modal ${modalProps.privacyModal ? "show" : ""}`}
    >
      <div className="privacy-container">
        <div className="privacy-main">
          <div className="privacy-logo">
            <img src={modalProps.logo} alt="Brand Logo" />
            <h2>Plug & Play Privacy Policy</h2>
          </div>
          <div className="privacy-text">
            <h2>Plug and Play Privacy Policy</h2>
            <br />
            <p>
              This policy explains how Plug and Play collects, uses and shares
              your information when you use our website and the shopping
              features we offer.
            </p>
            <br />
            <h2>What we collect</h2>
            <br />
            <p>
              <span>Your Info</span> : This includes details you provide when
              creating an account, buying something, subscribing to updates, or
              contacting us. Examples include your name, billing/shipping
              address, email, phone number, payment details, and anything else
              you choose to share.
              <br /> <span>Automatic Info</span> : We automatically collect
              certain information when you visit our Website, like your IP
              address, browser type, operating system, the website that sent you
              here (referring URL), device type, and how you browse our site.{" "}
              <br />
              <span>Cookies & Similar Tech</span> : We may use cookies and
              similar tools to track activity on our Website and store some
              information. Cookies are small data files that may contain an
              anonymous unique identifier. Cookies are sent to your browser from
              a website and stored on your device. Similar technologies like
              beacons, tags, and scripts are also used to collect and track
              information to improve and personalize your experience. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent. However, if you don&apos;t accept cookies,
              you may not be able to use some portions of our Website.
            </p>
            <br />
            <h2>Security</h2>
            <br />
            <p>
              We take reasonable steps to protect your information from
              unauthorized access, disclosure, alteration, or destruction.
              However, no internet transmission or electronic storage is
              completely secure.
            </p>
            <br />
            <h2>Contact us</h2>
            <br />
            <p>
              Contact Us If you have any questions about this Privacy Policy,
              please contact us at <span>frashidov@gmail.com</span>
            </p>
          </div>
          <button onClick={modalProps.handleModal}>Close</button>
        </div>
      </div>
    </section>
  );
};

export default PrivacyModal;
