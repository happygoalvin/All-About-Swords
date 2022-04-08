import React from "react";
import SwordList from "./SwordList";
import AddNewSword from "./AddNewSword";
import EditSelectedSword from "./EditSelectedSword";
import ConfirmDelete from "./ConfirmDelete";
import axios from "axios";
import { base_url } from "../constants";

export default class swordInfo extends React.Component {
  state = {
    active: "main",
    data: [],
    tagData: [],
    filterOptions: {
      searchName: "",
      searchMinLength: "",
      searchMaxLength: "",
      tags: [],
    },
    newTitle: "",
    newOrigin: "",
    newDescription: "",
    newBlade: {
      metal: "",
      length: "",
      uom: "cm",
    },
    newImageUrl: "",
    newTimePeriodCreated: "",
    newTags: [],
    newFightingStyle: [],
    selectedSword: {},
    deleteSwordData: {},
  };

  // @dev updateTags is passed as props to SearchBar component. Use this to update ...this.state['filterOptions']['tags']
  updateTagsFilter = async (x) => {
    this.setState({
      ...this.state,
      filterOptions: { ...this.state.filterOptions, tags: x },
    });
  };

  fetchSwordData = async () => {
    let response = await axios.get(base_url + "swords");
    this.setState({
      data: response.data.sword_info,
    });
  };

  fetchTagData = async () => {
    let response = await axios.get(base_url + "tags");
    this.setState({
      tagData: response.data.tags,
    });
  };

  componentDidMount() {
    this.fetchSwordData();
    this.fetchTagData();
  }

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateTags = (e) => {
    if (this.state.newTags.includes(e.target.value)) {
      let indexToRemove = this.state.newTags.findIndex((t) => {
        return t === e.target.value;
      });

      let clone = [
        ...this.state.newTags.slice(0, indexToRemove),
        ...this.state.newTags.slice(indexToRemove + 1),
      ];

      this.setState({
        newTags: clone,
      });
    } else {
      let clone = [...this.state.newTags, e.target.value];
      this.setState({
        newTags: clone,
      });
    }
  };

  updateBladeField = (e) => {
    let newBladeValues = { ...this.state.newBlade };
    newBladeValues[e.target.name] = e.target.value;
    this.setState({
      newBlade: newBladeValues,
    });
  };

  updateFilterOptions = (e) => {
    let newOptions = { ...this.state.filterOptions };
    newOptions[e.target.name] = e.target.value;
    this.setState({
      filterOptions: newOptions,
    });
  };

  addNewSword = async () => {
    await axios.post(base_url + "swords", {
      name: this.state.newTitle,
      origin: this.state.newOrigin,
      time_period_created: this.state.newTimePeriodCreated,
      image_url: this.state.newImageUrl,
      description: this.state.newDescription,
      blade: this.state.newBlade,
      fighting_style: this.state.newFightingStyle.split(","),
      tags: this.state.newTags,
    });
    let swordRequest = await axios.get(base_url + "swords");

    this.setState({
      data: swordRequest.data.sword_info,
      active: "main",
    });
  };

  cancelAddNew = () => {
    this.setState({
      newTags: [],
      active: "main",
    });
  };

  editSword = async () => {
    let fighting_style = [];
    if (Array.isArray(this.state.selectedSword.fighting_style)) {
      fighting_style = this.state.selectedSword.fighting_style;
    } else {
      fighting_style = this.state.selectedSword.fighting_style.split(",");
    }

    await axios.put(base_url + `swords/${this.state.selectedSword._id}`, {
      name: this.state.selectedSword.name,
      origin: this.state.selectedSword.origin,
      time_period_created: this.state.selectedSword.time_period_created,
      image_url: this.state.selectedSword.image_url,
      description: this.state.selectedSword.description,
      blade: this.state.selectedSword.blade,
      fighting_style: fighting_style,
      tags: this.state.newTags,
    });
    let swordRequest = await axios.get(base_url + "swords");
    this.setState({
      data: swordRequest.data.sword_info,
      newTags: [],
      active: "main",
    });
  };

  cancelEdit = () => {
    this.setState({
      active: "main",
      newTags: [],
    });
  };

