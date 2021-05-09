import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainNav from "./components/MainNav/MainNav";
import OperationsHeader from "./components/MainContent/operationsHeader";

import Expenses from "./pages/expenses";

import styles from "./styles/app.scss";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="navbar">
          <MainNav />
        </div>
        <div>
          <OperationsHeader operations balance={240} />
          <Switch>
            <Route exact path="/">
              <Redirect to="/expenses" />
            </Route>
            <Route path="/expenses">
              <Expenses />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
