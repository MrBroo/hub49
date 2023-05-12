import { Box, Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import { DM_SANS, POPPINS } from "../utils/config";
import line from "../assets/icons/line2.svg";
import downloadIcon from "../assets/icons/download.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import video from "../assets/icons/video.svg";
import line2 from "../assets/icons/line3.svg";
import copy from "../assets/icons/copy.svg";
import StepElevenCongratsPage from "./StepElevenCongratsPage";
import { useState } from "react";

export default function StepEleven() {
  const [nextPage, setNextPage] = useState(false);

  console.log("qq", nextPage);

  return (
    <>
      {!nextPage ? (
        <Container>
          <Box sx={{ width: "100%" }}>
            <HubBage />
          </Box>
          <Box sx={{ textAlign: "center", maxWidth: "1000px", width: "100%" }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "30.9042px",
                color: "#4C4C4C",
                ...POPPINS,
              }}
            >
              <span style={{ color: "#47B2FF" }}> Congrats! </span>
              You Are at The Few Last Stages
            </Typography>
            <Typography
              sx={{ fontWeight: 700, fontSize: "20.9042px", color: "#4C4C4C" }}
            >
              To Start
              <span style={{ color: "#47B2FF" }}> Posting on Your Behalf</span>,
              Go Ahead & <span style={{ color: "#47B2FF" }}>Send</span> Your
              preferred
              <span style={{ color: "#47B2FF" }}> Social Media Accounts </span>
              Details From Your
              <span style={{ color: "#47B2FF" }}> Registered Email </span> That
              You Use For <span style={{ color: "#47B2FF" }}> HUB49 Login</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Card
              sx={{
                maxWidth: "297px",
                width: "100%",
                px: 1.4,
                pt: 1.5,
                border: "1px solid #EFF0F7",
                boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                borderRadius: "16px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "14.9042px",
                  color: "#4C4C4C",
                  textAlign: "center",
                  lineHeight: "30px",
                }}
              >
                <span style={{ color: "#47B2FF" }}>
                  {" "}
                  Not Comfortable Sharing{" "}
                </span>
                Your Details,
                <span style={{ color: "#47B2FF" }}> It’s Totally Ok </span>, You
                can
                <span style={{ color: "#47B2FF" }}>
                  {" "}
                  Download All Your Content And <br /> Plan{" "}
                </span>
                From This Link &{" "}
                <span style={{ color: "#47B2FF" }}>
                  {" "}
                  Schedule <br />{" "}
                </span>
                Your Content
                <span style={{ color: "#47B2FF" }}>
                  {" "}
                  At Your <br /> Convenience!{" "}
                </span>
              </Typography>

              <Box sx={{ textAlign: "center", mt: 1, ml: 6 }}>
                <img src={line} alt="line" />
              </Box>
              <Box sx={{ textAlign: "center", mb: "20px" }}>
                <Button
                  endIcon={<img src={downloadIcon} alt="download" />}
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#47B2FF",
                    textTransform: "unset",
                    border: "1.5px solid #47B2FF",
                    boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
                    borderRadius: "10px",
                    px: 1.2,
                    ...POPPINS,
                  }}
                >
                  Download Content & Plan
                </Button>
              </Box>
            </Card>
            <Card
              sx={{
                border: "1px solid #EFF0F7",
                boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                ml: "20px",
                pt: "26px",
                pb: "5px",
                pl: "40px",
                pr: "30px",
              }}
            >
              <Box sx={{ mr: "60px" }}>
                <Box sx={{ display: "flex", mb: "31px" }}>
                  <Box sx={{ mr: "35px" }}>
                    <Box sx={{ textAlign: "center" }}>
                      <img src={twitter} alt="twitter" />
                    </Box>
                    <Typography sx={{ ...socialtitle }}>Twitter</Typography>
                    <Typography sx={{ ...decription }}>
                      Send Your Twitter Details
                    </Typography>
                  </Box>
                  <Box>
                    <Box sx={{ textAlign: "center" }}>
                      <img src={instagram} alt="twitter" />
                    </Box>
                    <Typography sx={{ ...socialtitle }}>Instagram</Typography>
                    <Typography sx={{ ...decription }}>
                      Send Your Instagram Details
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ mr: "21px" }}>
                    <Box sx={{ textAlign: "center" }}>
                      <img src={facebook} alt="twitter" />
                    </Box>
                    <Typography sx={{ ...socialtitle }}>Facebook</Typography>
                    <Typography sx={{ ...decription }}>
                      Link Facebook to Instagram
                    </Typography>
                  </Box>
                  <Box>
                    <img src={video} alt="video" />
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <img src={line2} alt="line" />
                </Box>
              </Box>
              <Box>
                <Card
                  sx={{
                    border: "0.721321px solid #EFF0F7",
                    boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
                    borderRadius: "10px",
                    maxWidth: "273px",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "10px",
                      color: "#6F6C90",
                      pt: "19px",
                      pl: "18px",
                      pb: "19px",
                      pr: "17px",
                      ...DM_SANS,
                    }}
                  >
                    Email To: [] <br />
                    Hello Hub49 Team, <br />
                    Below are my social accounts details that you can <br />
                    upload my content to: <br />
                    Instagram: <br />
                    Username: [Username] <br />
                    Password: [Password] <br />
                    Twitter: <br />
                    Username: [Username] <br />
                    Password: [Password] <br />
                    Thanks & Best Regards,
                  </Typography>
                </Card>
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#47B2FF",
                      background: "#FFFFFF",
                      border: "1.5px solid #47B2FF",
                      boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
                      borderRadius: "10px",
                      textTransform: "unset",
                      mt: "18px",
                    }}
                    endIcon={<img src={copy} alt="copy" />}
                  >
                    Copy Email Sample
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
          <Box sx={{ position: "relative", width: "100%" }}>
            <ProgressBar
              percentage={80}
              label="Setup Posting"
              stepNumber={11}
            />
            <NextButton onClick={() => setNextPage(true)} label="Next Step!" />
          </Box>
        </Container>
      ) : (
        <StepElevenCongratsPage />
      )}
    </>
  );
}

const socialtitle = {
  fontWeight: 500,
  textAlign: "center",
  fontSize: "18.5412px",
  color: "#001F41",
  ...POPPINS,
};

const decription = {
  fontWeight: 400,
  fontSize: "12.9788px",
  textAlign: "center",
  color: "rgba(0, 31, 65, 0.6)",
};
