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
          <div className="row">
            <h4 className="my-2">Blade Details</h4>
            <div className="col-md-4">
              <label className="form-label my-1">Metal</label>
              <input
                type="text"
                className="form-control"
                name="metal"
                value={props.newBladeMetal}
                onChange={props.updateBladeField}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label my-1">Length</label>
              <input
                className="form-control"
                type="number"
                name="length"
                value={props.newBladeLength + ""}
                onChange={props.updateBladeField}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label my-1">Unit of Measurement</label>
              <input
                className="form-control"
                type="text"
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
              value={props.newDescription}
              onChange={props.updateFormField}
            ></textarea>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="form-label my-1">Fighting Styles</label>
              <textarea
                className="form-control"
                type="text"
                name="newFightingStyle"
                value={props.newFightingStyle}
                onChange={props.updateFormField}
              ></textarea>
            </div>
            <div className="col-md-6">
              <label className="form-label my-2">Tags</label>
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
                      <label className="form-check-label mx-2">{t.label}</label>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="my-2">
              <button className="mt-3 btn btn-primary" onClick={props.addNewSword} >Add New Sword</button>
              <button className="mt-3 mx-2 btn btn-danger" onClick={props.cancelAddNew}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
