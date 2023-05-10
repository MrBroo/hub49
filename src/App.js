import { Route, Routes } from "react-router";
import "./App.css";
import ContentWrapper from "./components/ContentWrapper";
import StepFive from "./pages/StepFive";
import StepOne from "./pages/StepOne";
import StepFour from "./pages/StepFour";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepSix from "./pages/StepSix";
import StepSeven from "./pages/StepSeven";
import StepNine from "./pages/StepNine";
import StepTen from "./pages/StepTen";

function App() {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="/" element={<StepOne />} />
        <Route path="/step-two" element={<StepTwo />} />
        <Route path="/step-three" element={<StepThree />} />
        <Route path="/step-four" element={<StepFour />} />
        <Route path="/step-five" element={<StepFive />} />
        <Route path="/step-six" element={<StepSix />} />
        <Route path="/step-seven" element={<StepSeven />} />
        <Route path="/step-nine" element={<StepNine />} />
        <Route path="/step-ten" element={<StepTen />} />
      </Routes>
    </ContentWrapper>
  );
}

export default App;
