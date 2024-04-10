import { FaTruck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="banner-main">
          <div className="banner-item">
            <span className="banner-item-logo">
              <FaTruck />
            </span>
            <div className="banner-item-text">
              <h4>Free and fast delivery</h4>
              <p>Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="banner-item">
            <span className="banner-item-logo">
              <BiSupport />
            </span>
            <div className="banner-item-text">
              <h4>24/7 Customer Service</h4>
              <p>Friendly 24/7 Customer Support</p>
            </div>
          </div>
          <div className="banner-item">
            <span className="banner-item-logo">
              <SiAdguard />
            </span>
            <div className="banner-item-text">
              <h4>Money Back Guarantee</h4>
              <p>Return money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
