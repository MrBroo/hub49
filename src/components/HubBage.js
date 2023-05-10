import { Box, Typography } from "@mui/material";
import { POPPINS } from "../utils/config";

export default function HubBage() {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "169px",
        height: "61px",
        background: "#47B2FF",
        boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
        borderRadius: "0px 0px 20px 20px",
        color: "white",
        ml: "38px",
      }}
    >
      <Typography sx={{ fontSize: "26px", fontWeight: 700, ...POPPINS }}>
        HUB49
      </Typography>
    </Box>
  );
}
