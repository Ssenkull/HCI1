import React, { useState } from "react";
import Button2 from "../UI/Buttons/Button2";
import classes from "./InputSection.module.css";

const InputSection = (props) => {
  const onInputValueChange = (event) => {
    props.onValueChange(event.target.value);
  };

  const onShowMessage = (event) => {
    event.preventDefault();
    props.onValueShow();
  };

  return (
    <section className={classes.section}>
      <div>
        <label htmlFor="input-text"> Enter your message </label>
        <input
          disabled={props.isInputDisabled}
          placeholder={
            props.isButtonDisabled ? "Disabled" : "Enter your message"
          }
          id="input-text"
          type="text"
          value={props.value}
          onChange={onInputValueChange}
        ></input>
      </div>

      <Button2
        disabledProperty={props.isButtonDisabled}
        alternative="Do it :)"
        onClick={onShowMessage}
      >
        Show message
      </Button2>
    </section>
  );
};

export default InputSection;
