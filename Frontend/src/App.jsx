import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Layouts/Header/Header";
import TopHeader from "./components/Layouts/Header/TopHeader";
import Footer from "./components/Layouts/Footer/Footer";
const ContactUs = React.lazy(() => import("./components/Pages/Contact/ContactUs"));
import Service from "./components/Pages/Service/Service";
import About from "./components/Pages/AboutUs/About";
import Industry from "./components/Pages/Industry/Industry";
import Home from "./components/Pages/Home/Home";
import Landing from "./components/Landing/Landing";

const AppContent = () => {
  const location = useLocation();
  
  const hideHeaderFooterRoutes = ["/web-design-development-company"];

  return (
    <>
      {!hideHeaderFooterRoutes.includes(location.pathname) && (
        <>
          <TopHeader />
          <Header />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/web-design-development-company" element={<Landing />} />
      </Routes>

      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
