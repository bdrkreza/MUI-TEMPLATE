import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Container, Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import logo from "../../../assets/icons/Untitled-1-01.png";

const data = {
  title: "Why hire me for your next project?",
  description:
    "I love to work in User Experience & User Interface designing. Because I love to solve the design problem and find easy and better solutions to solve it. I always try my best to make good user interface with the best user experience. I have been working as a Visual designer from 6.5 years.",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function AboutSection() {
  return (
    <Container maxWidth="xl">
      <hr style={classes.hr} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={12} lg={7}>
            <Item sx={classes.imageBox}>
              <Image
                height="450px"
                src={logo}
                alt="Live from space album cover"
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={12} lg={5}>
            <Item sx={{ backgroundColor: "var(--color-cart)" }}>
              <Typography sx={classes.me}>
                ABOUT ME
                <hr />
              </Typography>
              <Typography component="h3" sx={classes.title}>
                {data.title}
              </Typography>
              <Typography sx={classes.p}>
                Meet my startup design agency
                <span style={{ color: "#F2BC62" }}> Shape Rex </span> Currently
                I am working at
                <span style={{ color: "#F2BC62" }}> CodeNext </span>
                as Product Designer. Before that I’ve worked at
                <span style={{ color: "#F2BC62" }}> SpurBee </span>, Dhaka as a
                UX, UI Designer.
              </Typography>
            </Item>
            {/* <Stack spacing={4} sx={classes.stack}>
              <Item sx={classes.listTitle}>{data.description}</Item>
            </Stack> */}
            <Link to="/" sx={{ textDecoration: "none" }}>
              <Button sx={classes.button} variant="outlined">
                Learn more <ArrowForwardIcon />
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutSection;

const classes = {
  hr: {
    marginTop: "20px",
    border: "solid 1px var(--color-secondary)",
  },
  imageBox: {
    textAlign: "center",
    height: "510px",
    backgroundColor: "var(--color-cart)",
  },
  me: {
    fontSize: "25px",
    color: "var(--color-title)",
    fontWeight: "bold",
    textAlign: "center",
    hr: {
      color: "#F2BC62",
      border: "solid 4px",
      width: "140px",
    },
  },

  title: {
    fontSize: "40px",
    color: "var(--color-text)",
    fontWeight: "bold",
  },
  p: {
    fontSize: "22px",
    color: "var(--color-text)",
    lineHeight: "1.5",
    letterSpacing: "-0.5px",
    mt: 4,
  },

  stack: {
    mt: 4,
    display: "flex",
    flexWrap: "wrap",
  },

  listTitle: {
    display: "flex",
    backgroundColor: "var(--color-cart)",
    fontSize: "17px",
    color: "var(--color-text)",
    fontWeight: "bold",
  },
  button: {
    mt: 5,
    color: "var(--color-secondary)",
    fontSize: "20px",
    border: "solid 1px var(--color-secondary)",
    borderRadius: "4px",
    padding: "0 15px",
    marginLeft: "20px",
    width: 200,
    height: 50,
  },
};
