import { FaChevronLeft } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <section id="login">
      <div className="register-container">
        <button onClick={() => navigate(-1)} className="login-previous">
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
              <input
                type="checkbox"
                value="privacyAndPolicy"
                id="privacyAndPolicy"
              />
              <label htmlFor="privacyAndPolicy">
                I agree to Plug & Play&apos;s <Link>privacy policy</Link>
              </label>
            </div>
            <button>Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
