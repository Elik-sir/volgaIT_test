import { ReactComponent as Logo } from "assets/imgs/Logo.svg";
import { ReactComponent as RightArrow } from "assets/icons/RightArrow.svg";
import { ReactComponent as CloseIcon } from "assets/icons/CloseIcon.svg";
import "./styles.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ handleClickBtn, isFinal }: any) => {
  let navigate = useNavigate();
  const handleClickClose = useCallback(() => {
    navigate("/");
  }, []);
  return (
    <div className="header flex justify-between align-center">
      <Logo />
      {isFinal ? (
        <CloseIcon onClick={handleClickClose} />
      ) : (
        <RightArrow onClick={handleClickBtn} />
      )}
    </div>
  );
};

export default Header;
