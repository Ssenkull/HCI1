import classes from "./ModalBackdrop.module.css";

const ModalBackdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

export default ModalBackdrop;
