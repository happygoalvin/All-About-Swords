import React from "react";

export default function SearchBar(props) {
    return(
    <React.Fragment>
        <div className="d-grid">
            <input type="text" className="form-control" placeholder="Search for..." />
        </div>
    </React.Fragment>
    )
}