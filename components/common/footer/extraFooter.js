import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography
} from "@mui/material";
import Logo from "../brandLogo";
import { menuItem } from "../menuItem";

export default function ExtraFooter(props) {
  const content = {
    header: "Lorem ipsum dolor sit amet",
    description:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.",
    contact1: "Address",
    contact1desc1: "1652 Cordia Cir",
    contact1desc2: " Newton, North Carolina(NC), 28658",
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
    ...props.content,
  };

  return (
    <section style={{ backgroundColor: 'var(--color-cart)', marginTop: "70px" }}>
      <Container maxWidth="xl" sx={{ padding: 2 }}>
        <Box>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h2" gutterBottom={true}>
                {content.header}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {content["description"]}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{color:"var(--color-secondary)", backgroundColor:"var(--color-cart)"}}>
              <div className={classes.midColumn} >
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar sx={classes.iconWrapper}>
                      <RoomIcon
                        sx={classes.iconWrapper.icon}
                        color="primary"
                        fontSize="small"
                      />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>
                      {content.contact1}
                    </Typography>
                    <Typography variant="body2" >
                      {content.contact1desc1}
                    </Typography>
                    <Typography variant="body2">
                      {content.contact1desc2}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex ">
                  <div>
                    <Avatar sx={classes.iconWrapper}>
                      <EmailIcon
                        sx={classes.iconWrapper.icon}
                        color="primary"
                        fontSize="small"
                      />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>
                      {content.contact2}
                    </Typography>
                    <Typography variant="body2">
                      {content.contact2desc}
                    </Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{color:"var(--color-secondary)", backgroundColor:"var(--color-section)"}}>
              <Box display="flex" mb={3} >
                <div>
                  <Avatar sx={classes.iconWrapper}>
                    <WebAssetIcon
                      sx={classes.iconWrapper.icon}
                      color="primary"
                      fontSize="small"
                    />
                  </Avatar>
                </div>
                <Box ml={2} >
                  <Typography variant="h6" gutterBottom={true}>
                    {content.contact3}
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
                </Box>
              </Box>
              <Box display="flex" >
                <div>
                  <Avatar sx={classes.iconWrapper}>
                    <PhoneIcon
                      sx={classes.iconWrapper.icon}
                      color="primary"
                      fontSize="small"
                    />
                  </Avatar>
                </div>
            
                <Box ml={2} >
                  <Typography variant="h6" gutterBottom={true}>
                    {content.contact4}
                  </Typography>
                  <Typography variant="body2">
                    {content.contact4desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
  
      <footer>
        <Container maxWidth="xl">
        <Divider/>
          <Box
            py={6}
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            className={classes.rootBox}
          >
            <Link href="#" color="inherit" underline="none" passHref>
              <Logo />
            </Link>
            <Box component="nav" sx={classes.footerNav}>
              {menuItem.map(({ path, label }, index) => (
                <Box key={index}>
                  <Link
                    href={path}
                    variant="body1"
                    color="textPrimary"
                    sx={classes.footerLink}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Box>
            <Typography
              color="textSecondary"
              component="p"
              variant="caption"
              gutterBottom={false}
            >
              {content["copy"]}
            </Typography>
          </Box>
        </Container>
      </footer>
    </section>
  );
}

const classes = {
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginRight: "auto",
  },
  iconWrapper: {
    backgroundColor: "#F6F8FB",
    icon: {
      color: "blue",
    },
  },
  footerLink: {
    marginLeft: 5,
    marginRight: 2,
  },
};
