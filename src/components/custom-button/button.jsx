import React from "react";
import "./button.scss";
// Default button style.
const defaultStyle = {
  display: "flex",
  justifyContent: "center",
  transition: "all 0.1s",
  cursor: "pointer",
  width: "100%",
  padding: "1rem",
  fontWeight: 500,
  fontSize: "1.1rem",
};

/**
 * The componet to render a custom Button.
 * @param {object} props : Properties of a react component.
 * @returns {React.Component} A button Component with custom styling.
 */
const CustomButton = (props) => {
  const getClassNames = () => {
    let classNames = "orangeTheme";
    if (props.solid) {
      classNames += " solid";
    }
    return classNames;
  };
  return (
    <button
      data-testid={props["data-testid"]}
      style={{ ...defaultStyle, ...props.style }}
      className={getClassNames()}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
