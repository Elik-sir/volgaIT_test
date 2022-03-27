import { ReactComponent as Logo } from "assets/imgs/Logo.svg";
import { ReactComponent as RightArrow } from "assets/icons/RightArrow.svg";
import "./styles.css";

const Header = ({ handleClickBtn }: any) => {
  return (
    <div className="header flex justify-between align-center">
      <Logo />
      <RightArrow onClick={handleClickBtn} />
    </div>
  );
};

export default Header;
