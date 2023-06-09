import "./App.css";
import ContentWrapper from "./components/MainLayout";
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
import Home from "./pages/Home";
import LogsListPage from "./pages/LogsListPage";
import AdminLayout from "./components/AdminLayout";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuPage, setMenuPage] = useState(false);

  const [active, setActive] = useState(-1);
  const Component = COMPONENTS[active];

  return (
    <>
      {!isAdmin ? (
        <AdminLayout menuPage={menuPage} setMenuPage={setMenuPage}>
          <Home menuPage={menuPage} setMenuPage={setMenuPage} />
          {/* <LogsListPage /> */}
        </AdminLayout>
      ) : (
        <ContentWrapper active={active}>
          <Component setActive={() => setActive(active + 1)} />
        </ContentWrapper>
      )}
    </>
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
