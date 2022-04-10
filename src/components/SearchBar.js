import React, { useEffect, useState } from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { base_url } from "../constants";
import "../App.css";

export default function SearchBar(props) {
  const [selectValue, setSelectValue] = useState([]);

  const [swordTag, setSwordTag] = useState([]);

  useEffect(async () => {
    let isCancelled = false;
    let response = await axios.get(base_url + "tags");
    let tagData = response.data.tags;
    let clone = [];

    if (!isCancelled) {
      for (let i of tagData) {
        clone.push(i.label);
      }
      setSwordTag(clone);
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    props.updateTagsFilter(selectValue);
  }, [selectValue]);

  return (
    <React.Fragment>
      <div className="my-3">
        <div className="d-flex justify-content-between">
        <h3>Filter</h3>
        <button className="btn s-btn" onClick={props.refreshSearch}>
          <i className="fa-solid fa-arrow-rotate-left"></i>
        </button>
        </div>
        <h6>By Name</h6>
        <input
          type="text"
          name="searchName"
          value={props.value.searchName}
          className="form-control mt-3"
          onChange={props.updateFilterOptions}
          placeholder="Search by sword name..."
        />
      </div>
      <div>
        <h6>By Blade Length</h6>
        <input
          type="number"
          name="searchMinLength"
          value={props.value.searchMinLength}
          className="form-control mt-2"
          onChange={props.updateFilterOptions}
          placeholder="Min. Length"
        />

        <input
          type="number"
          name="searchMaxLength"
          value={props.value.searchMaxLength}
          className="form-control mt-2"
          onChange={props.updateFilterOptions}
          placeholder="Max. Length"
        />
      </div>
      <div className="mt-2">
        <h6>By Tags</h6>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={swordTag}
          value={selectValue}
          onChange={(e, newValue) => setSelectValue(newValue)}
          defaultValue={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Filter By Tag"
              placeholder="Select a tag"
            />
          )}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn s-btn mt-3" onClick={props.onClickUpdate}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </React.Fragment>
  );
}
