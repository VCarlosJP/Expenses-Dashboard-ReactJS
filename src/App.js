import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import OperationsHeader from "./components/MainContent/operationsHeader";
import styles from "./styles/app.scss";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="navbar">
          <MainNav />
        </div>
        <div className="operations">
          <OperationsHeader />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
