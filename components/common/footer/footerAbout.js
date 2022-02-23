import EditIcon from "@mui/icons-material/Edit";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function FooterAbout({ content }) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(content.description);

  const handleEdit = () => {
    setOnEdit(true);
  };

  const handleSave = () => {
    setOnEdit(false);
  };
  return (
    <>
      <Typography component="h1">
        {content.header}
        <hr />
        {onEdit ? (
          <Box sx={{ display: "flex", flexDirection: "column"}}>
            <TextField
              multiline
              maxRows={4}
              value={editValue}
              inputProps={{ style: { color: "var(--color-text)" } }}
              sx={{ width: "100%" }}
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
          <Box>
            <Typography>
              {content.description}
              <Button onClick={handleEdit} startIcon={<EditIcon />}></Button>
            </Typography>
          </Box>
        )}
      </Typography>

      <Button
        variant="outlined"
        sx={{
          color: "var(--color-secondary)",
          mt: 2,
          border: "solid 1px var(--color-secondary)",
        }}
        startIcon={<PhoneCallbackIcon />}
      >
        CONTACT US
      </Button>
    </>
  );
}
