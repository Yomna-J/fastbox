import {
  Box,
  Grid,
  Typography,
  useTheme,
  TextField,
  Button,
} from "@mui/material";
import { theme } from "../../theme";

// TODO: Update background image
const Hero = () => {
  const { palette } = useTheme(theme);
  return (
    <div
      className="hero"
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { md: "100vh", xs: "30rem" },
          p: { md: "25vh 9rem", xs: "25vh 1.75rem" },
        }}
      >
        <Grid container spacing={2} textAlign="left">
          <Grid item lg={8} md={12} sm={12}>
            <Typography
              variant="head"
              sx={{
                color: palette.primary.dark,
                fontWeight: "bold",
                fontSize: "4vw",
                "&:hover": {
                  color: palette.primary.dark,
                },
              }}
            >
              Largest and reliable courier service
            </Typography>
            <Typography
              variant="inherit"
              className="textbox-bg"
              sx={{
                p: { md: "0.4rem 3rem", xs: " 0 0.3rem" },
                color: palette.primary.dark,
                fontWeight: "bold",
                fontSize: "3.5vw",
                "&:hover": {
                  color: palette.primary.dark,
                },
              }}
            >
              in your city
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              mt: { md: "2.5rem" },
            }}
          >
            <Typography
              variant="text"
              sx={{
                color: palette.text.secondary,
                fontSize: { md: "2rem" },
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate cillum dolore
              eu fugiat nulla pariatur.
            </Typography>
            {/* TRACKING CHECK */}
            <Box
              display="flex"
              sx={{
                mt: "25px",
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              <TextField
                variant="standard"
                placeholder="Enter Tracking Number"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  width: { xs: "100%", md: "50%" },
                  borderRadius: 2,
                  p: "12px 1.75rem",
                  backgroundColor: palette.primary.light,
                }}
              />
              <Button
                variant="text"
                sx={{
                  "&:hover": {
                    backgroundColor: palette.primary.main,
                    color: "#fff",
                  },
                  ml: { md: "-6px" },
                  p: "0 50px",
                  backgroundColor: palette.primary.main,
                  color: "#ffffff",
                  borderRadius: 2,
                  boxShadow: ` 0px 7px 5px 0px ${palette.primary.light}}`,
                }}
              >
                Check
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Hero;
