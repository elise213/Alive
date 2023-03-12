import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { Calendar } from "react-multi-date-picker";
import "../../styles/custom.css";

const CreateResource = () => {
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [schedule, setSchedule] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [urlPic, setUrlPic] = useState("");
  const { store, actions } = useContext(Context);
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const addSchedule = (day, start, end) => console.log("");

  const CustomInput = ({ value, onClick, onChange }) => (
    <input
      className="form-control h-100"
      name="schedule"
      type="text"
      value={value}
      onChange={onChange}
      onClick={onClick}
    ></input>
  );

  function handleClick(e) {
    // schedule = schedule.toString();
    e.preventDefault();
    actions.createResource(
      name,
      schedule,
      website,
      phone,
      address,
      resourceType,
      urlPic,
      description
    );
  }

  return (
    <div className="row center mx-auto col-6 text-secondary mb-3">
      <div className="m-4">
        <p>Please provide the information to register your resource</p>
        <form className="d-flex flex-column">
          <label htmlFor="name"> Name of the place</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-100" id="name">
                {/* <i className="fa-solid fa-billboard text-secondary"></i> 
                <i className="fa-solid fa-buildings text-secondary"></i>*/}
                <i className="fa-solid fa-building text-secondary"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            What kind of Resource are you offering?
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
          {/* </div> */}
          {/*<DatePickerCal />
           <Calendar fullYear /> */}

          <label htmlFor="type"> When is this being offered? </label>

          <div
            className="input-group form-row mb-3"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Please enter the schedule your service is offered"
          >
            <div className="col-6">
              <label htmlFor="day" className="form-label">
                Day
              </label>
              <input
                className="form-control"
                list="DayOptions"
                id="day"
                placeholder="Select days"
                name="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
              <datalist id="DayOptions">
                <option value="Monday" />
                <option value="Tuesday" />
                <option value="Wednesday" />
                <option value="Thursday" />
                <option value="Friday" />
                <option value="Saturday" />
                <option value="Sunday" />
              </datalist>
            </div>
            <div
              className="col-3"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Please enter start time"
            >
              <label htmlFor="startTime" className="form-label">
                Start
              </label>
              <input
                className="form-control"
                name="timeSchedule"
                type="time"
                id="startTime"
                value={startTime}
                onFocus={(e) => e.target.showPicker()}
                placeholder="start"
                onChange={(e) => setStartTime(e.target.value)}
              ></input>
            </div>
            <div
              className="col-3"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Please enter end time"
            >
              <label htmlFor="endTime" className="form-label">
                End
              </label>
              <input
                type="time"
                name="timeSchedule"
                id="endTime"
                value={endTime}
                className="form-control text-secondary"
                onFocus={(e) => e.target.showPicker()}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            {/* <DatePickerCal /> */}
            {/* <DatePicker
              value={schedule}
              customInput={<CustomInput />}
              onChange={setSchedule}
              format="MM/DD/YYYY HH:mm:ss"
              multiple
              plugins={[
                <TimePicker position="bottom" hideSeconds />,
                <DatePanel markFocused />,
              ]}
            /> 
            <div className="input-group-append">
              <span className="input-group-text h-100">
                <i className="fa-solid fa-calendar-days text-secondary"> </i>
              </span>
            </div>*/}
          </div>

          <label htmlFor="address">
            What is the address where this being offered?{" "}
          </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text h-100">
                <i className="fa-solid fa-map-location-dot text-secondary"></i>
              </span>
            </div>
            <input
              id="address"
              className="form-control"
              name="type"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
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
                {/* <i className="fa-regular fa-globe"></i> */}
                <i className="fa-solid fa-globe text-secondary"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="type"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
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
            ></input>
          </div>

          <label htmlFor="file">Picture</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  h-100" id="phone">
                <i className="fa-solid fa-image text-secondary"></i>
              </span>
            </div>
            <input
              className="form-control"
              name="phone"
              type="file"
              value={urlPic}
              id="urlPic"
              onChange={(e) => setUrlPic(e.target.value)}
            ></input>
          </div>

          {/* <label htmlFor="file">
            Picture
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text h-100">
                  <i className="fa-solid fa-image text-secondary"></i>
                </span>
              </div>
              <input
                className="form-control"
                name="picture"
                type="text"
                placeholder="Choose file"
                // value={document.getElementById("file")}
                readOnly
              ></input>
            </div>
          </label>
          <input
            className="form-control d-none"
            name="name"
            type="file"
            value={urlPic}
            id="file"
            style={{ visibility: "hidden" }}
            onChange={(e) => setUrlPic(e.target.value)} // onChange={(e) => setUrlPic(e.target.files[0].name)}
          ></input> */}
        </form>
        <div className="float-end">
          <button
            type="submit"
            className="btn custom-btn text-white"
            onClick={(e) => handleClick(e)}
            // style={{ backgroundColor: "blueviolet" }}
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
