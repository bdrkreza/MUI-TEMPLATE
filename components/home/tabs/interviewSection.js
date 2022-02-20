import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { INTERVIEWDATA } from "../../../pages/api/data";
export default function Interview() {
  return (
    <section>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {INTERVIEWDATA.map((data, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card sx={classes.cart}>
              <Grid xs={3} sm={4} md={4} sx={classes.root}>
                <Image
                  component="img"
                  width="250px"
                  src={data.image}
                  alt="Live from space album cover"
                />
              </Grid>

              <Grid xs={9} sm={8} md={8} sx={classes.rootBox}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="h4" variant="h5">
                    {data.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="h5"
                  >
                    {data.description}
                  </Typography>
                </CardContent>

                <Link href="/" passHref>
                  <Typography
                    sx={classes.button}
                  >
                    SEA MORE
                    <ArrowRightAltIcon />
                  </Typography>
                </Link>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

const classes = {
  cart:{
    display: "flex",
    backgroundColor: "var(--color-cart)",
  },
  root: {
    backgroundColor: "793677",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "200px",
    minHeight: "200px",
  },
  rootBox: {
    display: "flex",
    flexDirection: "column",
    h4: {
      fontSize: "20px",
      color: "var(--color-text)",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "15px",
      color: "var(--color-paragraph)",
      fontWeight: "bold",
    },
  },
  button:{
    display: "flex",
    justifyContent: "center",
    fontSize: "18px",
    color: "#FFC573",
    fontWeight: "bold",
    cursor: "pointer",
  }
};
