import React from "react";
import "./OurProcess.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const OurProcess = () => {
  return (
    <div id="process-main-container">
      <section className="process-section-wrapper mt-5 mb-5">
        <div className="container process-container">
          <div className="process-header-wrapper">
            <div className="mt-5 section-header-tech">
              <h6 className="subtitle">
                Discovery & Strategy <span className="divider"></span>
              </h6>
              <span className="title">Our Process</span>
            </div>
            <p className="image-carousel-content">
              Driven to be future-ready, and push beyond the building blocks of
              technology, digital, and marketing, Ahaan Software Consulting
              proudly participated in The Asia Business Show 2024 in
              Singapore—the powerhouse of innovation and enterprise!
            </p>
          </div>

          <div className="process-steps-wrapper position-relative">
            <div className="process-vertical-line"></div>

            {/* Step 1 */}
            <div className="process-step-section process-step-1">
              <div className="process-step-row">
                <div className="process-step-left">
                  <div className="process-step-box">
                    <div className="process-step-content">
                      <h3 className="process-step-title">
                        Discovery & Planning
                      </h3>
                      <p className="process-step-description">
                        Define goals, scope, audience, and create a wireframe.
                      </p>
                      <DotLottieReact
                        src="https://lottie.host/64a49f21-199b-4158-8c34-fd6c5a287421/xoyIeVuViq.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  </div>
                </div>
                <div className="process-step-number-col">
                  <div className="process-step-number">1</div>
                </div>
                <div className="process-step-right"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="process-step-section process-step-2">
              <div className="process-step-row process-step-right-aligned">
                <div className="process-step-left"></div>
                <div className="process-step-number-col">
                  <div className="process-step-number">2</div>
                </div>
                <div className="process-step-right">
                  <div className="process-step-box">
                    <div className="process-step-content">
                      <h3 className="process-step-title">
                        Design & Prototyping
                      </h3>
                      <p className="process-step-description">
                        Craft visual aesthetics, UI/UX, and create interactive
                        mockups.
                      </p>
                      <DotLottieReact
                        src="https://lottie.host/fe70d42e-cf7e-4778-8ce1-34bd7a60673c/AvDMR5gzPH.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="process-step-section process-step-3">
              <div className="process-step-row">
                <div className="process-step-left">
                  <div className="process-step-box">
                    <div className="process-step-content">
                      <h3 className="process-step-title">
                        Development & Testing
                      </h3>
                      <p className="process-step-description">
                        Full-stack coding, functionality integration, and
                        rigorous QA.
                      </p>
                      <DotLottieReact
                        src="https://lottie.host/a0d33893-d46c-40b3-adea-6680d8cd49fc/39wUFQN1eh.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  </div>
                </div>
                <div className="process-step-number-col">
                  <div className="process-step-number">3</div>
                </div>
                <div className="process-step-right"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="process-step-section process-step-4">
              <div className="process-step-row process-step-right-aligned">
                <div className="process-step-left"></div>
                <div className="process-step-number-col">
                  <div className="process-step-number">4</div>
                </div>
                <div className="process-step-right">
                  <div className="process-step-box">
                    <div className="process-step-content">
                      <h3 className="process-step-title">Launch & Growth</h3>
                      <p className="process-step-description">
                        Deploy to live servers, SEO setup, and post-launch
                        monitoring.
                      </p>
                      <DotLottieReact
                        src="https://lottie.host/9e768f90-9eb5-41cd-b0e5-855a995ccc42/9sfugS313k.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;
