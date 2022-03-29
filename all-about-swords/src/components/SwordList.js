import React from "react";

export default function swordList(props) {
    console.log(props)
  return (
    <React.Fragment>
      <div className="container">
        <h1>Sword List</h1>
        {props.data.map((r) => (
          <React.Fragment key={r._id}>
            <div className="col-sm-6">
              <div className="row">
                <div className="card" style={{width: "18rem"}}>
                  <img src={r.image_url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
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
