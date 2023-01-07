import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Hero = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        p: { md: "20vh 5rem", xs: "10vh 5rem" },
      }}
    >
      <Grid container spacing={2} textAlign="left">
        <Grid item lg={8} md={12} sm={12}>
          <Typography
            variant="head"
            sx={{
              color: palette.primary.dark,
              fontWeight: "bold",
              fontSize: "5vw",
              "&:hover": {
                color: palette.primary.dark,
              },
            }}
          >
            Largest and reliable courier service
          </Typography>
          <Typography
            variant="inherit"
            className="textbox-bc"
            sx={{
              p: { md: "0.4rem 3rem", sm: "0.1rem" },
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
        <Grid item lg={5} md={12} sm={12}>
          <Typography
            variant="text"
            sx={{
              color: palette.text.secondary,
              fontSize: "1.5vw",
              mt: "25px",
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu
            fugiat nulla pariatur.
          </Typography>
          <Box
            display="flex"
            sx={{
              mt: "25px",
              flexDirection: { md: "row", xs: "column" },
              maxWidth: "80%",
            }}
          >
            <TextField
              variant="standard"
              placeholder="Enter Tracking Number"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                width: "100%",
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
  );
};

export default Hero;
