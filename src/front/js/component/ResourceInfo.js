import React from "react";
import { Link } from "react-router-dom";
// import imgFood from "../../images/imgRes/food2.png";
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
    <div className="card w-100 ">
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
            <img src={props.image} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={props.image2} className="d-block w-100" />
          </div>
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
      <div className="card-body text-secondary ">
        <h5 className="card-title blueViolet">{props.name}</h5>
        <p className="card-text">
          {/* <i className={`${props.icon}`}></i>*/} {props.category} place
        </p>
        <p className="card-text">{props.description}</p>
        <i className="fa-solid fa-map-location-dot"></i>
        <p className="card-text">{props.address}</p>
        <p className="card-text">
          <i className="fa-solid fa-phone"></i>
          {" " + props.phone}
        </p>
        <div className="card-text">
          <i className="fa-solid fa-calendar-days"></i> Schedule
          <ul>
            {schedule.map((items, i) => (
              <li key={i}>
                {items.day +
                  " " +
                  formatTime(items.startTime) +
                  " " +
                  formatTime(items.endTime)}
              </li>
            ))}
          </ul>
        </div>
        {/* <p className="card-text">
            {/* <i className="fa-solid fa-at"></i>
            <i className="fa-solid fa-envelope"></i>
            <a
              className="text-decoration-none text-black"
              href={"mailto:${props.email}"}
            >
              {" "}
              {" " + props.email}
            </a>
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>*/}
        {/*<div >
    //     <ul className="social-link list-unstyled m-t-40 m-b-10">
    //       <li>
    //         <a
    //           href="#!"
    //           data-toggle="tooltip"
    //           data-placement="bottom"
    //           title=""
    //           data-original-title="facebook"
    //           data-abc="true"
    //         >
    //           <i className="fa-brands fa-facebook"></i>
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#!"
    //           data-toggle="tooltip"
    //           data-placement="bottom"
    //           title=""
    //           data-original-title="twitter"
    //           data-abc="true"
    //         >
    //           <i className="fa-brands fa-twitter"></i>
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#!"
    //           data-toggle="tooltip"
    //           data-placement="bottom"
    //           title=""
    //           data-original-title="instagram"
    //           data-abc="true"
    //         >
    //           <i className="fa-brands fa-instagram"></i>
    //         </a>
    //       </li>
    //     </ul>
    //     </div> */}
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
              <i className="fa-solid fa-magnifying-glass-location "></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
