import { Container, useTheme, Box, Grid } from "@mui/material";
import Hero from "../../components/hero/Hero";
import { theme } from "../../theme";
import { default as airtable } from "../../assets/airtable.svg";
import { default as sketch } from "../../assets/sketch.svg";
import { default as dribbble } from "../../assets/dirbbble.svg";
import { default as slack } from "../../assets/slack.svg";
import { default as livechat } from "../../assets/livechat.svg";
import { default as gitlab } from "../../assets/gitlab.svg";

const Home = () => {
  const { palette } = useTheme(theme);

  return (
    <div className="home">
      <Hero />
      <Box
        width="100%"
        sx={{
          backgroundColor: palette.secondary.main,
          p: "2rem 0vw",
        }}
      >
        <Grid container>
          <Grid item lg={2} md={4} spacing={4}>
            <img src={airtable}></img>
          </Grid>
          <Grid item lg={2} md={4}>
            <img src={sketch}></img>
          </Grid>
          <Grid item lg={2} md={4}>
            <img src={dribbble}></img>
          </Grid>
          <Grid item lg={2} md={4}>
            <img src={slack}></img>
          </Grid>
          <Grid item lg={2} md={4}>
            <img src={livechat}></img>
          </Grid>
          <Grid item lg={2} md={4}>
            <img src={gitlab}></img>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
