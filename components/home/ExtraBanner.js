import { Box, Container, Grid, Input, Typography } from "@mui/material";
import Image from "next/image";
import { bannerData } from "../../pages/api/data";
function ExtraBanner() {
  return (
    <>
      <section>
        <Container maxWidth="xl">
          <Box sx={classes.rootBox}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} xl={6}>
                <Box>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={classes.title}
                    gutterBottom={true}
                  >
                    <Typography color="primary" variant="h3" component="span">
                      {bannerData.header_p1}
                    </Typography>
                    <Typography variant="h3" component="span">
                      {bannerData.header_p2}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                    sx={classes.p}
                  >
                    {bannerData.description}
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
                      style={{ justifyContain: "" }}
                      sx={classes.form.button}
                    >
                      Subscribe
                    </button>
                  </Box>
                  <Box sx={classes.partner}>
                    <Typography component="span">Sponsored by:</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
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
                <Box>
                  <Image
                    loading="lazy"
                    height="900"
                    width="900"
                    src={bannerData.image}
                    alt="banner-image"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
}

export default ExtraBanner;

const classes = {
  rootBox: {
    textAlign: "center",
    padding: 20,
  },
  title: {
    span: {
      fontWeight: "bold",
      lineHeight: 1.39,
      letterSpacing: "-.7px",
      fontSize: "70px",
    },
  },
  p: {
    fontSize: "20px",
    lineHeight: ["26px", 2.33],
    mb: ["20px", "30px"],
    color: "#90a4ae",
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
      cursor: "pointer",
      backgroundColor: "#793677",
      borderRadius: "4px",
      padding: "0 15px",
      ml: "45px",
      width: "180px",
    },
  },

  partner: {
    display: "flex",
    span: {
      fontSize: 17,
      color: "#566272",
      lineHeight: 1,
      opacity: 0.6,
      display: "block",
    },
  },
};
