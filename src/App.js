import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Main />
      </div>
      <footer className="footer">
            <ul>
              <li>Designed by Alvin Yo</li>
              <li>
                <a href="https://www.linkedin.com/in/alvinyaw/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/happygoalvin">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </footer>
    </React.Fragment>
  );
}

export default App;
