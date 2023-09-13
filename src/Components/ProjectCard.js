import Project from "./ProjectCell";
import { Grid } from "@mui/material";
import projects from "../data/project.ts";
function ProjectCard() {
  return (
    <Grid container spacing={3}>
      {projects.map((project) => {
        return (
          <Grid item xs={12} md={6}>
            <Project project={project}></Project>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProjectCard;
