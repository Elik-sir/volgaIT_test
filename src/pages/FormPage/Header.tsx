import { useCallback } from "react";
import { ReactComponent as CloseIcon } from "assets/icons/CloseIcon.svg";
import { ReactComponent as LeftArrow } from "assets/icons/LeftArrow.svg";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Header = ({ step, handleBack }: any) => {
  let navigate = useNavigate();
  const handleClickBtn = useCallback(() => {
    navigate("/");
  }, []);
  return (
    <div className="header flex justify-between align-center">
      <LeftArrow onClick={handleBack} />
      <p>{step}/10</p>
      <CloseIcon onClick={handleClickBtn} />
    </div>
  );
};

export default Header;
