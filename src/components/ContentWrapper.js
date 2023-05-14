import { Box, Card, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { INTER } from "../utils/config";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";

export default function ContentWrapper(props) {
  const { children, active } = props;
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  console.log("acrive", active);

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
          pt: "21px",
          pb: "18px",
          px: "50px",
        }}
      >
        <Stepper alternativeLabel activeStep={active}>
          {steps.map((step, index) => (
            <Step
              key={step}
              sx={{
                "& .MuiSvgIcon-root": {
                  width: "51px",
                  height: "51px",
                  fill: "#fff",
                  color: "#47B2FF",
                  border: "2px solid #47B2FF",
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
                  fill: "#47B2FF",
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

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}
