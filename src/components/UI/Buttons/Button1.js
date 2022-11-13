import "./Button1.css";

const Button1 = (props) => {
  return (
    <button onClick={props.onClick} className="button-82-pushable">
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      <span className="button-82-front text">{props.children}</span>
    </button>
  );
};

export default Button1;
