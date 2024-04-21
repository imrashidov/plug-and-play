import { FaChevronLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <section id="forget-password">
      <div className="login-container">
        <button onClick={() => navigate(-1)} className="login-previous">
          <FaChevronLeft />
        </button>
        <div className="login-main">
          <div className="login-logo">
            <img src={logo} alt="Brand Logo" />
            <p>Plug & Play</p>
          </div>
          <div className="login-text">
            <h2>Forget something?</h2>
            <p>Enter your email below to receive password reset instructions</p>
          </div>
          <form>
            <div className="login-input">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="frashidov@gmail.com" />
            </div>
            <button className="auth-button">Submit</button>
          </form>
          <div className="login-divider">or</div>
          <div className="login-google">
            <button>
              <FcGoogle />
              <p>Continue with Google</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
