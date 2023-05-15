import { Box, Button, Typography } from "@mui/material";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import PostSlider from "../modules/stepEight/PostSlider";
import { POPPINS } from "../utils/config";
import { saveAs } from "file-saver";

import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import frame4 from "../assets/frame4.svg";
import frame5 from "../assets/frame5.svg";
import frame6 from "../assets/frame6.svg";
import frame7 from "../assets/frame7.svg";
import frame8 from "../assets/frame8.svg";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";

export default function StepEight(props) {
  const { setActive } = props;

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

  function downloadImages() {
    const urls = [];
    data.map((item) => {
      urls.push(item.img);
    });

    const zip = new JSZip();
    let count = 0;
    let count2 = 0;
    const zipFilename = "creations.zip";
    let nameFromURL = [];

    let the_arr = "";
    for (let i = 0; i < urls.length; i++) {
      the_arr = urls[i].split("/");
      nameFromURL[i] = the_arr.pop();
    }

    urls.forEach(function (url) {
      let filename = nameFromURL[count2];
      count2++;
      // loading a file and add it in a zip file
      JSZipUtils.getBinaryContent(url, (err, data) => {
        if (err) {
          throw err; // or handle the error
        }
        zip.file(filename, data, { binary: true });
        count++;
        if (count === urls.length) {
          zip.generateAsync({ type: "blob" }).then((content) => {
            saveAs(content, zipFilename);
          });
        }
      });
    });
  }

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
            maxWidth: "920px",
            width: "100%",
            ...POPPINS,
          }}
        >
          <span style={{ color: "#47B2FF" }}> Congrats! </span>
          Our Experts Finalized Your Posts Creations! Review &
          <span style={{ color: "#47B2FF" }}> Approve </span> For The
          <span style={{ color: "#47B2FF" }}> Next Steps! </span>
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
        <Button
          onClick={downloadImages}
          sx={{
            ml: 17,
            mb: 1.5,
            py: 0,
            color: "#47B2FF",
            textTransform: "unset",
            border: "1.5px solid #47B2FF",
            boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
            borderRadius: "10px",
            maxWidth: "222px",
            width: "100%",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "20px",
            ...POPPINS,
          }}
        >
          Download All Creations
        </Button>
        <ProgressBar
          percentage={56}
          label="Approve Creations!"
          stepNumber={8}
        />
        <NextButton onClick={setActive} label="Approve Creations!" />
      </Box>
    </Container>
  );
}
