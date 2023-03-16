import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/search.css";

export const Selection = (props) => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const [categorySearch, setCategorySearch] = useState([]);
  const [when, setWhen] = useState([]);

  // console.log
  console.log("categorySearch is", categorySearch);
  console.log("when is ", when);

  // sets category search by params
  useEffect(() => {
    setCategorySearch([params.resourceType.toLowerCase()]);
  }, []);

  // Call filterSearchResults and update the checked checkboxes
  useEffect(() => {
    // trying something
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checked = false;
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checked = true;
        actions.setChecked(checked);
        break;
      } else {
        actions.resetSearchResults();
      }
    }

    actions.filterSearchResults(when, categorySearch);
    if (categorySearch.includes("food")) {
      let food = document.querySelector("#food");
      food.checked = true;
    } else if (categorySearch.includes("hygiene")) {
      let hygiene = document.querySelector("#hygiene");
      hygiene.checked = true;
    } else if (categorySearch.includes("shelter")) {
      let shelter = document.querySelector("#shelter");
      shelter.checked = true;
    } else if (categorySearch.includes("health")) {
      let health = document.querySelector("#health");
      health.checked = true;
    } else if (when.includes("monday")) {
      let monday = document.querySelector("#monday");
      monday.checked = true;
    } else if (when.includes("monday")) {
      let monday = document.querySelector("#monday");
      monday.checked = true;
    } else if (when.includes("tuesday")) {
      let tuesday = document.querySelector("#tuesday");
      tuesday.checked = true;
    } else if (when.includes("wednesday")) {
      let wednesday = document.querySelector("#wednesday");
      wednesday.checked = true;
    } else if (when.includes("thursday")) {
      let thursday = document.querySelector("#thursday");
      thursday.checked = true;
    } else if (when.includes("friday")) {
      let friday = document.querySelector("#friday");
      friday.checked = true;
    } else if (when.includes("satday")) {
      let satday = document.querySelector("#satday");
      satday.checked = true;
    } else if (when.includes("sunday")) {
      let sunday = document.querySelector("#sunday");
      sunday.checked = true;
    } else {
      actions.resetSearchResults();
    }
  }, [categorySearch, when]);

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
    if (element.checked && !when.includes(value)) {
      setWhen([...when, value]);
    }
    if (element.type === "checkbox" && !element.checked) {
      let filtered = when.filter((item) => item !== value);
      setWhen(filtered);
    }
  }

  return (
    <div className="mt-3 mb-5 container">
      {/* <!-- What type of resource--> */}
      <div className="what-type my-2">
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
            <label className="form-check-label" for="food">
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
            <label className="form-check-label" for="shelter">
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
            <label className="form-check-label" for="health">
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
            <label className="form-check-label" for="hygiene">
              Hygiene
            </label>
          </div>
        </div>
      </div>
      {/* <!-- When ? --> */}
      <div className="when mt-5 mb-2">
        <div className="question">
          <p className="selection-headers me-4">When would you like to go?</p>
        </div>
        <div className="selection">
          <div className="" id="selection">
            <div className="form-check form-check-inline ">
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
            <div className="form-check form-check-inline">
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
            <div className="form-check form-check-inline">
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
            <div className="form-check form-check-inline ">
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
            <div className="form-check form-check-inline ">
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
            <div className="form-check form-check-inline ">
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
            <div className="form-check form-check-inline ">
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
      </div>
    </div>
  );
};
