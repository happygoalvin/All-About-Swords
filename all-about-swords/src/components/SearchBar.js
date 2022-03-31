import React from "react";

export default function SearchBar(props) {
    return(
    <React.Fragment>
        <div className="d-flex">
            <input type="text" name="searchName" value={props.value.searchName} className="form-control mx-3" onChange={props.updateFormField} placeholder="Search for..." />
            <input type="text" name="searchMinLength" value={props.value.searchMinLength} className="form-control mx-3" onChange={props.updateFormField} placeholder="Please enter minimum blade length"/>
        </div>
    </React.Fragment>
    )
}