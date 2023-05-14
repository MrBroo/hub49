import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import flat from "../assets/gifs/flat.gif";
import { POPPINS } from "../utils/config";
import { Box, Typography } from "@mui/material";

export default function ForgotPasswordRecoveryLinkPage() {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <HubBage />
      </Box>
      <Box>
        <Box sx={{ textAlign: "center", mt: -15 }}>
          <img src={flat} alt="flat" width="284px" height="284px" />
        </Box>
        <Box sx={{ textAlign: "center", mt: "30px" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "30.9042px",
              color: "#4C4C4C",
              ...POPPINS,
            }}
          >
            We Sent You a
            <span style={{ color: "#47B2FF" }}> Recovery Link </span>
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "21.1781px",
              color: "#565656",
              mb: 3.75,
              mt: 1,
              maxWidth: "580px",
              width: "100%",
              ...POPPINS,
            }}
          >
            Check Your Email & Proceed From The Link We Sent
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <ProgressBar percentage={0} label="All Rights Reserved" />
        <NextButton label="Order Your Plan Now!" />
      </Box>
    </Container>
  );
}
