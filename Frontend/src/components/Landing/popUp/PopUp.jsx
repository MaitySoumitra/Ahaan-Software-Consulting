import React from "react";
import './PopUp.css';
import modallogo from "../../../assets/favicon/fav.png"

const PopUp = ({ onClose }) => {
  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
      <div className="modal fade show d-block modal-custom" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header flex-column align-items-center">
              <img
                src= {modallogo} 
                alt="Company Logo"
                className="company-logo"
              />
              <h5 className="modal-title text-center mt-3">Enquiry Form</h5>
              <button type="button" className="btn-close position-absolute top-0 end-0" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="e521102f-db58-4a15-b462-bf2957d73f93" />
                {/* Form Rows */}
                <div className="form-row mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control-modal"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phoneNumber"
                      pattern="[0-9]{10}"
                      className="form-control-modal"
                      placeholder="Phone number"
                      title="It should be a phone number and must be exactly 10 digits"
                      inputMode="numeric"
                      required
                    />
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control-modal"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="companyName"
                      className="form-control-modal"
                      placeholder="Company Name"
                      required
                    />
                  </div>
                </div>
                {/* Textarea */}
                <div className="form-group mb-3">
                  <textarea
                    name="message"
                    className="form-control-modal-text"
                    rows="4"
                    placeholder="What are your requirements?"
                    required
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100 modal-btn">
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
