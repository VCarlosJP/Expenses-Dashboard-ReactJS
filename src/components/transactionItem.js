import React from "react";

import styles from "../styles/transactionItem.module.scss";

const transactionItem = ({ transaction }) => {
  return (
    <div className={styles.data_container}>
      <div>{transaction.description}</div>
      <div>
        <b>Amount: </b>€ {transaction.amount}
      </div>
      <div>
        <b>Date: </b>
        {transaction.date}
      </div>
      <div>
        <div className={styles.category_tag}>
          <span>
            <b>{transaction.category}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default transactionItem;
