import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../images/HDLOGOTRANSP.png";

export const ResourceInfo = (props) => {
  return (
    <div className="card w-100 " style={{ border: "none" }}>
      {/*********************************** Carousel *********************************/}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={props.image == "" ? imgLogo : props.image}
              className="d-block w-100 carousel-image"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = { imgLogo };
              }}
            />
          </div>
          {props.image2 != "" && (
            <div className="carousel-item">
              <img
                src={props.image2}
                className="d-block w-100 carousel-image"
              />
            </div>
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*********************************** CARD *************************************/}
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="resource-card-body text-secondary ">
        <div className="resource-name-description">
          <h3
            className="resource-card-title"
            style={{ color: "darkslategray" }}
          >
            {props.name}
          </h3>
        </div>
        <p className="resource-card-text">{props.description}</p>
        <i className="fa-solid fa-map-location-dot me-2"></i>
        <span className="resource-card-text">{props.address}</span>
        <p className="resource-card-text">
          <i className="fa-solid fa-phone me-2 mt-4"></i>
          {" " + props.phone}
        </p>
        <div className="resource-card-text mt-1">
          <i className="fa-solid fa-calendar-days me-3"></i>
        </div>
        <div className="float-end">
          <Link to={"/search/all"}>
            <button
              type="button"
              className="btn btn-secondary text-white"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Back to
              Search"
            >
              <i
                className="fa-solid fa-magnifying-glass-location me-2"
                style={{ opacity: ".6" }}
              ></i>
              Back to Search Results
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
