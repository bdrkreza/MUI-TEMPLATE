import EditIcon from "@mui/icons-material/Edit";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SaveIcon from "@mui/icons-material/Save";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Fade, Paper, Popper, TextField } from "@mui/material";
import { useState } from "react";
export default function MediaLink({ content }) {
  const [editValue, setEditValue] = useState(content);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleLinkSave = () => {
    setOpen(false);
  };
  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{zIndex:"99"}}>
              <Box sx={classes.rootBox}>
                <button>
                  <FacebookIcon />
                  <TextField
                    variant="standard"
                    multiline
                    value={editValue.link1}
                    onChange={(e) => setEditValue(e.target.value.toLowerCase())}
                  />
                </button>

                <button color="inherit">
                  <TwitterIcon />
                  <TextField
                    variant="standard"
                    multiline
                    value={editValue.link1}
                    onChange={(e) => setEditValue(e.target.value.toLowerCase())}
                  />
                </button>
                <button color="inherit">
                  <LinkedInIcon />
                  <TextField
                    variant="standard"
                    multiline
                    value={editValue.link3}
                    onChange={(e) => setEditValue(e.target.value.toLowerCase())}
                  />
                </button>
                <button color="inherit">
                  <GitHubIcon />
                  <TextField
                    variant="standard"
                    multiline
                    value={editValue.link4}
                    onChange={(e) => setEditValue(e.target.value.toLowerCase())}
                  />
                </button>
                <LoadingButton
                  onClick={handleLinkSave}
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  sx={{ ml: 0 }}
                >
                  Save
                </LoadingButton>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Button
        onClick={handleClick("top-end")}
        sx={classes.btn}
        startIcon={<EditIcon />}
      ></Button>
    </div>
  );
}

const classes = {
  rootBox: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    
    margin: "10px",
    button: {
      mb: 1,
    },
  },
  btn: {
    svg: {
      color: "#1976D2",
    },
  },
};
