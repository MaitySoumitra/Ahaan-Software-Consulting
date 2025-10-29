import React, {useRef} from "react";
import './PopUp.css';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const PopUp = ({ onClose }) => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceID = "service_d4lc4tg";
    const templateID = "template_f6yg4p4";
    const publicKey = "P1psK0y5kXFayHDDA";

    emailjs
      .send(serviceID, templateID, data, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        toast.error("Failed to send message. Try again!");
      });
  };
  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
      <div className="modal fade show d-block modal-custom" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header flex-column align-items-center">
              <img
                src= "https://ahaanmedia.com/asc/layouts/fav.png" 
                alt="Company Logo"
                className="company-logo"
              />
              <h5 className="modal-title text-center mt-3">Enquiry Form</h5>
              <button type="button" className="btn-close position-absolute top-0 end-0" onClick={onClose}></button>
            </div>
            <div className="modal-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form Rows */}
        <div className="form-row mb-3">
          <div className="form-group">
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="form-control-modal"
              placeholder="Name"
            />
            {errors.name && <p className="text-danger">{errors.name.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="tel"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: { value: /^[0-9]{10}$/, message: "Must be exactly 10 digits" },
              })}
              className="form-control-modal"
              placeholder="Phone number"
              inputMode="numeric"
            />
            {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber.message}</p>}
          </div>
        </div>

        <div className="form-row mb-3">
          <div className="form-group">
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="form-control-modal"
              placeholder="Email"
            />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              {...register("companyName", { required: "Company Name is required" })}
              className="form-control-modal"
              placeholder="Company Name"
            />
            {errors.companyName && <p className="text-danger">{errors.companyName.message}</p>}
          </div>
        </div>

        {/* Textarea */}
        <div className="form-group mb-3">
          <textarea
            {...register("message", { required: "Message is required" })}
            className="form-control-modal-text"
            rows="4"
            placeholder="What are your requirements?"
          ></textarea>
          {errors.message && <p className="text-danger">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100 modal-btn">
          Get a Free Quote
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
