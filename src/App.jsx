import "@fontsource-variable/lexend";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import JobCard from "./components/JobCard";
import { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/material";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState({});

  const theme = createTheme({
    typography: {
      fontFamily: "Lexend Variable",
    },
  });

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit: 10,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };
  useEffect(() => {
    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => setData(JSON.parse(result)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            justifyContent: "center",
            p: 2,
          }}
        >
          {data &&
            data?.jdList?.length > 0 &&
            data?.jdList?.map((job) => (
              <JobCard
                key={job.jdUid}
                companyName={job.companyName}
                jdLink={job.jdLink}
                jdUid={job.jdUid}
                jobDetailsFromCompany={job.jobDetailsFromCompany}
                jobRole={job.jobRole}
                location={job.location}
                logoUrl={job.logoUrl}
                maxExp={job.maxExp}
                maxJdSalary={job.maxJdSalary}
                minExp={job.minExp}
                minJdSalary={job.minJdSalary}
                salaryCurrencyCode={job.salaryCurrencyCode}
              />
            ))}
        <Loader />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
