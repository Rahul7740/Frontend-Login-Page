import React, { useState } from "react";
import { toast } from "react-toastify";
import "../style/loginRegister.css";
import AllButtons from "../snippets/AllButtons";
import { Link } from "react-router-dom";
import Checkbox from "../snippets/Checkbox";

const Register = () => {
  const [eye, setEye] = useState(false);

  function changeType(e) {
    const sibling = e.currentTarget.previousElementSibling;
    if (sibling.type === "password") {
      sibling.type = "text";
    } else {
      sibling.type = "password";
    }
    setEye(eye === false ? true : false);
  }
  const [passMatch, setPassMatch] = useState(false);

  const passCheck = () => {
    const pass = document.querySelector(".pass").value;
    const confirmPass = document.querySelector(".confirm-pass").value;
    if (pass === confirmPass && pass !== "") {
      setPassMatch(true);
    } else {
      setPassMatch(false);
    }
  };

  // ====manish=========
  const intidata = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(intidata);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("User created successfully");
        setFormData(intidata); // Reset form after success
      } else {
        const errorData = await response.json();
        toast.error(
          `Failed to create user: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      toast.error("Error submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="all-sections">
      <div className="container">
        <div className="loginRegister-container">
          <div className="loginRegister-form-container">
            <div className="loginRegister-btns">
              <Link to={"/login"}>Log in </Link>
              <Link className="active-btn-login">Register</Link>
            </div>
            <form className="loginRegister-Form " onSubmit={handleSubmit}>
              <h3>Create Your Account</h3>
              <input
                type="text"
                name="name"
                className="delivery-a-inputs"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                className="delivery-a-inputs"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                className="delivery-a-inputs pass"
                placeholder="Password"
                onChange={() => {
                  passCheck();
                }}
              />

              <div className="delivery-a-inputs">
                <input
                  onChange={(e) => {
                    passCheck();
                    handleChange(e);
                  }}
                  name="password"
                  value={formData.password}
                  type="password"
                  placeholder="Confirm password"
                  className="confirm-pass"
                  required
                />
                {eye === false ? (
                  <p
                    className="cursor-pointer"
                    onClick={(e) => {
                      changeType(e);
                    }}
                  >
                    show
                  </p>
                ) : (
                  <p
                    className="cursor-pointer"
                    onClick={(e) => {
                      changeType(e);
                    }}
                  >
                    hide
                  </p>
                )}
              </div>
              <div className="loginRegister-policy-forget">
                <div>
                  <Checkbox name="policy" id="policy1" type="checkbox" />
                  <label htmlFor="policy1">
                    By continuing, you agree to <span>Buynow</span> policy
                  </label>
                </div>
              </div>
              <button type="submit" className="all-btns text-white hover:text-black">{loading?"submiting":"submit"}</button>
               <Link to={passMatch ? "/verifyEmail" : ""}>
                <AllButtons
                  type="submit"
                  name={loading ? "creating" : "Create account"}
                  class={`loginRegisterBtn ${
                    passMatch
                      ? "opacity-100 cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                />
              </Link>
            </form>
            <div className="loginRegister-other-accout-btns-container">
              <div className="or">
                <span></span>
                or
                <span></span>
              </div>
              <div className="loginRegister-other-accout-btns">
                <button>
                  <img
                    src={require(`../assets/svg/Goggle-icon.svg`).default}
                    alt="google"
                  />
                  <p>google</p>
                </button>
                <button>
                  <img
                    src={require(`../assets/svg/facebook-icon.svg`).default}
                    alt="facebook"
                  />
                  <p>facebook</p>
                </button>
              </div>
              <div className="bestExperience">
                <p>Log in or Register For Best Experience</p>
                <img
                  src={require(`../assets/svg/LoginOutlined.svg`).default}
                  alt="login"
                />
              </div>
            </div>
          </div>

          <div className="loginRegister-imgs">
            <img
              src={require(`../assets/images/register-img.png`)}
              alt="register"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
