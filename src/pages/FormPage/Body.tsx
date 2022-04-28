import { useEffect, useState, useCallback } from "react";
import FormButton from "components/shared/FormButton";

import LikeStep from "components/shared/LikeStep";
import { useSearchParams } from "react-router-dom";
import "./styles.css";
import { data } from "./data";
import SelectPicker from "components/SelectPicker";
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
    width,
    height,
    isSelect,
    data: GlassesData,
  } = subquestions ?? data[step - 1] ?? {};

  useEffect(() => {
    if (step === 1) {
      setParams({});
    }
  }, []);
  useEffect(() => {
    if (liketext) {
      setIsLike(true);
      setTimeout(() => {
        setIsLike(false);
      }, 2000);
    }
  }, [liketext]);

  const onClickAnswer = (value: any) => {
    if ((paramName && value) || (paramName && value === false)) {
      if (paramName(params) === "9_window") {
        setStep((prev: number) => (value === "10" ? prev + 1 : prev + 2));
        return;
      }
      params.append(paramName(params), value);
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
    <div
      className={`form__body ${!isSelect && "flex flex-column align-center"}`}
    >
      {isLike ? (
        <LikeStep text={liketext} />
      ) : (
        <>
          <p className="form_question">{question(params)}</p>
          {isSelect ? (
            <SelectPicker data={GlassesData} setStep={setStep} />
          ) : (
            <>
              {getQuestions(params).map(({ icon, text, value }: any) => (
                <FormButton
                  width={width(params) ?? "274px"}
                  height={height(params) ?? "117px"}
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
        </>
      )}
    </div>
  );
};

export default Body;
