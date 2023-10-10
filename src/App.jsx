import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Membership from "./pages/membership/Membership";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pt-16">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <BackToTopButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
