import React from "react";
import "./button.scss";

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
      style={{ ...defaultStyle, ...props.style, height: "3em" }}
      className={getClassNames()}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
