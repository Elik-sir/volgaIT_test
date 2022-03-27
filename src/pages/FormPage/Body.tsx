import { useEffect, useState } from "react";
import FormButton from "components/shared/FormButton";
import { ReactComponent as WomenIcon } from "assets/icons/Women.svg";
import { ReactComponent as MenIcon } from "assets/icons/Men.svg";
import { ReactComponent as MenEyeglasses } from "assets/icons/MenEyeglasses.svg";
import { ReactComponent as MenSunglasses } from "assets/icons/MenSunglasses.svg";
import { ReactComponent as WomenEyeglasses } from "assets/icons/WomenEyeglasses.svg";
import { ReactComponent as WomenSunglasses } from "assets/icons/WomenSunglasses.svg";
import LikeStep from "components/shared/LikeStep";
import { useSearchParams } from "react-router-dom";
import "./styles.css";
const data = [
  {
    question: "You are looking for",
    paramName: "gender",
    getQuestions: () => [
      { icon: <WomenIcon />, text: "Women's Styles", value: 5 },
      { icon: <MenIcon />, text: "Men's Styles", value: 4 },
    ],
    actionText: "I'd like to see both",
    action: () => {
      console.log("qweqwe");
    },
    onNext: (data: any) => {
      console.log(data);
    },
  },
  {
    question: "What type of glasses are you looking for?",
    paramName: "eyewear_type",
    getQuestions: (data: any) =>
      data.get("gender") === 4
        ? [
            { icon: <MenEyeglasses />, text: "Eyeglasses", value: 210 },
            { icon: <MenSunglasses />, text: "Sunglasses", value: 211 },
          ]
        : [
            { icon: <WomenEyeglasses />, text: "Eyeglasses", value: 210 },
            { icon: <WomenSunglasses />, text: "Sunglasses", value: 211 },
          ],
    actionText: "I want to see both",
    action: () => {
      console.log("qweqwe");
    },
  },
  {
    liketext: "Let's get to know you!",
    question: "Do you need vision correction?",
    getQuestions: () => [
      { icon: null, text: "Yes", value: null },
      { icon: null, text: "No", value: null },
    ],
    getSubQuestions: (data: any) => [
      [
        { icon: null, text: "Near Vision" },
        { icon: null, text: "Distance Vision" },
        { icon: null, text: "Multifocal / Progressive" },
      ],
    ],
    actionText: "Skip",
    action: () => {
      console.log("qweqwe");
    },
  },
];
const Body = ({ step, setStep }: any) => {
  const { liketext, question, getQuestions, action, actionText, paramName } =
    data[step - 1];
  const [isLike, setIsLike] = useState(false);
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    if (liketext) {
      setIsLike(true);
      setTimeout(() => {
        setIsLike(false);
      }, 2000);
    }
  }, [step]);

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
              key={text}
              onClick={() => {
                if (paramName && value) {
                  params.append(paramName, value);
                  setParams(params);
                }
                setStep((prev: number) => ++prev);
              }}
            >
              <div className="flex flex-column align-center">
                {icon}
                {text}
              </div>
            </FormButton>
          ))}
          <p className="form__action" onClick={action}>
            {actionText}
          </p>
        </>
      )}
    </div>
  );
};

export default Body;
