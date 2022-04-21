import "./styles.css";
import { ReactComponent as Gift } from "assets/imgs/Gift.svg";

const FinalStep = ({ text }: any) => {
  return (
    <>
      <div className="like-icon-wrapper">
        <Gift className="gift-icon" />
      </div>
      <p className="like-text">{text}</p>
    </>
  );
};

export default FinalStep;
