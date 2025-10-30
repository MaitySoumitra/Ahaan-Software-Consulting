import React from "react";
import UiUxDesign from "./UiUxDesign";
import WebDevelopment from "./WebDevelopment";
import SocialMediaMarketing from "./SocialMediaMarketing";
import AppDevelopment from "./AppDevelopment";
import "bootstrap/dist/css/bootstrap.min.css";
import "./All.css";

const All = () => {
  return (
    <div className="uiux-gallery-container container py-1">
      <div className="text-center mb-5">
        <h2 className="fw-bold all-heading">All Portfolio</h2>
        <p className="text-muted all-text">
          Browse through our comprehensive design solutions across UI/UX, Web
          Development, Social Media Marketing, and App Development.
        </p>
      </div>

      <div className="mb-5">
        <WebDevelopment />
      </div>
      <hr className="hr-style" />
      <div className="mb-5">
        <UiUxDesign />
      </div>

      <hr className="hr-style" />
      <div className="mb-5">
        <SocialMediaMarketing />
      </div>
      <hr className="hr-style" />
      <div className="mb-5">
        <AppDevelopment />
      </div>
    </div>
  );
};

export default All;
