import WomenIcon from "assets/icons/Women.svg";
import MenIcon from "assets/icons/Men.svg";
import MenEyeglasses from "assets/icons/MenEyeglasses.svg";
import MenSunglasses from "assets/icons/MenSunglasses.svg";
import WomenEyeglasses from "assets/icons/WomenEyeglasses.svg";
import WomenSunglasses from "assets/icons/WomenSunglasses.svg";
import Step4 from "assets/imgs/Step4.svg";
import DarkShade from "assets/imgs/DarkShade.svg";
import LightShade from "assets/imgs/LightShade.svg";
import TransitioningShade from "assets/imgs/TransitioningShade.svg";
import RoundWomanFace from "assets/imgs/RoundWomanFace.svg";
import LongWomanFace from "assets/imgs/LongWomanFace.svg";
import BetweenWomanFace from "assets/imgs/BetweenWomanFace.svg";
import RoundManFace from "assets/imgs/RoundManFace.svg";
import LongManFace from "assets/imgs/LongManFace.svg";
import BetweenManFace from "assets/imgs/BetweenManFace.svg";
import Aviator from "assets/imgs/glasses/Aviator.png";
import Browline from "assets/imgs/glasses/Browline.png";
import CatEye from "assets/imgs/glasses/CatEye.png";
import Geometric from "assets/imgs/glasses/Geometric.png";
import Oval from "assets/imgs/glasses/Oval.png";
import Oversized from "assets/imgs/glasses/Oversized.png";
import Rectangle from "assets/imgs/glasses/Rectangle.png";
import Rimless from "assets/imgs/glasses/Rimless.png";
import Round from "assets/imgs/glasses/Round.png";
import Square from "assets/imgs/glasses/Square.png";
import Wayframe from "assets/imgs/glasses/Wayframe.png";
import Wrap from "assets/imgs/glasses/Wrap.png";

import Armani from "assets/imgs/brands/Armani.svg";
import Bakley from "assets/imgs/brands/Bakley.svg";
import Burberry from "assets/imgs/brands/Burberry.svg";
import Coach from "assets/imgs/brands/Coach.svg";
import Gucci from "assets/imgs/brands/Gucci.svg";
import HilaryDuff from "assets/imgs/brands/HilaryDuff.svg";
import MichaelKors from "assets/imgs/brands/MichaelKors.svg";
import Prada from "assets/imgs/brands/Prada.svg";
import RayBan from "assets/imgs/brands/RayBan.svg";
import ToryBurch from "assets/imgs/brands/ToryBurch.svg";
import Versace from "assets/imgs/brands/Versace.svg";
import Vogue from "assets/imgs/brands/Vogue.svg";

const FrameSize = ({ sizeName, sizeValue }: any) => {
  return (
    <div
      className="flex justify-between width-full"
      style={{ padding: "0 20px" }}
    >
      <div>{sizeName}</div>
      <div style={{ fontWeight: "bold" }}>{sizeValue}</div>
    </div>
  );
};

