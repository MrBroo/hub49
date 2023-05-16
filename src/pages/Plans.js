import { Box, Button, Typography } from "@mui/material";
import PlanTable from "../modules/stepFive/PlanTable";
import AreYouSureDialog from "../components/AreYouSureDialog";
import { INTER, POPPINS } from "../utils/config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState } from "react";

SwiperCore.use([Navigation]);

export default function Plans() {
  const [openDialog, setOpenDialog] = useState(false);

  const data = [
    {
      id: 1,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 2,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 3,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 4,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 5,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 6,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 7,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 8,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 9,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
    {
      id: 10,
      textOnPost:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carte",
      caption:
        "John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter John Carter",
      hashtags:
        "John Carter JohnCarter John Carter John Carter John Carter John",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        maxWidth: "1336px",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          mt: 2,
          "& .swiper": {
            maxWidth: "1270px",
            width: "100%",
          },
          "& .swiper-slide": {
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Swiper
          slidesPerView={1}
          speed={500}
          navigation={true}
          effect={"flip"}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              sx={{
                background: "#F4F4F4",
                border: "1px solid #E4E5EA",
                boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                borderRadius: "25px",
                display: "flex",
              }}
            >
              <PlanTable data={data.slice(0, 5)} />
              <Box sx={{ width: "5px", background: "#E2E2E2" }} />
              <PlanTable data={data.slice(5)} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                background: "#F4F4F4",
                border: "1px solid #E4E5EA",
                boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                borderRadius: "25px",
                display: "flex",
              }}
            >
              <PlanTable data={data.slice(0, 5)} />
              <Box sx={{ width: "5px", background: "#E2E2E2" }} />
              <PlanTable data={data.slice(5)} />
            </Box>
          </SwiperSlide>
        </Swiper>
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
            bottom: "-28px",
            right: "50%",
            transform: "translateX(50%)",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "17px", ...INTER }}>
            Plans
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
      <AreYouSureDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </Box>
  );
}
