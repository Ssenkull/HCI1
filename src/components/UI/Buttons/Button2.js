import "./Button2.css";

const Button2 = (props) => {
  let alternative = props.alternative || "Oooowww";

  if (props.disabledProperty) {
    alternative = "Disabled";
  }

  return (
    <button
      disabled={props.disabledProperty}
      onClick={props.onClick}
      className="button-57"
    >
      <span className="text">{props.children}</span>
      <span>{alternative}</span>
    </button>
  );
};

export default Button2;
