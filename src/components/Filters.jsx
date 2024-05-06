import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Tags() {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedRemote, setSelectedRemote] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState([]);
  const [company, Setcompany] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    // Convert comma-separated strings to arrays
    setSelectedRoles(params.roles ? params.roles.split(",") : []);
    setSelectedEmployees(params.employees ? params.employees.split(",") : []);
    setSelectedExperience(
      params.experience ? params.experience.split(",") : [],
    );
    setSelectedRemote(params.remote ? params.remote.split(",") : []);
    setSelectedSalary(params.salary ? params.salary.split(",") : []);
    Setcompany(params.company ? params.company : "");
  }, [searchParams]);
  // Update search params when tags are selected
  const handleRoleChange = (event, newValues) => {
    setSelectedRoles(newValues);
    updateSearchParams("roles", newValues);
  };

  const handleEmployeeChange = (event, newValues) => {
    setSelectedEmployees(newValues);
    updateSearchParams("employees", newValues);
  };

  const handleExperienceChange = (event, newValues) => {
    setSelectedExperience(newValues);
    updateSearchParams("experience", newValues);
  };

  const handleRemoteChange = (event, newValues) => {
    setSelectedRemote(newValues);
    updateSearchParams("remote", newValues);
  };

  const handleSalaryChange = (event, newValues) => {
    setSelectedSalary(newValues);
    updateSearchParams("salary", newValues);
  };

  const handleCompanyChange = (event, newValues) => {
    Setcompany(newValues);
    updateSearchParams("company", newValues);
  };
  // Update search params
  const updateSearchParams = (paramName, selectedValues) => {
    const paramValue = selectedValues.join(",");
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      if (selectedValues.length > 0) {
        params.set(paramName, paramValue);
      } else {
        params.delete(paramName);
      }
      return params.toString();
    });
  };

  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{ width: "100%" }}
      useFlexGap
      flexWrap="wrap"
    >
      <Autocomplete
        multiple
        id="role-autocomplete"
        options={roles}
        value={selectedRoles}
        onChange={handleRoleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Role"
            size="small"
            InputLabelProps={{ shrink: true }}
            sx={{
              minWidth: 130,
              width: "100%",
              fontSize: ".5rem",
              color: "black",
              fontWeight: "bold",
            }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              label={option}
              size="small"
              sx={{ borderRadius: 1, fontSize: ".5rem" }}
              {...getTagProps({ index })}
            />
          ))
        }
      />

      <Autocomplete
        multiple
        id="employee-autocomplete"
        options={employeeNumbers}
        value={selectedEmployees}
        onChange={handleEmployeeChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Number of Employees"
            size="small"
            InputLabelProps={{ shrink: true }}
            sx={{ minWidth: 150, width: "100%", fontSize: ".75rem" }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              label={option}
              size="small"
              sx={{ borderRadius: 1, fontSize: ".5rem" }}
              {...getTagProps({ index })}
            />
          ))
        }
      />

      <Autocomplete
        multiple
        id="experience-autocomplete"
        options={experiences}
        value={selectedExperience}
        onChange={handleExperienceChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Experience"
            size="small"
            InputLabelProps={{ shrink: true }}
            sx={{ width: 100, fontSize: ".75rem" }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              label={option}
              size="small"
              sx={{ borderRadius: 1, fontSize: ".75rem" }}
              {...getTagProps({ index })}
            />
          ))
        }
      />

      <Autocomplete
        multiple
        id="remote-autocomplete"
        options={remotes}
        value={selectedRemote}
        onChange={handleRemoteChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Remote"
            size="small"
            InputLabelProps={{ shrink: true }}
            sx={{ width: "100%", fontSize: ".75rem" }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              label={option}
              size="small"
              sx={{ borderRadius: 1, fontSize: ".75rem" }}
              {...getTagProps({ index })}
            />
          ))
        }
      />

      <Autocomplete
        multiple
        id="salary-autocomplete"
        options={baseSalaries}
        value={selectedSalary}
        onChange={handleSalaryChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Minimum Base Salary"
            size="small"
            InputLabelProps={{ shrink: true }}
            sx={{ width: 200, fontSize: ".75rem" }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              label={option}
              size="small"
              sx={{ borderRadius: 1, fontSize: ".5rem" }}
              {...getTagProps({ index })}
            />
          ))
        }
      />

      <TextField
        id="outlined-basic"
        label="company"
        size="small"
        variant="outlined"
        value={company}
        onChange={(e) => handleCompanyChange(e, [e.target.value])}
      />
    </Stack>
  );
}

const roles = ["frontend", "ios", "tech lead", "backend"];
const employeeNumbers = ["1-10", "11-50", "51-200", "201-500", "500+"];
const experiences = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const remotes = ["remote", "onsite", "hybrid"];
const baseSalaries = ["$0", "$50", "$100", "$150", "$200", "$250", "$300"];
