import React from "react";
import SwordList from "./SwordList";
import SearchBar from "./SearchBar";
import AddNewSword from "./AddNewSword";
import axios from "axios";

export default class swordInfo extends React.Component {
  state = {
    active: "swordInfo",
    data: [],
    tagData: [],
    filterOptions: {
      searchName: "",
      searchMinLength: "",
      searchMaxLength: "",
      tags: [],
    },
  };

  base_url = "https://all-about-swords-express.herokuapp.com/";

  fetchSwordData = async () => {
    let response = await axios.get(this.base_url + "swords");
    this.setState({
      data: response.data.sword_info,
    });
  };

  componentDidMount() {
    this.fetchSwordData();
  }

  updateFormField = (e) => {
    let newOptions = { ...this.state.filterOptions };
    newOptions[e.target.name] = e.target.value;
    this.setState({
      filterOptions: newOptions,
    });
  };

  onClickUpdate = async () => {
    let filterData = "";

    if (this.state.filterOptions.searchName) {
      let nameResponse = await axios.get(
        this.base_url + "swords?name=" + this.state.filterOptions.searchName
      );
      filterData = nameResponse.data.sword_info;
    }

    // http://localhost:3001/swords?lengthGreaterThan=40&lengthLesserThan=100
    if (
      this.state.filterOptions.searchMinLength &&
      this.state.filterOptions.searchMaxLength
    ) {
      let lengthResponse = await axios.get(
        this.base_url +
          "swords?lengthGreaterThan=" +
          this.state.filterOptions.searchMinLength +
          "&lengthLesserThan=" +
          this.state.filterOptions.searchMaxLength
      );
      filterData = lengthResponse.data.sword_info;
    }

    // if (
    //   this.state.filterOptions.searchMinLength &&
    //   this.state.filterOptions.searchMaxLength
    // ) {
    //   filterData = filterData.filter(
    //     (sword) =>
    //       sword.blade.length >=
    //         Number(this.state.filterOptions.searchMinLength) &&
    //       sword.blade.length <= Number(this.state.filterOptions.searchMaxLength)
    //   );
    // }

    this.setState({
      data: filterData,
    });
  };

  onClickValidation = () => {};

  renderContent() {
    if (this.state.active === "swordInfo") {
      return (
        <React.Fragment>
          <SwordList data={this.state.data} />
        </React.Fragment>
      );
    } else if (this.state.active === "addSword") {
      return (
        <React.Fragment>
          <AddNewSword />
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
            <a className="navbar-brand" href="#">
              <img
                src="/images/sword-logo.svg"
                alt=""
                width="30"
                height="30"
                className="d-inline-block align-text-top"
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    onClick={() => {
                      this.setActive("swordInfo");
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
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fighting Styles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Add New Fighting Style
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="d-flex justify-content-center mt-3">
          <img src="/images/swordsman.gif" className="img-fluid" />
        </div>
        <div>
          <SearchBar
            data={this.state.data}
            value={this.state.filterOptions}
            updateFormField={this.updateFormField}
            onClickUpdate={this.onClickUpdate}
          />
        </div>
        <div>{this.renderContent()}</div>
      </React.Fragment>
    );
  }
}
