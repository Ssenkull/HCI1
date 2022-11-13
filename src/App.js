import { useState } from "react";
import "./App.css";
import Modal from "./components/MainModalComponents/Modal";
import Button1 from "./components/UI/Buttons/Button1";
import { ReactNotifications, Store } from "react-notifications-component";
import "animate.css/animate.css";
import "react-notifications-component/dist/theme.css";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onModalStatusChange = () => {

    setIsModalOpened((curState) => !curState);
  };

  return (
    <div className="wrapper">
      {!isModalOpened && (
        <Button1 onClick={onModalStatusChange}> Open Form </Button1>
      )}
      {isModalOpened && <Modal onModalClose={onModalStatusChange} />}
      <div>
        <ReactNotifications />
      </div>
    </div>
  );
}

export default App;
