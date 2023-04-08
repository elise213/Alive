import React, { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
// import AddressInput from "../component/AddressInput";

const RegisterAsDrop = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [image, setImage] = useState("");
  const [identification, setIdentification] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleClick(e) {
    e.preventDefault();
    actions.createDrop(
      name,
      address,
      phone,
      description,
      type,
      identification,
      image
    );
  }

  return (
    <div className="row center mx-auto col-6 text-secondary mb-3">
      <div className="m-4">
        <form className="d-flex flex-column">
          <label htmlFor="name"> Name </label>

          {/* _____________________________________________NAME */}
          <div className="input-group mb-3">
            <input
              className="form-control"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Name"
            ></input>
          </div>

          {/* _____________________________________________LOCATION TYPE */}
          <label className="form-check-label" htmlFor="type">
            What is the closest category that would describe your location?
          </label>
          {/* <div className="form-check form-row"> */}
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              value="church"
              checked={type === "church"}
              onChange={() => (setType("church"), console.log(type))}
            />
            <label className="form-check-label" htmlFor="offeringF">
              church
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="offeringType"
              id="offeringS"
              value="business/non-profit"
              checked={type === "business/non-profit"}
              onChange={(e) => (setType(e.target.value), console.log(type))}
            />
            <label className="form-check-label" htmlFor="offeringS">
              business/non-profit
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="offeringType"
              id="offeringH"
              value="residence"
              checked={type === "residence"}
              onChange={(e) => (setType(e.target.value), console.log(type))}
            />
            <label className="form-check-label" htmlFor="offeringH">
              residence
            </label>
          </div>
          <div className="form-check mb-3 form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="offeringType"
              id="offeringHy"
              value="other"
              checked={type === "other"}
              onChange={(e) => setType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="offeringHy">
              other
            </label>
          </div>

          {/* _____________________________________________Address */}
          <label htmlFor="phone"> Address </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  h-100" id="phone">
                <i class="fas fa-map-pin"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="name"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Name"
            ></input>
          </div>
          {/* _____________________________________________Email*/}
          <label htmlFor="phone"> Email Address</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  h-100" id="phone">
                <i class="fas fa-at"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="email"
            ></input>
          </div>

          {/* _____________________________________________Phone */}
          <label htmlFor="phone"> Phone number </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  h-100" id="phone">
                <i className="fa-solid fa-phone text-secondary"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Provide a contact phone number"
            ></input>
          </div>

          {/* _____________________________________________Identification */}

          <label htmlFor="image">Identification</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  h-100" id="image">
                <i class="far fa-address-card"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="image"
              type="text"
              value={identification}
              id="image"
              onChange={(e) => setIdentification(e.target.value)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="You can upload up to two images of your place"
            ></input>
          </div>
          {/* _____________________________________________Image of Location */}
          <label htmlFor="image">Image of Location</label>
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
              value={image}
              id="image2"
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </div>
          {/* _____________________________________________Description */}
          <div className="form-group mb-3">
            <label htmlFor="description">
              {" "}
              Please provide a brief description of the pick-up/drop-off
              location including schedule of availability
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
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
