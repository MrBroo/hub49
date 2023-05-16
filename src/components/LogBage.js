import { Box, Typography } from "@mui/material";
import { POPPINS } from "../utils/config";

export default function LogBage() {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "127px",
        height: "61px",
        background: "#47B2FF",
        boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
        borderRadius: "0px 0px 20px 20px",
        color: "white",
        right: "235px",
      }}
    >
      <Typography sx={{ fontSize: "26px", fontWeight: 700, ...POPPINS }}>
        Log
      </Typography>
    </Box>
  );
}
