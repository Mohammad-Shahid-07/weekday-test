import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import JobCard from "./JobCard";
import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(10);

  useEffect(() => {
    if (isLoading) return;
    if (inView) {
      setIsLoading(true);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        limit: 10,
        offset: offset,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };
      try {
        setTimeout(() => {
          fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            requestOptions,
          )
            .then((response) => response.json())
            .then((result) => {
              setData((prevData) => [...prevData, ...result.jdList]);
              setOffset((prevOffset) => prevOffset + 10);
              setIsLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
  }, [inView]);
  console.log(data);
  return (
    <>
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
          data?.length > 0 &&
          data?.map((job) => (
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
      </Box>
      <Box
        sx={{
          textAlign: "center",
          mb: 5,
          mt: 3,
        }}
        ref={ref}
      >
        <CircularProgress disableShrink />
      </Box>
    </>
  );
};

export default Loader;
