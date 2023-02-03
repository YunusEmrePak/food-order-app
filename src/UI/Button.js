import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return <button className={classes[props.className]} type={props.type} onClick={props.onClick}>{props.buttonName}</button>;
};

export default Button;
