import EditIcon from "@mui/icons-material/Edit";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SaveIcon from "@mui/icons-material/Save";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LoadingButton } from "@mui/lab";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import MediaLink from "./mediaLink";

export default function FooterMedia({ content }) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(content.description);

  const handleEdit = () => {
    setOnEdit(true);
  };

  const handleSave = () => {
    setOnEdit(false);
  };
  return (
    <Box ml={2}>
      <Typography component="h1" gutterBottom={true}>
        {content.contact3}
        <hr />
      </Typography>

      {onEdit ? (
        <Box sx={classes.box}>
          <TextField
            multiline
            inputProps={{ style: { color: "var(--color-text)" } }}
            maxRows={4}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value.toLowerCase())}
            variant="standard"
          />

          <LoadingButton
            onClick={handleSave}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
            sx={{ width: "100px", mt: 1 }}
          >
            Save
          </LoadingButton>
        </Box>
      ) : (
        <Box sx={classes.box}>
          <Typography>
            {content.footerdesc}
            <Button onClick={handleEdit} startIcon={<EditIcon />}></Button>
          </Typography>
        </Box>
      )}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton href="#" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton href="#" color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton href="#" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="#" color="inherit">
          <GitHubIcon />
        </IconButton>
        <MediaLink content={content} />
      </Box>
    </Box>
  );
}

const classes = {
  box: {
    display: "flex",
    flexDirection: "column",
    svg: {
      color: "#1976D2",
    },
  },
};
