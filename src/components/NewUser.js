import { Box, Typography, Button } from "@mui/material";
import { POPPINS } from "../utils/config";

export default function NewUser(props) {
  const { onClick } = props;

  return (
    <Box>
      <Button
        onClick={onClick}
        sx={{
          fontSize: "26px",
          fontWeight: 700,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "291px",
          height: "61px",
          background: "#47B2FF",
          boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
          borderRadius: "0px 0px 20px 20px",
          color: "white",
          right: "45px",
          textTransform: "none",
          "&:hover": {
            background: "#50aef1",
          },
          ...POPPINS,
        }}
      >
        Add New User +
      </Button>
    </Box>
  );
}
