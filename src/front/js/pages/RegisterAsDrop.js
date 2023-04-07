import React, { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
// import AddressInput from "../component/AddressInput";

const RegisterAsDrop = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const [title, setTitle] = useState("");
  const [offeringType, setOfferingType] = useState("");
  const [offeringDescription, setOfferingDescription] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");

  const resetForm = () => {
    setTitle("");
    setOfferingType("");
    setOfferingDescription("");
    setImage("");
    setImage2("");
  };

  function handleClick(e) {
    e.preventDefault();
    if (
      actions.createOffering(
        title,
        offeringType,
        offeringDescription,
        image,
        image2
      )
    ) {
      alert("Offering Created");
      resetForm();
      navigate("/");
    }
  }

  return (
    <div className="row center mx-auto col-6 text-secondary mb-3">
      <div className="m-4">
        <p>Please provide some information about what you are offering </p>
        <form className="d-flex flex-column">
          <label htmlFor="name"> Title </label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              name="name"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Provide the name of the place"
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description"> Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={offeringDescription}
              onChange={(e) => setOfferingDescription(e.target.value)}
            ></textarea>
          </div>
          <label className="form-check-label" htmlFor="offeringType">
            What is the closest category that would describe your offering?
          </label>
          {/* <div className="form-check form-row"> */}
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="offeringType"
              value="food"
              checked={offeringType === "food"}
              onChange={() => (
                setOfferingType("food"), console.log(offeringType)
              )}
            />
            <label className="form-check-label" htmlFor="offeringF">
              Food
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="offeringType"
              id="offeringS"
              value="shelter"
              checked={offeringType === "shelter"}
              onChange={(e) => (
                setOfferingType(e.target.value), console.log(offeringType)
              )}
            />
            <label className="form-check-label" htmlFor="offeringS">
              Shelter
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="offeringType"
              id="offeringH"
              value="health"
              checked={offeringType === "health"}
              onChange={(e) => (
                setOfferingType(e.target.value), console.log(offeringType)
              )}
            />
            <label className="form-check-label" htmlFor="offeringH">
              Health
            </label>
          </div>
          <div className="form-check mb-3 form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="offeringType"
              id="offeringHy"
              value="hygiene"
              checked={offeringType === "hygiene"}
              onChange={(e) => setOfferingType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="offeringHy">
              Hygiene
            </label>
          </div>
          {/*<!-------------------- end of offeringType --------------------> */}

          <label htmlFor="image">images</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  h-100" id="image">
                <i className="fa-solid fa-image text-secondary"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="image"
              type="text"
              value={image}
              id="image"
              onChange={(e) => setImage(e.target.value)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="You can upload up to two images of your place"
            ></input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  h-100" id="image">
                <i className="fa-solid fa-image text-secondary"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="image2"
              type="text"
              value={image2}
              id="image2"
              onChange={(e) => setImage2(e.target.value)}
            ></input>
          </div>
        </form>
        <div className="float-end">
          <button
            type="submit"
            className="btn custom-btn text-white"
            onClick={(e) => handleClick(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterAsDrop;
