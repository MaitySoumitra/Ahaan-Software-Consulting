import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 contact-box">
            <FaMapMarkerAlt className="icon" />
            <h5>OUR MAIN OFFICE</h5>
            <p>SoHo 94 Broadway St, New York, NY 1001</p>
          </div>
          <div className="col-md-3 contact-box">
            <FaPhoneAlt className="icon" />
            <h5>PHONE NUMBER</h5>
            <p>234-9876-5400<br />888-0123-4567 (Toll Free)</p>
          </div>
          <div className="col-md-3 contact-box">
            <FaFax className="icon" />
            <h5>FAX</h5>
            <p>1-234-567-8900</p>
          </div>
          <div className="col-md-3 contact-box">
            <FaEnvelope className="icon" />
            <h5>EMAIL</h5>
            <p><a href="mailto:hello@theme.com">hello@theme.com</a></p>
          </div>
        </div>

        <div className="row contact-form">
          <div className="col-md-6">
            <h3>GET IN TOUCH</h3>
            <p className="text-muted">
              <em>We can ensure reliability, low cost fares and most important, with safety and comfort in mind.</em>
            </p>
            <p className="description">
              Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia Maecenas gravida lacus.
            </p>
            <div className="social-icons">
              <FaFacebookF className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaLinkedinIn className="social-icon" />
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" {...register("email", { required: true })} />
                {errors.email && <span className="error">Enter a valid email address</span>}
              </div>
              <div className="mb-3">
                <label>Name</label>
                <input type="text" className="form-control" {...register("name", { required: true })} />
                {errors.name && <span className="error">Enter your name</span>}
              </div>
              <div className="mb-3">
                <label>Message</label>
                <textarea className="form-control" {...register("message", { required: true })}></textarea>
                {errors.message && <span className="error">Enter your message</span>}
              </div>
              <button type="submit" className="btn btn-primary w-100">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
