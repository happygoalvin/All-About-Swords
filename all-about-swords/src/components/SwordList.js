import React from "react";

export default function swordList(props) {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Sword List</h1>
        <div className="row">
          {props.data.map((r) => (
            <React.Fragment key={r._id}>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={r.image_url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{r.name}</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Origin: {r.origin}</li>
                      <li className="list-group-item">
                        Creation: {r.time_period_created}
                      </li>
                      <li className="list-group-item">
                        Fighting styles: {r.fighting_style.join(", ")}
                      </li>
                    </ul>
                    <p className="card-text">{r.description}</p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Made of: {r.blade.metal}
                      </li>
                      <li className="list-group-item">
                        Blade length: {r.blade.length}
                        {r.blade.uom}
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <a href="#" className="btn-sm btn-primary m-1">
                      Card link
                    </a>
                    <a href="#" className="btn-sm btn-primary">
                      Another link
                    </a>
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
