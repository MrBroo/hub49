import { Button, Box } from "@mui/material";
import { POPPINS } from "../utils/config";

export default function NextButton(props) {
  const { label } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          background: "#47B2FF",
          boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
          borderRadius: "20px 20px 0px 0px",
          textTransform: "unset",
          fontWeight: 700,
          fontSize: "18px",
          color: "#fff",
          mr: "35px",
          py: 1.8,
          px: 4,
          ...POPPINS,
        }}
      >
        {label}
      </Button>
    </Box>
  );
}
