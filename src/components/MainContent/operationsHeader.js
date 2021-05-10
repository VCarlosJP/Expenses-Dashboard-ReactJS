import { React, useState } from "react";
import styles from "../../styles/operationsHeader.scss";

import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

function OperationsHeader({ operationLinks }) {
  const location = useLocation();
  const { pathname } = location;

  const operationName = operationLinks[0];
  const operationOptions = operationLinks[1];

  return (
    <div className="operations-container">
      <div className="operations">
        <h1>{operationName}</h1>
        <div className="sub-operations">
          <ul>
            {operationOptions.map((operation, index) => {
              return (
                <li
                  key={index}
                  className={
                    pathname === operation.url ? "active-sub-operation" : ""
                  }
                >
                  <Link to={operation.url}>{operation.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="balance">
        <h1>€</h1>
        <h2>Current Balance</h2>
      </div>
    </div>
  );
}

export default OperationsHeader;
