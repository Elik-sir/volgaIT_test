import { ReactComponent as WomenIcon } from "assets/icons/Women.svg";
import { ReactComponent as MenIcon } from "assets/icons/Men.svg";
import { ReactComponent as MenEyeglasses } from "assets/icons/MenEyeglasses.svg";
import { ReactComponent as MenSunglasses } from "assets/icons/MenSunglasses.svg";
import { ReactComponent as WomenEyeglasses } from "assets/icons/WomenEyeglasses.svg";
import { ReactComponent as WomenSunglasses } from "assets/icons/WomenSunglasses.svg";
import { ReactComponent as Step4 } from "assets/imgs/Step4.svg";
import { ReactComponent as DarkShade } from "assets/imgs/DarkShade.svg";
import { ReactComponent as LightShade } from "assets/imgs/LightShade.svg";
import { ReactComponent as TransitioningShade } from "assets/imgs/TransitioningShade.svg";
import { ReactComponent as RoundWomanFace } from "assets/imgs/RoundWomanFace.svg";
import { ReactComponent as LongWomanFace } from "assets/imgs/LongWomanFace.svg";
import { ReactComponent as BetweenWomanFace } from "assets/imgs/BetweenWomanFace.svg";
import { ReactComponent as RoundManFace } from "assets/imgs/RoundManFace.svg";
import { ReactComponent as LongManFace } from "assets/imgs/LongManFace.svg";
import { ReactComponent as BetweenManFace } from "assets/imgs/BetweenManFace.svg";

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

function Shade({ icon, text, iconWidth }: any) {
  return (
    <div
      className="flex align-center"
      style={{ marginRight: "auto", marginLeft: "28px" }}
    >
      <p style={{ width: iconWidth }}>{icon}</p>
      <p className="shade-text">{text}</p>
    </div>
  );
}

const TwoFaces = ({ man, woman }: any) => {
  return (
    <div className="flex justify-between" style={{ width: "78px" }}>
      {man}
      {woman}
    </div>
  );
};

