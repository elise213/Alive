import React from "react";

const about = () => {
  return (
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

        <label for="type"> When is this being offered? </label>
        <input name="type" type="text"></input>
        <label for="type">
          {" "}
          What is the address where this being offered?{" "}
        </label>
        <input name="type" type="text"></input>
        <label for="type"> Is there a website? </label>
        <input name="type" type="text"></input>
        <label for="type"> Is there a phone number? </label>
        <input name="type" type="text"></input>
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default about;
