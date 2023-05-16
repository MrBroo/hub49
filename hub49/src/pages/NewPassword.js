import {
  Box,
  Typography,
  InputLabel,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import { DM_SANS, POPPINS } from "../utils/config";
import line from "../assets/icons/line4.svg";
import NextButton from "../components/NextButton";
import eyeIcon from "../assets/icons/eye.svg";
import ProgressBar from "../components/ProgressBar";

export default function NewPassword({ setActive }) {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <HubBage />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "30.9042px",
            color: "#4C4C4C",
            textAlign: "center",
            ...POPPINS,
          }}
        >
          Create New Password!
        </Typography>
        <Typography
          sx={{
            color: "#565656",
            fontWeight: 400,
            fontSize: "21.1781px",
            mb: "27px",
            textAlign: "center",
          }}
        >
          Update Your Credentials Now!
        </Typography>

        <Box
          sx={{
            "& .MuiFormControl-root": {
              height: "48px",
              width: "287px",
            },
            "& .MuiInputBase-root": {
              height: "48px",
            },
          }}
        >
          <Box>
            <InputLabel
              htmlFor="mail"
              sx={{
                color: "#565656",
                fontWeight: 500,
                fontSize: "12.9838px",
                mb: 0.5,
                ...DM_SANS,
              }}
            >
              Email
            </InputLabel>
            <TextField
              fullWidth
              name="mail"
              id="mail"
              sx={{
                background: "#FFFFFF",
                border: "1.5px solid #47B2FF",
                boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                borderRadius: "10px",
                px: 0.5,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
          </Box>
          <Box sx={{ my: "14px" }}>
            <InputLabel
              htmlFor="newPassword"
              sx={{
                color: "#565656",
                fontWeight: 500,
                fontSize: "12.9838px",
                mb: 0.5,
                ...DM_SANS,
              }}
            >
              New Password
            </InputLabel>
            <TextField
              fullWidth
              name="newPassword"
              id="newPassword"
              sx={{
                background: "#FFFFFF",
                border: "1.5px solid #47B2FF",
                boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                borderRadius: "10px",
                px: 0.5,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ p: 0 }}>
                      <img src={eyeIcon} alt="eyeIcon" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <InputLabel
              htmlFor="confirmNewPassword"
              sx={{
                color: "#565656",
                fontWeight: 500,
                fontSize: "12.9838px",
                mb: 0.5,
                ...DM_SANS,
              }}
            >
              Confirm New Password
            </InputLabel>
            <TextField
              fullWidth
              name="confirmNewPassword"
              id="confirmNewPassword"
              sx={{
                background: "#FFFFFF",
                border: "1.5px solid #47B2FF",
                boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                borderRadius: "10px",
                px: 0.5,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ p: 0 }}>
                      <img src={eyeIcon} alt="eyeIcon" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: "25px" }}>
          <Typography
            sx={{
              color: "#4C4C4C",
              fontWeight: 700,
              fontSize: "30.9042px",
              textAlign: "center",
            }}
          >
            Update Your
            <span style={{ color: "#47B2FF" }}> Password! </span>
          </Typography>
          <Box sx={{ position: "absolute", bottom: "180px", right: "350px" }}>
            <img
              src={line}
              style={{ width: "415px", height: "276px" }}
              alt="line"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <ProgressBar percentage={0} label="All Rights Reserved" />
        <NextButton onClick={setActive} label="Update Your Password!" />
      </Box>
    </Container>
  );
}
