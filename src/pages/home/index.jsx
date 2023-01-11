import { Box, Typography, useTheme, Container, Grid } from "@mui/material";
import Hero from "../../components/hero/Hero";
import { theme } from "../../theme";
import { default as airtable } from "../../assets/airtable.svg";
import { default as sketch } from "../../assets/sketch.svg";
import { default as dribbble } from "../../assets/dirbbble.svg";
import { default as slack } from "../../assets/slack.svg";
import { default as livechat } from "../../assets/livechat.svg";
import { default as gitlab } from "../../assets/gitlab.svg";
import { default as star } from "../../assets/star.svg";
import { default as booking } from "../../assets/booking.svg";
import { default as packing } from "../../assets/packing.svg";
import { default as transportation } from "../../assets/transportation.svg";
import { default as delivery } from "../../assets/delivery.svg";
import Step from "../../components/step";

const Home = () => {
  const { palette } = useTheme(theme);
  const data = {
    tools: [
      { id: 1, name: "airtable", img: airtable },
      { id: 2, name: "sketch", img: sketch },
      { id: 3, name: "dribbble", img: dribbble },
      { id: 4, name: "slack", img: slack },
      { id: 5, name: "livechat", img: livechat },
      { id: 6, name: "gitlab", img: gitlab },
    ],
    steps: [
      {
        id: 1,
        name: "Booking",
        description:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        img: booking,
      },
      {
        id: 2,
        name: "Packing",
        description:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        img: packing,
      },
      {
        id: 3,
        name: "Transportation",
        description:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        img: transportation,
      },
      {
        id: 4,
        name: "Delivery",
        description:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        img: delivery,
      },
    ],
  };

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
          {data.tools.map((tool) => {
            return (
              <li key={tool.id}>
                <img src={tool.img} alt={tool.name} />
              </li>
            );
          })}
        </ul>
      </Box>
      {/* HOW IT WORKS */}
      <Box
        sx={{
          display: "flex",
          alignItems: { md: "flex-end", xs: "center" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "space-between", xs: "center" },
          p: "15vh 15% 2rem 15%",
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

      <Box
        sx={{
          p: "10vh 10% 2rem 10%",
        }}
      >
        <Grid
          container
          columns={{ xs: 1, md: 4 }}
          sx={{
            "&>:nth-child(-n+3)": {
              borderRight: { md: "1px dashed #9757d738" },
              borderBottom: { xs: "1px dashed #9757d738", md: "none" },
            },
          }}
        >
          {data.steps.map((step) => {
            return (
              <Grid className="steps-grid" item xs={1} key={step.id}>
                <Step
                  className="step"
                  key={step.id}
                  id={step.id}
                  img={step.img}
                  name={step.name}
                  description={step.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
