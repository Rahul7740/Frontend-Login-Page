import React from "react";
import "../style/loginRegister.css";
import { Link } from "react-router-dom";
import AllButtons from "../snippets/AllButtons";

function ResetPassword() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="verifyEmail-container">
          <div className="verifyEmail-contents">
            <div>
              <h3 className=" ">Reset Your Password</h3>
              
              <p>
                Please enter your email or phone no with associated your
                account, we sent one time password to your (Email or phone).
              </p>
            </div>
            <input type="text" placeholder="Email" className="delivery-a-inputs" />
            <div className="verfy-email-btns">
              <Link to={"/passwordResetOtp"}>
                <AllButtons
                  type="submit"
                  name="Continue"
                  class="loginRegisterBtn"
                />
              </Link>
              <div>
                <p>Back to</p>
                <Link to={"/"}>
                <p style={{ color: "#422659" }} className="resendCOde">
                Register
                </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="loginRegister-imgs">
            <img
              src={require(`../assets/images/resetPassword-img.png`)}
              alt="reset-password"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
