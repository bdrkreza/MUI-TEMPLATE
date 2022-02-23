import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import bannerImg from "../../assets/banner-image-1-1.png";

const content = {
  title: "About",
  title1: "Hi, I am Rezaul Karim",
  title2: "Web Design & Developer",
  desc: `I am from Dhaka, Bangladesh. A place of beauty and nature. Since
    my childhood, i love art and design. I always try to design stuff
    with my unique point of view. I also love to create things that
    can be use full to others. I started coding since I was in high
    school. Coding is also an art for me. I love it and now I have the
    opportunity to design along with the coding. I find it really
    interesting and I enjoyed the process a lot`,
};
export default function AboutMe() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
            <Typography sx={{ fontWeight: "bold", fontSize: 35 }}>
              {content.title}
              <span
                style={{ color: "var(--color-secondary)", marginLeft: "10px" }}
              >
                Us
              </span>
            </Typography>
            <Typography>{content.title1}</Typography>
            <Typography sx={{ display: "flex" }}>
              <Typography mr={2}>Freelance</Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "var(--color-text)",
                lineHeight: "1.5",
                letterSpacing: "-0.5px",
                p: 3,
              }}
            >
              {content.desc}
            </Typography>
            <Divider />
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "1.5",
                fontWeight: "bold",
                letterSpacing: "-0.5px",
                p: 3,
              }}
            >
              I love to work in User Experience & User Interface designing.
              Because I love to solve the design problem and find easy and
              better solutions to solve it. I always try my best to make good
              user interface with the best user experience. I have been working
              as a Visual designer from 6.5 years.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            sx={{ display: "flex", alignItems: "center", minHeight: "650px" }}
          >
            <Image src={bannerImg} height={1000} alt="" />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
