import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Banner.css";

const Banner = () => {

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
      .sendForm(serviceID, templateID, form.current, publicKey)
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
    <section
      className="banner-section"
      style={{ backgroundImage: `url(https://ahaanmedia.com/asc/Landing/LandingBanner.jpg)` }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text Content */}
          <Col md={6} className="left-side text-white">
            <h1 className="banner-heading fade-in-left">
              Build Your Dream Website and App with Ahaan Software
            </h1>
            <p className="banner-subheading fade-in-up">
              Are you looking for experienced web developers who can build your
              dream website?
            </p>
            <p className="banner-subheading fade-in-up">
              From design to development, our creative team is here to give your
              business a new look. More than 7 years of experienced web
              developers with a 110+ team. Knock on our door for deploying any
              kind of website for your business.
            </p>
            <a
              href="https://ahaansoftware.com/"
              className="btn btn-banner fade-in-up"
            >
              Learn More
            </a>
          </Col>

        
          <Col md={6} className="right-side fade-in-right">
            <div className="form-container">
              <h2 className="form-heading">
                ENQUIRE NOW FOR WEBSITE DEVELOPMENT
              </h2>

              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
             
                <Row className="mb-3">
                  <Col>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="form-control"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </Col>
                  <Col>
                    <input
                      type="tel"
                      {...register("phoneNumber", {
                        required: "Phone Number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Must be exactly 10 digits",
                        },
                      })}
                      className="form-control"
                      placeholder="Phone Number"
                    />
                    {errors.phoneNumber && (
                      <p className="text-danger">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </Col>
                </Row>

                {/* Email & Company */}
                <Row className="mb-3">
                  <Col>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="form-control"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </Col>
                  <Col>
                    <input
                      type="text"
                      {...register("companyName", {
                        required: "Company Name is required",
                      })}
                      className="form-control"
                      placeholder="Company Name"
                    />
                    {errors.companyName && (
                      <p className="text-danger">
                        {errors.companyName.message}
                      </p>
                    )}
                  </Col>
                </Row>

                {/* Message */}
                <div className="mb-3">
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="form-control"
                    rows="4"
                    placeholder="What are your requirements?"
                  ></textarea>
                  {errors.message && (
                    <p className="text-danger">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Get a Free Quote
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Banner;
