/* eslint-disable @next/next/no-img-element */
import { CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";
import classes from "../../../styles/project.module.css";
export default function AllProject() {
  return (
    <Box sx={{ width: "100%", height: 600, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={4} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <div className={classes.project_card}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <CardContent className={classes.project_card_details}>
                <Typography>
                  <Typography component="h1">{item.name}</Typography>
                  <Typography component="h4">{item.title}</Typography>
                </Typography>
                <Typography className={classes.link}>
                  <Link href="/" passHref>
                    Read More
                  </Link>
                </Typography>
              </CardContent>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    name: "Bed",
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    name: "Books",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    name: "Sink",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    name: "Kitchen",
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    name: "Blinds",
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    name: "Chairs",
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    name: "Laptop",
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    name: "Doors",
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    name: "Coffee",
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    name: "Storage",
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    name: "Candle",
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "We believe it’s important for everyone to have access to software",
  },
  {
    name: "Coffee table",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "We believe it’s important for everyone to have access to software",
  },
];
