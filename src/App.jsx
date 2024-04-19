import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("/login") || <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forgot-password" element={<ForgotPassword />} />
      </Routes>
      {location.pathname.includes("/login") || <Footer />}
    </>
  );
}

export default App;
