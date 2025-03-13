import React from "react";
import './PopUp.css';

const PopUp = ({ onClose }) => {
  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Enquiry Form</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
            <form action="https://api.web3forms.com/submit" method="POST">
            
            {/* Inline sections */}
            <div className="form-row mb-3">
              <div className="form-group">
              <input type="hidden" name="access_key" value="e521102f-db58-4a15-b462-bf2957d73f93"/>
                <input
                  type="text"
                  name='name'
                  className="form-control"
                  placeholder="Name"
                required/>
              </div>
              <div className="form-group">
              <input
                    type="tel"
                    name='phoneNumber'
                    pattern="[0-9]{10}"
                    className="form-control"
                    placeholder="Phone number"
                    title="it should be phone number and must be exactly 10 digits"
                    inputmode="numeric"
                 required />
              </div>
            </div>
            {/* Inline sections */}
            <div className="form-row mb-3">
              <div className="form-group">
                <input
                  type="email"
                  name='email'
                  className="form-control"
                  placeholder="Email"
                required/>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name='companyName'
                  className="form-control"
                  placeholder="Company Name"
                required/>
              </div>
            </div>
            {/* Textarea */}
            <div className="form-group mb-3">
              <textarea
              name='message'
                className="form-control"
                rows="4"
                placeholder="What are your requirements?"
              required></textarea>
            </div>
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Get a Free Quote
            </button>
          </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
