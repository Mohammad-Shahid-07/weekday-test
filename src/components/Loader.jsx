import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobListSlice";
import { useLocation } from "react-router-dom";
import notFound from "../../public/nothing-found..png";
import JobCard from "./JobCard";
const Loader = () => {
  const { ref, inView } = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const { search } = useLocation();

  const data = useSelector((state) => state.jobs);

  const filteredData = useMemo(() => {
    const params = new URLSearchParams(search);
    const roles = params.getAll("roles");
    const employees = params.getAll("employees");
    const experience = params.getAll("experience").map(Number); // Convert experience values to numbers
    const remote = params.getAll("remote");
    const salary = params.getAll("salary").map((s) => parseInt(s.slice(1))); // Convert salary strings to numbers
    const company = params.getAll("company");

    const filtered = data.filter((job) => {
      return (
        (roles.length === 0 || roles.includes(job.jobRole)) &&
        (employees.length === 0 || employees.includes(job.employeeType)) &&
        (experience.length === 0 ||
          experience.some((exp) => exp <= job.minExp)) &&
        (remote.length === 0 || remote.includes(job.location)) &&
        (salary.length === 0 || salary.some((sal) => sal <= job.minJdSalary)) &&
        (company.length === 0 || company.includes(job.companyName))
      );
    });
    if (filtered.length === 0) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: 200,
            mt: 10,
          }}
        >
          <img src={notFound} alt="" className="not-found-img" />
          <Typography
            variant="body1"
            sx={{ textAlign: "center", mt: 2, color: "black" }}
          >
            No results found.
          </Typography>
          {isLoading && (
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
          )}
        </Box>
      );
    }

    return filtered;
  }, [search, data]);

  useEffect(() => {
    if (isLoading || !inView) return;

    setIsLoading(true);
    dispatch(fetchJobs(offset))
      .then(() => {
        setOffset((prevOffset) => prevOffset + 10);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, isLoading, inView, offset]);

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
        {Array.isArray(filteredData) &&
          filteredData.map((job) => (
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
      </Box>
    </>
  );
};

export default Loader;
