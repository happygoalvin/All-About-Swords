import React from "react";
import "../App.css";

export default function AddNewSword(props) {
  return (
    <React.Fragment>
      <div className="addNew">
        <div className="container">
          <h1 className="d-flex justify-content-center my-3">
            Add New Sword Info
          </h1>
          <p className="d-flex justify-content-center">
            Do you know a sword that isn't included? Do share with the community
            and contribute to the sword catalogue.
          </p>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <label className="form-label my-1">Sword Title</label>
              <input
                type="text"
                className="form-control"
                name="newTitle"
                placeholder="Please enter a title"
                value={props.newTitle}
                onChange={props.updateFormField}
              />
              <span className="text-danger">{props.titleError}</span>
            </div>
            <div className="col-md-6 col-lg-4">
              <label className="form-label my-1">Origin</label>
              <input
                type="text"
                className="form-control"
                name="newOrigin"
                placeholder="Please enter an origin"
                value={props.newOrigin}
                onChange={props.updateFormField}
              />
              <span className="text-danger">{props.originError}</span>
            </div>
            <div className="col-md-6 col-lg-4">
              <label className="form-label my-1">Time Period Created</label>
              <input
                type="text"
                className="form-control"
                name="newTimePeriodCreated"
                placeholder="Please enter time period using AD or BC"
                value={props.newTimePeriodCreated}
                onChange={props.updateFormField}
              />
              <span className="text-danger">{props.timePeriodError}</span>
            </div>
            <div className="col-md-6 col-lg-12">
              <label className="form-label my-1">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="newImageUrl"
                placeholder="Please enter image URL"
                value={props.newImageUrl}
                onChange={props.updateFormField}
              />
              <span className="text-danger">{props.imageUrlError}</span>
            </div>
            </div>
            <div className="row">
              <h4 className="my-2">Blade Details</h4>
              <div className="col-md-4">
                <label className="form-label my-1">Metal</label>
                <input
                  type="text"
                  className="form-control"
                  name="metal"
                  placeholder="Please enter the metal used to create blade"
                  value={props.newBladeMetal}
                  onChange={props.updateBladeField}
                />
                <span className="text-danger">{props.bladeMetalError}</span>
              </div>
              <div className="col-md-4">
                <label className="form-label my-1">Length</label>
                <input
                  className="form-control"
                  type="number"
                  name="length"
                  placeholder="Please enter the sword length"
                  value={props.newBladeLength + ""}
                  onChange={props.updateBladeField}
                />
                <span className="text-danger">{props.bladeLengthError}</span>
              </div>
              <div className="col-md-4">
                <label className="form-label my-1">Unit of Measurement</label>
                <input
                  className="form-control"
                  type="text"
                  id="uom"
                  name="uom"
                  value={props.newBladeUom}
                  onChange={props.updateBladeField}
                  disabled
                />
              </div>
            </div>
            <div>
              <h4 className="my-2">Description</h4>
              <textarea
                className="form-control"
                name="newDescription"
                style={{ height: "10rem", maxHeight: "20rem" }}
                placeholder="Please enter sword description with at least 50 characters"
                value={props.newDescription}
                onChange={props.updateFormField}
              ></textarea>
              <span className="text-danger">{props.descriptionError}</span>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h4 className="my-3">Fighting Styles</h4>
                <textarea
                  className="form-control"
                  type="text"
                  style={{ maxHeight: "20rem", height: "10rem" }}
                  name="newFightingStyle"
                  placeholder="Please separate each input with a ','"
                  value={props.newFightingStyle}
                  onChange={props.updateFormField}
                ></textarea>
                <span className="text-danger">{props.fightingStyleError}</span>
              </div>
              <div className="col-md-6">
                <h4 className="my-3">Tags</h4>
                <p>Please select 1 to 3 tags</p>
                {props.tagData.map((t) => {
                  return (
                    <React.Fragment key={t.value}>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="newTags"
                          value={t.value}
                          onChange={props.updateTags}
                          checked={props.newTags.includes(t.value)}
                        />
                        <label className="form-check-label mx-2">
                          {t.label}
                        </label>
                      </div>
                    </React.Fragment>
                  );
                })}
                <span className="text-danger">{props.tagError}</span>
              </div>
              <div className="my-2">
                <button
                  className="mt-3 btn btn-primary"
                  id="submit"
                  onClick={props.addNewSword}
                >
                  Add New Sword
                </button>
                <button
                  className="mt-3 mx-2 btn btn-danger"
                  id="cancel"
                  onClick={props.cancelAddNew}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}
