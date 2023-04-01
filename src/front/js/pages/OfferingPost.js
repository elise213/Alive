import React, { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
// import AddressInput from "../component/AddressInput";

const OfferingPost = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [resourceType, setResourceType] = useState("");
  const { store, actions } = useContext(Context);
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [picture2, setPicture2] = useState("");
  const [latitude, setLatitude] = useState("34.095520");
  const [longitude, setLongitude] = useState("-118.309640");

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
    setResourceType("");
    setDescription("");
    setLatitude("");
    setLongitude("");
    setPicture("");
    setPicture2("");
  };

  function handleClick(e) {
    e.preventDefault();
    if (
      actions.createResource(
        title,
        address,
        resourceType,
        description,
        latitude,
        longitude,
        picture,
        picture2,
        user_id
      )
    ) {
      // showModal ModalResource
      alert("Resource Created");
      resetForm();
      navigate("/search/all");
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
          <label className="form-check-label" htmlFor="resourceType">
            What is the closest category that would describe your offering?
          </label>
          {/* <div className="form-check form-row"> */}
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="resourceType"
              id="resourceF"
              value="food"
              checked={resourceType === "food"}
              onChange={() => (
                setResourceType("food"), console.log(resourceType)
              )}
            />
            <label className="form-check-label" htmlFor="resourceF">
              Food
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="resourceType"
              id="resourceS"
              value="shelter"
              checked={resourceType === "shelter"}
              onChange={(e) => (
                setResourceType(e.target.value), console.log(resourceType)
              )}
            />
            <label className="form-check-label" htmlFor="resourceS">
              Shelter
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="resourceType"
              id="resourceH"
              value="health"
              checked={resourceType === "health"}
              onChange={(e) => (
                setResourceType(e.target.value), console.log(resourceType)
              )}
            />
            <label className="form-check-label" htmlFor="resourceH">
              Health
            </label>
          </div>
          <div className="form-check mb-3 form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="resourceType"
              id="resourceHy"
              value="hygiene"
              checked={resourceType === "hygiene"}
              onChange={(e) => setResourceType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="resourceHy">
              Hygiene
            </label>
          </div>
          {/*<!-------------------- end of ResourceType --------------------> */}

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

          <label htmlFor="picture">Pictures</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  h-100" id="picture">
                <i className="fa-solid fa-image text-secondary"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="picture"
              type="text"
              value={picture}
              id="picture"
              onChange={(e) => setPicture(e.target.value)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="You can upload up to two pictures of your place"
            ></input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  h-100" id="picture">
                <i className="fa-solid fa-image text-secondary"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="picture2"
              type="text"
              value={picture2}
              id="picture2"
              onChange={(e) => setPicture2(e.target.value)}
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
