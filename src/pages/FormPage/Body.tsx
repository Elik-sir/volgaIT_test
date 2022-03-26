import { useState } from "react";
import FormButton from "components/shared/FormButton";
import "./styles.css";
const Body = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="form__body flex flex-column align-center">
      <p className="form_question">Do you need vision correction?</p>
      <FormButton width="274px" height="117px">
        Yes
      </FormButton>
      <FormButton width="274px" height="117px">
        Yes
      </FormButton>
    </div>
  );
};

export default Body;
