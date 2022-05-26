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
      <img alt="glasses" src={LeftArrow} onClick={handleBack} />
      <p style={{fontSize:"18px",marginLeft:"4px"}}>{step}/10</p>
      <img alt="glasses" src={CloseIcon} onClick={handleClickBtn} />
    </div>
  );
};

export default Header;
