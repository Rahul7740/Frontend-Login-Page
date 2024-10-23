import "./App.css";
import Register from "./Login/Register";
import Login from "./Login/Login";
import VerifyEmail from "./Login/VerifyEmail";
import ResetPassword from "./Login/ResetPassword";
import PasswordResetOtp from "./Login/PasswordResetOtp";
import EnterNewPassword from "./Login/EnterNewPassword";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
