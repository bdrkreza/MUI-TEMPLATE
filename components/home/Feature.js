import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FeatureData } from "../../pages/api/data";
import FeatureCard from "./Feature_card";

const data = {
  header_title: "Quality features",
  header_desc: "Tutorials that people love most",
};

function Feature() {
  return (
    <section>
      <Container
        maxWidth="xl"
        sx={{ minHeight: "600px", backgroundColor: "var(--color-section)" }}
      >
        <Box sx={classes.rootBox}>
          <Typography component="h2">{data.header_title}</Typography>
          <Typography component="h3">{data.header_desc}</Typography>
          <hr />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {FeatureData.map((data, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <FeatureCard data={data} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

export default Feature;

const classes = {
  rootBox: {
    textAlign: "center",
    marginBottom: 5,
    h2: {
      fontSize: "50px",
      color: "var(--color-title)",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "25px",
      color: "var(--color-paragraph)",
      fontWeight: "bold",
    },
    hr: {
      width: "410px",
      border: "solid 1px var(--color-secondary)",
    },
  },
  header_title: {
    color: "black",
    fontWeight: "bold",
  },
};
