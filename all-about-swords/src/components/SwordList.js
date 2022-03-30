import React from "react";

export default function swordList(props) {
  return (
      <React.Fragment>
        <div className="container">
          <h1 className="d-flex justify-content-center my-3">Sword List</h1>
          {props.data.map((r) => (
            <React.Fragment key={r._id}>
              <div className="card mb-3" style={{maxWidth: "100%"}}>
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src={r.image_url} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">{r.name}</h5>
                      <p className="card-text">
                        Origin: {r.origin}
                      </p>
                      <p>
                        {r.description}
                      </p>
                      <ul className="list-group">
                        <li className="list-group-item">Blade Material: {r.blade.metal}</li>
                        <li className="list-group-item">Blade Length: {r.blade.length}{r.blade.uom}</li> 
                        <li className="list-group-item">Fighting Styles: {r.fighting_style.join(', ')}</li>
                        <li className="list-group-item">Tags: {r.tags.map(t => t.name + " ")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
  );
}
