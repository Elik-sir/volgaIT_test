import "./styles.css";
const FormButton = ({ children, onClick, width, height, className }: any) => {
  return (
    <div
      className={"form-button flex flex-column justify-center " + className}
      onClick={onClick}
      style={{ width, height }}
    >
      {children}
    </div>
  );
};

export default FormButton;
