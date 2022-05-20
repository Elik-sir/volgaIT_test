import "./styles.css";
import Like from "assets/icons/Like.svg";

const LikeStep = ({ text }: any) => {
  return (
    <>
      <div className="like-icon-wrapper">
        <img src={Like} className="like-icon" />
      </div>
      <p className="like-text">{text}</p>
    </>
  );
};

export default LikeStep;
