import React from "react";

export default function SearchBar(props) {
    return(
    <React.Fragment>
        <div className="d-grid">
            <input type="text" name="name" value={props.searchName} className="form-control" placeholder="Search for..." />
        </div>
    </React.Fragment>
    )
}