import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={
        props.onlyText
          ? "button-component only-text"
          : "button-component has-icon"
      }
      style={{ width: props.width }}
    >
      {props.icon ? <img src={props.icon} alt="Icon" /> : null}
      {props.text ? <p style={{ color: props.color }}>{props.text}</p> : ""}
    </button>
  );
};

export default Button;