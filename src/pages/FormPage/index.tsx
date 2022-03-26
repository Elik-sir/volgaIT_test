import { useState } from "react";
import Progress from "components/shared/Progress";
import Header from "./Header";
import Body from "./Body";
import "./styles.css";
const FormPage = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="form">
      <Header step={step} />
      <Progress step={step} />
      <Body />
    </div>
  );
};

export default FormPage;
