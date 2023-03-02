import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {/* <h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}

      <nav className="navbar fixed-top navbar-light bg-secondary">
        <h3>
          <a className="navbar-brand p-2" href="#">
            AliveLogo
          </a>
        </h3>
        <h3>
          <Link to={"/search/" + store.zipcode + "/all"}>
            <i className="fa-solid fa-magnifying-glass-location text-warning right"></i>
          </Link>
        </h3>
        <h3>
          <i className="fa-solid fa-circle-user p-2 text-info"></i>
        </h3>
      </nav>
      <div className=" bg-light">
        <h1>Welcome to Alive!</h1>
        <h3>
          Alive <small className="text-muted">is a Website blablablabla</small>
        </h3>
        <p>more text</p>
        <p>more text...</p>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card border-0 text-decoration-none">
            <div className="card-body text-center center">
              <Link
                to={"/search/" + store.zipcode + "/food"}
                className="text-decoration-none"
              >
                <div className="circle rounded-circle bg-warning text-white text-center ">
                  <i className="fa-solid fa-bowl-rice "></i>
                </div>
              </Link>
              <h5 className="card-title">Food</h5>
              <p className="card-text">Find food resources in your area</p>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card border-0">
            <div className="card-body text-center center">
              <Link
                to={"/search/" + store.zipcode + "/shelter"}
                className="text-decoration-none"
              >
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

        <div className="col-sm-4">
          <div className="card border-0">
            <div className="card-body text-center center">
              <Link
                to={"/search/" + store.zipcode + "/health"}
                className="text-decoration-none"
              >
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

      <div className="row">
        <div className="col-6 mt-3 mr-3">
          <div className="card limeGreen2 text-white border-0">
            <div className="card-body text-center center">
              <div className="circle rounded-circle limeGreen2 text-white text-center">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h5 className="card-title">Affordable Care Program</h5>
              <p className="card-text">
                You can receive help to get a mobile device
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <a
                    href="https://www.fcc.gov/acp"
                    className="text-decoration-none text-white"
                  >
                    Affordable Care Program
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 mt-3">
          <div className="card bg-secondary text-white border-0">
            <div className="card-body text-center center">
              <div className="circle rounded-circle text-white text-center">
                <i className="fa-solid fa-circle-info"></i>
              </div>

              <h5 className="card-title">Other resources</h5>
              <p className="card-text">
                <i className="fa-solid fa-scale-balanced m-1"></i>
                <a
                  href="https://www.americanbar.org/groups/legal_services/flh-home/flh-free-legal-help/"
                  className="text-decoration-none text-white"
                >
                  Free legal help
                </a>
              </p>
              <p className="card-text">
                <i class="fa-solid fa-head-side-heart m-1"></i> Free Mental
                health
                {/*<a ref="https://www.cdc.gov/mentalhealth/tools-resources/individuals/index.htm" className="text-decoration-none text-white">
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
