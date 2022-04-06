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
    // let response = await axios.get(base_url + "swords");
    let response = await axios.get(base_url + "tags");
    let temp = response.data.tags;
    // let temp = response.data.sword_info.map((i) => i.tags.map((t) => t.label));
    console.log("temp : ", temp);
    let clone = [];

    if (!isCancelled) {
      for (let i of temp) {
        clone.push(i.label);
      }
      setSwordTag(clone);
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    props.updateTags(selectValue);
  }, [selectValue]);

  return (
    <React.Fragment>
      <div className="d-flex p-2 justify-content-around">
        <input
          type="text"
          name="searchName"
          value={props.value.searchName}
          className="form-control mx-3 mt-3"
          onChange={props.updateFilterOptions}
          placeholder="Search by sword name..."
        />
      </div>
      <div className="row">
        <div className="col-3">
          <input
            type="number"
            name="searchMinLength"
            value={props.value.searchMinLength}
            className="form-control mx-3 mt-3"
            onChange={props.updateFilterOptions}
            placeholder="Please enter minimum blade length"
          />
        </div>
        <div className="col-3">
          <input
            type="number"
            name="searchMaxLength"
            value={props.value.searchMaxLength}
            className="form-control mx-3 mt-3"
            onChange={props.updateFilterOptions}
            placeholder="Please enter maximum blade length"
          />
        </div>
        <div className="col-4">
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
        <div className="col-1">
          <input
            type="submit"
            className="btn btn-primary btn-sm mt-3 p-2"
            onClick={props.onClickUpdate}
            value="Submit"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
