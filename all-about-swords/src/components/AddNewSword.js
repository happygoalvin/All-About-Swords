import React from "react";

export default function AddNewSword(props) {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="d-flex justify-content-center my-3">
          Add New Sword Info
        </h1>
        <p className="d-flex justify-content-center">
          Do you know a sword that isn't included? Do share with the community
          and contribute to the list.
        </p>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <label className="form-label my-1">Sword Title</label>
            <input
              type="text"
              className="form-control"
              name="newTitle"
              value={props.newTitle}
              onChange={props.updateFormField}
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <label className="form-label my-1">Origin</label>
            <input
              type="text"
              className="form-control"
              name="newOrigin"
              value={props.newOrigin}
              onChange={props.updateFormField}
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <label className="form-label my-1">Time Period Created</label>
            <input
              type="text"
              className="form-control"
              name="newTimePeriodCreated"
              value={props.newTimePeriodCreated}
              onChange={props.updateFormField}
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <label className="form-label my-1">Image URL</label>
            <input 
            type="text"
            className="form-control"
            name="newImageUrl"
            value={props.newImageUrl}
            onChange={props.updateFormField}
            />
          </div>
          <div>
            <label className="form-label my-1">Description</label>
            <textarea className="form-control" name="newDescription" value={props.newDescription} onChange={props.updateFormField} ></textarea>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
