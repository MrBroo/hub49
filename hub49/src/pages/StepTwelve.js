import { Box, Button, Typography } from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import ProgressBar from "../components/ProgressBar";
import PostSlider from "../modules/stepEight/PostSlider";
import { POPPINS } from "../utils/config";
import downloadIcon from "../assets/icons/download.svg";

import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import frame4 from "../assets/frame4.svg";
import frame5 from "../assets/frame5.svg";
import frame6 from "../assets/frame6.svg";
import frame7 from "../assets/frame7.svg";
import frame8 from "../assets/frame8.svg";

export default function StepTwelve() {
  const data = [
    { id: 1, img: frame1 },
    { id: 2, img: frame2 },
    { id: 3, img: frame3 },
    { id: 4, img: frame4 },
    { id: 5, img: frame5 },
    { id: 6, img: frame6 },
    { id: 7, img: frame7 },
    { id: 8, img: frame5 },
    { id: 9, img: frame8 },
    { id: 10, img: frame3 },
    { id: 11, img: frame1 },
    { id: 12, img: frame2 },
    { id: 13, img: frame3 },
    { id: 14, img: frame4 },
    { id: 15, img: frame5 },
    { id: 16, img: frame6 },
    { id: 17, img: frame7 },
    { id: 18, img: frame5 },
    { id: 19, img: frame8 },
    { id: 20, img: frame3 },
  ];

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <HubBage />
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#4C4C4C",
            fontWeight: 700,
            fontSize: "30.9042px",
            textAlign: "center",
            maxWidth: "944px",
            width: "100%",
            ...POPPINS,
          }}
        >
          <span style={{ color: "#47B2FF" }}> Congrats! </span>
          You Are All Set For
          <span style={{ color: "#47B2FF" }}>
            {" "}
            The Full-Year! <br /> See You Next Year!{" "}
          </span>
          & Keep In Touch For Our
          <span style={{ color: "#47B2FF" }}> News & Offers! </span>
        </Typography>
      </Box>
      <Box>
        <PostSlider data={data} />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            endIcon={<img src={downloadIcon} alt="download" />}
            sx={{
              ml: 15,
              mb: 1.5,
              py: 0.6,
              px: 2.5,
              color: "#47B2FF",
              textTransform: "unset",
              border: "1.5px solid #47B2FF",
              boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "16px",
              ...POPPINS,
            }}
          >
            Download Content & Plan
          </Button>
        </Box>
        <ProgressBar percentage={100} label="Congrats!!" stepNumber={12} />
      </Box>
    </Container>
  );
}
