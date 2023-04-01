import React, { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
// import AddressInput from "../component/AddressInput";

const OfferingPost = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const [title, setTitle] = useState("");
  const [offeringType, setOfferingType] = useState("");

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");

  let handleChange = (i, e) => {
    // saving/updating schedule values
    let newFormValues = [...schedule];
    newFormValues[i][e.target.name] = e.target.value;
    setSchedule(newFormValues);
  };

  let addFormFields = () => {
    // to add days/inputs to the schedule
    setSchedule([...schedule, { day: "", startTime: "", endTime: "" }]);
  };

  let removeFormFields = (i) => {
    // to remove days/inputs from the schedule
    let newFormValues = [...schedule];
    newFormValues.splice(i, 1);
    setSchedule(newFormValues);
  };

  let handleSubmit = (event) => {
    //to avoid page refresh while adding/deleting inputs/days
    event.preventDefault();
  };

  // getGeocode(address).then((results) => {
  //   const { lat, lng } = getLatLng(results[0]);
  //   console.log("Coordinates: ", { lat, lng });
  // });
  // let coordinates = getLatLng(address);
  // console.log("Coordinatesss: ", coordinates);

  const resetForm = () => {
    setTitle("");
    setAddress("");
    setOfferingType("");
    setDescription("");
    setLatitude("");
    setLongitude("");
    setImage("");
    setImagee2("");
  };

  function handleClick(e) {
    e.preventDefault();
    if (
      actions.createOffering(
        title,
        offeringType,
        description,
        image,
        image2,
        user_id
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                setofferingType(e.target.value), console.log(offeringType)
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
                setofferingType(e.target.value), console.log(offeringType)
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
              onChange={(e) => setofferingType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="offeringHy">
              Hygiene
            </label>
          </div>
          {/*<!-------------------- end of offeringType --------------------> */}

          {/* <label htmlFor="address">
            What is the address where this being offered?
          </label> */}

          {/* <PlacesAutocomplete /> */}
          <div className="input-group mb-3">
            {/* <div className="input-group-prepend">
              <span className="input-group-text h-100">
                <i className="fa-solid fa-map-location-dot text-secondary"></i>
              </span>
            </div>
            <input
              id="address"
              className="form-control"
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Provide the address of the place"
            ></input> */}
            {/* <AddressInput
            // setSelected={setSelected}
            // value={address}
            // onChange={(e) => setAddress(e.target.value)}
            // style={{ Width: "100% !important" }}
            /> */}
          </div>
          {/* <div className="form-row">
            <div className="col">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="State" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Zip" />
            </div>
          </div> */}

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

export default OfferingPost;
