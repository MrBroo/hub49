import { Box, Card } from "@mui/material";

export default function Container(props) {
  const { children } = props;
  return (
    <Card
      sx={{
        flex: 1,
        background: "#FFFFFF",
        border: "1px solid #EFF0F7",
        boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
        borderRadius: "34px",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          p: 0,
        }}
      >
        {children}
      </Box>
    </Card>
  );
}
