import { Box, useTheme } from "@mui/material";
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
      {/* CLIENTS */}
      <Box
        width="100%"
        sx={{
          backgroundColor: palette.secondary.main,
          p: "3rem",
        }}
      >
        <ul className="clients">
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
    </div>
  );
};

export default Home;
