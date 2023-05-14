import { Box, Typography } from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import PostSlider from "../modules/stepEight/PostSlider";
import { POPPINS } from "../utils/config";

export default function StepEight(props) {
  const { setActive } = props;

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
            maxWidth: "920px",
            width: "100%",
            ...POPPINS,
          }}
        >
          <span style={{ color: "#47B2FF" }}> Congrats! </span>
          Our Experts Finalized Your Posts Creations! Review &
          <span style={{ color: "#47B2FF" }}> Approve </span> For The
          <span style={{ color: "#47B2FF" }}> Next Steps! </span>
        </Typography>
      </Box>
      <Box>
        <PostSlider />
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <ProgressBar
          percentage={56}
          label="Approve Creations!"
          stepNumber={8}
        />
        <NextButton onClick={setActive} label="Approve Plan!" />
      </Box>
    </Container>
  );
}
