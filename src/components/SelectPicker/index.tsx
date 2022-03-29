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
import FormButton from "components/shared/FormButton";
import { useState } from "react";

import "./styles.css";

const data = [
  { name: "Aviator", value: "aviator", img: Aviator },
  { name: "Browline", value: "browline", img: Browline },
  { name: "CatEye", value: "cat_eye", img: CatEye },
  { name: "Geometric", value: "geometric", img: Geometric },
  { name: "Oval", value: "oval", img: Oval },
  { name: "Oversized", value: "oversized", img: Oversized },
  { name: "Rectangle", value: "rectangle", img: Rectangle },
  { name: "Rimless", value: "rimless", img: Rimless },
  { name: "Round", value: "round", img: Round },
  { name: "Square", value: "square", img: Square },
  { name: "Wayframe", value: "wayframe", img: Wayframe },
  { name: "Wrap", value: "wrap", img: Wrap },
];

const SelectPicker = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleClick = (value: string) => {
    if (selected.find((data) => data === value) && selected.length > 1) {
      setSelected((prev) => prev.filter((data) => data !== value));
    } else {
      if (!selected.find((data) => data === value)) {
        setSelected((prev) => [...prev, value]);
      }
    }
  };
  return (
    <div className="select-wrapper">
      {data.map(({ name, value, img }) => (
        <div
          style={{ position: "relative" }}
          key={value}
          onClick={() => handleClick(value)}
        >
          <FormButton
            width="160px"
            height="102px"
            className={
              selected.find((data) => data === value) ? "selected" : ""
            }
          >
            <div>
              <img src={img} />
              <p className="select_name">{name}</p>
            </div>
          </FormButton>
        </div>
      ))}
    </div>
  );
};

export default SelectPicker;
