import { useState } from "react";
import PrivacyModal from "../components/Modals/PrivacyModal";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [privacyModal, setPrivacyModal] = useState(false);

  const navigate = useNavigate();

  const handleModal = (e) => {
    e.preventDefault();
    setPrivacyModal(!privacyModal);
  };

  return (
    <section id="register">
      <PrivacyModal
        handleModal={handleModal}
        logo={logo}
        privacyModal={privacyModal}
      />
      <div className="register-container">
        <button
          onClick={() => navigate(-1)}
          className={`login-previous ${privacyModal ? "hide" : ""}`}
        >
          <FaChevronLeft />
        </button>
        <div className="register-main">
          <div className="login-logo">
            <img src={logo} alt="Brand Logo" />
            <p>Plug & Play</p>
          </div>
          <div className="login-text">
            <h2>Sign up</h2>
          </div>
          <form>
            <div className="register-details">
              <div className="register-input">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Farid" />
              </div>
              <div className="register-input">
                <label htmlFor="surname">Surname</label>
                <input type="text" placeholder="Rashidov" />
              </div>
            </div>
            <div className="register-input">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="frashidov@gmail.com" />
            </div>
            <div className="register-input">
              <label htmlFor="number">Phone Number</label>
              <input type="number" placeholder="+994558676776" />
            </div>
            <div className="register-input">
              <label htmlFor="psw">Password</label>
              <input type="password" placeholder="∗∗∗∗∗∗∗∗" />
            </div>
            <div className="register-input">
              <label htmlFor="psw">Confirm your password</label>
              <input type="password" placeholder="∗∗∗∗∗∗∗∗" />
            </div>
            <div className="register-gender">
              <p>Gender</p>
              <select name="gender" id="gender">
                <option value="gender-male">Male</option>
                <option value="gender-female">Female</option>
                <option value="gender-other">Other</option>
              </select>
            </div>
            <div className="register-privacy">
              <input type="checkbox" value="privacyPolicy" id="privacyPolicy" />
              <label htmlFor="privacyPolicy">
                I agree to Plug & Play&apos;s{" "}
                <button onClick={handleModal}>privacy policy</button>
              </label>
            </div>
            <button className="auth-button">Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
