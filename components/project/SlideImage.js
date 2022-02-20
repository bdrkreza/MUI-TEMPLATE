import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "../../styles/project.module.css";

export default function SlideImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Card sx={{ maxWidth: 645 }}>
      <CardActionArea>
        <Swiper
          className={classes.my_swiper_thumbs}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => (
            <SwiperSlide key={index}>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="my_swiper"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => (
            <SwiperSlide key={index}>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </CardActionArea>
    </Card>
  );
}
