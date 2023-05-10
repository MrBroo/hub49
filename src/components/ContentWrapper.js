import {
  Box,
  Card,
  CardContent,
  Step,
  StepButton,
  Stepper,
} from "@mui/material";
import { useState } from "react";

export default function ContentWrapper(props) {
  const { children } = props;

  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1296px",
        width: "100%",
        height: "100vh",
        margin: "0 auto",
      }}
    >
      <Card
        sx={{
          mt: 5,
          width: "100%",
          background: "#FFFFFF",
          border: "1px solid #EFF0F7",
          boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
          borderRadius: "34px",
        }}
      >
        <CardContent>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((step, index) => (
              <Step
                sx={{
                  "& .MuiStepLabel-iconContainer circle": {
                    width: "51.79px",
                    height: "51.79px",
                  },
                }}
                key={step}
                completed={completed[index]}
              >
                <StepButton
                  color="inherit"
                  onClick={handleStep(index)}
                ></StepButton>
              </Step>
            ))}
          </Stepper>
        </CardContent>
      </Card>
      <Box
        sx={{
          mt: "27px",
          display: "flex",
          flex: 1,
          width: "100%",
        }}
      >
        {children}
      </Box>
      <Box sx={{ display: "flex", mt: 2, mb: "80px" }}>
        {steps.map((step) => (
          <Box
            key={step}
            sx={{
              background: "#C7D3EB",
              borderRadius: "12.1781px",
              width: "72.51px",
              height: "15.54px",
              mx: "12.95px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
