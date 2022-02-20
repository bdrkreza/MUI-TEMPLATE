import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import { Button, Container, Link, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import logo from "../../assets/boost-1-1.png";

const data = {
  title: "Boost your agencies by choosing Ninja Developers",
  desc: `Create custom landing pages with Shades that convert more
  visitors than any website, no coding required.`,
  feature: [
    {
      title: "Unlimited design possibility",
      icon: BookmarkAddedIcon,
    },
    {
      title: "Completely responsive features",
      icon: DomainVerificationIcon,
    },
    {
      title: "Easy to customize plugins",
      icon: CheckCircleIcon,
    },
  ],
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function BoostAgencies() {
  return (
    <Container maxWidth="xl">
      <hr style={classes.hr} />
      <Box sx={{ flexGrow: 1, backgroundColor: "var(--color-section)" }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={12} lg={7}>
            <Item sx={{ backgroundColor: "var(--color-cart)" }}>
              <Image
                sx={{ width: "100%" }}
                src={logo}
                alt="Live from space album cover"
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={12} lg={5}>
            <Item sx={{ backgroundColor: "var(--color-cart)" }}>
              <Typography component="h3" sx={classes.title}>
                {data.title}
              </Typography>
              <Typography sx={classes.p}>{data.desc}</Typography>
            </Item>
            <Stack
              spacing={4}
              sx={{
                mt: 6,
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {data.feature.map((item) => {
                return (
                  <Item key={item.title} sx={classes.listTitle}>
                    <BookmarkAddedIcon
                      sx={{ mr: 2, color: "var(--color-text)" }}
                    />
                    {item.title}
                  </Item>
                );
              })}
            </Stack>
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

export default BoostAgencies;

const classes = {
  hr: {
    marginTop: "60px",
    border: "solid 1px red",
  },
  title: {
    fontSize: "50px",
    color: "var(--color-text)",
    lineHeight: "1.6 1.5",
    fontWeight: "bold",
    letterSpacing: "-1.5px",
  },
  p: {
    fontSize: "20px",
    color: "var(--color-paragraph)",
    lineHeight: "1.5",
    letterSpacing: "-0.5px",
    mt: 4,
  },

  listTitle: {
    display: "flex",
    fontSize: "17px",
    backgroundColor: "var(--color-cart)",
    color: "var(--color-title)",
    fontWeight: "bold",
  },
  button: {
    mt: 5,
    backgroundColor: "var(--color-primary)",
    borderRadius: "4px",
    border: "solid 1px var(--color-secondary)",
    fontSize: "20px",
    color: "var(--color-secondary)",
    padding: "0 15px",
    marginLeft: "20px",
    width: 200,
    height: 50,
  },
};
