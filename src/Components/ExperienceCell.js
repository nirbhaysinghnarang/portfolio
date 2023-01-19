import { Stack } from "@mui/system";
import { Paper, Avatar, Typography } from "@mui/material";
import "@fontsource/merriweather";

function Experience({ experience }) {
  return (
    <Paper sx={{ padding: 2 }} elevation={1}>
      <Stack direction="column" spacing={1}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ border: "2px solid gray" }} src={experience.img}>
              {" "}
            </Avatar>
            <Stack direction="column" alignItems="flex-start">
              <Typography
                sx={{ fontFamily: "Merriweather", fontWeight: "bold" }}
                variant="h6"
              >
                {experience.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontFamily: "Merriweather", color: "grey" }}
              >
                {experience.dates}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{ fontFamily: "Merriweather", color: "grey" }}
            variant="caption"
          >
            {experience.location}
          </Typography>
        </Stack>

        <Typography variant="subtitle" sx={{ fontFamily: "Merriweather" }}>
          {experience.title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "grey", fontFamily: "Merriweather" }}
        >
          {experience.stack}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default Experience;
