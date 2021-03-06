import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Progress from "components/shared/Progress";
import FinalHeader from "pages/HomePage/Header";
import Header from "./Header";
import Body from "./Body";
import "./styles.css";
import FinalPage from "pages/FinalPage";
const FormPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
    setStep((prev) => prev - 1);
  };
  return (
    <div className="form">
      {step === 11 ? (
        <>
          <FinalHeader isFinal />
          <Progress step={11} />
          <FinalPage />
        </>
      ) : (
        <>
          <Header step={step} handleBack={handleBack} />
          <Progress step={step} />
          <Body step={step} setStep={setStep} />
        </>
      )}
    </div>
  );
};

export default FormPage;
