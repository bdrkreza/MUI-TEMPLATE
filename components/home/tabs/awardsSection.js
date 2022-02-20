import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { awardData } from "../../../pages/api/data";

export default function Awards() {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {awardData.map((data, index) => (
          <Grid item xs={12} sm={4} md={6} key={index}>
            <Box key={data.name}>
              <Card sx={classes.card}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      sx={classes.card.title}
                      component="div"
                      variant="h5"
                    >
                      {data.name}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      component="div"
                      variant="outlined"
                      sx={classes.card.desc}
                    >
                      {data.description}
                    </Typography>
                  </CardContent>
                </Box>
                {/* <CardMedia
                  component="img"
                  sx={{ width:"100%"}}
                  image={data.src}
                  alt="Live from space album cover"
                /> */}

                <Box
                  sx={classes.card.imageBox}
                >
                  <Image
                    loading="lazy"
                    width="400px"
                    height="100%"
                    src={data.image}
                    alt=""
                  />
                </Box>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const classes = {
  rootBox: {
    textAlign: "center",
    marginBottom: 5,
  },
  card: {
    display: "flex",
    minHeight: "200px",
    backgroundColor:"var(--color-cart)",
    overflow: "hidden",
    maxHeight: "200px",
    title: {
      mb: 3,
      fontSize: "30px",
      color: "var(--color-text)",
      fontWeight: "bold",
    },
    desc: {
      fontSize: "17px",
      color: "var(--color-paragraph)",
      fontWeight: "bold",
    },
    imageBox:{
      backgroundColor: "var(--color-secondary)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  },
};
