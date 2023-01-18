import { Typography, AppBar, Toolbar, Card, Stack } from "@mui/material";

function Bar() {
  return (
    <AppBar
      style={{
        backgroundColor: "white",
      }}
      position="sticky"
      elevation={0}
    >
      <Toolbar style={{ flex: 1, justifyContent: "space-between" }}>
        <Stack
          sx={{ flex: 1 }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h2" sx={{ color: "black", fontWeight: "bold" }}>
            न
          </Typography>
          <Typography variant="h6" sx={{ color: "black" }}>
            🇮🇳
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
