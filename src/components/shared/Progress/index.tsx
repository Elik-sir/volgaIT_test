import "./styles.css";
const Progress = ({ step = 1 }: any) => {
  return (
    <div className="progress">
      <div className="progress__step" style={{ width: `${step * 10}%` }} />
    </div>
  );
};

export default Progress;
