import React from "react";

export default function ConfirmDelete(props) {
  return (
    <React.Fragment>
      <div className="warning">
      <div className="alert alert-danger mt-3" role="alert">
        <h4 className="alert-heading">
          Confirm Delete {props.deleteSwordData.name}?
        </h4>
        <p>
          Are you sure you want to delete {props.deleteSwordData.name} from the
          sword list? Once the data from {props.deleteSwordData.name} is
          deleted, the record will be irretrievable.
        </p>
        <button className="btn btn-danger" onClick={props.deleteSword}>
          Confirm Delete
        </button>
        <button className="btn btn-primary mx-2" onClick={props.cancelDelete}>
          Cancel
        </button>
      </div>
      </div>
    </React.Fragment>
  );
}
