import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Selection = (props) => {
  const { store, actions } = useContext(Context);
  const [categorySearch, setCategorySearch] = useState([]);
  const [when, setWhen] = useState([]);
  const params = useParams();

  // console.log(when);
  console.log(categorySearch);

  useEffect(() => {
    setCategorySearch([params.resourceType.toLowerCase()]);
  }, []);

  // Call filterSearchResults and update the checked checkboxes
  useEffect(() => {
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
    } else {
      actions.resetSearchResults();
    }
  }, [categorySearch]);

  function handleFilters(e) {
    e.preventDefault();
    actions.filterSearchResults(when, categorySearch);
  }

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

  function handleResetFilters(e) {
    e.preventDefault();
    actions.resetSearchResults();
    let food = document.querySelector("#food");
    food.checked = false;
    let hygiene = document.querySelector("#hygiene");
    hygiene.checked = false;
    let shelter = document.querySelector("#shelter");
    shelter.checked = false;
    let health = document.querySelector("#health");
    health.checked = false;
  }

  // function handleCity(event) {
  //   const element = event.target;
  //   const value = element.value;
  //   if (element.type === "checkbox" && element.checked) {
  //     setCategorySearch([...city, value]);
  //   }
  //   if (element.type === "checkbox" && !element.checked) {
  //     let filtered = city.filter((item) => item !== value);
  //     setCategorySearch(filtered);
  //   }
  // }

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

  return (
    <div className="row mx-4 my-3">
      {/* <!-- What type of resource--> */}
      <div className="col-3">
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
      <div className="col-3">
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
        {/* <button onClick={(e) => handleFilters(e)}>Filter Results</button> */}
        <button onClick={(e) => handleResetFilters(e)}>Reset Filters</button>
      </div>
    </div>
  );
};
