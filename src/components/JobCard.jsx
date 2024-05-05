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
const JobCard = () => {
  return (
    <Box component="article" sx={{ p: 2, backgroundColor: "white" }}>
      <Paper
        variant="elevation"

        elevation={5}
        sx={{ color: "#666", fontSize: ".6rem" }}
        className=""
      >
        ⏳ Posted 3 days ago
      </Paper>
      <Card sx={{ minWidth: 275, maxWidth: 325 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <CardMedia
              component="img"
              src="https://via.placeholder.com/150"
              alt="Job"
              sx={{ width: 50, height: 70 }}
            />
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: "#8b8b8b",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  letterSpacing: "1px",
                }}
              >
                Company Name
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ fontSize: ".8rem", fontWeight: "400" }}
              >
                Software Developer
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ fontSize: ".7rem", fontWeight: "500", color: "#000" }}
              >
                Pune
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: ".8rem", mt: 2, fontWeight: "400", color: "#555" }}
          >
            Estimated Salary: ₹16 - 20 LPA ⚠️
          </Typography>
          <Box>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "1.2rem",
                mt: 2,
                fontWeight: "400",
              }}
            >
              About Company:
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: ".7rem",
                fontWeight: "500",
                color: "#111",
                mt: 1,
                letterSpacing: "0.5px",

                lineClamp: 3,
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium esse, reiciendis corrupti dignissimos, enim laborum id
              quidem assumenda eum sequi ipsam perspiciatis omnis cum inventore
              alias quo ducimus veritatis consectetur! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eaque, quae eveniet? Veritatis
              nisi ipsum autem. Et vero consequuntur eum voluptatibus quo. Minus
              delectus consectetur perspiciatis mollitia et, perferendis
              quibusdam soluta! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Modi eum quasi placeat qui. Repellendus at,
              perferendis non quia totam quae id modi provident quaerat aut
              minima, unde quisquam, nisi excepturi!
            </Typography>
            <CardActionArea>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontSize: ".8rem",
                  fontWeight: "500",
                  color: "#007bff",
                  mt: 2,
                  letterSpacing: "0.5px",
                  textAlign: "center",
                  background: "linear-gradient(#f2f2f248, white)",
                  pt: 5,
                  translate: "0 -100%",
                }}
              >
                Show More
              </Typography>

              <Box > 
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#666", fontWeight: "500" }}
                >
                  Minimum Experience
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: "500" }}>
                  4 years
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
            </CardActionArea>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobCard;
