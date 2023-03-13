import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Selection = (props) => {
  const { store, actions } = useContext(Context);
  const [categorySearch, setCategorySearch] = useState([]);
  const [when, setWhen] = useState([]);
  const [radius, setRadius] = useState([]);

  console.log(categorySearch);
  console.log(when);
  console.log(radius);

  function handleCategorySearch(event) {
    const element = event.target;
    const value = element.value;
    if (element.type === "checkbox" && element.checked) {
      setCategorySearch([...categorySearch, value]);
    }
    if (element.type === "checkbox" && !element.checked) {
      let filtered = categorySearch.filter((item) => item !== value);
      setCategorySearch(filtered);
    }
  }

  function handleWhen(event) {
    const element = event.target;
    const value = element.value;
    if (element.type === "checkbox" && element.checked) {
      setWhen([...when, value]);
    }
    if (element.type === "checkbox" && !element.checked) {
      let filtered = when.filter((item) => item !== value);
      setWhen(filtered);
    }
  }

  function handleRadius(event) {
    const element = event.target;
    const value = element.value;
    if (element.type === "radio" && element.checked) {
      setRadius([value]);
    }
  }

  return (
    <div className="row mx-4 my-3">
      {/* <!-- What type of resource--> */}
      <div className="col-4">
        <p className="selection-headers">What kind of resource?</p>
        <div className="" id="selection">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="food"
              value="food"
              name="selection"
              onChange={handleCategorySearch}
            />
            <label className="form-check-label" for="food">
              Food
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="shelter"
              value="shelter"
              name="selection"
              onChange={handleCategorySearch}
            />
            <label className="form-check-label" for="shelter">
              Shelter
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="health"
              value="health"
              name="selection"
              onChange={handleCategorySearch}
            />
            <label className="form-check-label" for="health">
              Health
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="hygiene"
              value="hygiene"
              name="selection"
              onChange={handleCategorySearch}
            />
            <label className="form-check-label" for="hygiene">
              Hygiene
            </label>
          </div>
        </div>
      </div>

      {/* <!-- When ? --> */}
      <div className="col-4">
        <p className="selection-headers">When would you like to go?</p>
        <div className="" id="selection">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="monday"
              value="monday"
              onChange={handleWhen}
            />
            <label className="form-check-label" for="monday">
              Monday
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="tuesday"
              value="tuesday"
              onChange={handleWhen}
            />
            <label className="form-check-label" for="tuesday">
              Tuesday
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="wednesday"
              value="wednesday"
              onChange={handleWhen}
            />
            <label className="form-check-label" for="wednesday">
              Wednesday
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="thursday"
              value="thursday"
              onChange={handleWhen}
            />
            <label className="form-check-label" for="thursday">
              Thursday
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="friday"
              value="friday"
              onChange={handleWhen}
            />
            <label className="form-check-label" for="friday">
              Friday
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="saturday"
              value="saturday"
              onChange={handleWhen}
            />
            <label className="form-check-label" for="saturday">
              Saturday
            </label>
          </div>
          <div className="form-check ">
            <input
              className="form-check-input"
              type="checkbox"
              id="sunday"
              value="sunday"
              onChange={handleWhen}
            />
            <label className="form-check-label" for="sunday">
              Sunday
            </label>
          </div>
        </div>
      </div>

      {/* Radius */}
      <div className="col-4">
        <p className="selection-headers">How far can you travel?</p>
        <div className="" id="selection">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="25 miles"
              value="25 miles"
              name="selection"
              onChange={handleRadius}
            />
            <label className="form-check-label" htmlFor="25 miles">
              25 miles
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="5 miles"
              value="5 miles"
              name="selection"
              onChange={handleRadius}
            />
            <label className="form-check-label" htmlFor="5 miles">
              5 miles
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="1 mile"
              value="1 mile"
              name="selection"
              onChange={handleRadius}
            />
            <label className="form-check-label" htmlFor="1 mile">
              1 mile
            </label>
          </div>
        </div>
        <button
        // onClick={actions.filterSearchResults(when, radius, categorySearch)}
        >
          Filter Results
        </button>
      </div>
    </div>
  );
};
