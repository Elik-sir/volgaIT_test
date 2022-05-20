import { useCallback } from "react";
import CloseIcon from "assets/icons/CloseIcon.svg";
import LeftArrow from "assets/icons/LeftArrow.svg";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Header = ({ step, handleBack }: any) => {
  let navigate = useNavigate();
  const handleClickBtn = useCallback(() => {
    navigate("/");
  }, []);
  return (
    <div className="header flex justify-between align-center">
      <img src={LeftArrow} onClick={handleBack} />
      <p>{step}/10</p>
      <img src={CloseIcon} onClick={handleClickBtn} />
    </div>
  );
};

export default Header;
