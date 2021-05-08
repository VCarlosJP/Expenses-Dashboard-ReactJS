import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainNav from "./components/MainNav/MainNav";
import OperationsHeader from "./components/MainContent/operationsHeader";
import InputElement from "./components/MainContent/inputElement";
import SelectElement from "./components/MainContent/selectElement";

import TransactionItem from "./components/transactionItem";

import styles from "./styles/app.scss";

const transactions = [
  {
    description: "Pago alquiler de piso",
    amount: 230.0,
    date: "05/07/2020",
    category: "BILLS",
  },
];

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
          <div className="transactions_container">
            {transactions.map((transaction, index) => {
              return <TransactionItem key={index} transaction={transaction} />;
            })}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
