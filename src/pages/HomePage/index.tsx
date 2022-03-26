import { useNavigate } from "react-router-dom";
import Header from "pages/HomePage/Header";
import homeImg from "assets/imgs/HomeImg.png";
import Button from "components/shared/Button";
import "./styles.css";
const HomePage = () => {
  let navigate = useNavigate();
  const handleClickBtn = () => {
    navigate("/form");
  };
  return (
    <div className="App">
      <Header />
      <div className="home">
        <img src={homeImg} />
        <h1 className="home_header-offer">Let’s find your perfect pair!</h1>
        <p className="home_header-description">
          Take the quiz to easily discover your perfect fit from thousands of
          styles
        </p>
        <Button onClick={handleClickBtn}>Start Now</Button>
      </div>
    </div>
  );
};

export default HomePage;
