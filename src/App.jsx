import "@fontsource-variable/lexend";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import JobCard from "./components/JobCard";
import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./features/jobs/jobListSlice";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Lexend Variable",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            p: 2,
          }}
        >
          <Loader />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
