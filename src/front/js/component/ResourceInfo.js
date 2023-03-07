import React from "react";
import imgFood from "../../images/imgRes/food2.png";

export const ResourceInfo = (props) => {
  return (
    <div className="row no-gutters center mx-auto resourceCard mb-3">
      <div className="col-md-4">
        <img src={imgFood} className="card-img" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title text-warning">{props.name}</h5>
          <p className="card-text">
            <i className="fa-solid fa-bowl-rice "></i> {props.type} place
          </p>
          <p className="card-text">
            This is a description for the nice place even more nicer than it
            seems you even need another line to describe it
          </p>
          <i className="fa-solid fa-map-location-dot"></i>
          <p className="card-text">{props.address}</p>
          <p className="card-text">
            <i className="fa-solid fa-phone"></i>
            {" " + props.phone}
          </p>
          <p className="card-text">
            {/* <i className="fa-solid fa-at"></i> */}
            <i class="fa-solid fa-envelope"></i>
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
          </p>
        </div>
      </div>
    </div>

    //  {/*<div >
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
  );
};
