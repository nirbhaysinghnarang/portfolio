import Experience from "./ExperienceCell";
import experience from "../data/experience";
import { Grid } from "@mui/material";
function ExperienceCard() {
  return (
    <Grid container spacing={3}>
      {experience.map((item) => {
        return (
          <Grid item xs={12} md={6}>
            <Experience experience={item}></Experience>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ExperienceCard;
