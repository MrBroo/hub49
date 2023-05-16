import { Box, Typography } from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import ProgressBar from "../components/ProgressBar";
import setting from "../assets/gifs/settings.gif";
import email from "../assets/gifs/email.gif";
import { POPPINS } from "../utils/config";
import { useEffect } from "react";

export default function StepFour(props) {
  const { setActive } = props;

  useEffect(() => {
    setTimeout(() => {
      setActive();
    }, 2000);
  }, []);

  return (
    <Container>
      <Box sx={{ width: "100%", position: "relative", textAlign: "center" }}>
        <HubBage />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            mt: -15,
          }}
        >
          <Box sx={{ position: "absolute", bottom: 0, left: "-55px" }}>
            <img src={email} alt="email" width="145px" height="145px" />
          </Box>
          <Box>
            <img src={setting} alt="setting" width="449px" height="449px" />
          </Box>
          <Box sx={{ position: "absolute", bottom: 0, right: "-55px" }}>
            <img src={email} alt="email" width="145px" height="145px" />
          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "30.9042px",
              color: "#4C4C4C",
              ...POPPINS,
            }}
          >
            We Are Working on
            <span style={{ color: "#47B2FF" }}> Your Plan </span>
            Now !
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "21.1781px",
              color: "#565656",
              textAlign: "center",
            }}
          >
            We Will Email You Once It is Ready!
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <ProgressBar
          percentage={24}
          label="Plan Under Process!"
          stepNumber={4}
        />
      </Box>
    </Container>
  );
}
