import { Box, Button, Typography } from "@mui/material";
import PostSlider from "../modules/stepEight/PostSlider";
import { POPPINS, INTER } from "../utils/config";

import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import frame4 from "../assets/frame4.svg";
import frame5 from "../assets/frame5.svg";
import frame6 from "../assets/frame6.svg";
import frame7 from "../assets/frame7.svg";
import frame8 from "../assets/frame8.svg";
import { useState } from "react";
import AreYouSureDialog from "../components/AreYouSureDialog";

export default function Creations() {
  const [openDialog, setOpenDialog] = useState(false);

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        justifyContent: "space-between",
        maxWidth: "1336px",
        height: "100%",
        width: "100%",
      }}
    >
      <Box sx={{ mt: 2 }}>
        <PostSlider data={data} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mt: "-20px" }}>
          <Box>
            <Button
              sx={{
                color: "#47B2FF",
                textTransform: "unset",
                border: "1.5px solid #47B2FF",
                boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
                borderRadius: "10px",
                maxWidth: "222px",
                width: "100%",
                fontWeight: 600,
                fontSize: "16px",
                ...POPPINS,
              }}
            >
              Download Plan
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                ml: "39px",
                color: "#47B2FF",
                textTransform: "unset",
                border: "1.5px solid #47B2FF",
                boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
                borderRadius: "10px",
                maxWidth: "148px",
                width: "100%",
                fontWeight: 600,
                fontSize: "16px",
                ...POPPINS,
              }}
            >
              Upload Plan
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            background: "#fff",
            boxShadow: "0px -4px 15px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px 8px 0px 0px",
            py: "20px",
            px: "16px",
            borderBottom: "4px solid #47B2FF",
            bottom: "-22px",
            right: "50%",
            transform: "translateX(50%)",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "17px", ...INTER }}>
            Creations
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "-20px" }}>
          <Box>
            <Button
              sx={{
                py: "8px",
                mr: "46px",
                color: "#47B2FF",
                textTransform: "unset",
                border: "1.5px solid #47B2FF",
                boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
                borderRadius: "10px",
                maxWidth: "94px",
                width: "100%",
                fontWeight: 600,
                fontSize: "16px",
                ...POPPINS,
              }}
            >
              Refresh
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => setOpenDialog(true)}
              sx={{
                py: "8px",
                color: "#47B2FF",
                textTransform: "unset",
                border: "1.5px solid #47B2FF",
                boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
                borderRadius: "10px",
                maxWidth: "324px",
                width: "100%",
                fontWeight: 600,
                fontSize: "16px",
                ...POPPINS,
              }}
            >
              Confirm Plan & Send !!
            </Button>
          </Box>
        </Box>
      </Box>
      <AreYouSureDialog open={openDialog} onClose={() => setOpenDialog(true)} />
    </Box>
  );
}
