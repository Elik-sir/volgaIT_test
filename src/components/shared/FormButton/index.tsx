import "./styles.css";
const FormButton = ({ children, onClick, width, height }: any) => {
  return (
    <div
      className="form-button flex flex-column justify-center"
      onClick={onClick}
      style={{ width, height }}
    >
      {children}
    </div>
  );
};

export default FormButton;
