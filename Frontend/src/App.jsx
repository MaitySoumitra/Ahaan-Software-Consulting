
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Layouts/Header/Header";
import TopHeader from "./Components/Layouts/Header/TopHeader";
import Footer from "./Components/Layouts/Footer/Footer";
import ContactUs from "./Components/Pages/Contact/ContactUs";
import Service from "./Components/Pages/Service/Service";
import About from "./Components/Pages/AboutUs/About";
import Industry from "./Components/Pages/Industry/Industry";
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
