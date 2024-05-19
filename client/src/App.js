import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import PersonList from "./components/PersonList";
import AddPersonList from "./components/AddPersonList";
import EditPersonList from "./components/EditPersonList";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              Person Management
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/add-person">
                    Add Person
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<PersonList />} />
            <Route path="/add-person" element={<AddPersonList />} />
            <Route path="/edit-person/:id" element={<EditPersonList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;


