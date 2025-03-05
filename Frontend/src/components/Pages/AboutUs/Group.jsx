import {React} from 'react';
import group2 from '../../../assets/group2.png';
import './We.css';
const We = () => {
    
  return (
    <section
      className="about-section">
      <div className="about-content d-flex justify-content-between align-items-center">
       
        
        <div className="left-side">
          <h1 className="about-heading fade-in-left">
          Our Mission & Vision
          </h1>
          <h4 className="fade-in-up">Mission</h4>
          <p className="about-subheading fade-in-right">
          Ahaan Software Consulting vision is to lead the IT industry with transformative solutions that help you drive business success through technological excellence.
          </p>
          <h4 className="fade-in-up">Vision</h4>
          <p className="about-subheading fade-in-right">
          Ahaan Software Consulting  is a certified  QRA, ISO 9001 company with a team of highly expert cloud engineers, software engineers, UX/UI designers, and cybersecurity specialists. Our clients are happy . We offer a broad range of IT services that meet clients’ needs.
          </p>
        </div>
        <div className="right-side">
          <img 
            src={group2} 
            alt="About Us" 
            className="about-image"
          />
        </div>
      </div>
    </section>
    
  );
};

export default We;
