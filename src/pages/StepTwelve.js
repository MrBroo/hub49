import { Box, Button, Typography } from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import PostSlider from "../modules/stepEight/PostSlider";
import { POPPINS } from "../utils/config";
import downloadIcon from "../assets/icons/download.svg";

export default function StepTwelve() {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <HubBage />
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#4C4C4C",
            fontWeight: 700,
            fontSize: "30.9042px",
            textAlign: "center",
            maxWidth: "944px",
            width: "100%",
            ...POPPINS,
          }}
        >
          <span style={{ color: "#47B2FF" }}> Congrats! </span>
          You Are All Set For
          <span style={{ color: "#47B2FF" }}>
            {" "}
            The Full-Year! <br /> See You Next Year!{" "}
          </span>
          & Keep In Touch For Our
          <span style={{ color: "#47B2FF" }}> News & Offers! </span>
        </Typography>
      </Box>
      <Box>
        <PostSlider />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            endIcon={<img src={downloadIcon} alt="download" />}
            sx={{
              ml: 15,
              mb: 1.5,
              py: 0.6,
              px: 2.5,
              color: "#47B2FF",
              textTransform: "unset",
              border: "1.5px solid #47B2FF",
              boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "16px",
              ...POPPINS,
            }}
          >
            Download Content & Plan
          </Button>
        </Box>
        <ProgressBar percentage={100} label="Congrats!!" stepNumber={12} />
      </Box>
    </Container>
  );
}
