import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "pages/FormPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
};

export default Router;
