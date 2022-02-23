import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import { AppBar, Container, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import AboutSection from "./aboutSection";
import Awards from "./awardsSection";
import Exhibitions from "./Exhibitions";
import Interview from "./interviewSection";
import ServiceSection from "./serviceSection";

export default function TopTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: "var(--color-section)" }}>
        <Box sx={classes.rootBox}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <AppBar position="static" sx={classes.appBar}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                  sx={{ color: "var(--color-text)" }}
                >
                  <Tab label="ABOUT" value="1" />
                  <Tab label="MY SERVICES" value="2" />
                  <Tab label="INTERVIEWS" value="3" />
                  <Tab label="AWARDS" value="4" />
                  <Tab label="EXHIBITIONS" value="5" />
                </Tabs>
              </AppBar>
            </Box>
            <TabPanel value="1">
              <AboutSection />
            </TabPanel>
            <TabPanel value="2">
              <ServiceSection />
            </TabPanel>
            <TabPanel value="3">
              <Interview />
            </TabPanel>
            <TabPanel value="4">
              <Awards />
            </TabPanel>
            <TabPanel value="5">
              <Exhibitions />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
}

const classes = {
  rootBox: {
    width: "100%",
  },
  appBar: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-primary-accent)",
  },
};
