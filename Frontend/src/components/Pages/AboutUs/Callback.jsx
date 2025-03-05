import React from 'react';
import map from '../../../assets/map.png';
import { useForm } from "react-hook-form";
import './Callback.css';
const Callback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", result))
      .catch((error) => console.error("Error:", error));
  };
  return (
    <section
          className="callback-section">
          <div className="callback-content d-flex justify-content-between align-items-center">
            <div className="left-side">
              <img 
                src={map} 
                className="callback-image"
              />
            </div>
            <div className="right-side">
            <div className="form-container fade-in-right">
            <h2 className="form-heading">
               Request a Call Back 
            </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-3">
            <div className="col">
            <input type="hidden" name="access_key" value="e521102f-db58-4a15-b462-bf2957d73f93"/>
              <input
                className="form-control border-0 border-bottom"
                placeholder="First Name *"
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
            </div>
            <div className="col">
              <input
                className="form-control border-0 border-bottom"
                placeholder="Last Name *"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input
                type="tel"
                className="form-control border-0 border-bottom"
                placeholder="Your Number *"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
            </div>
            <div className="col">
              <input
                className="form-control border-0 border-bottom"
                placeholder="Company Name *"
                {...register("company", { required: "Company name is required" })}
              />
              {errors.company && <small className="text-danger">{errors.company.message}</small>}
            </div>
          </div>

          <div className="mb-3">
            <textarea
              className="form-control border-0 border-bottom"
              placeholder="Additional Message *"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && <small className="text-danger">{errors.message.message}</small>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            SEND NOW
          </button>
        </form>
          </div>
            </div>
          </div>
        </section>
  );
};

export default Callback;
