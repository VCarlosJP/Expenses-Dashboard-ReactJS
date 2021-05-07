import React from "react";
import styles from "../../styles/selectElement.module.scss";

const optionsFake = ["Option1", "Option2", "Option3", "Option4"];

const selectElement = ({ selectName }, { options = optionsFake }) => {
  return (
    <>
      <select className={styles.select_element}>
        <option selected disabled>
          {selectName}
        </option>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
};

export default selectElement;
