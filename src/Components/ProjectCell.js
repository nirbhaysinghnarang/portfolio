import { Stack } from "@mui/system";
import { Paper, Avatar, Typography, Chip } from "@mui/material";
import "@fontsource/merriweather";

function Project({ project }) {
  return (
    <Paper sx={{ padding: 2, height: "100%" }} elevation={1}>
      <Stack direction="column" spacing={1}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ border: "2px solid gray" }} src={project.img}>
              {" "}
            </Avatar>
            <Stack direction="column" alignItems="flex-start">
              <Typography
                sx={{ fontFamily: "Merriweather", fontWeight: "bold" }}
                variant="subtitle2"
              >
                {project.name}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{ fontFamily: "Merriweather", color: "grey" }}
            variant="caption"
          >
            {project.stack}
          </Typography>
        </Stack>

        <Typography
          variant="caption"
          sx={{ color: "grey", fontFamily: "Merriweather" }}
        >
          {project.desc}
        </Typography>
        <Stack direction="row" spacing={2}>
          {project.tags.map((tag) => {
            return (
              <Chip
                label={tag}
                size="small"
                color="secondary"
                variant="outlined"
              />
            );
          })}
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Project;
