import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Tags() {
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
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Role"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              minWidth: 130,
              width: "100%",
              fontSize: ".5rem",
              color: "black",
              fontWeight: "bold",
            }}
            shrink
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

      {/* Autocomplete for Number of Employees */}
      <Autocomplete
        multiple
        id="employee-autocomplete"
        options={employeeNumbers}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Number of Employees"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
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
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Experience"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              width: 100,
              fontSize: ".75rem",
            }}
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

      {/* Autocomplete for Remote */}
      <Autocomplete
        multiple
        id="remote-autocomplete"
        options={remotes}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Remote"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
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

      {/* Autocomplete for Minimum Base Salary */}
      <Autocomplete
        multiple
        id="salary-autocomplete"
        options={baseSalaries}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Minimum Base Salary"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
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

      {/* Autocomplete for Company Name */}
      <Autocomplete
        multiple
        id="company-autocomplete"
        options={companyNames}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Company Name"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: 150, fontSize: ".75rem" }}
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
    </Stack>
  );
}

const roles = [
  "Software Engineer",
  "Product Manager",
  "UX Designer",
  "Data Scientist",
];
const employeeNumbers = ["1-10", "11-50", "51-200", "201-500", "500+"];
const experiences = ["Entry Level", "Mid Level", "Senior Level"];
const remotes = ["Yes", "No"];
const baseSalaries = [
  "Less than $50k",
  "$50k - $100k",
  "$100k - $150k",
  "$150k+",
];
const companyNames = ["Company A", "Company B", "Company C", "Company D"];
