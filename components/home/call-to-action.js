import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import btnShape from "../../assets/cta-btn-shape-1.svg";
import BgShape from "../../assets/cta-shape-1.svg";

function CallToAction() {
  return (
    <Container sx={{ mt: 5 }}>
      <Box sx={classes.wrapper}>
        <Container maxWidth="xl">
          <Paper>
            <Box sx={classes.inner}>
              <Typography component="span">
                Hire the world’s best developers <br />
                and designers around!
              </Typography>
              <Image loading="lazy" position="absolute" src={BgShape} alt="" />
              <Box sx={classes.btnWrapper}>
                <Button sx={classes.btn}>HIRE DEVELOPERS</Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Container>
  );
}

export default CallToAction;

const classes = {
  inner: {
    padding: "45px 30px 50px",

    position: "relative",
    zIndex: "0",
    backgroundColor: "var(--color-secondary)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    textAlign: "center left",
    flexDirection: "column row",
    justifyContent: "space-between",
    span: {
      color: "var(--color-text)",
      fontWeight: "bold",
      fontSize: 30,
      lineHeight: [1.24, 1.53],
      padding: "0 15px",
    },
  },
  btn: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-text)",
    borderRadius: "5px",
    fontSize: "17px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    fontFamily: "body",
    padding: "10px 24px",
    position: "relative",
    "&:before, &:after": {
      content: '" "',
      position: "absolute",
      width: "73px",
      height: "26px",
      backgroundImage: `url(${btnShape})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      bottom: "calc(100% + 10px)",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "&:after": {
      bottom: "auto",
      top: "calc(100% + 10px)",
      transform: "translateX(-50%) rotate(180deg)",
    },
    "&:hover": {
      backgroundColor: "tomato",
      color: "var(--color-text)",
    },
  },
};
