import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainNav from "./components/MainNav/MainNav";
import OperationsHeader from "./components/MainContent/operationsHeader";
import InputElement from "./components/MainContent/inputElement";
import SelectElement from "./components/MainContent/selectElement";

import styles from "./styles/app.scss";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="navbar">
          <MainNav />
        </div>
        <div className="operations">
          <OperationsHeader operations balance={240} />
          <div className="expenses_container">
            <form className="form_container">
              <SelectElement selectName="Category"></SelectElement>
              <InputElement placeholder={"Add Description..."} />
              <InputElement placeholder={"Amount"} />
            </form>
            <div className="filters_container">
              <SelectElement selectName="Month"></SelectElement>
              <SelectElement selectName="Year"></SelectElement>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
