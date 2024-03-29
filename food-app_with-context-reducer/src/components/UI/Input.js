import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.Input}>
      <label htmlFor={props.Input.id}>{props.label}</label>
      <input ref={ref} {...props.Input} />
    </div>
  );
});

export default Input;
