import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import AliveLogo from "../../images/HDLOGOTRANSP2.png";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  let latitude = "";
  let longitude = "";

  function geoFindMe() {
    function success(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      actions.updateLocation(latitude, longitude);
      sessionStorage.setItem("latitude", latitude);
      sessionStorage.setItem("longitude", longitude);
      console.log("Aquí: " + latitude + " Long: " + longitude);
      console.log("Allá: " + store.latitude + " Long: " + store.longitude);
    }

    function error() {
      alert("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      // status.textContent = "Locating…";
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  useEffect(() => {
    geoFindMe();
  }, []);

  return (
    <div className="text-center mt-2">
      <br />
      <br />
      <div className=" bg-light">
        {/* <p className="profile-greeting">Welcome to Alive!</p> */}
        <img className="landing-logo" src={AliveLogo}></img>
        <div className="landing-text mx-5">
          <h3>
            <small className="landing-text ">
              Welcome! ALIVE is designed to connect vulnerable people to
              organizations that can meet their most vital needs, including free
              food, shelter, healthcare, and hygiene facilities. We allow users
              to submit feedback in order to crowd-source the most accurate and
              up-to-date information possible. Click on the icons below to find
              free resources in your area!
            </small>
          </h3>
        </div>
      </div>
      <div className="row resourcesRow">
        <div
          className="col-sm-3 mx-auto"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card border-0 text-decoration-none">
            <div className="card-body text-center center">
              <Link to={"/search/food"} className="text-decoration-none">
                <div className="circle rounded-circle bg-warning text-white text-center ">
                  <i className="fa-solid fa-bowl-rice "></i>
                </div>
              </Link>
              <h5 className="card-title">Food</h5>
              {/* <p className="card-text">Free Food In Your Area</p> */}
            </div>
          </div>
        </div>
        <div
          className="col-sm-3 mx-auto"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card border-0">
            <div className="my-card-body text-center center">
              <Link to={"/search/shelter"} className="text-decoration-none">
                <div className="circle rounded-circle bg-shelter text-white text-center">
                  <i className="fa-solid fa-person-shelter"></i>
                </div>
              </Link>
              <div>
                <h5 className="card-title">Shelter</h5>
                {/* <p className="card-text">Free Shelter In Your Area</p> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-3 mx-auto"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card border-0">
            <div className="card-body text-center center">
              <Link to={"/search/health"} className="text-decoration-none">
                <div className="circle rounded-circle bg-info text-white text-center">
                  <i className="fa-solid fa-stethoscope"></i>
                </div>
              </Link>
              <h5 className="card-title">Healthcare</h5>
              {/* <p className="card-text">Free Healthcare In Your Area</p> */}
            </div>
          </div>
        </div>
        <div
          className="col-sm-3 mx-auto"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card border-0">
            <div className="my-card-body text-center center">
              <Link to={"/search/hygiene"} className="text-decoration-none">
                <div className="circle rounded-circle bg-pink text-white text-center">
                  {/* <i className="fa-regular fa-hands-bubbles"></i> */}
                  <i className="fa-solid fa-soap"></i>
                </div>
              </Link>
              <h5 className="card-title">Hygiene</h5>
              {/* <p className="card-text">Free Hygiene Services In Your Area</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row resourcesRow">
        {/*         
        <div className="col-4 mt-3 mr-3">
          <a
            href="https://www.fcc.gov/acp"
            className="text-decoration-none text-white"
            target="_blank"
          >
            <div className="my-card darkViolet text-white border-0 opacity">
              <div className="circle rounded-circle text-white text-center">
                <div>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <h5 className="card-title text-white">
                    {/* Affordable Care Program */}
        {/* A.C.P.
                  </h5>
                </div>
              </div>
              <div className="my-card-body text-center center ">
                <p className="card-text text-white">
                  You can receive help to get a mobile device
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </a>
        </div>  */}

        {/* <div className="mt-3">
          <div className="my-card bg-secondary text-white">
            <div className="new-div">
              <i className="fa-solid fa-circle-info bigIcon mb-3"></i>
              <span>
                <h5 className="card-title text-white">Other resources</h5>
              </span>
            </div>
            <div className="my-card-body">
              <p className="card-text">
                <i className="fa-solid fa-scale-balanced me-3"></i>
                <a
                  href="https://www.americanbar.org/groups/legal_services/flh-home/flh-free-legal-help/"
                  className="text-decoration-none nav-btn"
                  target="_blank"
                >
                  Get Free Legal Help
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
        </div> */}
      </div>
      {/* <div className="card mt-3 limeGreen2 text-white">
        <div className="row g-0">
          <div className="col-md-4 phoneIcon m-1">
            <i className="fa-solid fa-mobile-screen-button"></i>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Affordable Care Program</h5>
              <p className="card-text text-left">
                You can receive help to get a mobile device
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <a href="https://www.fcc.gov/acp">Affordable Care Program</a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
