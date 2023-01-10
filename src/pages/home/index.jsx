import { Box, Typography, useTheme, Container } from "@mui/material";
import Hero from "../../components/hero/Hero";
import { theme } from "../../theme";
import { default as airtable } from "../../assets/airtable.svg";
import { default as sketch } from "../../assets/sketch.svg";
import { default as dribbble } from "../../assets/dirbbble.svg";
import { default as slack } from "../../assets/slack.svg";
import { default as livechat } from "../../assets/livechat.svg";
import { default as gitlab } from "../../assets/gitlab.svg";
import { default as star } from "../../assets/star.svg";

const Home = () => {
  const { palette } = useTheme(theme);

  return (
    <div className="home">
      <Hero />
      {/* tools */}
      <Box
        width="100%"
        sx={{
          backgroundColor: palette.secondary.main,
          p: "3rem",
        }}
      >
        <ul className="tools">
          <li>
            <img src={airtable}></img>
          </li>
          <li>
            <img src={sketch}></img>
          </li>
          <li>
            <img src={dribbble}></img>
          </li>
          <li>
            <img src={slack}></img>
          </li>
          <li>
            <img src={livechat}></img>
          </li>
          <li>
            <img src={gitlab}></img>
          </li>
        </ul>
      </Box>
      {/* How */}

      <Typography
        variant="head"
        sx={{
          color: palette.primary.dark,
          fontWeight: "bold",
          fontSize: "2.0rem",
          wordWrap: "normal",
          "&:hover": {
            color: palette.primary.dark,
          },
        }}
      >
        How Fast box works
      </Typography>
      <Typography
        variant="text"
        sx={{
          color: palette.text.secondary,
          fontSize: { md: "1.5rem" },
        }}
      >
        Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu
        fugiat nulla pariatur.
      </Typography>
      <img
        className="star"
        src={star}
        alt="star"
        sx={{
          alignSelf: "flex-start",
        }}
      />
    </div>
  );
};

export default Home;
