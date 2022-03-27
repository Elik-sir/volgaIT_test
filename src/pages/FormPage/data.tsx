import { ReactComponent as WomenIcon } from "assets/icons/Women.svg";
import { ReactComponent as MenIcon } from "assets/icons/Men.svg";
import { ReactComponent as MenEyeglasses } from "assets/icons/MenEyeglasses.svg";
import { ReactComponent as MenSunglasses } from "assets/icons/MenSunglasses.svg";
import { ReactComponent as WomenEyeglasses } from "assets/icons/WomenEyeglasses.svg";
import { ReactComponent as WomenSunglasses } from "assets/icons/WomenSunglasses.svg";
import { ReactComponent as Step4 } from "assets/imgs/Step4.svg";

const FrameSize = ({ sizeName, sizeValue }: any) => {
  return (
    <div
      className="flex justify-between width-full"
      style={{ padding: "0 20px" }}
    >
      <p>{sizeName}</p>
      <p style={{ fontWeight: "bold" }}>{sizeValue}</p>
    </div>
  );
};

export const data = [
  {
    question: "You are looking for",
    paramName: "gender",
    getQuestions: () => [
      { icon: <WomenIcon />, text: "Women's Styles", value: 5 },
      { icon: <MenIcon />, text: "Men's Styles", value: 4 },
    ],
    actionText: "I'd like to see both",
    action: (setStep: any) => {
      setStep((prev: any) => ++prev);
    },
    onNext: (data: any) => {
      console.log(data);
    },
  },
  {
    question: "What type of glasses are you looking for?",
    paramName: "eyewear_type",
    getQuestions: (data: any) =>
      data.get("gender") == 4
        ? [
            { icon: <MenEyeglasses />, text: "Eyeglasses", value: 210 },
            { icon: <MenSunglasses />, text: "Sunglasses", value: 211 },
          ]
        : [
            { icon: <WomenEyeglasses />, text: "Eyeglasses", value: 210 },
            { icon: <WomenSunglasses />, text: "Sunglasses", value: 211 },
          ],
    actionText: "I want to see both",
    action: (setStep: any) => {
      setStep((prev: any) => ++prev);
    },
  },
  {
    liketext: "Let's get to know you!",
    question: "Do you need vision correction?",
    getQuestions: () => [
      { icon: null, text: "Yes", value: "SUB" },
      { icon: null, text: "No", value: null },
    ],
    getSubQuestions: (data: any) => [
      {
        question: "What do you need your glasses for?",
        paramName: "lenstype",
        getQuestions: () => [
          { icon: null, text: "Near Vision", value: 6 },
          { icon: null, text: "Distance Vision", value: 6 },
          { icon: null, text: "Multifocal / Progressive", value: 7 },
        ],
        actionText: "Skip",
        action: (setStep: any) => {
          setStep((prev: any) => ++prev);
        },
      },
    ],
    actionText: "Skip",
    action: (setStep: any) => {
      setStep((prev: any) => ++prev);
    },
  },
  {
    question: (
      <>
        What’s your current frame size?
        <Step4 />
      </>
    ),
    paramName: "frame_size",
    getQuestions: () => [
      {
        icon: null,
        text: <FrameSize sizeName={"Small"} sizeValue={"42-48 mm"} />,
        value: 68,
      },
      {
        icon: null,
        text: <FrameSize sizeName={"Medium"} sizeValue={"49-53 mm"} />,
        value: 67,
      },
      {
        icon: null,
        text: <FrameSize sizeName={"Large"} sizeValue={"54-58 mm"} />,
        value: 66,
      },
    ],
    getSubQuestions: (data: any) => [
      {
        liketext: "No worries, we’ve got you!",
        question: "How wide would you say your face is?",
        paramName: "frame_size",
        getQuestions: () => [
          { icon: null, text: "Wider Than Average", value: 66 },
          { icon: null, text: "Average", value: 67 },
          { icon: null, text: "Narrower Than Average", value: 68 },
        ],
        actionText: "I’m not sure",
        action: (setStep: any) => {
          setStep((prev: any) => ++prev);
        },
      },
    ],
    actionText: "I don’t know",
    action: (setStep: any) => {},
  },
];
