import { Card, Box, Typography, Button } from "@mui/material";
import { DM_SANS, POPPINS } from "../utils/config";
import person from "../assets/person.svg";

export default function UserCard(props) {
  const { onClick } = props;

  return (
    <Card
      sx={{
        background: "#fff",
        boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
        borderRadius: "54px",
        display: "flex",
        maxWidth: "289px",
        py: "10px",
        px: "12px",
        mb: "23px",
        mx: "12.5px",
        width: "100%",
      }}
    >
      <Box sx={{ mr: "17px" }}>
        <img src={person} width="78px" height="78px" alt="person" />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "17.3117px",
            color: "#4C4C4C",
            ...POPPINS,
          }}
        >
          Company Name
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: "12.3117px" }}>
          abcabc@abc.abc
        </Typography>
        <Button
          onClick={onClick}
          sx={{
            mt: "8px",
            py: "1px",
            background: "#47B2FF",
            maxWidth: "136px",
            width: "100%",
            borderRadius: "12.1781px",
            color: "#fff",
            fontWeight: 700,
            fontSize: "12.3117px",
            textTransform: "unset",
            ...DM_SANS,
            "&:hover": {
              background: "#50aef1",
            },
          }}
        >
          Plan
        </Button>
      </Box>
    </Card>
  );
}
