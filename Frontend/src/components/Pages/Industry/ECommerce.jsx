import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ecomdev from '../../../assets/ecomdev.png';
import simple from '../../../assets/simple.png';
import strong from '../../../assets/strong.png';
import quick from '../../../assets/quick.png';
import scale from '../../../assets/scale.png';
import admin from '../../../assets/admin.png';
import support from '../../../assets/support.png';
import excel from '../../../assets/excel.png';
import track from '../../../assets/track.png';
import check from '../../../assets/check.png';
import './ECommerce.css';
const Ecommerce = () => {
  return (
    <div className="container my-4 px-4 ">
      <h3 className="fw-bold">E-Commerce & Marketplace</h3>
      <p className="text-muted text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      
      <img src={ecomdev} alt="E-Commerce" className="img-fluid my-4 img" />
      
      <h3 className="fw-bold">Revitalize Shopping With Smart E-Commerce Features</h3>
      <p className="text-muted text">
      Our cutting-edge e-commerce solutions can revolutionize your in-store experience. Our clever solutions make online retail simple and entertaining, improving every stage of the buying experience, from smooth checkouts to real-time tracking. Watch your sales skyrocket as you enter a world where innovation and convenience collide!
      </p>
      
      <div className="row mt-5 gap">
        <div className="col-md-3  custom-col py-5 rounded text-center custom-border px-3">
            <img src={support} className="img-fluid mb-3" />

          <h5>Excellent Customer Support</h5>
          <p className="text-muted text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div className="col-md-3  custom-col py-5 rounded text-center custom-border px-3">
            <img src={excel} className="img-fluid mb-3" />

          <h5>Scalable Excellence</h5>
          <p className="text-muted text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div className="col-md-3  custom-col py-5 rounded text-center custom-border px-3">
            <img src={track} className="img-fluid mb-3" />

          <h5>Easy Tracking</h5>
          <p className="text-muted text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
      </div>
      
      <div className="row mt-5 gap">
        <div className="col-md-5 p-4 col rounded custom-border">
            <img src={check} className="img-fluid mb-3" />

          <h5>Streamlined Checkouts</h5>
          <p className="text-muted text ">Our platform provides a systematic order management process and an effective workflow, guaranteeing your business's smooth and efficient functioning.</p>
        </div>
        <div className="col-md-5 p-4 col rounded custom-border">
            <img src={check} className="img-fluid mb-3" />

          <h5>Streamlined Checkouts</h5>
          <p className="text-muted text">Our platform provides a systematic order management process and an effective workflow, guaranteeing your business's smooth and efficient functioning.</p>
        </div>
      </div>
       
      <h3 className="fw-bold mt-5">Your Business Needs To Stay Dynamic In A Complex Ecosystem</h3>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src={simple} alt="Integration" className="img-fluid img-sec rounded" />
        </div>
        <div className="col-md-6">
          <h5 className="fw-bold mb-3">Simple Integration</h5>
          <p className="text-muted text">Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.</p>
          <p className="text-muted text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h5 className="fw-bold mb-3">Strong Security</h5>
          <p className="text-muted text">Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.</p>
          <p className="text-muted text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        </div>
        <div className="col-md-6">
          <img src={strong} alt="Integration" className="img-fluid img-sec rounded" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src={quick} alt="Integration" className="img-fluid img-sec rounded" />
        </div>
        <div className="col-md-6">
          <h5 className="fw-bold mb-3">Simple Integration</h5>
          <p className="text-muted text">Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.</p>
          <p className="text-muted text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h5 className="fw-bold mb-3">Adaptable Scalability</h5>
          <p className="text-muted text">Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.</p>
          <p className="text-muted text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        </div>
        <div className="col-md-6">
          <img src={scale} alt="Integration" className="img-fluid img-sec rounded" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src={admin} alt="Integration" className="img-fluid img-sec rounded" />
        </div>
        <div className="col-md-6">
          <h5 className="fw-bold mb-3">Efficient Administration</h5>
          <p className="text-muted text">Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.</p>
          <p className="text-muted text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
