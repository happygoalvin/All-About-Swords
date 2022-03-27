import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SwordList from "./components/SwordList";
import SwordListing from "./components/SwordListing";
import AddNewSword from "./components/AddNewSword";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <SwordList />
      </div>
    </React.Fragment>
  );
}

export default App;
