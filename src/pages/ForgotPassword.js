import { Box, Typography, InputLabel, TextField } from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import { DM_SANS, POPPINS } from "../utils/config";
import line from "../assets/icons/line.svg";
import NextButton from "../components/NextButton";
import { useState } from "react";
import ForgotPasswordRecoveryLinkPage from "./ForgotPasswordRecoveryLinkPage";
import ProgressBar from "../components/ProgressBar";

export default function ForgotPassword({ setActive }) {
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <>
      {!forgotPassword ? (
        <Container>
          <Box sx={{ width: "100%" }}>
            <HubBage />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "30.9042px",
                color: "#4C4C4C",
                textAlign: "center",
                ...POPPINS,
              }}
            >
              Forgot Password ?
            </Typography>
            <Typography
              sx={{
                color: "#565656",
                fontWeight: 400,
                fontSize: "21.1781px",
                mb: "77px",
                textAlign: "center",
              }}
            >
              Enter Your Email
            </Typography>

            <Box
              sx={{
                "& .MuiFormControl-root": {
                  height: "48px",
                  width: "287px",
                },
                "& .MuiInputBase-root": {
                  height: "48px",
                },
              }}
            >
              <InputLabel
                htmlFor="mail"
                sx={{
                  color: "#565656",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 0.5,
                  ...DM_SANS,
                }}
              >
                Email
              </InputLabel>
              <TextField
                fullWidth
                name="mail"
                id="mail"
                sx={{
                  background: "#FFFFFF",
                  border: "1.5px solid #47B2FF",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "10px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "68px" }}>
              <Typography
                sx={{
                  color: "#4C4C4C",
                  fontWeight: 700,
                  maxWidth: "350px",
                  fontSize: "30.9042px",
                  textAlign: "center",
                }}
              >
                We Will Email You A
                <span style={{ color: "#47B2FF" }}> Reset Password Link </span>
              </Typography>
              <Box
                sx={{ position: "absolute", bottom: "190px", right: "320px" }}
              >
                <img src={line} alt="line" />
              </Box>
            </Box>
          </Box>
          <Box sx={{ position: "relative", width: "100%" }}>
            <ProgressBar percentage={0} label="All Rights Reserved" />
            <NextButton
              onClick={() => setForgotPassword(true)}
              label="Reset Password"
            />
          </Box>
        </Container>
      ) : (
        <ForgotPasswordRecoveryLinkPage setActive={setActive} />
      )}
    </>
  );
}
