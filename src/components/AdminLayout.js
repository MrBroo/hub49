import {
  Box,
  Card,
  TextField,
  Typography,
  InputAdornment,
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
} from "@mui/material";
import { DM_SANS, POPPINS } from "../utils/config";
import search from "../assets/icons/search.svg";
import { useState } from "react";

export default function AdminLayout(props) {
  const { children, menuPage, setMenuPage } = props;
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [value, setValue] = useState("plan");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1336px",
        width: "100%",
        height: "100vh",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <Card
        sx={{
          mt: 5,
          width: "100%",
          background: "#FFFFFF",
          border: "1px solid #EFF0F7",
          boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
          borderRadius: "34px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: "18px",
          pb: "18px",
          px: "50px",
        }}
      >
        <Typography
          onClick={() => {
            if (menuPage) {
              setMenuPage(false);
            }
          }}
          sx={{
            fontWeight: 700,
            fontSize: "30.9042px",
            color: "#47B2FF",
            cursor: "pointer",
            ...POPPINS,
          }}
        >
          {menuPage ? "<< Back <<" : "Home"}
        </Typography>
        <Box sx={{ maxWidth: "469px", width: "100%" }}>
          <TextField
            size="small"
            fullWidth
            sx={{
              background: "#F4F4F4",
              border: "0.5px solid #47B2FF",
              boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={search} alt="search" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ maxWidth: "284px", width: "100%" }}>
          <FormControl>
            <RadioGroup value={value} onChange={handleChange}>
              <Box>
                <FormControlLabel
                  value="new"
                  sx={{
                    fontWeight: 400,
                    fontSize: "12.9838px",
                    color: "#6F6C90",
                    mr: "59px",
                    ...DM_SANS,
                  }}
                  label="New"
                  control={
                    <Radio
                      sx={{
                        px: "3px",
                        py: "4px",
                        "& .MuiSvgIcon-root": {
                          fill: "#359EFF",
                        },
                      }}
                    />
                  }
                />
                <FormControlLabel
                  value="plan"
                  sx={{
                    fontWeight: 400,
                    fontSize: "12.9838px",
                    color: "#6F6C90",
                    mr: "31px",
                    ...DM_SANS,
                  }}
                  label="Plan"
                  control={
                    <Radio
                      sx={{
                        px: "3px",
                        py: "4px",
                        "& .MuiSvgIcon-root": {
                          fill: "#359EFF",
                        },
                      }}
                    />
                  }
                />
                <FormControlLabel
                  value="design"
                  sx={{
                    fontWeight: 400,
                    fontSize: "12.9838px",
                    color: "#6F6C90",
                    ...DM_SANS,
                  }}
                  label="Design"
                  control={
                    <Radio
                      sx={{
                        px: "3px",
                        py: "4px",
                        "& .MuiSvgIcon-root": {
                          fill: "#359EFF",
                        },
                      }}
                    />
                  }
                />
              </Box>

              <Box>
                <FormControlLabel
                  value="schedule"
                  sx={{
                    fontWeight: 400,
                    fontSize: "12.9838px",
                    color: "#6F6C90",
                    mr: "24px",
                    ...DM_SANS,
                  }}
                  label="Schedule"
                  control={
                    <Radio
                      sx={{
                        px: "3px",
                        py: "4px",
                        "& .MuiSvgIcon-root": {
                          fill: "#359EFF",
                        },
                      }}
                    />
                  }
                />

                <FormControlLabel
                  value="done"
                  sx={{
                    fontWeight: 400,
                    fontSize: "12.9838px",
                    color: "#6F6C90",
                    mr: "24px",
                    ...DM_SANS,
                  }}
                  label="Done"
                  control={
                    <Radio
                      sx={{
                        px: "3px",
                        py: "4px",
                        "& .MuiSvgIcon-root": {
                          fill: "#359EFF",
                        },
                      }}
                    />
                  }
                />
                <FormControlLabel
                  value="all"
                  sx={{
                    fontWeight: 400,
                    fontSize: "12.9838px",
                    color: "#6F6C90",
                    ...DM_SANS,
                  }}
                  label="All"
                  control={
                    <Radio
                      sx={{
                        px: "3px",
                        py: "4px",
                        "& .MuiSvgIcon-root": {
                          fill: "#359EFF",
                        },
                      }}
                    />
                  }
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Card>
      <Box
        sx={{
          mt: "27px",
          display: "flex",
          flex: 1,
          width: "100%",
        }}
      >
        {children}
      </Box>
      <Box sx={{ display: "flex", mt: 2, mb: "80px" }}>
        {steps.map((step) => (
          <Box
            key={step}
            sx={{
              background: "#C7D3EB",
              borderRadius: "12.1781px",
              width: "72.51px",
              height: "15.54px",
              mx: "12.95px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
