import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import { AppBar, Container, Divider, Tabs, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import AllProject from "./AllProject";
import BrandingProject from "./BrandingProject";
import LogoProject from "./LogoProject";
import WebDesignProject from "./WebDesignProject";
const data = {
  header_title: "My work",
  header_desc:
    "I’ve had the pleasure of working with multiple Fortune 500 companies, designing and implementing both frontend and backend.",
};
export default function ProjectTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section style={{ backgroundColor: "var(--color-section)" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", marginTop: 10 }}>
          <Typography sx={classes.title}>
            {data.header_title}
            <Divider />
          </Typography>

          <Typography sx={classes.paragraph}>{data.header_desc}</Typography>
          <hr style={classes.hr} />
        </Box>
        <Box sx={classes.rootBox}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, mt: 2, borderColor: "divider" }}>
              <AppBar position="static" sx={classes.appBar}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="All" value="1" />
                  <Tab label="Branding" value="2" />
                  <Tab label="Logo" value="3" />
                  <Tab label="UI/UX" value="4" />
                  <Tab label="Web Design" value="5" />
                </Tabs>
              </AppBar>
            </Box>
            <TabPanel value="1">
              <AllProject />
            </TabPanel>
            <TabPanel value="2">
              <BrandingProject />
            </TabPanel>
            <TabPanel value="3">
              <LogoProject />
            </TabPanel>
            <TabPanel value="4">UI/UX</TabPanel>
            <TabPanel value="5">
              <WebDesignProject />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </section>
  );
}

const classes = {
  rootBox: {
    width: "100%",
    typography: "body1",
  },
  appBar: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-primary-accent)",
  },
  title: {
    color: "var(--color-title)",
    fontSize: "34px",
    fontWeight: "bold",
  },
  paragraph: {
    color: "var(--color-paragraph)",
    fontSize: "20px",
    fontWeight: "bold",
  },
  hr: {
    width: "250px",
    border: "solid 1px var(--color-secondary)",
  },
};
