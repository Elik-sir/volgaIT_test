import "./styles.css";
import FinalStep from "components/shared/LikeStep/FinalStep";
import Button from "components/shared/Button";
const FinalPage = () => {
  return (
    <div className="home">
      <FinalStep text="We've found some awesome frames for you!" />
      <p style={{ marginTop: "12px", marginBottom: "50px" }}>
        Send the results to your email to receive special discounts.
      </p>
      <Button
        onClick={() => {
          console.log("URL: ", window.location.href);
        }}
      >
        Send
      </Button>
    </div>
  );
};

export default FinalPage;