function Shade({ icon, text, iconWidth }: any) {
  return (
    <div
      className="flex align-center"
      style={{ marginRight: "auto", marginLeft: "28px" }}
    >
      <div style={{ width: iconWidth }}>{icon}</div>
      <div className="shade-text">{text}</div>
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
      { icon: <img src={WomenIcon} />, text: "Women's Styles", value: 5 },
      { icon: <img src={MenIcon} />, text: "Men's Styles", value: 4 },
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
            {
              icon: <img src={MenEyeglasses} />,
              text: "Eyeglasses",
              value: 210,
            },
            {
              icon: <img src={MenSunglasses} />,
              text: "Sunglasses",
              value: 211,
            },
          ]
        : [
            {
              icon: <img src={WomenEyeglasses} />,
              text: "Eyeglasses",
              value: 210,
            },
            {
              icon: <img src={WomenSunglasses} />,
              text: "Sunglasses",
              value: 211,
            },
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
        <div style={{marginBottom:"38px"}}>What’s your current<br/> frame size?</div>
        <img style={{marginLeft:"-19px"}} src={Step4} />
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
      data.get("eyewear_type") == 211
        ? "When you’re out and about, which shade of lenses do you prefer?"
        : "Would you like to protect your eyes from light emanating from screens?",
    paramName: (data: any) =>
      data.get("eyewear_type") == 211 ? "shade" : "blue_light",
    getQuestions: (data: any) =>
      data.get("eyewear_type") == 211
        ? [
            {
              icon: null,
              text: (
                <Shade
                  text="Dark Shade"
                  icon={<img src={DarkShade} />}
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
                  icon={<img src={LightShade} />}
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
                  icon={<img src={TransitioningShade} />}
                  iconWidth="44px"
                />
              ),
              value: "transition",
            },
          ]
        : [
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
        <img src={RoundWomanFace} />,
        <img src={LongWomanFace} />,
        <img src={BetweenWomanFace} />,
        <img src={RoundManFace} />,
        <img src={LongManFace} />,
        <img src={BetweenManFace} />,
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
                  <TwoFaces
                    man={<img src={LongManFace} />}
                    woman={<img src={LongWomanFace} />}
                  />
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
                  <TwoFaces
                    man={<img src={LongManFace} />}
                    woman={<img src={LongWomanFace} />}
                  />
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
                  <TwoFaces
                    man={<img src={LongManFace} />}
                    woman={<img src={LongWomanFace} />}
                  />
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
  {
    question: () => "Which frame style are you looking for?",
    isSelect: true,
    paramName: () => "facial_features",
    data: [
      { name: "Aviator", value: "aviator", img: Aviator },
      { name: "Browline", value: "browline", img: Browline },
      { name: "Cat Eye", value: "cat_eye", img: CatEye },
      { name: "Geometric", value: "geometric", img: Geometric },
      { name: "Oval", value: "oval", img: Oval },
      { name: "Oversized", value: "oversized", img: Oversized },
      { name: "Rectangle", value: "rectangle", img: Rectangle },
      { name: "Rimless", value: "rimless", img: Rimless },
      { name: "Round", value: "round", img: Round },
      { name: "Square", value: "square", img: Square },
      { name: "Wayframe", value: "wayframe", img: Wayframe },
      { name: "Wrap", value: "wrap", img: Wrap },
    ],
    actionText: "I don’t know",
    action: (setStep: any) => {
      setStep((prev: any) => ++prev);
    },
  },
  {
    question: () => "Are you looking for any particular eyewear brands?",
    paramName: () => "9_window",
    getQuestions: () => {
      return [
        {
          icon: null,
          text: "Yes, I have some in mind",
          value: "10",
        },
        {
          icon: null,
          text: "No, brand isn't important",
          value: "11",
        },
      ];
    },
    width: () => "314px",
    height: () => "97px",
  },
  {
    question: () => "Choose your favorite brands",
    isSelect: true,
    paramName: () => "facial_features",
    data: [
      { name: "Armani", value: "aviator", img: Armani },
      { name: "Bakley", value: "bakley", img: Bakley },
      { name: "Burberry", value: "burberry", img: Burberry },
      { name: "Coach", value: "Coach", img: Coach },
      { name: "Gucci", value: "gucci", img: Gucci },
      { name: "HilaryDuff", value: "hilary_duff", img: HilaryDuff },
      { name: "MichaelKors", value: "michael_kors", img: MichaelKors },
      { name: "Prada", value: "prada", img: Prada },
      { name: "RayBan", value: "ray_ban", img: RayBan },
      { name: "ToryBurch", value: "tory_burch", img: ToryBurch },
      { name: "Versace", value: "versace", img: Versace },
      { name: "Vogue", value: "vogue", img: Vogue },
    ],
    actionText: "I don’t know",
    action: (setStep: any) => {
      setStep((prev: any) => ++prev);
    },
  },
];
