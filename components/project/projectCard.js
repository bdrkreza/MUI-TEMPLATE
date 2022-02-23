import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
export default function ProjectCard({ project }) {
  return (
    <Card sx={{ maxWidth: 345, borderBottom: 4, borderColor: "var(--color-secondary)" }}>
      <CardActionArea>
        <Image
          component="img"
          height={300}
          src={project.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography>{project.author}</Typography>
          <Typography sx={{ mt: 2 }} gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
