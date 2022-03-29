import Button from "components/shared/Button";
import FormButton from "components/shared/FormButton";
import { FC, useState } from "react";

import "./styles.css";

interface IProps {
  data: { name: string; value: string; img: string }[];
}
const SelectPicker: FC<IProps> = ({ data }: IProps) => {
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
    <>
      <p className="help-text">You can pick more than one.</p>
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
      <Button classNames={`cont_btn ${!selected.length && "disabled"}`}>
        Continue
      </Button>
    </>
  );
};

export default SelectPicker;
