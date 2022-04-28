import Button from "components/shared/Button";
import FormButton from "components/shared/FormButton";
import { useWindowSize } from "hooks/useWindowSize";
import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./styles.css";

interface IProps {
  data: { name: string; value: string; img: string }[];
  setStep(arg: (prev: number) => any): void;
}
const SelectPicker: FC<IProps> = ({ data, setStep }: IProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [params, setParams] = useSearchParams();
  const [width] = useWindowSize();
  const handleClick = (value: string) => {
    if (selected.find((data) => data === value) && selected.length > 1) {
      setSelected((prev) => prev.filter((data) => data !== value));
    } else {
      if (!selected.find((data) => data === value)) {
        setSelected((prev) => [...prev, value]);
      }
    }
  };
  const onContinue = () => {
    if (selected) {
      selected.forEach((n) => {
        const name = data.find((a) => a.value === n)?.name;
        if (name) {
          params.append(name, n);
        }
      });
      setParams(params);
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <p className="help-text">You can pick more than one.</p>
      <div
        className="select-wrapper"
        style={{
          justifyContent: width > 700 ? "center" : "flex-start",
        }}
      >
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
      <Button
        classNames={`cont_btn ${!selected.length && "disabled"}`}
        onClick={onContinue}
      >
        Continue
      </Button>
    </>
  );
};

export default SelectPicker;
