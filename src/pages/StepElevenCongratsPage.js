import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import flat from "../assets/gifs/flat.gif";
import line from "../assets/icons/line.svg";
import { POPPINS } from "../utils/config";

export default function StepElevenCongratsPage() {
  return (
    <Container>
      <Box sx={{ width: "100%", position: "relative", textAlign: "center" }}>
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
            Congrats
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
            You have Finalized the Planning Stage! <br />& Everything is Ready
            to Create Your Posts Creations!
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "30.9042px",
              textAlign: "center",
              color: "#4C4C4C",
              mx: "auto",
              ...POPPINS,
            }}
          >
            Let Us Work on
            <span style={{ color: "#47B2FF" }}> Your Creations </span>
            Now !
          </Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: "200px",
              right: "320px",
            }}
          >
            <img src={line} alt="line" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <ProgressBar percentage={90} label="Congrats!!" stepNumber={11} />
        <NextButton label="Go to Final Page" />
      </Box>
    </Container>
  );
}
