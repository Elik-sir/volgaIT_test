import "./styles.css";
const Button = ({ children, onClick, classNames, styles }: any) => {
  return (
    <button className={"btn " + classNames} onClick={onClick} style={styles}>
      {children}
    </button>
  );
};

export default Button;
