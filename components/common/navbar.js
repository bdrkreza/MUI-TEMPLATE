import { Switch } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import Logo from "./brandLogo";
import { menuItem } from "./menuItem";
import MobileDrawer from "./mobileDrawer";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({ darkTheme, handleToggle }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <AppBar sx={scrolled ? classes.active : classes.header}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Logo />
          </Typography>

          {/* mobile drawer */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MobileDrawer />
          </Box>

          {/* brand Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>

          {/* navItem link */}
          <Box sx={classes.box}>
            {menuItem.map(({ path, label }, index) => (
              <Box key={index}>
                <Link href={path} passHref>
                  <Button sx={{ my: 2, color: 'var(--color-primary-accent)', display: "block" }}>
                    {label}
                  </Button>
                </Link>
              </Box>
            ))}
          </Box>
          {/* profile Link */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Switch
              checked={darkTheme}
              onChange={handleToggle}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

const classes = {
  header: {
    background: "var(--color-nav)",
    py: "5px",
    transition: "all 0.4s ease",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
  },
  active: {
    backgroundColor: 'var(--color-primary)',
    py: "5px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    transition: "all 0.4s ease",
  },
  box: {
    flexGrow: 1,
    display: { xs: "none", md: "flex", justifyContent: "center" },
  },
};
