import { Box, Typography, LinearProgress } from "@mui/material";
import { INTER } from "../utils/config";

export default function ProgressBar(props) {
  const { percentage, label, stepNumber } = props;

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: "50%",
        transform: "translateX(50%)",
        background: "#fff",
        boxShadow: "0px -4px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px 8px 0px 0px",
        maxWidth: !stepNumber ? "334px" : "400px",
        width: !stepNumber ? "100%" : "max-content",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: !stepNumber ? "center" : "space-beetwen",
          fontSize: "17px",
          ...INTER,
          pt: 2.5,
          pb: 1.9,
          px: 2.6,
        }}
      >
        {percentage > 0 && (
          <Typography
            sx={{
              fontWeight: 700,
              color: "#3174A5",
              mr: "19px",
            }}
          >
            {`${percentage === 2 ? 0 : percentage}%`}
          </Typography>
        )}
        <Typography
          sx={{
            color: "#1F2224",
            fontWeight: 700,
            mr: stepNumber ? "19px" : "0",
          }}
        >
          {label}
        </Typography>
        {stepNumber && (
          <Typography sx={{ fontWeight: 600, color: "#8FA7B8" }}>
            {stepNumber < 12
              ? `${stepNumber}${STEP_NUMBERS[stepNumber]} Step`
              : "Done"}
          </Typography>
        )}
      </Box>
      <LinearProgress
        sx={{
          "& .MuiLinearProgress-bar": {
            background: "#47B2FF",
          },
        }}
        variant="determinate"
        value={percentage === 0 ? 2 : percentage}
      />
    </Box>
  );
}

const STEP_NUMBERS = {
  1: "st",
  2: "nd",
  3: "rd",
  4: "th",
  5: "th",
  6: "th",
  7: "th",
  8: "th",
  9: "th",
  10: "th",
  11: "th",
};
