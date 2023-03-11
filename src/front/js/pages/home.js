import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

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
    <div className="text-center mt-5">
      <div className=" bg-light">
        <h1>Welcome to Alive!</h1>
        <h3>
          Alive <small className="text-muted">is a Website blablablabla</small>
        </h3>
        <p>more text</p>
        <p>more text...</p>
      </div>
      <div className="row resourcesRow">
        <div className="col-sm-4 mx-auto">
          <div className="card border-0 text-decoration-none">
            <div className="card-body text-center center">
              <Link to={"/search/food"} className="text-decoration-none">
                <div className="circle rounded-circle bg-warning text-white text-center ">
                  <i className="fa-solid fa-bowl-rice "></i>
                </div>
              </Link>
              <h5 className="card-title">Food</h5>
              <p className="card-text">Find food resources in your area</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mx-auto">
          <div className="card border-0">
            <div className="card-body text-center center">
              <Link to={"/search/shelter"} className="text-decoration-none">
                <div className="circle rounded-circle bg-shelter text-white text-center">
                  <i className="fa-solid fa-person-shelter"></i>
                </div>
              </Link>
              <div>
                <h5 className="card-title">Shelter</h5>
                <p className="card-text">Find shelter resources in your area</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mx-auto">
          <div className="card border-0">
            <div className="card-body text-center center">
              <Link to={"/search/health"} className="text-decoration-none">
                <div className="circle rounded-circle bg-info text-white text-center">
                  <i className="fa-solid fa-stethoscope"></i>
                </div>
              </Link>
              <h5 className="card-title">Health care</h5>
              <p className="card-text">
                Find Health care resources in your area
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row resourcesRow">
        <div className="col-6 mt-3 mr-3">
          <a
            href="https://www.fcc.gov/acp"
            className="text-decoration-none text-white"
            target="_blank"
          >
            <div className="card limeGreen2 text-white border-0">
              <div className="card-body text-center center ">
                <div className="circle rounded-circle text-white text-center">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                <h5 className="card-title text-white">
                  Affordable Care Program
                </h5>
                <p className="card-text text-white">
                  You can receive help to get a mobile device
                </p>
                <p className="card-text">
                  {/* <small className="text-muted">
                  
                    Affordable Care Program
                  
                </small> */}
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="col-6 mt-3">
          <div className="card bg-secondary text-white border-0">
            <div className="card-body text-center center">
              <div className="circle rounded-circle text-white text-center">
                <i className="fa-solid fa-circle-info"></i>
              </div>
              <h5 className="card-title text-white">Other resources</h5>
              <p className="card-text text-white">
                <i className="fa-solid fa-scale-balanced m-1"></i>
                <a
                  href="https://www.americanbar.org/groups/legal_services/flh-home/flh-free-legal-help/"
                  className="text-decoration-none text-white"
                  target="_blank"
                >
                  Free legal help
                </a>
              </p>
              <p className="card-text text-white">
                <i class="fa-solid fa-head-side-heart m-1"></i> Free Mental
                health
                {/*<a ref="https://www.cdc.gov/mentalhealth/tools-resources/individuals/index.htm" className="text-decoration-none text-white" target="_blank">
                  Free Mental health
                </a>*/}
              </p>
            </div>
          </div>
        </div>
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
