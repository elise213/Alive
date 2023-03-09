import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import DatePickerComp from "../component/DatePickerComp";

const CreateResource = () => {
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [schedule, setSchedule] = useState("");
  const { store, actions } = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    actions.createResource(name, schedule, website, phone, address);
  }
  return (
    <div>
      <div className="m-4">
        <form className="d-flex flex-column">
          <p> What kind of Resource are you offering? </p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" for="exampleRadios1">
              Food
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" for="exampleRadios2">
              {" "}
              Shelter
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" for="exampleRadios2">
              {" "}
              Health
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" for="exampleRadios2">
              {" "}
              Hygiene
            </label>
          </div>

          <DatePickerComp />

          <label for="type"> When is this being offered? </label>
          <input
            name="type"
            type="text"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          ></input>
          <label for="type">
            {" "}
            What is the address where this being offered?{" "}
          </label>
          <input
            name="type"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
          <label for="type"> Is there a website? </label>
          <input
            name="type"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          ></input>
          <label for="type"> Is there a phone number? </label>
          <input
            name="type"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <label for="type"> Name </label>
          <input
            name="type"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </form>
        <button type="submit" onClick={(e) => handleClick(e)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateResource;
