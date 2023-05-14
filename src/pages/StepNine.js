import { Box, Typography } from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import flat from "../assets/gifs/flat.gif";
import line from "../assets/icons/line.svg";
import { POPPINS } from "../utils/config";

export default function StepNine(props) {
  const { setActive } = props;

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
            Congrats
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "21.1781px",
              color: "#565656",
              mb: 3.5,
              mt: 1,
              maxWidth: "580px",
              width: "100%",
              mx: "auto",
              ...POPPINS,
            }}
          >
            You have Finalized the Posts Creation Stage! <br />& Everything is
            Ready to Schedule Your Posts!
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
            Let’s Setup Your
            <span style={{ color: "#47B2FF" }}> Posts Schedule </span>
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
        <ProgressBar
          percentage={64}
          label="Setup Posting Time!"
          stepNumber={9}
        />
        <NextButton onClick={setActive} label="Setup Your Posts Schedule!" />
      </Box>
    </Container>
  );
}
