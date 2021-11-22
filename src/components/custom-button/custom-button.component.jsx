import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  label,
  handleClick,
  customClasses = "",
  ...otherProps
}) => {
  return (
    <button {...otherProps} className={`custom-button ${customClasses}`}>
      {label}
    </button>
  );
};

export default CustomButton;
