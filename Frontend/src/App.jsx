
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layouts/Header/Header";
import TopHeader from "./components/Layouts/Header/TopHeader";
import Footer from "./components/Layouts/Footer/Footer";
import ContactUs from "./components/Pages/Contact/ContactUs";
import Service from "./components/Pages/Service/Service";
import About from "./components/Pages/AboutUs/About";
import Industry from "./components/Pages/Industry/Industry";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <Router>
      <TopHeader />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/industry" element={<Industry />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
