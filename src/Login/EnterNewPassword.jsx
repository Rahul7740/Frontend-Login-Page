import React, { useState } from "react";
import "../style/loginRegister.css";
import { Link } from "react-router-dom";
import AllButtons from "../snippets/AllButtons";

function EnterNewPassword() {
  const [eye, setEye] = useState(false);
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

  function changeType(e) {
    const sibling = e.currentTarget.previousElementSibling;
    if (sibling.type === "password") {
      sibling.type = "text";
    } else {
      sibling.type = "password";
    }
    setEye(eye === false ? true : false);
  }

  return (
    <section className="all-sections">
      <div className="container">
        <div className="verifyEmail-container">
          <div className="verifyEmail-contents">
            <div>
              <h3 className=" ">Enter New Password</h3>

              <p>New Password Must Be Different From Previous Used Password.</p>
            </div>
            <div className="newPassword-inputs">
              <input
                type="password"
                placeholder="password"
                className="delivery-a-inputs pass"
                onChange={() => {
                  passCheck();
                }}
              />
              <h5>Password Must Be 8 Characters</h5>
              <div className="delivery-a-inputs reset-password-input">
                <input
                  onChange={() => {
                    passCheck();
                  }}
                  type="password"
                  placeholder="Confirm Password"
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
            </div>

            <div className="verfy-email-btns">
              <Link to={passMatch ? "/login" : ""}>
                <AllButtons
                  type="submit"
                  name="Change Password"
                  class={`loginRegisterBtn ${
                    passMatch
                      ? "opacity-100 cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                />
              </Link>
            </div>
          </div>
          <div className="loginRegister-imgs">
            <img
              src={require(`../assets/images/newPassword-img.png`)}
              alt="new-password"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterNewPassword;
