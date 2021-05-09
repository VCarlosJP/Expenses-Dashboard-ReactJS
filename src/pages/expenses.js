import React from "react";

import InputElement from "../components/MainContent/inputElement";
import SelectElement from "../components/MainContent/selectElement";

import TransactionItem from "../components/transactionItem";

import styles from "../styles/expenses.module.scss";

const transactions = [
  {
    description: "Pago alquiler de piso",
    amount: 230.0,
    date: "05/07/2020",
    category: "BILLS",
  },
];

const expenses = () => {
  return (
    <div className={styles.expenses_container}>
      <div>
        <form className={styles.form_container}>
          <SelectElement selectName="Category"></SelectElement>
          <InputElement placeholder={"Add Description..."} />
          <InputElement placeholder={"Amount"} />
        </form>
        <div className={styles.transactions_container}>
          {transactions.map((transaction, index) => {
            return <TransactionItem key={index} transaction={transaction} />;
          })}
        </div>
      </div>
      <div className={styles.filters_container}>
        <SelectElement selectName="Month"></SelectElement>
        <SelectElement selectName="Year"></SelectElement>
      </div>
    </div>
  );
};

export default expenses;
