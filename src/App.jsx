import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import MyForm from "./pages/MyForm";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("/login") || <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<MyForm />} />
        <Route path="/login/forgot-password" element={<ForgotPassword />} />
        <Route path="/login/register" element={<Register />} />
      </Routes>
      {location.pathname.includes("/login") || <Footer />}
    </>
  );
}

export default App;
