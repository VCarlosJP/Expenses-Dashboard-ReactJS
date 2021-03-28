import React from "react";
import styles from "../../styles/operationsHeader.scss";

function OperationsHeader(operation, subOperations, balance) {
  return (
    <div className="operations-container">
      <div className="operations">
        <h1>Expenses</h1>
        <div className="sub-operations">
          <ul>
            <li>
              <a className="active-sub-operation">All Expenses</a>
            </li>
            <li>
              <a>Expenses Chart</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="balance">
        <h1>€1,024.00</h1>
        <h2>Current Balance</h2>
      </div>
    </div>
  );
}

export default OperationsHeader;
