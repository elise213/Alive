import React from "react";
import { Link } from "react-router-dom";
// import imgFood from "../../images/imgRes/food2.png";
import imgLogo from "../../images/HDLOGOTRANSP.png";
export const ResourceInfo = (props) => {
  let schedule = props.schedule;
  // console.log("schedule: ", schedule);
  // console.log(typeof schedule);
  //////To order the schedule by days ///////////////////
  const map = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };
  schedule.sort((a, b) => {
    return map[a.day] - map[b.day];
  });
  // console.log(schedule);
  ///////// to convert military date to AM/PM format ///////////////
  const formatTime = (time) => {
    time = time.split(":"); // convert to array
    // to get the time
    var hours = Number(time[0]);
    var minutes = Number(time[1]);
    // var seconds = Number(time[2]);
    // calculate
    let timeValue;
    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours == 0) {
      timeValue = "12";
    }
    timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // to get the minutes
    // timeValue += seconds < 10 ? ":0" + seconds : ":" + seconds; // to get the seconds
    timeValue += hours >= 12 ? " P.M." : " A.M."; // to get AM/PM
    return timeValue;
  };
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
          {/* <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button> */}
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
          {/* <div className="carousel-item">
            <img
              src="https://static01.nyt.com/images/2020/03/05/us/00virus-homeless01/00virus-homeless01-mobileMasterAt3x-v2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div> */}
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
          {schedule.map((items, i) => (
            <span key={i}>
              {items.day +
                " " +
                formatTime(items.startTime) +
                " " +
                formatTime(items.endTime)}
            </span>
          ))}
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
