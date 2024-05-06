import "@fontsource-variable/lexend";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import Loader from "./components/Loader";
import Tags from "./components/Filters";

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
          <Tags />
          <Loader />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
