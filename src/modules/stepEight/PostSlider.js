import { Box, Card } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import frame1 from "../../assets/frame1.svg";
import frame2 from "../../assets/frame2.svg";
import frame3 from "../../assets/frame3.svg";
import frame4 from "../../assets/frame4.svg";
import frame5 from "../../assets/frame5.svg";
import frame6 from "../../assets/frame6.svg";
import frame7 from "../../assets/frame7.svg";
import frame8 from "../../assets/frame8.svg";

export default function PostSlider() {
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
        "& .swiper": {
          width: "100%",
          height: "100%",
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
      <Swiper navigation={true} modules={[Navigation]} className="swiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Card
            sx={{
              display: "flex",
              py: "40px",
              px: "30px",
              background: "#F4F4F4",
              border: "1px solid #E4E5EA",
              boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
              borderRadius: "25px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "480px",
                width: "100%",
              }}
            >
              {data.map((item) => (
                <Box key={item.id} sx={{ mr: 0.5 }}>
                  <img src={item.img} width="91px" height="91px" alt="" />
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                background: "#E2E2E2",
                width: "5px",
                mr: "25px",
                ml: "20px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "480px",
                width: "100%",
              }}
            >
              {data.map((item) => (
                <Box key={item.id} sx={{ mr: 0.5 }}>
                  <img src={item.img} width="91px" height="91px" alt="" />
                </Box>
              ))}
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            sx={{
              display: "flex",
              py: "40px",
              px: "30px",
              background: "#F4F4F4",
              border: "1px solid #E4E5EA",
              boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
              borderRadius: "25px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "480px",
                width: "100%",
              }}
            >
              {data.map((item) => (
                <Box key={item.id} sx={{ mr: 0.5 }}>
                  <img src={item.img} width="91px" height="91px" alt="" />
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                background: "#E2E2E2",
                width: "5px",
                mr: "25px",
                ml: "20px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "480px",
                width: "100%",
              }}
            >
              {data.map((item) => (
                <Box key={item.id} sx={{ mr: 0.5 }}>
                  <img src={item.img} width="91px" height="91px" alt="" />
                </Box>
              ))}
            </Box>
          </Card>
        </SwiperSlide>
      </Swiper> */}
    </Box>
  );
}
