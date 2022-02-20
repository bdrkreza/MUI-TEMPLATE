import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
const classes = {
  root: {
    position: "relative",
    width: "50%",
  },
  cardHovered: {
    opacity: 1,
    display: "block",
    width: "100%",
    height: "auto",
    transition: ".5s ease",
    backfaceVisibility: "hidden",
  },
  middle: {
    transition: ".5s ease",
    opacity: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    "&:hover": {
      opacity: 1,
    },
  },
};

const data = {
  title: "title",
  caption: "caption",
  description: "description",
  img: "https://via.placeholder.com/310x140",
};
export default function WebDesignProject() {
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            sx={classes.cardHovered}
            component="img"
            alt={data.alt}
            height="140"
            image={data.img}
            title={data.title}
          />
          <CardContent sx={classes.middle}>
            <Typography gutterBottom variant="h5" component="h2">
              {data.caption}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
