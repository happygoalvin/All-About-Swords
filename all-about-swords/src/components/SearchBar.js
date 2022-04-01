import React from "react";

export default function SearchBar(props) {
  return (
    <React.Fragment>
      <div className="d-flex p-2 justify-content-around">
        <input
          type="text"
          name="searchName"
          value={props.value.searchName}
          className="form-control mx-3 mt-3"
          onChange={props.updateFormField}
          placeholder="Search by sword name..."
        />
      </div>
      <div className="row">
        <div className="col-3">
          <input
            type="number"
            name="searchMinLength"
            value={props.value.searchMinLength}
            className="form-control mx-3 mt-3"
            onChange={props.updateFormField}
            placeholder="Please enter minimum blade length"
          />
        </div>
        <div className="col-3">
          <input
            type="number"
            name="searchMaxLength"
            value={props.value.searchMaxLength}
            className="form-control mx-3 mt-3"
            onChange={props.updateFormField}
            placeholder="Please enter maximum blade length"
          />
        </div>
        <div className="col-1">
          <input
            type="submit"
            className="btn btn-primary btn-sm mt-3 p-2"
            onClick={props.onClickUpdate}
            value="Submit"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
