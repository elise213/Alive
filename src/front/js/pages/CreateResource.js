import React, { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
// import AddressInput from "../component/AddressInput";

const CreateResource = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [picture, setPicture] = useState("");
  const [picture2, setPicture2] = useState("");
  const [latitude, setLatitude] = useState("34.095520");
  const [longitude, setLongitude] = useState("-118.309640");
  // const [logo, setlogo] = useState("");
  const [mondayStart, setMondayStart] = useState("");
  const [mondayEnd, setMondayEnd] = useState("");
  const [tuesdayStart, setTuesdayStart] = useState("");
  const [tuesdayEnd, setTuesdayEnd] = useState("");
  const [wednesdayStart, setWednesdayStart] = useState("");
  const [wednesdayEnd, setWednesdayEnd] = useState("");
  const [thursdayStart, setThursdayStart] = useState("");
  const [thursdayEnd, setThursdayEnd] = useState("");
  const [fridayStart, setFridayStart] = useState("");
  const [fridayEnd, setFridayEnd] = useState("");
  const [saturdayStart, setSaturdayStart] = useState("");
  const [saturdayEnd, setSaturdayEnd] = useState("");
  const [sundayStart, setSundayStart] = useState("");
  const [sundayEnd, setSundayEnd] = useState("");

  const resetForm = () => {
    setName("");
    setAddress("");
    setPhone("");
    setResourceType("");
    setWebsite("");
    setDescription("");
    setLatitude("");
    setLongitude("");
    setPicture("");
    setPicture2("");
    // setLogo("");
  };

  function handleClick(e) {
    e.preventDefault();
    actions.createResource(
      name,
      address,
      phone,
      resourceType,
      website,
      description,
      latitude,
      longitude,
      picture,
      picture2,
      // logo,
      mondayStart,
      mondayEnd
    );
    // showModal ModalResource
    // alert("Resource Created")
    // resetForm()
    // navigate("/search/all")
  }

  return (
    <div className="row center mx-auto col-6 text-secondary mb-3">
      <div className="m-4">
        <form className="d-flex flex-column">
          <label htmlFor="name"> Title of the resource being offered</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-100" id="name">
                <i className="fa-solid fa-building text-secondary"></i>
              </span>
            </div>
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
            <label htmlFor="description">
              {" "}
              Please provide a brief description of the service that is being
              provided including all information needed to access it
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <label className="form-check-label" htmlFor="resourceType">
            What kind of resource is being offered?
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
          <div className="my-2">
            <label htmlFor="type"> When is this being offered? </label>
            <form>
              <label for="appt">Monday from </label>
              <input
                type="time"
                id="appt"
                name="appt"
                value={mondayStart}
                onChange={(e) => setMondayStart(e.target.value)}
              />
              <span> until </span>
              <input
                type="time"
                id="appt"
                name="appt"
                value={mondayEnd}
                onChange={(e) => setMondayEnd(e.target.value)}
              />
            </form>

            <form>
              <label for="appt">Tuesday from </label>
              <input
                type="time"
                id="appt"
                name="appt"
                value={tuesdayStart}
                onChange={(e) => setTuesdayStart(e.target.value)}
              />
              <span> until </span>
              <input
                type="time"
                id="appt"
                name="appt"
                value={tuesdayEnd}
                onChange={(e) => setTuesdayEnd(e.target.value)}
              />
            </form>

            <form>
              <label for="appt">Wednesday from</label>
              <input
                type="time"
                id="appt"
                name="appt"
                value={wednesdayStart}
                onChange={(e) => setWednesdayStart(e.target.value)}
              />
              <span> until </span>
              <input
                type="time"
                id="appt"
                name="appt"
                value={wednesdayEnd}
                onChange={(e) => setWednesdayEnd(e.target.value)}
              />
            </form>

            <form>
              <label for="appt">Thursday from</label>
              <input
                type="time"
                id="appt"
                name="appt"
                value={thursdayStart}
                onChange={(e) => setThursdayStart(e.target.value)}
              />
              <span> until </span>
              <input
                type="time"
                id="appt"
                name="appt"
                value={thursdayEnd}
                onChange={(e) => setThursdayEnd(e.target.value)}
              />
            </form>

            <form>
              <label for="appt">Friday from</label>
              <input
                type="time"
                id="appt"
                name="appt"
                value={fridayStart}
                onChange={(e) => setFridayStart(e.target.value)}
              />
              <span> until </span>
              <input
                type="time"
                id="appt"
                name="appt"
                value={fridayEnd}
                onChange={(e) => setFridayEnd(e.target.value)}
              />
            </form>

            <form>
              <label for="appt">Saturday</label>
              <input
                type="time"
                id="appt"
                name="appt"
                value={saturdayStart}
                onChange={(e) => setSaturdayStart(e.target.value)}
              />
              <span> until </span>
              <input
                type="time"
                id="appt"
                name="appt"
                value={saturdayEnd}
                onChange={(e) => setSaturdayEnd(e.target.value)}
              />
            </form>

            <form>
              <label for="appt">Sunday</label>
              <input
                type="time"
                id="appt"
                name="appt"
                value={sundayStart}
                onChange={(e) => setSundayStart(e.target.value)}
              />
              <span> until </span>
              <input
                type="time"
                id="appt"
                name="appt"
                value={sundayEnd}
                onChange={(e) => setSundayEnd(e.target.value)}
              />
            </form>
          </div>
          {/*<!-------------------- end of schedule --------------------> */}
          <div className="mt-3">
            <label htmlFor="address">What is the address?</label>

            {/* <PlacesAutocomplete /> */}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
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
              ></input>
            </div>
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
          <label htmlFor="website"> Is there a website? </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  h-100" id="website">
                <i className="fa-solid fa-globe text-secondary"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="website"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Provide your website"
            ></input>
          </div>
          <label htmlFor="phone"> Is there a phone number? </label>
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
            className="btn btn-primary"
            onClick={(e) => handleClick(e)}
          >
            Submit
          </button>
          {/* <button type="reset" className="btn btn-outline-danger"> 
            Cancel
          </button>*/}
        </div>
      </div>
    </div>
  );
};

export default CreateResource;
