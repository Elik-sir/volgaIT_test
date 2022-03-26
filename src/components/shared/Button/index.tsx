import "./styles.css";
const Button = ({ children, onClick }: any) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
