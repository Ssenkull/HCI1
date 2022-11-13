import { useEffect, useState } from "react";
import Button2 from "../UI/Buttons/Button2";
import classes from "./ActionSection.module.css";

const ActionSection = (props) => {
  const [selectionValue, setSelectionValue] = useState("clear");

  const onSelectChange = (event) => {
    setSelectionValue(event.target.value);
    props.onSending({ type: "ACTIONS", value: event.target.value });
  };

  const onOperationExecuting = (event) => {
    props.onExecute();
    event.preventDefault();
  };
  //   isButtonDisabled={settings.showProgramActions}
  //   isDropMenuDisabled={settings.enableProgramActions}
  return (
    <section className={classes.section}>
      <label htmlFor="select"> Actions </label>
      <select
        disabled={props.isDropMenuDisabled}
        id="select"
        value={selectionValue}
        onChange={onSelectChange}
      >
        <option value="clear"> Clear field</option>
        <option value="copy"> Copy field</option>
        <option value="paste"> Paste field</option>
      </select>
      <Button2
        disabledProperty={props.isButtonDisabled}
        alternative="Noooo!"
        onClick={onOperationExecuting}
      >
        Execute
      </Button2>
    </section>
  );
};

export default ActionSection;
