import { Box, Card, Step, StepLabel, Stepper } from "@mui/material";
import { INTER } from "../utils/config";

export default function MainLayout(props) {
  const { children, active } = props;
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const activeStep = active === 11 || active === 12 ? active - 1 : active;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1336px",
        width: "100%",
        height: "100vh",
        margin: "0 auto",
        padding: "0 20px",
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
          pt: "21px",
          pb: "18px",
          px: "50px",
        }}
      >
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step
              key={step}
              sx={{
                "& .MuiSvgIcon-root": {
                  width: "50px",
                  height: "50px",
                  fill: "#fff",
                  color: "#47B2FF",
                  borderRadius: "50%",
                  zIndex: 99,
                },
                "& .Mui-active": {
                  background: "#47B2FF",
                  borderRadius: "50%",
                  fill: "#47B2FF",
                  "& .MuiStepIcon-text": {
                    fill: "#fff",
                  },
                },
                "& .Mui-completed": {
                  fill: "#fff",
                  background: "#47B2FF",
                  borderRadius: "50%",
                  "& .MuiSvgIcon-root": {
                    border: 0,
                  },
                },
                "& .MuiStepIcon-text": {
                  fontWeight: 600,
                  fill: "#47B2FF",
                  fontSize: "8px",
                  ...INTER,
                },
                "& .MuiStepConnector-root": {
                  mt: 1.7,
                },
                "& .MuiStepConnector-line": {
                  borderColor: "#47B2FF",
                  borderTopWidth: "2px",
                },
                "& .MuiStepLabel-iconContainer": {
                  p: 0,
                  border: "2px solid #47B2FF",
                  borderRadius: "50%",
                },
              }}
            >
              <StepLabel />
            </Step>
          ))}
        </Stepper>
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
              background: active < step ? "#C7D3EB" : "#47B2FF",
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
