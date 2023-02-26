import React from "react";

export const Selection = () => {
  return (
    <div className="row mx-4 my-3">
      <div className="col-2"></div>
      <div className="col-8">
        {/* <!-- What type of resource--> */}
        <div className="d-flex justify-content-evenly" id="selection">
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id=""
              value=""
              name="selection"
            />
            <label class="form-check-label" for="flexCheckChecked">
              All resources
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="food"
              value="food"
              name="selection"
            />
            <label class="form-check-label" for="food">
              Food
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="shelter"
              value="shelter"
              name="selection"
            />
            <label class="form-check-label" for="shelter">
              Shelter
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="health"
              value="health"
              name="selection"
            />
            <label class="form-check-label" for="health">
              Health
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="hygiene"
              value="hygiene"
              name="selection"
            />
            <label class="form-check-label" for="hygiene">
              Hygiene
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="children"
              value="children"
              name="selection"
            />
            <label class="form-check-label" for="children">
              For children
            </label>
          </div>
        </div>

        {/* <!-- When ? --> */}
        <div class="d-flex justify-content-evenly my-3" id="selection">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              value=""
            />
            <label class="form-check-label" for="flexCheckChecked">
              Anytime
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="monday"
              value="monday"
            />
            <label class="form-check-label" for="monday">
              Monday
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="tuesday"
              value="tuesday"
            />
            <label class="form-check-label" for="tuesday">
              Tuesday
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="wednesday"
              value="wednesday"
            />
            <label class="form-check-label" for="wednesday">
              Wednesday
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="thursday"
              value="thursday"
            />
            <label class="form-check-label" for="thursday">
              Thursday
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="friday"
              value="friday"
            />
            <label class="form-check-label" for="friday">
              Friday
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="saturday"
              value="saturday"
            />
            <label class="form-check-label" for="saturday">
              Saturday
            </label>
          </div>
          <div class="form-check ">
            <input
              class="form-check-input"
              type="checkbox"
              id="sunday"
              value="sunday"
            />
            <label class="form-check-label" for="sunday">
              Sunday
            </label>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
};
