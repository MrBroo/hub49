import { Box, Typography } from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import LogBage from "../components/LogBage";

export default function LogsListPage() {
  return (
    <Container sx={{ background: "#F4F4F4" }}>
      <Box sx={{ width: "100%", position: "realative" }}>
        <HubBage />
        <LogBage />
        <Box
          sx={{
            mt: "76px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {[...Array(9).keys()].map((user) => (
            <Box
              sx={{
                background: "#FFFFFF",
                boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                borderRadius: "54px",
                py: "16px",
                px: "26px",
                mb: "10px",
                maxWidth: "1207px",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#4C4C4C",
                  fontWeight: 700,
                  fontSize: "17.3117px",
                }}
              >
                This is a log of what action have been taken especially the
                request and submission
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
