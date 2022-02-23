import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { menuItem } from "./menuItem";


function MobileDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        drawerStyle={styles.drawer}
        closeBtnStyle={styles.close}
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItem.map(({ path, label }, i) => (
              <Box
              activeClass="active"
              to={path}
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              key={i}
            >
              {label}
            </Box>
          ))}
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default MobileDrawer;

const styles = {
  drawer: {
    width: "100%",
    height: "100%",
    background: "#fff",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "30px",
    right: "30px",
    zIndex: "1",
  },

  content: {
    width: "300px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "30px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",

    a: {
      fontSize: "16px",
      fontWeight: "400",
      color: "black",
      py: "5px",
      cursor: "pointer",
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  button: {
    fontSize: "15px",
    fw: "700",
    height: "48px",
    borderRadius: "3px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
    backgroundColor: "primary",
    color: "#fff",
  },
};
