import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import SwordInfo from "./components/SwordInfo";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <SwordInfo />
      </div>
    </React.Fragment>
  );
}

export default App;
