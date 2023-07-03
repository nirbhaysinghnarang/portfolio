import { Container } from "@mui/system";
import Bar from "./Components/AppBar";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import Home from "./Components/Home";
import "@fontsource/merriweather";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ConstructionIcon from "@mui/icons-material/Construction";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SchoolIcon from "@mui/icons-material/School";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ExperienceCard from "./Components/ExperienceCard";
import EducationCard from "./Components/EducationCard";
import ProjectCard from "./Components/ProjectCard";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
      secondary: {
        main: "#1e1e1e",
      },
    },
    typography: {
      fontFamily: ["Merriweather"],
    },
  });
  const [currentTab, setCurrentTab] = useState("home");

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          fontFamily: "Merriweather",
        }}
      >
        <Bar></Bar>
        <Tabs
          value={currentTab}
          onChange={(e, v) => {
            setCurrentTab(v);
          }}
          centered
          indicatorColor="primary"
          sx={{ marginBottom: 2 }}
        >
          <Tab
            sx={{ fontFamily: "Merriweather" }}
            icon={<HomeIcon></HomeIcon>}
            value="home"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontFamily: "Merriweather" }}
            value="exp"
            icon={<WorkIcon></WorkIcon>}
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontFamily: "Merriweather" }}
            value="school"
            icon={<SchoolIcon></SchoolIcon>}
            {...a11yProps(2)}
          />
          <Tab
            sx={{ fontFamily: "Merriweather" }}
            value="proj"
            icon={<ConstructionIcon></ConstructionIcon>}
            {...a11yProps(2)}
          />
          <Tab
            sx={{ fontFamily: "Merriweather" }}
            value="res"
            icon={<InsertDriveFileIcon></InsertDriveFileIcon>}
            {...a11yProps(2)}
          />
        </Tabs>
        {currentTab === "home" && <Home />}
        {currentTab === "exp" && <ExperienceCard />}
        {currentTab === "school" && <EducationCard />}
        {currentTab === "proj" && <ProjectCard />}
        {currentTab === "res" && (
          <iframe
            src="assets/NirbhaySNarangResume_SWE.pdf"
            style={{ width: "100%", height: "100vh" }}
          ></iframe>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
