import {
  Box,
  Typography,
  Grid,
  InputLabel,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import { DM_SANS, POPPINS } from "../utils/config";
import user from "../assets/icons/user.svg";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";
import person from "../assets/person.svg";
import camera from "../assets/icons/camera.svg";
import house from "../assets/icons/house.svg";
import pensil from "../assets/icons/pensil.svg";
import { Link } from "react-router-dom";

export default function StepTwo() {
  return (
    <Container>
      <Box sx={{ width: "100%", position: "relative", textAlign: "center" }}>
        <HubBage />
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "30.9042px",
            mt: "38px",
            ...POPPINS,
          }}
        >
          Fill Out Your
          <span style={{ color: "#47B2FF" }}> Profile Details </span>
          For The
          <span style={{ color: "#47B2FF" }}> Next Steps!</span>
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <Box sx={{ mb: "27px", ...DM_SANS }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "17.3117px",
                color: "#170F49",
                mb: "5px",
                textAlign: "center",
              }}
            >
              Contact Details
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12.9838px",
                color: "#6F6C90",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisc.
            </Typography>
          </Box>
          <Grid
            container
            justifyContent="center"
            spacing={2.5}
            sx={{
              "& .MuiFormControl-root": {
                height: "47.61px",
              },
              "& .MuiInputBase-root": {
                height: "47.61px",
                fontSize: "12px",
              },
            }}
          >
            <Grid item xs={4.82}>
              <InputLabel
                htmlFor="name"
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Name
              </InputLabel>
              <TextField
                fullWidth
                name="name"
                id="name"
                placeholder="John Carter"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={user} alt="user" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4.82}>
              <InputLabel
                htmlFor="mail"
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Email
              </InputLabel>
              <TextField
                fullWidth
                name="mail"
                id="mail"
                placeholder="Email address"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={mail} alt="mail" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4.82} sx={{ mt: "10px" }}>
              <InputLabel
                htmlFor="number"
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Phone Number
              </InputLabel>
              <TextField
                fullWidth
                name="number"
                id="number"
                placeholder="(123) 456 - 7890"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={phone} alt="phone" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4.82} sx={{ mt: "10px" }}>
              <InputLabel
                htmlFor="whatsapp"
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Whatsapp
              </InputLabel>
              <TextField
                fullWidth
                name="whatsapp"
                id="whatsapp"
                placeholder="Company name"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={phone} alt="phone" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4.82} sx={{ mt: "10px" }}>
              <InputLabel
                htmlFor="country"
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Country
              </InputLabel>
              <TextField
                fullWidth
                name="country"
                id="country"
                placeholder="John Carter"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={location} alt="location" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4.82} sx={{ mt: "10px" }}>
              <InputLabel
                htmlFor="address"
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Address
              </InputLabel>
              <TextField
                fullWidth
                name="address"
                id="address"
                placeholder="Email address"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={location} alt="location" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sx={{ mt: -5 }}>
          <Box sx={{ position: "relative", width: "max-content", mb: "55px" }}>
            <img src={person} alt="person" />
            <Box
              sx={{
                position: "absolute",
                bottom: "-30px",
                right: "50%",
                transform: "translateX(50%)",
              }}
            >
              <IconButton>
                <img src={camera} alt="camera" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ position: "relative", width: "max-content" }}>
            <img src={person} alt="person" />
            <Box
              sx={{
                position: "absolute",
                bottom: "-30px",
                right: "50%",
                transform: "translateX(50%)",
              }}
            >
              <IconButton>
                <img src={camera} alt="camera" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ mb: "27px", ...DM_SANS }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "17.3117px",
                color: "#170F49",
                mb: "5px",
                textAlign: "center",
              }}
            >
              Company Details
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12.9838px",
                color: "#6F6C90",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisc.
            </Typography>
          </Box>
          <Grid
            container
            justifyContent="center"
            spacing={2.5}
            sx={{
              "& .MuiFormControl-root": {
                height: "47.61px",
              },
              "& .MuiInputBase-root": {
                height: "47.61px",
                fontSize: "12px",
              },
            }}
          >
            <Grid item xs={4.82}>
              <InputLabel
                htmlFor="companyName"
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Company Name
              </InputLabel>
              <TextField
                fullWidth
                name="companyName"
                id="companyName"
                placeholder="John Carter"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={house} alt="house" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4.82}>
              <InputLabel
                htmlFor="companyEmail "
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Company Email
              </InputLabel>
              <TextField
                fullWidth
                name="companyEmail"
                id="companyEmail"
                placeholder="Email address"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={mail} alt="mail" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4.82} sx={{ mt: "10px" }}>
              <InputLabel
                htmlFor="companyNumber"
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Company Number
              </InputLabel>
              <TextField
                fullWidth
                name="companyNumber"
                id="companyNumber"
                placeholder="(123) 456 - 7890"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={phone} alt="phone" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4.82} sx={{ mt: "10px" }}>
              <InputLabel
                htmlFor="companyWebsite"
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Company Website
              </InputLabel>
              <TextField
                fullWidth
                name="companyWebsite"
                id="companyWebsite"
                placeholder="Company name"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={phone} alt="phone" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={9.64} sx={{ mt: "10px" }}>
              <InputLabel
                htmlFor="companyDescription"
                sx={{
                  color: "#170F49",
                  fontWeight: 500,
                  fontSize: "12.9838px",
                  mb: 1.5,
                  ...DM_SANS,
                }}
              >
                Company Description
              </InputLabel>
              <TextField
                fullWidth
                name="companyDescription"
                id="companyDescription"
                placeholder="John Carter"
                sx={{
                  background: "#fff",
                  border: "0.721321px solid #EFF0F7",
                  boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                  borderRadius: "33.1807px",
                  px: 0.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={pensil} alt="pensil" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ position: "relative", width: "100%" }}>
        <ProgressBar percentage={8} label="Fill Your Details!" stepNumber={2} />
        <Link to="/step-three" style={{ textDecoration: "none" }}>
          <NextButton label="Next step" />
        </Link>
      </Box>
    </Container>
  );
}
