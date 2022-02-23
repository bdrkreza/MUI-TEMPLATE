import { Grid } from "@mui/material";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/project/projectCard";
import { projectData } from "./api/data";

function Projects() {
  return (
    <Layout>
      <Grid
        container
      
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {projectData.map((project, index) => (
          <Grid item xs={2} sm={4} md={4}   sx={{ mt: 5 }} key={index}>
            <ProjectCard project={project} key={index} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export default Projects;
