import { React, useState, useEffect } from "react";

import styles from "../styles/expenses.module.scss";

import InputElement from "../components/MainContent/inputElement";
import SelectElement from "../components/MainContent/selectElement";
import TransactionItem from "../components/TransactionItem";

import { listAllTransactions } from "../services/transactions";

const Expenses = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await listAllTransactions();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <>
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
    </>
  );
};

export default Expenses;
