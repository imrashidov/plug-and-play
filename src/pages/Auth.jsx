import { FaChevronLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  return (
    <section id="auth">
      <div className="auth-container">
        <button onClick={() => navigate(-1)} className="auth-previous">
          <FaChevronLeft />
        </button>
        <div className="auth-main">
          <div className="auth-logo">
            <img src={logo} alt="Brand Logo" className="w-7 h-7 invert" />
            <p>Plug & Play</p>
          </div>
          <div className="auth-text">
            <h2>Login to your account</h2>
          </div>
          <div className="auth-google">
            <button>
              <FcGoogle />
              <p>Continue with Google</p>
            </button>
          </div>
          <form>
            <div className="auth-login">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="frashidov@gmail.com" />
            </div>
            <div className="auth-login">
              <label htmlFor="psw">Password</label>
              <input type="password" placeholder="∗∗∗∗∗∗∗∗" />
            </div>
            <div className="auth-remember">
              <input type="checkbox" value="RememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
              <Link>Forgot password?</Link>
            </div>
            <button>Login</button>
          </form>
          <div className="auth-register">
            <p>Not registered yet?</p>
            <Link>Create an account</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
