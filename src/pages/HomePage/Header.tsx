import Logo from "assets/imgs/Logo.svg";
import RightArrow from "assets/icons/RightArrow.svg";
import CloseIcon from "assets/icons/CloseIcon.svg";
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
      <img alt="glasses" src={Logo} />
      {isFinal ? (
        <img alt="glasses" src={CloseIcon} onClick={handleClickClose} />
      ) : (
        <img alt="glasses" src={RightArrow} style={{marginRight:"-1px"}} onClick={handleClickBtn} />
      )}
    </div>
  );
};

export default Header;
