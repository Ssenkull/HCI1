import CheckboxSection from "./CheckboxSection";
import ReactDOM from "react-dom";
import ModalBackdrop from "../UI/ModalBackdrop";
import Card from "../UI/Card";
import classes from "./Modal.module.css";
import Button2 from "../UI/Buttons/Button2";
import icon from "../../asserts/home-icon.png";
import InputSection from "./InputSection";
import { useEffect, useReducer, useRef, useState } from "react";
import ShowMessageButtonsSection from "./ShowMessageButtonsSection";
import ActionSection from "./ActionSection";
import HelpingModal from "../Modal/HelpingModal";

import { ReactNotifications, Store } from "react-notifications-component";

const ModalContent = (props) => {
  const [messageValue, setMessageValue] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const onMessageValueChange = (value) => {
    setMessageValue(value);
  };

  const messageValueCleaner = () => {
    setMessageValue("");
  };

  const manageMessageShow = () => {
    if (messageValue === "") {
      organizePopupMessage({
        messageType: "Show message",
        messageText: "Incorrect input! No text!",
      });
    }
    organizePopupMessage({
      messageType: "Show message",
      messageText: messageValue,
    });
  };

  const organizePopupMessage = ({ messageType, messageText }) => {
    let capitalizedValue = messageText[0].toUpperCase() + messageText.slice(1);

    let title = "First lab";
    document.title = `(!) ${capitalizedValue}`;
    setTimeout(() => (document.title = title), 3000);
    setPopupMessage(capitalizedValue);

    Store.addNotification({
      title: messageType,
      message: capitalizedValue,
      type: "success",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 3000,
      },
      width: 250,
    });
  };

  const onDefaultValueCall = (value) => {
    setMessageValue(value);
    organizePopupMessage({
      messageType: "Default value was set!",
      messageText: value,
    });
  };

  const defaultValue = {
    action: "clear",
    showMessageActions: false,
    showProgramActions: false,
    enableMessageActions: false,
    enableProgramActions: false,
  };

  const reducerFunction = (state, action) => {
    if (action.type === "ACTIONS") {
      return { ...state, action: action.value };
    }
    if (action.type === "CONTROLS") {
      return { ...state, ...action.value };
    }
    return state;
  };

  const [settings, dispatchSettings] = useReducer(
    reducerFunction,
    defaultValue
  );

  const onExecuteHandler = () => {
    const { action } = settings;
    if (action === "clear") {
      messageValueCleaner();
      organizePopupMessage({
        messageType: "Input field was cleared!",
        messageText: "Succesful!",
      });
    } else if (action === "copy") {
      navigator.clipboard.writeText(messageValue);
      organizePopupMessage({
        messageType: "Input field copied!",
        messageText: "Succesful!",
      });
    } else {
      organizePopupMessage({
        messageType: "Error!",
        messageText:
          "Browsers' policy doesn't allow to paste text from clipboard by interacting with DOM elements",
      });
    }
  };

  const reducerControl = (value) => {
    dispatchSettings(value);
  };

  const onModalClose = (event) => {
    event.preventDefault();
    props.onModalClose();
  };

  const onCheckboxesStatusHandler = (messageText) => {
    organizePopupMessage({ messageType: "Checkbox status", messageText });
  };

  return (
    <article className={classes.article}>
      <Card>
        <h2 className={classes.title}>
          <img src={icon} alt="home"></img>
          <span>My first lab on GUI</span>
        </h2>
        <form>
          <InputSection
            value={messageValue}
            onValueChange={onMessageValueChange}
            onValueShow={manageMessageShow}
            isButtonDisabled={settings.showMessageActions}
            isInputDisabled={settings.enableMessageActions}
          />
          <ShowMessageButtonsSection
            onDefaultSet={onDefaultValueCall}
            isButtonDisabled={settings.showMessageActions}
          />
          <ActionSection
            onSending={reducerControl}
            onExecute={onExecuteHandler}
            isButtonDisabled={settings.showProgramActions}
            isDropMenuDisabled={settings.enableProgramActions}
          />
          <CheckboxSection
            onSending={reducerControl}
            onCheckBoxCheck={onCheckboxesStatusHandler}
          />
          <Button2
            alternative="Don't leave us, pleaasee :)"
            onClick={onModalClose}
          >
            Exit
          </Button2>
        </form>
      </Card>
      <HelpingModal message={popupMessage} />
    </article>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalContent onModalClose={props.onModalClose} />,
        document.getElementById("modal-backdrop1")
      )}
      {ReactDOM.createPortal(
        <ModalBackdrop onClick={props.onModalClose} />,
        document.getElementById("modal-content1")
      )}
    </>
  );
};

export default Modal;
