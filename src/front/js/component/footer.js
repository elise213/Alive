import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer mt-auto">
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem",
      }}
    >
      <div className="my-card-body" style={{ display: "flex" }}>
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
  </footer>
);
