import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer mt-auto text-center">
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#455a64",
        marginTop: "5rem",
      }}
    >
      <div className="my-card bg-secondary text-white">
        {/* <div className="new-div">
          <i className="fa-solid fa-circle-info bigIcon mb-3"></i>
          <span>
            <h5 className="card-title text-white">Other resources</h5>
          </span>
        </div> */}
        <div className="my-card-body" style={{ display: "flex" }}>
          <div style={{ margin: "0rem 1rem" }}>
            <p className="card-text">
              <i className="fa-solid fa-scale-balanced me-3"></i>
              <a
                href="https://www.americanbar.org/groups/legal_services/flh-home/flh-free-legal-help/"
                className="text-decoration-none nav-btn"
                target="_blank"
              >
                Free Legal Help
              </a>
            </p>
            <p className="card-text ">
              <i className="fa-solid fa-mobile-screen-button me-3"></i>
              <a
                href="https://www.fcc.gov/acp"
                className="text-decoration-none nav-btn"
                target="_blank"
              >
                Get A Free Mobile Device
              </a>
            </p>
          </div>
          <div style={{ margin: "0rem 1rem" }}>
            <p className="card-text">
              <i className="fas fa-hammer me-2"></i>
              <a
                href="https://www.axishelps.org/individuals/job-training-employment-support"
                className="text-decoration-none nav-btn"
                target="_blank"
              >
                Job Training & Employment Support
              </a>
            </p>
            <p className="card-text">
              <i className="fas fa-brain me-3"></i>
              <a
                href="https://www.cdc.gov/mentalhealth/tools-resources/individuals/index.htm"
                className="text-decoration-none nav-btn"
                target="_blank"
              >
                Free Mental-Health Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
