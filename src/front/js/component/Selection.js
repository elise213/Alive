import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/search.css";

export const Selection = (props) => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const [categorySearch, setCategorySearch] = useState([]);
  const [when, setWhen] = useState([]);

  console.log("categorySearch is", categorySearch);
  console.log("when is ", when);

  function handleCategorySearch(event) {
    const element = event.target;
    const value = element.value;
    if (element.type === "checkbox" && element.checked) {
      setCategorySearch([...categorySearch, value]);
    }
    if (element.type === "checkbox" && !element.checked) {
      setCategorySearch(categorySearch.filter((item) => item !== value));
    }
  }

  function handleWhen(event) {
    const element = event.target;
    const value = element.value;
    if (element.checked && !when.includes(value)) {
      setWhen([...when, value]);
    }
    if (element.type === "checkbox" && !element.checked) {
      let filtered = when.filter((item) => item !== value);
      setWhen(filtered);
    }
  }

  return (
    <div className="container">
      {/* <!-- What type of resource--> */}
      <div className="what-type">
        <div className="question">
          <p className="">What kind of resource do you need?</p>
        </div>
        <div className="selection">
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="checkbox"
              id="food"
              value="food"
              name="selection"
              onChange={handleCategorySearch}
            />
            <label className="form-check-label" htmlFor="food">
              Food
            </label>
          </div>
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="checkbox"
              id="shelter"
              value="shelter"
              name="selection"
              onChange={handleCategorySearch}
            />
            <label className="form-check-label" htmlFor="shelter">
              Shelter
            </label>
          </div>
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="checkbox"
              id="health"
              value="health"
              name="selection"
              onChange={handleCategorySearch}
            />
            <label className="form-check-label" htmlFor="health">
              Health
            </label>
          </div>
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="checkbox"
              id="hygiene"
              value="hygiene"
              name="selection"
              onChange={handleCategorySearch}
            />
            <label className="form-check-label" htmlFor="hygiene">
              Hygiene
            </label>
          </div>
        </div>
      </div>
      {/* <!-- When ? --> */}
      <div className="when">
        <div className="question">
          <p className="">When do you need it?</p>
        </div>
        <div className="selection">
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="checkbox"
              id="monday"
              value="monday"
              onChange={handleWhen}
            />
            <label className="form-check-label" htmlFor="monday">
              Monday
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="tuesday"
              value="tuesday"
              onChange={handleWhen}
            />
            <label className="form-check-label" htmlFor="tuesday">
              Tuesday
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="wednesday"
              value="wednesday"
              onChange={handleWhen}
            />
            <label className="form-check-label" htmlFor="wednesday">
              Wednesday
            </label>
          </div>
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="checkbox"
              id="thursday"
              value="thursday"
              onChange={handleWhen}
            />
            <label className="form-check-label" htmlFor="thursday">
              Thursday
            </label>
          </div>
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="checkbox"
              id="friday"
              value="friday"
              onChange={handleWhen}
            />
            <label className="form-check-label" htmlFor="friday">
              Friday
            </label>
          </div>
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="checkbox"
              id="saturday"
              value="saturday"
              onChange={handleWhen}
            />
            <label className="form-check-label" htmlFor="saturday">
              Saturday
            </label>
          </div>
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="checkbox"
              id="sunday"
              value="sunday"
              onChange={handleWhen}
            />
            <label className="form-check-label" htmlFor="sunday">
              Sunday
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
