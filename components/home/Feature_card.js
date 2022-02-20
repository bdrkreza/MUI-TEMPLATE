import { CardActionArea, CardActions, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CommentIcon from "../../assets/comment-1.svg";
export default function FeatureCard({ data }) {
  return (
    <>
      <Card sx={classes.card}>
        <CardActionArea>
          <Image
            sx={{ width: "100%" }}
            src={data.image}
            alt="Live from space album cover"
          />
          <CardContent>
            <Link href={data.path} sx={classes.link}>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
            </Link>
            <Typography
              variant="h2"
              sx={classes.link.comment}
              color="text.secondary"
            >
              <Image
                loading="lazy"
                width="25"
                height="23"
                src={CommentIcon}
                alt=""
              />
              <Typography sx={{ ml: 2 }}>{data.comments}</Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Learn more
          </Button> */}
        </CardActions>
      </Card>
    </>
  );
}

const classes = {
  card: {
    backgroundColor: "var(--color-cart)",
    maxWidth: 345,
    borderRadius: "10px",
  },
  link: {
    textDecoration: "none",
    div: {
      fontSize: "18px",
      color: "var(--color-text)",
      fontWeight: "bold",
    },
    "&:hover": {
      div: {
        color: "var(--color-secondary)",
        textDecoration:"underline"
      },
    },
    comment: {
      display: "flex",
      color:"var(--color-text)",
      mt: 4,
      alignItems: "center",
    },
  },
};
