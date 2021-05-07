import React from "react";

import styles from "../../styles/inputElement.module.scss";

const inputElement = ({ placeholder = "Add Description..." }) => {
  return (
    <>
      <input className={styles.input_element} placeholder={placeholder}></input>
    </>
  );
};

export default inputElement;
