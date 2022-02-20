import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  CardMedia,
  Container,
  Link,
  Modal,
  Typography
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import videoImg from "../../assets/video.png";
function VideoOne() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = {
    title: `Leading companies trust us
    to develop software`,
    desc: `We believe it’s important for everyone to have access to software
    especially when it comes to digital learning be navigate.`,
  };
  return (
    <section>
      <Container maxWidth="xl">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Box sx={classes.rootBox}>
            <Typography variant="h4" sx={classes.rootBox.title}>
              {data.title}
            </Typography>
            <Typography variant="h1" sx={classes.rootBox.p}>
              {data.desc}
            </Typography>
            <hr />
            <Link sx={classes.link}>
              <Typography>Explore Details</Typography>
              <ArrowRightIcon />
            </Link>
          </Box>
        </div>
        <Box sx={classes.videoBox}>
          <Image
            src={videoImg}
            width="1110"
            height="626"
            loading="lazy"
            alt=""
          />
          <Link
            path="/"
            aria-label="video btn"
            onClick={handleOpen}
            sx={classes.videoBtn}
          >
            <PlayArrowIcon />
          </Link>
        </Box>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="developer"
        aria-describedby="We believe it’s important for everyone to have access to software"
      >
        <CardMedia
          sx={classes.video}
          component="iframe"
          title="test"
          src="https://www.youtube.com/embed/VIDEO_ID"
        />
      </Modal>
    </section>
  );
}

export default VideoOne;

const classes = {
  rootBox: {
    textAlign: "center",
    padding: 10,
    width: "1000px",
    title: {
      fontSize: "50px",
      color: "var(--color-text)",
      lineHeight: "1.6 1.5",
      fontWeight: "bold",
      letterSpacing: "-0.5px -1.5px",
    },
    p: {
      fontSize: "22px",
      color: "var(--color-paragraph)",
      lineHeight: "1.6 1.5",
      letterSpacing: "-0.5px -1.5px",
      mt: 4,
    },
    hr: {

      width: "250px",
      border: "solid 1px var(--color-secondary)",
    },
  },
  link: {
    display: "flex",
    textDecoration: "none",
    justifyContent: "center",
    cursor: "pointer",
    color: "var(--color-secondary)",
    "&:hover": {
      color: "green",
    },
  },
  videoBox: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    img: {
      borderRadius: "50px",
      width: "100%",
    },
  },

  videoBtn: {
    width: 66,
    height: 66,
    borderRadius: "50%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    cursor: "pointer",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    transition: "500ms ease",
    svg: {
      fontSize: "40px",
      color: "green",
    },
    "&:hover": {
      svg: {
        color: "red",
      },
    },
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    height: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};
