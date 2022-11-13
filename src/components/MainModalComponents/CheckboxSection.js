import { useRef } from "react";
import Checkbox from "../UI/Checkbox";
import classes from "./CheckboxSection.module.css";

const CheckboxSection = (props) => {
  const checkbox1 = useRef();
  const checkbox2 = useRef();
  const checkbox3 = useRef();
  const checkbox4 = useRef();

  const onCheckboxChange = () => {
    const checkboxesObject = {
      showMessageActions: checkbox1.current.checked,
      showProgramActions: checkbox2.current.checked,
      enableMessageActions: checkbox3.current.checked,
      enableProgramActions: checkbox4.current.checked,
    };
    props.onSending({ type: "CONTROLS", value: checkboxesObject });
  };

  const checkBoxStatusChecker = (numButton) => {
    console.log(numButton);
    if (
      numButton === "1" &&
      checkbox1.current.checked &&
      checkbox2.current.checked
    ) {
      props.onCheckBoxCheck("All action buttons are disabled!");
    } else if (
      numButton === "2" &&
      checkbox3.current.checked &&
      checkbox4.current.checked
    ) {
      props.onCheckBoxCheck("All inputs aren't enable!");
    } else if (
      numButton === "1" &&
      (!checkbox1.current.checked || !checkbox2.current.checked)
    ) {
      props.onCheckBoxCheck("All action buttons arent't disabled!");
    } else if (
      numButton === "2" &&
      (checkbox3.current.checked || checkbox4.current.checked)
    ) {
      props.onCheckBoxCheck("All inputs are enable!");
    } else {
      props.onCheckBoxCheck("No checkbox in choosen section is checked!");
    }
  };

  return (
    <>
      <section className={classes.wrapper}>
        <div className={classes.inner}>
          <Checkbox
            id="checkbox-1"
            description="Show message actions"
            ref={checkbox1}
            onChange={onCheckboxChange}
          />
          <Checkbox
            id="checkbox-2"
            description="Show program actions"
            ref={checkbox2}
            onChange={onCheckboxChange}
          />
        </div>
        <div className={classes.line}></div>
        <div className={classes.inner}>
          <Checkbox
            id="checkbox-3"
            description="Enable message actions"
            ref={checkbox3}
            onChange={onCheckboxChange}
          />
          <Checkbox
            id="checkbox-4"
            description="Enable program actions"
            ref={checkbox4}
            onChange={onCheckboxChange}
          />
        </div>
        <div className={classes.line}></div>
        <div className={classes.inner}>
          <button
            onClick={(e) => {
              e.preventDefault();
              checkBoxStatusChecker.call(null, "1");
            }}
          >
            Visible?
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              checkBoxStatusChecker.call(null, "2");
            }}
          >
            Enable?
          </button>
        </div>
      </section>
    </>
  );
};

export default CheckboxSection;
