import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { SERVICES_DATA } from "../../../pages/api/data";

export default function ServiceSection() {
  const data = {
    header_title: "Quality features",
    header_desc: "Meet exciting feature of app",
  };
  return (
    <Container maxWidth="xl">
      <Box sx={classes.rootBox}>
        <Typography component="h2">{data.header_title}</Typography>
        <Typography component="h3">
          {data.header_desc}
        </Typography>
        <hr />
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {SERVICES_DATA.map((data, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Box key={data.name}>
              <Card sx={classes.card}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      sx={classes.card.title}
                      component="div"
                      variant="h5"
                    >
                      {data.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      component="div"
                      variant="outlined"
                      sx={classes.card.desc}
                    >
                      {data.text}
                    </Typography>
                  </CardContent>
                </Box>
                {/* <CardMedia
                  component="img"
                  sx={{ width:"100%"}}
                  image={data.src}
                  alt="Live from space album cover"
                /> */}
                <Image
                  loading="lazy"
                  width="400"
                  height="100%"
                  src={data.image}
                  alt=""
                />
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
    h2: {
      fontSize: "30px",
      color: "var(--color-title)",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "25px",
      color: "var(--color-paragraph)",
      fontWeight: "bold",
    },
    hr: {
      width: "250px",
      border: "solid 1px var(--color-secondary)",
    },
  },
  card: {
    display: "flex",
    backgroundColor: "var(--color-cart)",
    minHeight: "270px",
    overflow: "hidden",
    maxHeight: "260px",
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
  },
};
