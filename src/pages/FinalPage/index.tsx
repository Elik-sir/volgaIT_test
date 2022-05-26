import FinalStep from "components/shared/LikeStep/FinalStep";
import Button from "components/shared/Button";

import "./styles.css";

const FinalPage = () => {
  return (
    <div className="final">
      <FinalStep text="We've found some awesome frames for you!" />
      <p className="finalStepText">
        Send the results to your email to receive special discounts.
      </p>
      <Button
      styles={{width:"181px"}}
        onClick={() => {
          console.log(
            "URL: ",
            document.getElementById("glasses-quiz-widget")?.dataset?.source +
              window.location.search
          );
        }}
      >
        Send
      </Button>
      <p className="finalText">By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails</p>
    </div>
  );
};

export default FinalPage;
