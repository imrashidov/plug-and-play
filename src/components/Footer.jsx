import { Link } from "react-router-dom";
import { FooterData, SocialData } from "../data/FooterData";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-container">
        <div className="footer-container-top">
          <Link href="/" className="footer-logo">
            <img src={logo} alt="Brand Logo" />
          </Link>
          <div className="footer-main-top">
            <div className="footer-links-main">
              {FooterData.map((data) => (
                <ul key={data.id} className="footer-links">
                  <h6>{data.title}</h6>
                  {data.links?.map((link) => (
                    <li key={link.id}>
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              ))}
              <ul className="footer-support">
                <h6>Support</h6>
                <li>81 Fuzuli street, Baku, Azerbaijan</li>
                <a href="mailto:frashidov@gmail.com">frashidov@gmail.com</a>
                <li>+994 55 867 6776</li>
              </ul>
            </div>
            <div className="footer-socials">
              {SocialData.map((social) => (
                <Link
                  key={social.id}
                  href={social.path}
                  className="social-links"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-container-bottom">
          <p>
            © Plug & Play Inc. 2024. Designed and developed by Farid Rashidov.
          </p>
          <div className="footer-terms">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
