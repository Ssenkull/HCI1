import { useState } from "react";
import Button2 from "../UI/Buttons/Button2";

import classes from "./ShowMessageButtonsSection.module.css";

const ShowMessageButtonsSection = (props) => {
  const alternatives = [
    "This is my default message",
    "This is another default message",
  ];

  const onDefaultValueSet = (event, value) => {
    event.preventDefault();
    props.onDefaultSet(value);
  };
  return (
    <section className={classes.section}>
      <Button2
        alternative={alternatives[0]}
        onClick={(event) =>
          onDefaultValueSet.call(this, event, alternatives[0])
        }
        disabledProperty={props.isButtonDisabled}
      >
        Default message 1
      </Button2>
      <div></div>
      <Button2
        alternative={alternatives[1]}
        onClick={(event) =>
          onDefaultValueSet.call(this, event, alternatives[1])
        }
        disabledProperty={props.isButtonDisabled}
      >
        Default message 2
      </Button2>
    </section>
  );
};

export default ShowMessageButtonsSection;
