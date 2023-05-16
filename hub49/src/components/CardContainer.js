import { Card } from "@mui/material";

export default function Container(props) {
  const { children } = props;

  return (
    <Card
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "34px",
        background: "#FFFFFF",
        border: "1px solid #EFF0F7",
        boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
      }}
    >
      {children}
    </Card>
  );
}
