import { useState } from "react";
import PrivacyModal from "../components/Modals/PrivacyModal";
import { FaChevronLeft } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../schema/yup";

const Register = () => {
  const [privacyModal, setPrivacyModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    actions.resetForm();
    setIsSubmitted(true);
  };

  const navigate = useNavigate();

  const handleModal = () => {
    setPrivacyModal(!privacyModal);
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        email: "",
        number: "",
        password: "",
        confirmPassword: "",
        gender: "",
        privacyPolicy: false,
      },
      validationSchema: registerSchema,
      onSubmit,
    });

  return (
    <section id="register">
      <PrivacyModal
        handleModal={handleModal}
        logo={logo}
        privacyModal={privacyModal}
      />
      {isSubmitted ? (
        <div className="success">
          <div className="success-container">
            <div className="success-logo">
              <GrStatusGood className="w-52 h-52" />
            </div>
            <div className="success-text">
              <p>
                Congratulations, your account has been successfully created.
              </p>
              <button onClick={() => navigate("/")}>Continue</button>
            </div>
          </div>
        </div>
      ) : (
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
            <form onSubmit={handleSubmit}>
              <div className="register-details">
                <div className="register-input">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Farid"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="errors"> {errors.name} </p>}
                </div>
                <div className="register-input">
                  <label htmlFor="surname">Surname</label>
                  <input
                    type="text"
                    name="surname"
                    placeholder="Rashidov"
                    value={values.surname}
                    onChange={handleChange}
                    className={errors.surname ? "input-errors" : ""}
                  />
                  {errors.surname && (
                    <p className="errors"> {errors.surname} </p>
                  )}
                </div>
              </div>
              <div className="register-input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="frashidov@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="errors"> {errors.email} </p>}
              </div>
              <div className="register-input">
                <label htmlFor="number">Phone Number</label>
                <input
                  type="number"
                  name="number"
                  placeholder="+994558676776"
                  value={values.number}
                  onChange={handleChange}
                />
                {errors.number && <p className="errors"> {errors.number} </p>}
              </div>
              <div className="register-input">
                <label htmlFor="psw">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="∗∗∗∗∗∗∗∗"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="errors"> {errors.password} </p>
                )}
              </div>
              <div className="register-input">
                <label htmlFor="psw">Confirm your password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="∗∗∗∗∗∗∗∗"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="errors"> {errors.confirmPassword} </p>
                )}
              </div>
              <div className="register-gender">
                {errors.gender && (
                  <p className="errors-gender"> {errors.gender} </p>
                )}
                <p>Gender</p>{" "}
                <select
                  name="gender"
                  id="gender"
                  defaultValue={""}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option name="Male">Male</option>
                  <option name="Female">Female</option>
                  <option name="Other">Other</option>
                </select>
              </div>
              <div className="register-privacy">
                <input
                  type="checkbox"
                  value="privacyPolicy"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  onChange={handleChange}
                />
                <label htmlFor="privacyPolicy">
                  I agree to Plug & Play&apos;s
                </label>
                <span onClick={handleModal}>privacy policy</span>
                {errors.privacyPolicy && (
                  <p className="errors-privacy"> {errors.privacyPolicy} </p>
                )}
              </div>
              <button
                disabled={isSubmitting}
                className={`auth-button ${
                  isSubmitting ? "disabled-button" : ""
                }`}
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Register;
