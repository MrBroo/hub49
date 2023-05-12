import {
  Card,
  CardContent,
  Radio,
  Typography,
  Box,
  TextField,
} from "@mui/material";
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
        px: 2,
      }}
    >
      <CardContent>
        <Box
          sx={{
            mb: "18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "17px", ...POPPINS }}>
            <span style={{ color: "#47B2FF" }}> Which Day </span> of The Week ?
          </Typography>
          <Box sx={{ mt: "18px" }}>
            {week.map((day) => (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Radio sx={{ py: "6px" }} />
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
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              ontSize: "17px",
              mb: "12px",
              ...POPPINS,
            }}
          >
            <span style={{ color: "#47B2FF" }}> Which Time </span>
            of The Day ?
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .MuiFormControl-root": {
                height: "32px",
              },
              "& .MuiInputBase-root": {
                height: "32px",
                ...textFieldStyle,
              },
            }}
          >
            <Box sx={{ ...boxStyle }}>
              <TextField
                inputProps={{ maxLength: 2 }}
                size="small"
                sx={{
                  width: "34px",
                  "& .MuiInputBase-input": {
                    px: 1.2,
                  },
                }}
              />
            </Box>
            <Box sx={{ mx: 0.44 }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20.5714px",
                  color: "#4C4C4C",
                  ...DM_SANS,
                }}
              >
                :
              </Typography>
            </Box>
            <Box sx={{ ...boxStyle, mr: "10px" }}>
              <TextField
                inputProps={{ maxLength: 2 }}
                sx={{
                  width: "34px",
                  "& .MuiInputBase-input": {
                    px: 1.2,
                  },
                }}
                size="small"
              />
            </Box>
            <Box sx={{ ...boxStyle }}>
              <TextField
                inputProps={{ maxLength: 2 }}
                size="small"
                sx={{
                  width: "34px",
                  "& .MuiInputBase-input": {
                    px: 0.7,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

const boxStyle = {
  border: "1.14286px solid #47B2FF",
  boxShadow: "0px 5.71429px 18.2857px rgba(8, 15, 52, 0.08)",
  borderRadius: "5.71429px",
};

const textFieldStyle = {
  fontWeight: "500",
  fontSize: "14.8571px",
  color: "#4C4C4C",
  ...DM_SANS,
};
