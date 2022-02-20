import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import RoomIcon from "@mui/icons-material/Room";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Avatar,
  Button,
  Card,
  Container,
  IconButton,
  Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const content = {
  header: "Lorem ipsum dolor sit amet",
  description:
    "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.",
  contact1: "Address",
  contact1desc1: "83/1 indira road, tejgaon, dhaka",

  contact2: "Email",
  contact2desc: "hello@mui.dev",
  contact3: "Social Media",
  contact4: "Phone",
  contact4desc: "(318) 285-9856",
  brand: { image: "nereus-assets/img/nereus-light.png", width: 110 },
  copy: "© 2020 Nereus All rights reserved.",
  link1: "First Link",
  link2: "Second Link",
  link3: "Third Link",
  link4: "Fourth Link",
};

export default function Footer() {
  return (
    <section
      style={{ backgroundColor: "var(--color-primary)", marginTop: "40px" }}
    >
      <Container>
        <Card sx={{ flexGrow: 1, backgroundColor: "var(--color-primary)" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Item sx={classes.aboutBox}>
                <Typography component="h1">
                  About Us
                  <hr />
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officiis perferendis rem, aut aliquam neque nam? dolor sit
                    amet, consectetur adipisicing elit consectetur adipisicing
                    elit. Officiis perferendis rem, aut aliquam.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "var(--color-secondary)",
                      mt: 2,
                      border: "solid 1px var(--color-secondary)",
                    }}
                    startIcon={<PhoneCallbackIcon />}
                  >
                    CONTACT US
                  </Button>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Item sx={classes.contactBox}>
                <Box>
                  <Typography component="h1">
                    Contact
                    <hr />
                  </Typography>
                  <Box display="flex">
                    <div>
                      <Avatar sx={classes.iconWrapper}>
                        <EmailIcon
                          sx={classes.iconWrapper.icon}
                          color="primary"
                          fontSize="small"
                        />
                      </Avatar>
                    </div>
                    <Box ml={3}>
                      <Typography component="h2" gutterBottom={true}>
                        {content.contact2}
                        <Typography component="h3">
                          {content.contact2desc}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <div>
                      <Avatar sx={classes.iconWrapper}>
                        <RoomIcon
                          sx={classes.iconWrapper.icon}
                          color="primary"
                          fontSize="small"
                        />
                      </Avatar>
                    </div>
                    <Box ml={3}>
                      <Typography component="h2" gutterBottom={true}>
                        {content.contact1}
                        <Typography component="h3">
                          {content.contact1desc1}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Item sx={classes.socialBox}>
                <Box ml={2}>
                  <Typography component="h1" gutterBottom={true}>
                    {content.contact3}
                    <hr />
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officiis perferendis rem, aut aliquam neque nam?
                  </Typography>
                  <IconButton href="#" color="inherit">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </section>
  );
}

const classes = {
  aboutBox: {
    backgroundColor: "var(--color-primary)",
    minHeight: "215px",
    color: "var(--color-text)",
    h1: {
      fontSize: "30px",
      fontWeight: "bold",
    },
    hr: {
      ml: 0,
      border: "solid 2px var(--color-secondary)",
      width: "140px",
    },
  },
  contactBox: {
    backgroundColor: "var(--color-primary)",
    minHeight: "215px",
    color: "var(--color-text)",

    h1: {
      fontSize: "30px",
      fontWeight: "bold",
    },
    hr: {
      border: "solid 2px var(--color-secondary)",
      width: "140px",
      ml: 0,
    },
    h2: {
      fontSize: "17px",

      fontWeight: "bold",
    },
    h3: {
      fontSize: "14px",

      fontWeight: "bold",
    },
  },
  socialBox: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-text)",
    minHeight: "215px",

    hr: {
      ml: 0,
      border: "solid 2px var(--color-secondary)",
      width: "180px",
    },
    h1: {
      fontSize: "30px",
      fontWeight: "bold",
    },
    svg: {
      fontSize: "30px",

      color: "var(--color-secondary)",
      "&:hover": {
        color: "green",
      },
    },
  },
  iconWrapper: {
    backgroundColor: "var(--color-secondary)",
    icon: {
      color: "var(--color-primary)",
    },
  },
};
