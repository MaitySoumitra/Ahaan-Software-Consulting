import {React, useState} from 'react';
import "./Call.css";
import PopUp from  "../popUp/PopUp";
const Call = () => {
  const [showForm, setShowForm] = useState(false); // State for form visibility
    
  const toggleForm = () => setShowForm(!showForm); // Toggle form modal
  return (
    <div>
    <div className="cta-container">
      <div className="cta-content">
        <h1 className="cta-title">Take the First Step Towards Online Success!</h1>
        <button className="cta-button" onClick={toggleForm}>Book a Call Now</button>
      </div>
    </div>
    {showForm && <PopUp onClose={toggleForm} />}
    </div>
  );
};

export default Call;
