import { Box, TextField, Typography, InputLabel, Grid } from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import { DM_SANS, POPPINS } from "../utils/config";
import line from "../assets/icons/line.svg";

export default function SignIn() {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <HubBage />
      </Box>
      <Grid container flexDirection="column" alignItems="center">
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "30.9042px",
            color: "#4C4C4C",
            ...POPPINS,
          }}
        >
          Welcome Back!
        </Typography>
        <Typography
          sx={{
            color: "#565656",
            fontWeight: 400,
            fontSize: "21.1781px",
            mb: "41px",
          }}
        >
          Sign in To Get Started
        </Typography>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
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
          <Grid item xs={4}>
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
          </Grid>
          <Grid item xs={4} sx={{ mt: "38px" }}>
            <InputLabel
              htmlFor="password"
              sx={{
                color: "#565656",
                fontWeight: 500,
                fontSize: "12.9838px",
                mb: 0.5,
                ...DM_SANS,
              }}
            >
              Password
            </InputLabel>
            <TextField
              fullWidth
              name="password"
              id="password"
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

            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "12.9838px",
                color: "#47B2FF",
                mt: "12px",
                cursor: "pointer",
                ...DM_SANS,
              }}
            >
              Forgot Password?
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ mt: "41px" }}>
          <Typography
            sx={{
              color: "#4C4C4C",
              fontWeight: 700,
              fontSize: "30.9042px",
            }}
          >
            Start Your <span style={{ color: "#47B2FF" }}> Journey! </span>
          </Typography>
          <Box sx={{ position: "absolute", bottom: "180px", right: "270px" }}>
            <img src={line} alt="line" />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ position: "relative", width: "100%" }}>
        <NextButton label="Login" />
      </Box>
    </Container>
  );
}
