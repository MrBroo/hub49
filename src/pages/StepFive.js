import { Box, Typography } from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import PlanTable from "../modules/stepFive/PlanTable";
import { POPPINS } from "../utils/config";

export default function StepFive() {
  const data = [
    {
      id: 1,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 2,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 3,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 4,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 5,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 6,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 7,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 8,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 9,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 10,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
  ];

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
            maxWidth: "687px",
            width: "100%",
            ...POPPINS,
          }}
        >
          <span style={{ color: "#47B2FF" }}> Congrats! </span> Our Experts
          Finalized Your Plan! Review &
          <span style={{ color: "#47B2FF" }}> Approve </span> For The
          <span style={{ color: "#47B2FF" }}> Next Steps! </span>
        </Typography>
      </Box>
      <Box
        sx={{
          background: "#F4F4F4",
          border: "1px solid #E4E5EA",
          boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
          borderRadius: "25px",
          display: "flex",
        }}
      >
        <PlanTable data={data.slice(0, 5)} />
        <Box sx={{ width: "5px", background: "#E2E2E2" }} />
        <PlanTable data={data.slice(5)} />
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <ProgressBar percentage={32} label="Approve Plan!" stepNumber={5} />
        <NextButton label="Approve Plan!" />
      </Box>
    </Container>
  );
}
