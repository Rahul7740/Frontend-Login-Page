import "./App.css";
import Register from "./Login/Register";
import Login from "./Login/Login";
import VerifyEmail from "./Login/VerifyEmail";
import ResetPassword from "./Login/ResetPassword";
import PasswordResetOtp from "./Login/PasswordResetOtp";
import EnterNewPassword from "./Login/EnterNewPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition:Bounce
      />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/passwordResetOtp" element={<PasswordResetOtp />} />
        <Route path="/enterNewPassword" element={<EnterNewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
