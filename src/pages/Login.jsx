import { FaChevronLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section id="login">
      <div className="login-container">
        <button onClick={() => navigate(-1)} className="login-previous">
          <FaChevronLeft />
        </button>
        <div className="login-main">
          <div className="login-logo">
            <img src={logo} alt="Brand Logo" className="w-7 h-7 invert" />
            <p>Plug & Play</p>
          </div>
          <div className="login-text">
            <h2>Login to your account</h2>
          </div>
          <div className="login-google">
            <button>
              <FcGoogle />
              <p>Continue with Google</p>
            </button>
          </div>
          <form>
            <div className="login-input">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="frashidov@gmail.com" />
            </div>
            <div className="login-input">
              <label htmlFor="psw">Password</label>
              <input type="password" placeholder="∗∗∗∗∗∗∗∗" />
            </div>
            <div className="login-remember">
              <input type="checkbox" value="RememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
              <Link>Forgot password?</Link>
            </div>
            <button>Login</button>
          </form>
          <div className="login-register">
            <p>Not registered yet?</p>
            <Link>Create an account</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
