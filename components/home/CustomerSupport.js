import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import img1 from "../../assets/cta-2-1.png";

const content = {
  header_p1: "Free Customer Support",
  header_p2: " to ensure what you like to expect",
  description: `We offer a risk-free trial period of up to two weeks. You will only
   have to pay if you are happy with the developer and wish to continue.
    If you are unsatisfied, we’ll refund payment or fix issues on our dime period customers.`,
  description2:
    "If you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues.",
  image: img1,
};

function CustomerSupport() {
  return (
    <>
      <section>
        <Container maxWidth="xl">
          <Box sx={classes.rootBox}>
            <Grid container spacing={8}>
              <Grid item xs={12} md={12} lg={6}>
                <Box display="flex" height="100%">
                  <Box my="auto">
                    <Typography sx={classes.title} component="h3">
                      <span style={{ color: "var(--color-secondary)" }}>
                        {content.header_p1}
                      </span>
                      {content.header_p2}
                    </Typography>

                    <Typography
                      sx={classes.p}
                      color="textSecondary"
                      paragraph={true}
                    >
                      {content.description}
                    </Typography>
                    <Typography
                      sx={classes.p}
                      color="textSecondary"
                      paragraph={true}
                    >
                      {content.description2}
                    </Typography>
                    <Box mt={3}>
                      <Link to="/" sx={{ textDecoration: "none" }}>
                        <Button sx={classes.button} variant="outlined">
                          Learn more
                          <ArrowForwardIcon />
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <Box sx={classes.box}>
                  <Image
                    src={content.image}
                    alt="Live from space album cover"
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

export default CustomerSupport;

const classes = {
  rootBox: {
    textAlign: "center",
    padding: 10,
  },
  box: {
    height: "100%",
  },
  title: {
    marginLeft: 2,
    fontSize: "50px",
    color: "var(--color-text)",
    lineHeight: "1.5",
    fontWeight: "bold",
  },
  p: {
    fontSize: "22px",
    color: "var(--color-paragraph)",
    lineHeight: "1.5",

    mt: 4,
  },
  button: {
    mt: 5,
    fontSize: "20px",
    color: "var(--color-secondary)",
    border: "solid 1px var(--color-secondary)",
    borderRadius: "4px",
    padding: "0 15px",
    marginLeft: "20px",
    width: 200,
    height: 50,
  },
};
