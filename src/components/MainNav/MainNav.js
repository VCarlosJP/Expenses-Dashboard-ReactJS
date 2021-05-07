import React from "react";
import styles from "../../styles/MainNav.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

function MainNav() {
  return (
    <div className="main-nav-container">
      <FontAwesomeIcon className="icon" icon={faFileInvoiceDollar} size="1x" />
      <FontAwesomeIcon className="icon" icon={faFileInvoiceDollar} size="1x" />
    </div>
  );
}

export default MainNav;