export const data = [
  {
    question: () => "You are looking for",
    paramName: () => "gender",
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
    width: () => "274px",
    height: () => "138px",
  },
  {
    question: () => "What type of glasses are you looking for?",
    paramName: () => "eyewear_type",
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
    width: () => "274px",
    height: () => "138px",
  },
  {
    liketext: "Let's get to know you!",
    question: () => "Do you need vision correction?",
    getQuestions: () => [
      { icon: null, text: "Yes", value: "SUB" },
      { icon: null, text: "No", value: null },
    ],
    getSubQuestions: (data: any) => [
      {
        question: () => "What do you need your glasses for?",
        paramName: () => "lenstype",
        getQuestions: () => [
          { icon: null, text: "Near Vision", value: 6 },
          { icon: null, text: "Distance Vision", value: 6 },
          { icon: null, text: "Multifocal / Progressive", value: 7 },
        ],
        actionText: "Skip",
        action: (setStep: any) => {
          setStep((prev: any) => ++prev);
        },
        width: () => "294px",
        height: () => "84px",
      },
    ],
    actionText: "Skip",
    action: (setStep: any) => {
      setStep((prev: any) => ++prev);
    },
    width: () => "274px",
    height: () => "117px",
  },
  {
    question: () => (
      <>
        What’s your current frame size?
        <Step4 />
      </>
    ),
    paramName: () => "frame_size",
    getQuestions: () => [
      {
        icon: null,
        text: <FrameSize sizeName="Small" sizeValue="42-48 mm" />,
        value: 68,
      },
      {
        icon: null,
        text: <FrameSize sizeName="Medium" sizeValue="49-53 mm" />,
        value: 67,
      },
      {
        icon: null,
        text: <FrameSize sizeName="Large" sizeValue="54-58 mm" />,
        value: 66,
      },
    ],
    getSubQuestions: (data: any) => [
      {
        liketext: "No worries, we’ve got you!",
        question: () => "How wide would you say your face is?",
        paramName: () => "frame_size",
        getQuestions: () => [
          { icon: null, text: "Wider Than Average", value: 66 },
          { icon: null, text: "Average", value: 67 },
          { icon: null, text: "Narrower Than Average", value: 68 },
        ],
        actionText: "I’m not sure",
        action: (setStep: any) => {
          setStep((prev: any) => ++prev);
        },
        width: () => "304px",
        height: () => "84px",
      },
    ],
    actionText: "I don’t know",
    action: (setStep: any) => {},
    width: () => "318px",
    height: () => "56px",
  },
  {
    question: (data: any) =>
      data.get("eyewear_type") === 210
        ? "Would you like to protect your eyes from light emanating from screens?"
        : "When you’re out and about, which shade of lenses do you prefer?",
    paramName: (data: any) =>
      data.get("eyewear_type") === 210 ? "blue_light" : "shade",
    getQuestions: (data: any) =>
      data.get("eyewear_type") === 210
        ? [
            {
              icon: null,
              text: "Yes",
              value: true,
            },
            {
              icon: null,
              text: "No",
              value: false,
            },
          ]
        : [
            {
              icon: null,
              text: (
                <Shade
                  text="Dark Shade"
                  icon={<DarkShade />}
                  iconWidth="44px"
                />
              ),
              value: "dark",
            },
            {
              icon: null,
              text: (
                <Shade
                  text="Light Shade"
                  icon={<LightShade />}
                  iconWidth="44px"
                />
              ),
              value: "light",
            },
            {
              icon: null,
              text: (
                <Shade
                  text="Transitioning Shade"
                  icon={<TransitioningShade />}
                  iconWidth="44px"
                />
              ),
              value: "transition",
            },
          ],
    width: (data: any) =>
      data.get("eyewear_type") === 210 ? "273px" : "304px",
    height: (data: any) =>
      data.get("eyewear_type") === 210 ? "138px" : "89px",
  },
  {
    question: () => "Every face shape has a perfect fit. What’s yours?",
    paramName: () => "face_shape",
    getQuestions: (data: any) => {
      const Icons = [
        <RoundWomanFace />,
        <LongWomanFace />,
        <BetweenWomanFace />,
        <RoundManFace />,
        <LongManFace />,
        <BetweenManFace />,
      ];
      const offset = data.get("gender") == 4 ? 3 : 0;
      return [
        {
          icon: null,
          text: (
            <Shade
              text="I have a long face"
              iconWidth="78px"
              icon={
                data.get("gender") === null ? (
                  <TwoFaces man={<LongManFace />} woman={<LongWomanFace />} />
                ) : (
                  Icons[offset]
                )
              }
            />
          ),
          value: "long",
        },
        {
          icon: null,
          text: (
            <Shade
              text="I have a round face"
              iconWidth="78px"
              icon={
                data.get("gender") === null ? (
                  <TwoFaces man={<LongManFace />} woman={<LongWomanFace />} />
                ) : (
                  Icons[offset]
                )
              }
            />
          ),
          value: "round",
        },
        {
          icon: null,
          text: (
            <Shade
              text="In between"
              iconWidth="78px"
              icon={
                data.get("gender") === null ? (
                  <TwoFaces man={<LongManFace />} woman={<LongWomanFace />} />
                ) : (
                  Icons[offset]
                )
              }
            />
          ),
          value: "between",
        },
      ];
    },
    actionText: "I don’t know",
    action: (setStep: any) => {
      setStep((prev: any) => ++prev);
    },
    width: () => "314px",
    height: () => "89px",
  },
  {
    question: () => "How would you define your facial features?",
    paramName: () => "facial_features",
    getQuestions: () => {
      return [
        {
          icon: null,
          text: "Sharp",
          value: "sharp",
        },
        {
          icon: null,
          text: "Rounded",
          value: "rounded",
        },
        {
          icon: null,
          text: "In between",
          value: "between",
        },
      ];
    },
    actionText: "I don’t know",
    action: (setStep: any) => {
      setStep((prev: any) => ++prev);
    },
    width: () => "314px",
    height: () => "97px",
  },
];
