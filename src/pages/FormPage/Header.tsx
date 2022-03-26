import { ReactComponent as CloseIcon } from "assets/icons/CloseIcon.svg";
import { ReactComponent as LeftArrow } from "assets/icons/LeftArrow.svg";
import "./styles.css";

const Header = ({ step }: any) => {
  return (
    <div className="header flex justify-between align-center">
      <LeftArrow />
      <p>{step}/10</p>
      <CloseIcon />
    </div>
  );
};

export default Header;
