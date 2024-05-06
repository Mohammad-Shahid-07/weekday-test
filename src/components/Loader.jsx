import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import JobCard from "./JobCard";
import { Box, CircularProgress } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobListSlice";

const Loader = () => {
  const { ref, inView } = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading) return;
    if (inView) {
      setIsLoading(true);
      setTimeout(() => {
        dispatch(fetchJobs(offset));
        setOffset((prevOffset) => prevOffset + 10);
        setIsLoading(false);
      }, 500);
    }
  }, [inView]);

  const data = useSelector((state) => state.jobs);
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
        ref={ref}
      >
        <CircularProgress disableShrink />
      </Box>
    </>
  );
};

export default Loader;
