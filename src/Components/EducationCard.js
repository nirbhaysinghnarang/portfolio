import { Avatar, Card, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function EducationCard() {
  return (
    <Stack sx={{ p: 2, width: "100%" }}>
      <Typography variant="h6" sx={{ color: "black", p: 2 }}>
        Education
      </Typography>
      <Card spacing={1} sx={{ p: 2 }}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack sx={{ flexDirection: "column" }}>
            <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar src="https://clipartcraft.com/images/cornell-university-logo-svg.png"></Avatar>

              <Typography variant="h6" sx={{ marginLeft: 1 }}>
                Cornell University
              </Typography>
            </Stack>
            <Typography
              variant="subtitle2"
              sx={{ fontStyle: "italic", color: "grey" }}
            >
              B.A. in Computer Science, minoring in History
            </Typography>
          </Stack>

          <Typography variant="caption">GPA: 6/4.00</Typography>
        </Stack>
        <Typography variant="caption" sx={{ color: "grey" }}>
          Algorithms, Networks II, Functional Programming, Discrete Math,
          Networks, Linear Algebra, Statistics, OOP & DS
        </Typography>
      </Card>
      <Card spacing={1} sx={{ marginTop: 2, p: 2 }}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack sx={{ flexDirection: "column" }}>
            <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar src="https://www.logolynx.com/images/logolynx/5b/5bb82047b329490042821168fa5237af.png"></Avatar>

              <Typography variant="h6" sx={{ marginLeft: 1 }}>
                International Baccalaureate
              </Typography>
            </Stack>
            <Typography
              variant="subtitle2"
              sx={{ fontStyle: "italic", color: "grey" }}
            >
              Jayshree Periwal HS, Jaipur
            </Typography>
          </Stack>

          <Typography variant="caption">
            Score: 45/45. SAT: 1590/1600
          </Typography>
        </Stack>
        <Typography variant="caption" sx={{ color: "grey" }}>
          CS, Math, Physics, Economics
        </Typography>
      </Card>
      <Typography variant="h6" sx={{ color: "black", p: 2 }}>
        Teaching
      </Typography>
      <Card spacing={1} sx={{ p: 2 }}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack sx={{ flexDirection: "column" }}>
            <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar src="https://clipartcraft.com/images/cornell-university-logo-svg.png"></Avatar>

              <Typography variant="h6" sx={{ marginLeft: 1 }}>
                Cornell Bowers CIS
              </Typography>
            </Stack>
            <Typography
              variant="subtitle2"
              sx={{ fontStyle: "italic", color: "grey", marginTop: 1 }}
            >
              CS 1110 - Intro to Computing using Python (Consultant)
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontStyle: "italic", color: "grey" }}
            >
              INFO 1998 - Trends in Modern Web Development (TA)
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}

export default EducationCard;
