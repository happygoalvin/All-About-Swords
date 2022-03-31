import React from "react";

export default function SearchBar(props) {
    return(
    <React.Fragment>
        <div className="d-flex p-2 justify-content-around">
            <input type="text" name="searchName" value={props.value.searchName} className="form-control mx-3 mt-3" onChange={props.updateFormField} placeholder="Search by sword name..." />
            <input type="text" name="searchMinLength" value={props.value.searchMinLength} className="form-control mx-3 mt-3" onChange={props.updateFormField} placeholder="Please enter minimum blade length"/>
        </div>
    </React.Fragment>
    )
}