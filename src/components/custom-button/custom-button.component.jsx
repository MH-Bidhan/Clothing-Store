import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ label, handleClick, ...otherProps }) => {
  return (
    <button {...otherProps} className="custom-button">
      {label}
    </button>
  );
};

export default CustomButton;
