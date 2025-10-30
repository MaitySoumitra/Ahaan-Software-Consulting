import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import Header from "./components/Layouts/Header/Header";
import TopHeader from "./components/Layouts/Header/TopHeader";
import Footer from "./components/Layouts/Footer/Footer";
import Service from "./components/Pages/Service/Service";
import About from "./components/Pages/AboutUs/About";
import Industry from "./components/Pages/Industry/Industry";
import Home from "./components/Pages/Home/Home";
import Landing from "./components/Landing/Landing";
import WhatsAppChat from "./components/Whatsapp/WhatsAppChat";
import Blog from "./components/Pages/Blog/Blog";
import Portfolios from "./components/Pages/Portfolio/Portfolios";
import Preloader from "./components/Preloader/Preloader";
import BlogDetails from "./components/Pages/Blog/BlogDetails";
import CustomCursor from "./components/Custom Curser/CustomCursor";
import WindowPopup from "./components/WindowsPopup/WindowPopup";

// Lazy load contact page
const ContactUs = React.lazy(() => import("./components/Pages/Contact/ContactUs"));

// AppContent for managing layout and routing
const AppContent = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const hideHeaderFooterRoutes = ["/web-design-development-company"];

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      {/* {showPopup && <WindowPopup onClose={() => setShowPopup(false)} />} */}
      {/* <CustomCursor /> */}

      {/* Show Header and Footer only when not in excluded routes */}
      {!hideHeaderFooterRoutes.includes(location.pathname) && (
        <>
          <TopHeader />
          <Header />
        </>
      )}

      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/web-design-development-company" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolios />} />
          
          {/* ✅ Slug based blog details page */}
          <Route path="/blog/:slug" element={<BlogDetails />} />
        </Routes>
      </Suspense>

      {/* Show Footer only when not in excluded routes */}
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

// Main App component
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      {loading && <Preloader />}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.7s ease" }}>
        <AppContent />
        <WhatsAppChat />
      </div>
    </Router>
  );
}

export default App;
