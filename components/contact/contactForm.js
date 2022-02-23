import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
export default function ContactForm() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Contact Me
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            name="phone"
            label="Phone number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="company"
            name="company"
            label="company name"
            fullWidth
            autoComplete="company name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            multiline
            required
            id="massage"
            name="massage"
            label="Enter your massage"
            fullWidth
            autoComplete="Enter your massage"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 4 }} endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
}
