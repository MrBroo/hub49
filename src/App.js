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
import StepEleven from "./pages/StepEleven";
import StepEight from "./pages/StepEight";
import { useState } from "react";
import StepTwelve from "./pages/StepTwelve";
import SignIn from "./pages/SignIn";

function App() {
  const [active, setActive] = useState(-1);
  const Component = COMPONENTS[active];

  return (
    <ContentWrapper active={active}>
      <Component setActive={() => setActive(active + 1)} />
    </ContentWrapper>
  );
}

export default App;

const COMPONENTS = {
  "-1": SignIn,
  0: StepOne,
  1: StepTwo,
  2: StepThree,
  3: StepFour,
  4: StepFive,
  5: StepSix,
  6: StepSeven,
  7: StepEight,
  8: StepNine,
  9: StepTen,
  10: StepEleven,
  11: StepEleven,
  12: StepTwelve,
};
