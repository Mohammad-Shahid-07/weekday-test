/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import "./JobCard.css";
const JobCard = ({
  companyName,
  jdLink,
  jdUid,
  jobDetailsFromCompany,
  jobRole,
  location,
  logoUrl,
  maxExp,
  maxJdSalary,
  minExp,
  minJdSalary,
  salaryCurrencyCode,
}) => {
  return (
    <Card
      sx={{
        minWidth: 355,
        maxWidth: 325,
        fontFamily: "Lexend Variable",
        "&:hover": {
          scale: "1.02",
        },
        transition: "all 0.3s",
      }}
    >
      <Box
        component="article"
        sx={{
          p: 2,
          pb: 0,
          backgroundColor: "white",
         
        }}
      >
        <Paper
          variant="elevation"
          elevation={1}
          sx={{ color: "#666", fontSize: ".6rem", width: "fit-content" }}
        >
          ⏳ Posted {new Date().toLocaleDateString()}
        </Paper>
        <CardContent
          sx={{
            p: 0,
            pt: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <CardMedia
              component="img"
              src={logoUrl}
              alt="Job"
              sx={{ width: 30, height: 40 }}
            />
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: "#8b8b8b",
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                }}
              >
                {companyName}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ fontSize: ".8rem", fontWeight: "300" }}
              >
                {jobRole}
              </Typography>
              <Typography variant="caption" component="p">
                {location}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: ".8rem",
              mt: 0.5,
              fontWeight: "300",
              color: "rgb(77, 89, 106)",
            }}
          >
            Estimated Salary: {minJdSalary} - {maxJdSalary} {salaryCurrencyCode}
          </Typography>
          <Box>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: ".9rem",
                mt: 1,
                fontWeight: "400",
              }}
            >
              About Company:
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: "13px",
                fontWeight: "300",
                lineHeight: "1.1",
                mt: 1,
                letterSpacing: "0.5px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "11",
                WebkitBoxOrient: "vertical",
              }}
            >
              {jobDetailsFromCompany}
            </Typography>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  background: "linear-gradient(#f2f2f248, white)",
                  pt: 5,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  position: "absolute",
                  transition: "all 0.5s",
                  top: -40,
                }}
              ></Box>
              <CardActionArea>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    fontSize: ".8rem",
                    mt: 1,
                    fontWeight: "500",
                    color: "#007bff",
                    letterSpacing: "0.5px",
                    textAlign: "center",
                  }}
                >
                  Show More
                </Typography>
              </CardActionArea>
            </Box>
            <Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#666", fontWeight: "500" }}
                >
                  Skills Required
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    mt: 1,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      bgcolor: "rgb(85, 239, 196)",
                      fontSize: ".5rem",
                      width: "fit-content",
                      px: 0.5,
                      fontWeight: "200",
                      borderRadius: "5px",
                      color: "blue",
                    }}
                    variant="caption"
                  >
                    React
                  </Typography>
                  <Typography
                    sx={{
                      bgcolor: "rgb(85, 239, 196)",
                      fontSize: ".5rem",
                      width: "fit-content",
                      px: 0.5,

                      fontWeight: "200",
                      borderRadius: "5px",
                      color: "blue",
                    }}
                    variant="caption"
                  >
                    Nodejs
                  </Typography>
                  <Typography
                    sx={{
                      bgcolor: "rgb(85, 239, 196)",
                      fontSize: ".5rem",
                      width: "fit-content",
                      px: 0.5,

                      fontWeight: "200",
                      borderRadius: "5px",
                      color: "blue",
                    }}
                    variant="caption"
                  >
                    Typescript
                  </Typography>
                </Box>
              </Box>
              <Typography variant="subtitle2" sx={{ fontWeight: "500" }}>
                Experience
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#666", fontWeight: "500" }}
              >
                {minExp} - {maxExp} years
              </Typography>
              <Button
                sx={{
                  bgcolor: "rgb(85, 239, 196)",
                  color: "black",
                  p: 1.5,
                  mt: 2,
                  width: "100%",
                }}
              >
                ⚡Easy Apply
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default JobCard;
