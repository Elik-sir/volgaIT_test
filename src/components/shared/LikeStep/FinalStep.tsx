import "./styles.css";
import Gift from "assets/imgs/Gift.svg";

const FinalStep = ({ text }: any) => {
  return (
    <>
      <div className="like-icon-wrapper">
        <img alt="glasses" src={Gift} className="gift-icon" />
      </div>
      <p className="like-text final-text">{text}</p>
    </>
  );
};

export default FinalStep;
