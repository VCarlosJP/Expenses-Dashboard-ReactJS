import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainNav from "./components/MainNav/MainNav";
import OperationsHeader from "./components/MainContent/operationsHeader";

import Expenses from "./pages/expenses";
import ExpensesChart from "./pages/expensesChart";
import { ROUTE_EXPENSES_PREFIX, ROUTE_EXPENSES_CHART } from "../src/constants";

import { EXPENSES_OPTIONS } from "../src/constants";

import styles from "./styles/app.scss";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="navbar">
          <MainNav />
        </div>
        <div>
          <OperationsHeader operationLinks={EXPENSES_OPTIONS} />
          <Switch>
            <Route exact path="/">
              <Redirect to={ROUTE_EXPENSES_PREFIX} />
            </Route>
            <Route exact path={ROUTE_EXPENSES_PREFIX} component={Expenses} />
            <Route path={ROUTE_EXPENSES_CHART} component={Expenses} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
