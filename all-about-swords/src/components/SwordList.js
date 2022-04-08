import React from "react";
import SearchBar from "./SearchBar";

export default function swordList(props) {
  return (
    <React.Fragment>
      <div className="row">
      <div className="col-12 col-lg-3 col-xl-2">
        <SearchBar
          data={props.data}
          tagsData={props.tagsData}
          value={props.value}
          updateFilterOptions={props.updateFilterOptions}
          onClickUpdate={props.onClickUpdate}
          updateTagsFilter={props.updateTagsFilter}
        />
      </div>
      <div className="col-12 col-lg-9 col-xl-10">
        <h3 className="d-flex justify-content-center my-3">Sword Catalogue</h3>
      <div className="d-flex justify-content-center mb-3">
        <img src="/images/swordsman.gif" className="img-fluid" />
      </div>
        {props.data.map((r) => (
          <React.Fragment key={r._id}>
            <div className="card lg-3" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-5 col-lg-5">
                  <img
                    src={r.image_url}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-7 col-lg-7">
                  <div className="card-body">
                    <h5 className="card-title">{r.name}</h5>
                    <p className="card-text">Origin: {r.origin}</p>
                    <p>{r.description}</p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        Blade Material: {r.blade.metal}
                      </li>
                      <li className="list-group-item">
                        Blade Length: {r.blade.length}
                        {r.blade.uom}
                      </li>
                      <li className="list-group-item">
                        Fighting Styles: {r.fighting_style.join(", ")}
                      </li>
                      <li className="list-group-item">
                        Tags: {r.tags.map((t) => t.label + " ")}
                      </li>
                    </ul>
                    <div>
                      <button
                        className="btn btn-success mx-1"
                        onClick={() => props.updateSelectedSword(r)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={() => props.confirmDelete(r)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
        </div>
      </div>
    </React.Fragment>
  );
}
