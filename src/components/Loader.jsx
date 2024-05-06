import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import JobCard from "./JobCard";
import { Box, CircularProgress } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobListSlice";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const { ref, inView } = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const { search } = useLocation(); // React Router's useLocation hook to get URL search params

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
  console.log(data);
  const filteredData = useMemo(() => {
    const params = new URLSearchParams(search);
    const roles = params.getAll("roles");
    const employees = params.getAll("employees");
    const experience = params.getAll("experience");
    const remote = params.getAll("remote");
    const salary = params.getAll("salary").map((s) => parseInt(s.slice(1))); // Convert salary strings to numbers
    const company = params.getAll("company");
    console.log(roles, employees, experience, remote, salary, company);
    return data.filter((job) => {
      console.log(salary);
      return (
        (roles.length === 0 || roles.includes(job.jobRole)) &&
        (employees.length === 0 || employees.includes(job.employeeType)) &&
        (experience.length === 0 || (experience <= job.minExp)) &&
        (remote.length === 0 || remote.includes(job.location)) &&
        (salary.length === 0 || salary < job.minJdSalary) && // Compare with number
        (company.length === 0 || company.includes(job.companyName))
      );
    });
  }, [data, search]);
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
        {filteredData &&
          filteredData.length > 0 &&
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