  onClickUpdate = async () => {
    let filterData = "";

    if (this.state.filterOptions.searchName) {
      let nameResponse = await axios.get(
        base_url + "swords?name=" + this.state.filterOptions.searchName
      );
      filterData = nameResponse.data.sword_info;
    }

    if (
      this.state.filterOptions.searchMinLength &&
      this.state.filterOptions.searchMaxLength
    ) {
      let lengthResponse = await axios.get(
        base_url +
          "swords?lengthGreaterThan=" +
          this.state.filterOptions.searchMinLength +
          "&lengthLesserThan=" +
          this.state.filterOptions.searchMaxLength
      );
      filterData = lengthResponse.data.sword_info;
    }

    let tagsSelected = false;

    if (this.state.filterOptions.tags.length === 0) {
      tagsSelected = false;
    } else if (this.state.filterOptions.tags) {
      tagsSelected = true;
    }

    if (tagsSelected === true) {
      let tagResponse = await axios.get(
        base_url + "swords?tags=" + this.state.filterOptions.tags
      );
      filterData = tagResponse.data.sword_info;
    }

    if (
      this.state.filterOptions.searchName ||
      (this.state.filterOptions.searchMinLength &&
        this.state.filterOptions.searchMaxLength) ||
      tagsSelected
    ) {
      this.setState({
        data: filterData,
      });
    }
  };

  updateSelectedSword = (chosenSword) => {
    this.setState({
      active: "editSword",
      selectedSword: chosenSword,
    });
  };

  confirmDelete = (chosenSword) => {
    this.setState({
      active: "deleteSword",
      deleteSwordData: chosenSword,
    });
  };

  cancelDelete = () => {
    this.setState({
      active: "main",
      deleteSwordData: [],
    });
  };

  deleteSword = async () => {
    await axios.delete(base_url + `swords/${this.state.deleteSwordData._id}`, {
      _id: this.state.deleteSwordData._id,
    });
    let swordRequest = await axios.get(base_url + `swords`);
    this.setState({
      data: swordRequest.data.sword_info,
      active: "main",
    });
  };

  editFormField = (e) => {
    let selectedSwordInfo = { ...this.state.selectedSword };
    selectedSwordInfo[e.target.name] = e.target.value;
    this.setState({
      selectedSword: selectedSwordInfo,
    });
  };

  editBladeField = (e) => {
    let selectedBladeInfo = { ...this.state.selectedSword };
    selectedBladeInfo.blade[e.target.name] = e.target.value;
    this.setState({
      selectedSword: selectedBladeInfo,
    });
  };

  renderContent() {
    if (this.state.active === "main") {
      return (
        <React.Fragment>
          <SwordList
            data={this.state.data}
            tagsData={this.state.tagData}
            value={this.state.filterOptions}
            updateFilterOptions={this.updateFilterOptions}
            onClickUpdate={this.onClickUpdate}
            updateTagsFilter={this.updateTagsFilter}
            selectedSword={this.state.selectedSword}
            updateSelectedSword={this.updateSelectedSword}
            confirmDelete={this.confirmDelete}
          />
        </React.Fragment>
      );
    } else if (this.state.active === "addSword") {
      return (
        <React.Fragment>
          <AddNewSword
            newTitle={this.state.newTitle}
            newOrigin={this.state.newOrigin}
            newTimePeriodCreated={this.state.newTimePeriodCreated}
            newImageUrl={this.state.newImageUrl}
            newBladeMetal={this.state.newBlade.metal}
            newBladeLength={this.state.newBlade.length}
            newBladeUom={this.state.newBlade.uom}
            newDescription={this.state.newDescription}
            newTags={this.state.newTags}
            updateTags={this.updateTags}
            newFightingStyle={this.state.newFightingStyle}
            tagData={this.state.tagData}
            updateFormField={this.updateFormField}
            updateBladeField={this.updateBladeField}
            addNewSword={this.addNewSword}
            cancelAddNew={this.cancelAddNew}
          />
        </React.Fragment>
      );
    } else if (this.state.active === "editSword") {
      return (
        <React.Fragment>
          <EditSelectedSword
            tagData={this.state.tagData}
            newTags={this.state.newTags}
            editBladeField={this.editBladeField}
            selectedSword={this.state.selectedSword}
            updateFormField={this.updateFormField}
            editFormField={this.editFormField}
            updateTags={this.updateTags}
            editSword={this.editSword}
            cancelEdit={this.cancelEdit}
          />
        </React.Fragment>
      );
    } else if (this.state.active === "deleteSword") {
      return (
        <React.Fragment>
          <ConfirmDelete
            deleteSwordData={this.state.deleteSwordData}
            cancelDelete={this.cancelDelete}
            deleteSword={this.deleteSword}
          />
        </React.Fragment>
      );
    }
  }

  setActive = (page) => {
    this.setState({ active: page });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => {this.setState({active:"main"})}}>
              <img
                src="/images/sword-logo.svg"
                alt=""
                width="30"
                height="30"
                className="d-inline-block align-text-center mx-3"
              />
              All About Swords
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    onClick={() => {
                      this.setActive("main");
                    }}
                    aria-current="page"
                  >
                    Sword Listing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      this.setActive("addSword");
                    }}
                  >
                    Add New Sword
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">{this.renderContent()}</div>
      </React.Fragment>
    );
  }
}
