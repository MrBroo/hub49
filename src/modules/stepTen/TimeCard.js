import { Card, CardContent, Radio, Typography, Box } from "@mui/material";
import { DM_SANS, POPPINS } from "../../utils/config";

export default function TimeCard() {
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Card
      sx={{
        border: "1px solid #EFF0F7",
        boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.08)",
        borderRadius: "20px",
        px: 1.5,
      }}
    >
      <CardContent>
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: "17px", ...POPPINS }}>
            <span style={{ color: "#47B2FF" }}> Which Day </span> of The Week ?
          </Typography>
          {week.map((day) => (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Radio />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#4C4C4C",
                  ...DM_SANS,
                }}
              >
                {day}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: "17px", ...POPPINS }}>
            <span style={{ color: "#47B2FF" }}> Which Time </span>
            of The Day ?
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
