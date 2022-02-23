import { Box, Container, Grid, Input, Typography } from "@mui/material";
import Image from "next/image";
import bannerImg from "../../assets/banner-image-1-1.png";
import { bannerData } from "../../pages/api/data";

function Banner() {
  return (
    <>
      <Container maxWidth="xl" sx={classes.banner}>
        <Grid container spacing={2}>
          <Box sx={classes.rootBox}>
            <Grid item xs={12} md={6} xl={6}>
              <Box>
                <Typography sx={classes.title}>
                  Great software is built with amazing developers
                </Typography>
                <Typography sx={classes.paragraph}>
                  We help build and manage a team of world-class developers
                  <br /> to bring your vision to life
                </Typography>
                <Box sx={classes.form}>
                  <Input
                    sx={classes.form.input}
                    name="subscribe"
                    id="subscribe"
                    placeholder="Subscribe newsletter"
                  />
                  <button
                    type="submit"
                    sx={classes.form.button}
                    style={{ color: "var(--color-button-text)" }}
                  >
                    Subscribe
                  </button>
                </Box>
                <Box sx={classes.partner}>
                  <Typography component="span">Sponsored by:</Typography>
                  <Box sx={classes.partner.box}>
                    {bannerData.brand.map((img, index) => (
                      <Box key={index} sx={{ ml: 2 }}>
                        <Image
                          loading="lazy"
                          src={img.img}
                          width="100"
                          height="28"
                          alt=""
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <Box sx={classes.image}>
                <Image src={bannerImg} height={900} alt="" />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Banner;

const classes = {
  banner: {
    backgroundColor: "var(--color-section)",
    overflow: "hidden",
  },
  rootBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
    lineHeight: [1.39],
    letterSpacing: ["-.7px", "-1.5px"],
    mb: ["15px", "20px"],
    fontSize: "70px",
  },
  paragraph: {
    fontSize: "20px",
    lineHeight: ["26px", 2.33],
    mb: "30px",
    color: "var(--color-paragraph)",
  },
  form: {
    mb: "60px",
    display: "flex",
    input: {
      borderRadius: "4px",
      backgroundColor: "#fff",
      width: "375px",
      height: "65px",
      padding: "0 15px 0 25px",
      fontSize: "20px",
      border: "none",
      outline: "none",
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
    },
    button: {
      fontSize: "20px",
      backgroundColor: "var(--color-button)",
      borderRadius: "4px",
      border: "solid 1px var(--color-button-text)",
      padding: "0 15px",
      ml: "45px",
      width: "180px",
    },
  },
  image: {
    marginTop: 5,
    img: {
      position: "relative",
    },
  },
  partner: {
    display: "flex",
    box: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      alignItems: "center",
    },
  },
};
