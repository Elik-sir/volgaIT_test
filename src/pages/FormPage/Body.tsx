import { useEffect, useState } from "react";
import FormButton from "components/shared/FormButton";

import LikeStep from "components/shared/LikeStep";
import { useSearchParams } from "react-router-dom";
import "./styles.css";
import { data } from "./data";
const Body = ({ step, setStep }: any) => {
  const [isLike, setIsLike] = useState(false);
  const [params, setParams] = useSearchParams();
  const [subquestions, setSubquestions] = useState<any>();

  const {
    liketext,
    question,
    getQuestions,
    action,
    actionText,
    paramName,
    getSubQuestions,
  } = subquestions ?? data[step - 1];
  useEffect(() => {
    if (liketext) {
      setIsLike(true);
      setTimeout(() => {
        setIsLike(false);
      }, 2000);
    }
  }, [liketext]);

  const onClickAnswer = (value: any) => {
    if (paramName && value) {
      params.append(paramName, value);
      setParams(params);
    }
    if (getSubQuestions && value === "SUB") {
      setSubquestions(getSubQuestions(value)[0]);
    } else {
      setStep((prev: number) => ++prev);
      if (subquestions) {
        setSubquestions(undefined);
      }
    }
  };
  return (
    <div className="form__body flex flex-column align-center">
      {isLike ? (
        <LikeStep text={liketext} />
      ) : (
        <>
          <p className="form_question">{question}</p>
          {getQuestions(params).map(({ icon, text, value }: any) => (
            <FormButton
              width="274px"
              height="117px"
              key={`${text}_${value}`}
              onClick={() => onClickAnswer(value)}
            >
              <div className="flex flex-column align-center">
                {icon}
                {text}
              </div>
            </FormButton>
          ))}
          <p
            className="form__action"
            onClick={() => {
              if (step === 4) {
                setSubquestions(getSubQuestions()[0]);
              } else {
                action(setStep);
              }
            }}
          >
            {actionText}
          </p>
        </>
      )}
    </div>
  );
};

export default Body;
