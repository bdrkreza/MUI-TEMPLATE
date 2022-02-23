import { Box, Card, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "../../pages/api/data";

const data = {
  header_title: "Customer Comments",
  header_desc: "Why customers love us",
};
SwiperCore.use([Thumbs, Autoplay]);
function Testimonials() {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const infoParams = {
    spaceBetween: 10,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  const contentParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section
      style={{ minHeight: "600px", backgroundColor: "var(--color-section)" }}
    >
      <Container maxWidth="md">
        <Box sx={classes.headerBox}>
          <Typography component="h1">{data.header_title}</Typography>
          <Typography component="h2">{data.header_desc}</Typography>
          <hr />
        </Box>

        <>
          <Card
            sx={{
              textAlign: "center",
              bgcolor: "var(--color-primary)",
            }}
          >
            <Swiper
              id="testimonialsContent"
              thumbs={{ swiper: thumbsSwiper }}
              {...contentParams}
            >
              {testimonialData.map((testimonialText, index) => (
                <SwiperSlide key={`testimonial-content-${index}`}>
                  <Typography sx={classes.testimonialsContent} as="p">
                    {testimonialText.content}
                  </Typography>
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>
        </>

        <Box sx={classes.testimonials}>
          <Swiper
            id="testimonialsInfo"
            onSwiper={setThumbsSwiper}
            watchSlidesVisibility
            watchSlidesProgress
            {...infoParams}
          >
            {testimonialData.map((data, index) => (
              <SwiperSlide key={`testimonial-info-${index}`}>
                <Image
                  loading="lazy"
                  width="60"
                  height="60"
                  src={data.image}
                  alt="testimonials image"
                />
                <Typography>
                  <Typography component="h3">{data.name}</Typography>
                  <Typography component="span">{data.designation}</Typography>
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </section>
  );
}

export default Testimonials;

const classes = {
  headerBox: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
    h1: {
      fontSize: "50px",
      color: "var(--color-text)",
      lineHeight: "1.6 1.5",
      fontWeight: "bold",
      letterSpacing: "-0.5px -1.5px",
    },
    h2: {
      fontSize: "22px",
      color: "var(--color-paragraph)",
      lineHeight: "1.6 1.5",
      letterSpacing: "-0.5px -1.5px",
    },
    hr: {
      width: "240px",
      border: "solid 1px var(--color-secondary)",
    },
  },

  testimonials: {
    "#testimonialsInfo": {
      textAlign: "center",
      marginTop: "30px",
      width: "100%",
      maxWidth: "820px",
      ".swiper-slide": {
        cursor: "pointer",
        borderTop: "4px solid transparent",
        position: "relative",
        paddingLeft: "0px",
        paddingTop: "20px",
        paddingBottom: "0",
        minHeight: "auto",
        "&.swiper-slide-thumb-active": {
          borderColor: "var(--color-secondary)",
        },
      },
      img: {
        borderRadius: "50%",
        display: "block",
        top: "50%",
      },
      h3: {
        marginTop: 1,
        fontSize: "18px",
        lineHeight: 1,
        color: "var(--color-secondary)",
      },
      span: {
        color: "var(--color-text)",
        opacity: "0.8",
        fontSize: "15px",
        lineHeight: 1,
        display: "block",
        marginTop: "10px",
      },
    },
  },
  testimonialsContent: {
    fontSize: "32px",
    color: "var(--color-text)",
    lineHeight: 2.3,
    textAlign: "center",
    fontFamily: "special",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "820px",
  },
};
