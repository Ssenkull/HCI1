import React from "react";
import classes from "./Checkbox.module.css";

const Checkbox = React.forwardRef((props, ref) => {
  return (
    <div className={classes.div}>
      <input
        id={props.id}
        type="checkbox"
        ref={ref}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}> {props.description} </label>
    </div>
  );
});

export default Checkbox;
