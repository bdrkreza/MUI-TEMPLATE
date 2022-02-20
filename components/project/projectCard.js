import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, Grid, Paper, styled } from "@mui/material";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import classes from "../../styles/project.module.css";
import ProjectDetails from "./projectDetails";
import SlideImage from "./SlideImage";
import ProjectVideoCard from "./videoCard";

export default function ProjectCard() {
  const [move, setMove] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const animationMove = useSpring({
    from: {
      left: `${!move ? "5%" : "50%"}`,
    },
    left: `${move ? "4%" : "55%"}`,
  });

  const handlerSlider = () => {
    setMove(true);
  };

  const handlerVideo = () => {
    setMove(false);
  };
  return (
    <section>
      <div className={classes.main_container}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={12} lg={6}>
            <Item className={classes.project_card_container}>
              <SlideImage />
              <div>
                <Button
                  sx={{ mt: 1 }}
                  onClick={handlerSlider}
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                >
                  Video Play Option
                </Button>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Item className={classes.project_card_container}>
              <ProjectVideoCard />
              <div>
                <Button
                  sx={{ mt: 2 }}
                  onClick={handlerVideo}
                  variant="contained"
                  startIcon={<KeyboardDoubleArrowLeftIcon />}
                >
                  Slide Option
                </Button>
              </div>
            </Item>
          </Grid>
        </Grid>

        <animated.div
          style={animationMove}
          className={classes.main_container__option_viewport}
        >
          <ProjectDetails />
        </animated.div>
      </div>
    </section>
  );
}
