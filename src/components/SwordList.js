import React from "react";
import SearchBar from "./SearchBar";
import "../App.css";

export default function swordList(props) {
  return (
    <React.Fragment>
      <div className="row">
      <div className="filter col-12 col-lg-3 col-xl-2">
        <SearchBar
          data={props.data}
          tagsData={props.tagsData}
          value={props.value}
          updateFilterOptions={props.updateFilterOptions}
          onClickUpdate={props.onClickUpdate}
          updateTagsFilter={props.updateTagsFilter}
          refreshSearch={props.refreshSearch}
        />
      </div>
      <div className="col-12 col-lg-9 col-xl-10 swordCatalogue">
        <h3 className="d-flex justify-content-center my-3">Sword Catalogue</h3>
      <div className="d-flex justify-content-center mb-3">
        <img src="/images/swordsman.gif" className="img-fluid" alt="GIF of swordsman spinning blades" />
      </div>
        {props.data.map((r) => (
          <React.Fragment key={r._id}>
            <div className="card lg-3" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-5 col-lg-5 swordCatalogue">
                  <img
                    src={r.image_url}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-7 col-lg-7 swordCatalogue">
                  <div className="card-body">
                    <h5 className="card-title">{r.name}</h5>
                    <p className="card-text">Origin: {r.origin}</p>
                    <div className="card-content">
                    <p>{r.description}</p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        Time period created: {r.time_period_created}
                      </li>
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
                    </div>
                    <div className="d-flex justify-content-end mt-2">
                      <button
                        className="btn btn-success mx-1"
                        onClick={() => props.updateSelectedSword(r)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={() => props.confirmDelete(r)}
                      >
                        <i className="fa-solid fa-trash"></i>
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
