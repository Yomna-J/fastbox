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
          p: "2rem",
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

      <Box
        sx={{
          display: "flex",
          alignItems: { md: "flex-end", xs: "center" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "space-between", xs: "center" },
          p: "2rem 15%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { md: "4rem", xs: "0" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="head"
            sx={{
              color: palette.primary.dark,
              fontWeight: "bold",
              fontSize: { md: "2.0rem", xs: "1.25rem" },
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
              width: { md: "40%", xs: "100%" },
              color: palette.text.secondary,
              fontSize: { md: "1.25rem" },
              textAlign: { md: "left", xs: "center" },
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu
            fugiat nulla pariatur.
          </Typography>
        </Box>
        <img src={star} alt="star" sx={{ alignSelf: "flex-end" }} />
      </Box>
    </div>
  );
};

export default Home;
