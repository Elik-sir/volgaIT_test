import { useState } from "react";
import Progress from "components/shared/Progress";
import Header from "./Header";
import Body from "./Body";
import "./styles.css";
const FormPage = () => {
  const [step, setStep] = useState(1);
  const handleBack = () => {
    setStep((prev) => --prev);
  };
  return (
    <div className="form">
      <Header step={step} handleBack={handleBack} />
      <Progress step={step} />
      <Body step={step} setStep={setStep} />
    </div>
  );
};

export default FormPage;
