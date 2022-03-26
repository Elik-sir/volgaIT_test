import { ReactComponent as Logo } from "assets/imgs/Logo.svg";
import { ReactComponent as RightArrow } from "assets/icons/RightArrow.svg";
import "./styles.css";

const Header = () => {
  return (
    <div className="header flex justify-between align-center">
      <Logo />
      <RightArrow />
    </div>
  );
};

export default Header;
