import AddLocationIcon from "@mui/icons-material/AddLocation";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Card, Typography } from "@mui/material";
export default function ContactMe() {
  return (
    <Card>
      <Card sx={{ fontWeight: "bold", margin: "10px", padding: "10px" }}>
        <Typography sx={{ fontWeight: "bold", display: "flex", margin: "5px" }}>
          <AddLocationIcon sx={{ mr: 2 }} />
          Find Us at the office
        </Typography>
        <Typography sx={{ fontWeight: "bold", ml: 6 }}>
          Farmgate,Tejgaon,
          <br />
          Dhaka 1207 Khamarbari,
          <br />
          Bangladesh
        </Typography>
        <Typography sx={{ fontWeight: "bold", ml: 6 }}>
          rkreza@gmail.com
        </Typography>
      </Card>
      <Card sx={{ margin: "10px", padding: "10px" }}>
        <Typography sx={{ fontWeight: "bold" }}>
          <PhoneAndroidIcon sx={{ mr: 2 }} />
          Give us A ring
        </Typography>
        <Typography sx={{ fontWeight: "bold", ml: 6 }}>
          Md Rezaul Karim
        </Typography>
        <Typography sx={{ fontWeight: "bold", ml: 6 }}>
          Mon-Fri,10:00-10:00
        </Typography>
      </Card>
    </Card>
  );
}
