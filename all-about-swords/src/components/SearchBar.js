import React, { useEffect, useState } from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { base_url } from "../constants";

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
      
          <h6>Filter Options</h6>
        <input
          type="text"
          name="searchName"
          value={props.value.searchName}
          className="form-control mt-3"
          onChange={props.updateFilterOptions}
          placeholder="Search by sword name..."
        />
        
        
          <h6>Search by Blade Length</h6>
      <input
        type="number"
        name="searchMinLength"
        value={props.value.searchMinLength}
        className="form-control mt-2"
        onChange={props.updateFilterOptions}
        placeholder="Please enter minimum blade length"
      />
      
      <input
        type="number"
        name="searchMaxLength"
        value={props.value.searchMaxLength}
        className="form-control mx-3 mt-3"
        onChange={props.updateFilterOptions}
        placeholder="Please enter maximum blade length"
      />
      
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
      
      <input
        type="submit"
        className="btn btn-primary btn-sm mt-3 p-2"
        onClick={props.onClickUpdate}
        value="Submit"
      />
      
    </React.Fragment>
  );
}
