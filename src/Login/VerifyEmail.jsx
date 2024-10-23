import React from "react";
import "../style/loginRegister.css";
import { Link } from "react-router-dom";
import AllButtons from "../snippets/AllButtons";

function VerifyEmail() {
  function cnageee(e) {
    const sibling = e.currentTarget.nextElementSibling;
    const prsibling = e.currentTarget.previousElementSibling;
    if (e.target.value.length === 1 && sibling instanceof HTMLInputElement) {
      sibling.focus();
    } else if (
      e.target.value.length === 0 &&
      prsibling instanceof HTMLInputElement
    ) {
      prsibling.focus();
    }
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
    }
  }
  return (
    <section className="all-sections">
      <div className="container">
        <div className="verifyEmail-container">
          <div className="verifyEmail-contents">
            <div>
              <h3 className=" ">Please Check Your Email!</h3>
              {/* <h6 className="bg-black text-cyan-300 sm:bg-red-700 sm:text-[12px] md:text-[15px] lg:text-[24px] xl:bg-green-800 xl:text-[30px] 2xl:text-[40px]  font-sans">
                Please Check Your Email
              </h6> */}
              <p>
                Please check your email, 6-digit confirmation code to
                Tim.@example, please enter the confirmation code to verify your
                email.
              </p>
            </div>
            <div className="otp-Conform">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <input
                  onChange={(e) => {
                    cnageee(e);
                  }}
                  key={index}
                  type="number"
                  maxLength="1"
                  placeholder="0"
                  className="optInputs"
                />
              ))}
            </div>
            <div className="verfy-email-btns">
              <Link to={"/login"}>
                <AllButtons
                  type="submit"
                  name="Verify"
                  class="loginRegisterBtn"
                />
              </Link>
              <div>
                <p>Don’t have a code? </p>
                <p style={{ color: "#422659" }} className="resendCOde">
                  Resend Code
                </p>
              </div>
            </div>
          </div>
          <div className="loginRegister-imgs">
            <img
              src={require(`../assets/images/emailVerify-img.png`)}
              alt="email-verify"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerifyEmail;
