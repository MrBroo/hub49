import { Box, Button, Typography } from "@mui/material";
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
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            ml: 17,
            mb: 1.5,
            py: 0,
            color: "#47B2FF",
            textTransform: "unset",
            border: "1.5px solid #47B2FF",
            boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
            borderRadius: "10px",
            maxWidth: "222px",
            width: "100%",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "20px",
            ...POPPINS,
          }}
        >
          Download All Creations & Source Files
        </Button>
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
