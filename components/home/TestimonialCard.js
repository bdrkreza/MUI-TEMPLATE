import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Image from "next/image";
export default function TestimonialCard({ data }) {
  return (
    <section>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          cursor: "pointer",
        }}
        style={{display:"flex"}} 
      >
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <Image
                loading="lazy"
                width="50"
                height="50"
                src={data.image}
                alt="testimonials image"
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={data.name}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
               {data.designation}
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </section>
  );
}
