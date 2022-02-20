import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  CardMedia,
  Container,
  Link,
  Modal
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import videoImg from "../../assets/video.png";
function ProjectVideoCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section>
      <Container maxWidth="xl">
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

export default ProjectVideoCard;

const classes = {
  rootBox: {
    textAlign: "center",
    padding: 10,
    width: "1000px",
    title: {
      fontSize: "50px",
      color: "black",
      lineHeight: "1.6 1.5",
      fontWeight: "bold",
      letterSpacing: "-0.5px -1.5px",
    },
    p: {
      fontSize: "22px",
      color: "#90a4ae",
      lineHeight: "1.6 1.5",
      letterSpacing: "-0.5px -1.5px",
      mt: 4,
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
  video:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height:700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
};
