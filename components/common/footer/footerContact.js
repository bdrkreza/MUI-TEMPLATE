import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function FooterContact({ classes, content }) {
  const [addressEdit, setAddressEdit] = useState(false);
  const [addressValue, setAddressValue] = useState(content.contact1desc1);

  const [contactEdit, setContactEdit] = useState(false);
  const [contactValue, setContactValue] = useState(content.contact2desc);

  const handleContactEdit = () => {
    setContactEdit(true);
  };

  const handleContactSave = () => {
    setContactEdit(false);
  };

  const handleAddressEdit = () => {
    setAddressEdit(true);
  };

  const handleAddressSave = () => {
    setAddressEdit(false);
  };
  return (
    <Box>
      <Typography component="h1">
        Contact
        <hr />
      </Typography>
      <Box display="flex">
        <div>
          <Avatar sx={classes.iconWrapper}>
            <EmailIcon
              sx={classes.iconWrapper.icon}
              color="primary"
              fontSize="small"
            />
          </Avatar>
        </div>
        <Box ml={3}>
          <Typography component="h2" gutterBottom={true}>
            {content.contact2}
            {contactEdit ? (
              <Box>
                <TextField
                  variant="standard"
                  inputProps={{ style: { color: "var(--color-text)" } }}
                  multiline
                  value={contactValue}
                  onChange={(e) =>
                    setContactValue(e.target.value.toLowerCase())
                  }
                />

                <LoadingButton
                  onClick={handleContactSave}
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  sx={{ width: "100px", mt: 1 }}
                >
                  Save
                </LoadingButton>
              </Box>
            ) : (
              <Typography component="h3">
                {content.contact2desc}
                <Button
                  onClick={handleContactEdit}
                  sx={{ ml: 1 }}
                  startIcon={<EditIcon />}
                ></Button>
              </Typography>
            )}
          </Typography>
        </Box>
      </Box>

      <Box display="flex">
        <div>
          <Avatar sx={classes.iconWrapper}>
            <RoomIcon
              sx={classes.iconWrapper.icon}
              color="primary"
              fontSize="small"
            />
          </Avatar>
        </div>
        <Box ml={3}>
          <Typography component="h2" gutterBottom={true}>
            {content.contact1}
            {addressEdit ? (
              <Box>
                <TextField
                  multiline
                  sx={{ width: "100%" }}
                  inputProps={{ style: { color: "var(--color-text)" } }}
                  variant="standard"
                  value={addressValue}
                  onChange={(e) =>
                    setAddressValue(e.target.value.toLowerCase())
                  }
                />

                <LoadingButton
                  onClick={handleAddressSave}
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  sx={{ width: "100px", mt: 1 }}
                >
                  Save
                </LoadingButton>
              </Box>
            ) : (
              <Typography component="h3">
                {content.contact1desc1}
                <Button
                  onClick={handleAddressEdit}
                  sx={{ ml: 1 }}
                  startIcon={<EditIcon />}
                ></Button>
              </Typography>
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
