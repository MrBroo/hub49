import { Box, Card } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation]);

export default function PostSlider(props) {
  const { data } = props;

  return (
    <Box
      sx={{
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
      </Swiper>
    </Box>
  );
}
