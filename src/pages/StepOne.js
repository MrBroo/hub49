import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import flat from "../assets/gifs/flat.gif";
import line from "../assets/icons/line.svg";
import { POPPINS } from "../utils/config";

export default function StepOne() {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <HubBage />
      </Box>
      <Box>
        <Box sx={{ textAlign: "center", mt: -15 }}>
          <img src={flat} alt="flat" width="284px" height="284px" />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "30.9042px",
              color: "#4C4C4C",
              ...POPPINS,
            }}
          >
            Heyy! Welcome to <span style={{ color: "#47B2FF" }}> HUB49!</span>
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "21.1781px",
              color: "#565656",
              mb: 5,
              ...POPPINS,
            }}
          >
            We Are Glad to Have You Onboard!
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "30.9042px",
              maxWidth: "350px",
              width: "100%",
              textAlign: "center",
              mx: "auto",
              color: "#4C4C4C",
              ...POPPINS,
            }}
          >
            Let’s <span style={{ color: "#47B2FF" }}> Start </span> Your <br />
            <span style={{ color: "#47B2FF" }}> Full-Year Journey! </span>
          </Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: "200px",
              right: "350px",
            }}
          >
            <img src={line} alt="line" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <ProgressBar percentage={0} label="Start Your Journey" stepNumber={1} />
        <Link to="/step-two" style={{ textDecoration: "none" }}>
          <NextButton label="Start Your Journey!" />
        </Link>
      </Box>
    </Container>
  );
}
