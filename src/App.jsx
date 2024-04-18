import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/auth" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {location.pathname !== "/auth" && <Footer />}
    </>
  );
}

export default App;
