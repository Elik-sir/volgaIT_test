import "./styles.css";
import { ReactComponent as Like } from "assets/icons/Like.svg";

const LikeStep = ({ text }: any) => {
  return (
    <>
      <div className="like-icon-wrapper">
        <Like className="like-icon" />
      </div>
      <p className="like-text">{text}</p>
    </>
  );
};

export default LikeStep;
