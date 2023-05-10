import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import TimeCard from "../modules/stepTen/TimeCard";
import { POPPINS } from "../utils/config";

export default function StepTen() {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <HubBage />
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "30.9042px",
            color: "#4C4C4C",
            textAlign: "center",
            maxWidth: "550px",
            width: "100%",
            ...POPPINS,
          }}
        >
          Choose <span style={{ color: "#47B2FF" }}> 3 Timings </span> That You
          Like your Posts
          <span style={{ color: "#47B2FF" }}> To Be Published At! </span>
        </Typography>
      </Box>
      <Box>
        <TimeCard />
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <ProgressBar
          percentage={72}
          label="Setup Posting Time!"
          stepNumber={10}
        />
        <Link to="/step-four" style={{ textDecoration: "none" }}>
          <NextButton label="Connect Your Social Accounts" />
        </Link>
      </Box>
    </Container>
  );
}
