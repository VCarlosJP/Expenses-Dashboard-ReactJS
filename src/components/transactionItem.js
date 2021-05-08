import React from "react";

import styles from "../styles/transactionItem.module.scss";

const getTagStyleColor = (category) => {
  switch (category) {
    case "BILLS":
      return styles.bill_tag;
    case "EXPENSES":
      return styles.expenses_tag;
  }
};

const transactionItem = ({ transaction }) => {
  let tagColor = getTagStyleColor(transaction.category);

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
        <div className={tagColor}>
          <span>
            <b>{transaction.category}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default transactionItem;
